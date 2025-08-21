import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const userId = req.headers.get("userId");
    const { prompt } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    if (!prompt) {
        return NextResponse.json({error: "prompt missing from the frontend"}, {status: 400});
    }

    const tops = await prisma.clothe.findMany({
        where: {
        type: "Top",
        },
    });

    const lowers = await prisma.clothe.findMany({
        where: {
        type: "Lower",
        },
    });

    const footWears = await prisma.clothe.findMany({
        where: {
        type: "FootWear",
        },
    });

    const accesories = await prisma.clothe.findMany({
        where: {
        type: "Accessories",
        },
    });

    const topsPrompt = tops.map(
         (top) =>
        `ID: ${top.id}, Name: ${top.name}, Description: ${top.description}`
        )
        .join("\n");
    
    const lowersPrompt = lowers.map(
         (lower) =>
        `ID: ${lower.id}, Name: ${lower.name}, Description: ${lower.description}`
        )
        .join("\n");


    const footWearPrompt = footWears.map(
         (footWear) =>
        `ID: ${footWear.id}, Name: ${footWear.name}, Description: ${footWear.description}`
        )
        .join("\n");

     const accesoriesPrompt = accesories.map(
         (accesorie) =>
        `ID: ${accesorie.id}, Name: ${accesorie.name}, Description: ${accesorie.description}`
        )
        .join("\n");
    
    const geminiPrompt = `
    <identity>
    You are an expert professional fashion stylist who has several decades of experience in styling people fashionably
    </identity>

    <task>
    Given the following Tops, Lowers, FootWears, Accessories in my closet below, craft a suitable, fashionable fit for it in the required output format
    </task>

    <list-of-clothes>

    Tops available:
    ${topsPrompt || "None"}

    Lowers available: 
    ${lowersPrompt || "None"}

    FootWears available:
    ${footWearPrompt || "None"}

    Accessories available:
    ${accesoriesPrompt || "None"}

    </list-of-clothes>

    <output-format>
    Return back a json object in the following format:

    Ex: 

    {
        
        fitName: "Creative Name of the fit you have created",
        tops: "id of the chosen top",
        lower: "id of the chosen lower",
        footWear: "id of the chosen footWear",
        accessories: "id of the chosen accessories",
    }

    if no tops, lowers, footWears or accessories are there, then write as "none" in that place

    Only generate in the json format as given above in the exmaple, take into consideration the inputs
    generate as:
    '''json {

    }
    '''
    only give as json object simply

    NOTE: Only give one json object, not many to give a customised fashion fit

    <output-format>
    
    `

//     const geminiPrompt = `
//     <identity>
// You are an expert professional fashion stylist who has several decades of experience in styling people fashionably
// </identity>

// <task>
// Given the following Tops, Lowers, FootWears, Accessories in my closet below, craft a suitable, fashionable fit for it in the required output format
// </task>

// <list-of-clothes>

// Tops available:
// ID: 1, Name: White Linen Shirt, Description: A breathable, slim-fit linen shirt perfect for summer.
// ID: 2, Name: Black Leather Jacket, Description: Classic biker-style jacket with zippers and a rugged vibe.

// Lowers available: 
// ID: 3, Name: Blue Slim Jeans, Description: Stretch denim jeans with a faded wash.
// ID: 4, Name: Beige Chinos, Description: Lightweight cotton chinos, slightly tapered for a smart-casual look.

// FootWears available:
// ID: 5, Name: White Sneakers, Description: Minimalist low-top sneakers with clean lines.
// ID: 6, Name: Brown Chelsea Boots, Description: Leather ankle boots with elastic side panels.

// Accessories available:
// ID: 7, Name: Black Aviator Sunglasses, Description: Metal-frame aviators with dark tinted lenses.
// ID: 8, Name: Silver Wristwatch, Description: Minimalist silver wristwatch with a black leather strap.

// </list-of-clothes>

// <output-format>
// Return back a json object in the following format:

// Ex: 

// {
//     fitName: "Creative Name of the fit you have created",
//     tops: "id of the chosen top",
//     lower: "id of the chosen lower",
//     footWear: "id of the chosen footWear",
//     accessories: "id of the chosen accessories",
// }

