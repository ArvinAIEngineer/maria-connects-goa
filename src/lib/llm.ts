import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { knowledgeBase } from '@/components/chat/mariaKnowledge';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("VITE_GEMINI_API_KEY is not set in the environment variables.");
}

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
];

export async function getLlmResponse(userQuery: string, chatHistory: { role: string, parts: { text: string }[] }[]) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: knowledgeBase }],
        },
        {
          role: "model",
          parts: [{ text: "Understood. I am Maria, the AI guide for EO Goa. I will answer questions based only on the provided context and maintain my enthusiastic, insider personality. I am ready to help!" }],
        },
        ...chatHistory, // Add previous turns for context
      ],
    });

    const result = await chatSession.sendMessage(userQuery);
    return result.response.text();
  } catch (error) {
    console.error("Error generating content from LLM:", error);
    return "Oh dear, my thoughts are a little scrambled right now! Could you please try asking that again in a moment?";
  }
}
