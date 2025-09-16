import { create } from 'zustand';
import { produce } from 'immer';
import { getLlmResponse } from '@/lib/llm';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (messageText: string) => Promise<void>;
}

const useChatStore = create<ChatState>((set, get) => ({
  messages: [
    {
      id: '1',
      text: "Hello! I'm Maria, your dedicated guide to the EO Goa community. I'm here to help you discover upcoming events, member celebrations, membership information, and all the exciting activities our entrepreneurial family has to offer. How can I assist you today?",
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ],
  isLoading: false,
  error: null,
  sendMessage: async (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    set(produce((state: ChatState) => {
      state.messages.push(userMessage);
      state.isLoading = true;
      state.error = null;
    }));

    try {
      const history = get().messages.slice(1).map((msg) => ({
        role: msg.isUser ? 'user' : 'model',
        parts: [{ text: msg.text }],
      }));

      const responseText = await getLlmResponse(messageText, history);

      const mariaResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      set(produce((state: ChatState) => {
        state.messages.push(mariaResponse);
        state.isLoading = false;
      }));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
      set(produce((state: ChatState) => {
        state.isLoading = false;
        state.error = errorMessage;
      }));
    }
  },
}));

export default useChatStore;