// if no tops, lowers, footWears or accessories are there, then write as "none" in that place

// Only generate in the json format as given above in the example, take into consideration the inputs
// generate as:
// '''json {

// }
// '''
// only give as one json object simply, just one outfit

// <output-format>
// `


    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const requestBody = { 
        contents: [{parts: [{ text: geminiPrompt }]}],
        generationConfig: {
            temperature: 0,
            response_mime_type: "application/json",
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

      return NextResponse.json(
        { error: "Gemini request failed" + err},
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
    
    let parsed: any;
    try {
      parsed = JSON.parse(responseText);
    } catch {
      const cleaned = responseText
        .trim()
        .replace(/^(```json|```|'''json|''')/gi, "")
        .replace(/(```|''')$/gi, "")
        .trim();
      parsed = JSON.parse(cleaned);
    }

    if (
      !parsed.fitName ||
      !parsed.tops ||
      !parsed.lower ||
      !parsed.footWear||
      !parsed.accessories
    ) {
      return NextResponse.json(
        {
          error: "Incorrect format from LLM",
          got: parsed,
        },
        { status: 400 }
      );
    }

    const [topObj, lowerObj, footWearObj, accessoriesObj] = await Promise.all([
      parsed.tops && parsed.tops !== "none" ? prisma.clothe.findUnique({ where: { id: parsed.tops } }) : null,
      parsed.lower && parsed.lower !== "none" ? prisma.clothe.findUnique({ where: { id: parsed.lower } }) : null,
      parsed.footWear && parsed.footWear !== "none" ? prisma.clothe.findUnique({ where: { id: parsed.footWear } }) : null,
      parsed.accessories && parsed.accessories !== "none" ? prisma.clothe.findUnique({ where: { id: parsed.accessories } }) : null,
    ]);

    const result = {
      fitName: parsed.fitName,
      top: topObj,
      lower: lowerObj,
      footWear: footWearObj,
      accessories: accessoriesObj,
    };

    return NextResponse.json(result);

  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


/*
Sample Input:
curl -X POST http://localhost:3000/api/recommend-clothes   -H "Content-Type: application/json"   -H "userId: 12345"   -d '{
    "prompt": "Generate a fashionable outfit based on the clothes available in my closet."
}'

Sample Response:
{
  "fitName": "Casual Comfort",
  "top": {
    "id": "cmelkoltv0009uoz8m09h990d",
    "type": "Top",
    "name": "Dark Blue Denim Short-Sleeve Shirt",
    "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755791088/clothes_uploads/xzv17z3qnqhugxdgyegj.png",
    "description": "Dark blue denim shirt with short sleeves, a collared neckline, and a button-up front. It features a chest pocket and a relaxed fit.",
    "color": null,
    "price": null,
    "imageUrl": null,
    "createdAt": "2025-08-21T15:44:52.500Z",
    "updatedAt": "2025-08-21T15:44:52.500Z",
    "userId": "test123"
  },
  "lower": {
    "id": "cmelkpefk000huoz8hpbfcua5",
    "type": "Lower",
    "name": "Beige Cargo Pants",
    "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755791127/clothes_uploads/pzd6xptntc97q0ac9xqk.png",
    "description": "Light beige cargo pants featuring a relaxed fit, elastic waistband, and multiple utility pockets on the sides. The pants are made from a lightweight, durable fabric.",
    "color": null,
    "price": null,
    "imageUrl": null,
    "createdAt": "2025-08-21T15:45:29.583Z",
    "updatedAt": "2025-08-21T15:45:29.583Z",
    "userId": "test123"
  },
  "footWear": {
    "id": "cmelkq9sj000ruoz8kmkbqyyo",
    "type": "FootWear",
    "name": "Nike Black and White Running Shoes",
    "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755791166/clothes_uploads/cmt9jowlpfwwhuenlrui.png",
    "description": "Black running shoes with a white Nike swoosh on the side, featuring a black mesh upper, black laces, and a thick white sole. The tongue has a white label with black text.",
    "color": null,
    "price": null,
    "imageUrl": null,
    "createdAt": "2025-08-21T15:46:10.198Z",
    "updatedAt": "2025-08-21T15:46:10.198Z",
    "userId": "test123"
  },
  "accessories": null
}

*/


