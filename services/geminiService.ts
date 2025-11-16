import { GoogleGenAI } from "@google/genai";

// FIX: Adhere to Gemini API guidelines.
// Initialize with process.env.API_KEY directly and assume it is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const systemInstruction = `You are an expert historian specializing in the Pacific War of World War II, focusing on the conflict between Japan and the United States. Your audience is high school students who are learning English as a foreign language (EFL). 
- Explain concepts clearly using simple vocabulary and straightforward sentence structures.
- Be neutral, factual, and sensitive to the topic. Avoid graphic details unless necessary for historical context, and if so, present them carefully.
- Answer only questions related to the WWII conflict between Japan and the US. 
- If asked about something else, politely decline and state that your expertise is limited to this specific historical topic.
- Keep your answers concise and easy to understand, typically 2-4 paragraphs.
`;

export const askHistorian = async (question: string): Promise<string> => {
  // FIX: Adhere to Gemini API guidelines by removing the API key check.
  // The environment variable is assumed to be configured.
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.5,
        topP: 0.95,
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, I encountered an error while trying to answer your question. Please try again later.";
  }
};
