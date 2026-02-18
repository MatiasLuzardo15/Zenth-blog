import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const summarizeText = async (text: string): Promise<string> => {
  if (!apiKey) {
    return "Configura tu API_KEY para usar la función de resumen IA.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Resume el siguiente artículo de blog en una frase concisa y motivadora en español, captura la esencia para un lector ocupado:\n\n${text}`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster summary
      }
    });

    return response.text || "No se pudo generar el resumen.";
  } catch (error) {
    console.error("Error summarizing text:", error);
    return "Ocurrió un error al conectar con la IA de Zenth.";
  }
};
