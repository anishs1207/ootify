import slangs from "./slangs.js";
import { GoogleGenAI } from "@google/genai";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fashionData from "./fashion.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
const history = [];

const ai = new GoogleGenAI({ apiKey: "AIzaSyBnNjM365TpIKmXwBNilfxlAak1cEO_GG0" });

 app.post("/aiResponse", async (req, res) => {
  const gender = req.query?.gender ; 
  history.push({
    role: 'user',
    parts:[{text:req.body.message}]
  })
  const response = (await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: history,
    config :{
        systemInstruction : `You are a fashion stylist for genz generation which are Gen Z, or Generation Z, refers to people born roughly between 1997 and 2012. They are digital natives who grew up with smartphones, social media, and the internet. Gen Z is known for being tech-savvy, trend-conscious, socially aware, and valuing individuality, inclusivity, and sustainability. They adapt quickly to new trends and prefer fast, engaging content like memes, reels, and short videos. Gen Z is often described as the "next generation" of millennials. Your task is to tell user about the fashion trends and give them the best outfit for them. for data you can use ${fashionData} which contains information of recent fashion trends for both men and women
        reply genz in with their style for refrence you can use phrases and slang from ${slangs} and respond according to the user's gender ${gender} and the user's response you can use to respond to them.`,
    }
    
  }));
  // This would store the data that Ai responded to make our LLM model efficient 
  history.push({
    role: "model",
    parts: [{text : response.text}]
  })
  if(response.text){
    res.status(200).send({ message: response.text });
  }
})

app.listen(3003, () => {
  console.log("Server started on port 3003");
});