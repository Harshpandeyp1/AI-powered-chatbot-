import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

let history = [];

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      error: "Message is required",
    });
  }

  history.push(`User: ${message}`);

  try {
    const prompt = `
You are having an ongoing conversation with a user.

Conversation History:
${history.join("\n")}

Current User Message:
${message}

Answer naturally.
`;

    console.log("\n-----PROMPT SENT TO GEMINI-----");
    console.log(prompt);
    console.log("-----------------------------\n");

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    history.push(`AI: ${text}`);

    res.json({
      reply: text,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Something went wrong",
    });
  }
});

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});