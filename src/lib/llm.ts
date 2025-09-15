import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { knowledgeBase } from '@/components/chat/mariaKnowledge';
import { getEventsInfo, getBirthdaysAndAnniversariesInfo, getPhotoLinks } from './dataService';
import { config, isDev } from './config';

// Initialize Google Generative AI with validated configuration
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
  // Input validation
  if (!userQuery || typeof userQuery !== 'string' || userQuery.trim().length === 0) {
    return "I'd be happy to help! Please ask me a question about EO Goa.";
  }

  if (userQuery.length > 1000) {
    return "That's quite a detailed question! Could you please make it a bit shorter so I can help you better?";
  }

  try {
    // Load data with timeout and error handling
    const dataPromises = [
      getEventsInfo(),
      getBirthdaysAndAnniversariesInfo(),
      getPhotoLinks(),
    ];

    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('Data loading timeout')), 5000);
    });

    const [eventsInfo, birthdaysAndAnniversariesInfo, photoLinks] = await Promise.race([
      Promise.all(dataPromises),
      timeoutPromise
    ]);

    const populatedKnowledgeBase = knowledgeBase
      .replace(/\$\{eventsInfo\}/g, eventsInfo)
      .replace(/\$\{birthdaysAndAnniversariesInfo\}/g, birthdaysAndAnniversariesInfo)
      .replace(/\$\{photoLinks\}/g, photoLinks);

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
        ...chatHistory.slice(-10), // Limit history to last 10 messages for performance
      ],
    });

    const result = await chatSession.sendMessage(userQuery);
    const response = result.response.text();

    if (!response || response.trim().length === 0) {
      return "I apologize, but I'm having trouble generating a response right now. Could you please try rephrasing your question?";
    }

    return response;

  } catch (error) {
    console.error("Error in getLlmResponse:", error);

    // Specific error handling
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return "I'm experiencing some configuration issues. Please contact support if this persists.";
      }

      if (error.message.includes('quota') || error.message.includes('limit')) {
        return "I'm currently experiencing high demand. Please try again in a few moments.";
      }

      if (error.message.includes('timeout') || error.message.includes('network')) {
        return "I'm having trouble connecting right now. Please check your internet connection and try again.";
      }
    }

    // Generic fallback
    return "I apologize, but I'm experiencing some technical difficulties. Please try asking your question again in a moment.";
  }
}
