import { NextResponse } from "next/server";
import { slangs, fashionData } from "@/app/_trends";
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

interface HistoryPart {
  text: string;
}

interface HistoryItem {
  role: "user" | "model";
  parts: HistoryPart[];
}

interface RequestBody {
  message: string;
}

const history: HistoryItem[] = [];

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY! }); // non-null assertion for env

export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const gender = searchParams.get("gender") || "unspecified";

    const body: RequestBody = await req.json();
    const userMessage = body.message;

    // Push user message to history
    history.push({
      role: "user",
      parts: [{ text: userMessage }],
    });

    // Call Google GenAI
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: history,
      config: {
        systemInstruction: `You are a fashion stylist for Gen Z (people born roughly between 1997 and 2012). They are tech-savvy, trend-conscious, socially aware, and value individuality, inclusivity, and sustainability. Your task is to tell user about fashion trends and give them the best outfit. You can use ${fashionData} for recent fashion trends, and respond in Gen Z style using phrases and slang from ${slangs}, according to the user's gender ${gender} and user message.`,
      },
    });

    // Push AI response to history
    history.push({
      role: "model",
      parts: [{ text: response.text ?? "" }],
    });

    return NextResponse.json({ message: response.text });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
