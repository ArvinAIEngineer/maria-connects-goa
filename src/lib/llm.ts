import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { knowledgeBase } from '@/components/chat/mariaKnowledge';
import { getMembers, getEvents, getRestaurantOffers } from './dataService';
import { getCurrentDate } from './temporal';
import { config, isDev } from './config';

let genAI: GoogleGenerativeAI;
try {
  genAI = new GoogleGenerativeAI(config.geminiApiKey);
  if (isDev) {
    console.log('✅ Google Generative AI initialized successfully');
  }
} catch (error) {
  console.error("❌ Failed to initialize Google Generative AI:", error);
  throw new Error("Failed to initialize AI service. Please check your configuration.");
}

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

export async function getLlmResponse(userQuery: string, chatHistory: { role: string, parts: { text: string }[] }[]): Promise<string> {
  if (!userQuery || typeof userQuery !== 'string' || userQuery.trim().length === 0) {
    return "I'd be happy to help! Please ask me a question about EO Goa.";
  }

  if (userQuery.length > 1000) {
    return "That's quite a detailed question! Could you please make it a bit shorter so I can help you better?";
  }

  const contactQueryRegex = /contact|get in touch|connect with/i;
  if (contactQueryRegex.test(userQuery)) {
    return "Pls contact Vidhya @ +91 83809 44999 our chapter manager for any query you may have.";
  }

  try {
    const [members, events, restaurantOffers] = await Promise.all([
      getMembers(),
      getEvents(),
      getRestaurantOffers(),
    ]);

    const populatedKnowledgeBase = knowledgeBase
      .replace(/\$\{JSON\.stringify\(members, null, 2\)\}/g, JSON.stringify(members, null, 2))
      .replace(/\$\{JSON\.stringify\(events, null, 2\)\}/g, JSON.stringify(events, null, 2))
      .replace(/\$\{JSON\.stringify\(restaurantOffers, null, 2\)\}/g, JSON.stringify(restaurantOffers, null, 2))
      .replace(/\$\{"2025-09-17"\}/g, getCurrentDate().toISOString().split('T')[0]);

    const chatSession = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: populatedKnowledgeBase }],
        },
        {
          role: "model",
          parts: [{ text: "Understood. I am Maria, the AI guide for EO Goa. I will answer questions based only on the provided context and maintain my enthusiastic, insider personality. I am ready to help!" }],
        },
        ...chatHistory.slice(-10),
      ],
    });

    const result = await chatSession.sendMessage(userQuery);
    const response = result.response.text();

    if (!response || response.trim().length === 0) {
      return "Pls contact Vidhya @ +91 83809 44999 our chapter manager for any query you may have.";
    }

    return response;

  } catch (error) {
    console.error("Error in getLlmResponse:", error);

    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return "I'm experiencing some configuration issues. Please contact support if this persists.";
      }
      if (error.message.includes('quota') || error.message.includes('limit')) {
        return "I'm currently experiencing high demand. Please try again in a few moments.";
      }
      if (error.message.includes('network')) {
        return "I'm having trouble connecting right now. Please check your internet connection and try again.";
      }
    }

    return "I apologize, but I'm experiencing some technical difficulties. Please try asking your question again in a moment.";
  }
}