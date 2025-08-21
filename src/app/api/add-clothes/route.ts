import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import prisma from "@/lib/db";
import axios from "axios";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: Request) {
  try {
    const userId = req.headers.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;
   

    if (!file) {
      return NextResponse.json({ error: "File and type required" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString("base64");
    const mimeType = file.type || "image/jpeg";

    const cloudinaryResult  = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "clothes_uploads", resource_type: "image" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(buffer);
    });

    const linkOfImage: string | undefined = cloudinaryResult?.secure_url;
    
    if (!linkOfImage) {
      return NextResponse.json(
        { error: "Error getting link from Cloudinary" },
        { status: 500 }
      );
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    console.log(url);

    const prompt = `
    <task>
    Take this image of a clothing piece and generate the following output format
    </task>

    <output-format>
    Return back a json object in the following format:

    Ex: 

    {
        name: "Classic Red Crew-Neck Tee",
        description: "Bright red crew-neck t-shirt with short sleeves, featuring a plain and simple design. Made from lightweight cotton fabric for a clean and casual look.",
        type: "Top"
    }

    <output-constraints>
    
    name: Is a single liner describing the cloth,
    description: A detailed description of the clothing such that it can be used later to decide which combination of clothes to wear
    type: can only be Top OR Lower OR FootWear OR Accessories
    NOTE: description must ony contain info about the clothing itself and nothing else

    </output-constraints>

    Only generate in the json format as given above in the exmaple, take into consideration the inputs
    generate as:
    '''json {

    }
    '''
    only give as json object simply

    </output-format>
  
    `

    const requestBody = { contents: [
    {
    role: "user",
      parts: [
       
        { text: prompt },
        {
              inlineData: {
                mimeType,
                data: base64, // <— Gemini will actually “see” the image now
              },
            },
      ],
         },
        ],
        generationConfig: {
        temperature: 0,
        response_mime_type: "application/json", // <— forces raw JSON (no code fences)
      },
    };

    let response = "";

    try {
    response = await axios.post(url, requestBody, {
        headers: {
              'Content-Type': 'application/json',
        }
    });

    } catch(err) {
    const apiErr = err?.response?.data?.error?.message || err?.message || "Unknown error";
      return NextResponse.json(
        { error: "Gemini request failed", detail: apiErr },
        { status: 502 }
      );

    }
   
    
    const responseText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";

    if (!responseText) {
      return NextResponse.json(
        { error: "No response from Gemini API" },
        { status: 500 }
      );
    }

    // parse the response coming from the llm here
    
    let parsed: any;
    try {
      // When response_mime_type=application/json, `text` should already be pure JSON
      parsed = JSON.parse(responseText);
    } catch {
      // Fallback: strip code fences if model ignored the MIME (rare, but safe)
      const cleaned = responseText
        .trim()
        .replace(/^(```json|```|'''json|''')/gi, "")
        .replace(/(```|''')$/gi, "")
        .trim();
      parsed = JSON.parse(cleaned);
    }

    console.log ("parsed", parsed);

    // check if parsed is of correct format:
     const allowedTypes = new Set(["Top", "Lower", "FootWear", "Accessories"]);
    if (
      !parsed ||
      typeof parsed !== "object" ||
      !parsed.name ||
      !parsed.description ||
      !parsed.type ||
      !allowedTypes.has(parsed.type)
    ) {
      return NextResponse.json(
        {
          error: "Incorrect format from LLM",
          got: parsed,
        },
        { status: 400 }
      );
    }

    // ✅ Save in Prisma
    const clothe = await prisma.clothe.create({
      data: {
        type:parsed.type,
        link: linkOfImage,
        name: parsed.name, 
        description: parsed.description,
        userId,
      },
    });

    return NextResponse.json(clothe);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/*
Sample Input:
curl -X POST http://localhost:3000/api/add-clothes   -H "userId: test123"   -F "file=@./test-outfits/footWear/f4.png"

returns back the created object:
{
  "id": "cmellixzr000vuoz8skua38p0",
  "type": "Lower",
  "name": "Khaki Pleated Drawstring Trousers",
  "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755792499/clothes_uploads/wdouvp1jjtqpxfvuyv6b.png",
  "description": "Light brown khaki trousers featuring a drawstring waist, pleated front, and a straight leg fit. The fabric appears to be a lightweight cotton or linen blend.",
  "color": null,
  "price": null,
  "imageUrl": null,
  "createdAt": "2025-08-21T16:08:28.306Z",
  "updatedAt": "2025-08-21T16:08:28.306Z",
  "userId": "test123"
}

*/


//   const prompt = `
// <task>
// You are given an image of a clothing item. Return ONLY a JSON object describing it.
// </task>

// <output-format>
// {
//   "name": "Single-line short title of the cloth",
//   "description": "Detailed description of the clothing only (fabric, color, cut, patterns, visible details). No background or person description.",
//   "type": "Top" | "Lower" | "FootWear" | "Accessories"
// }
// </output-format>

// <rules>
// - "type" must be exactly one of: Top, Lower, FootWear, Accessories.
// - Do not include anything except the JSON object. No markdown/code fences.
// </rules>
// `.trim();