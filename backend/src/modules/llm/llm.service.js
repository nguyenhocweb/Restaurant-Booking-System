import { aiFlash, aiPro } from "../../config/ai.config.js";
import buildSystemPrompt from "../ai/prompt/chat.prompt.js";
export const generateAIResponse = async (userMessage, useProModel = false, retrievedContext = "") => {
    const model = useProModel ? aiPro : aiFlash;
    const systemPrompt = buildSystemPrompt(retrievedContext);
    // Cập nhật lại model với System Instruction cho phiên chat này
    // (Đây là cú pháp cụ thể của Gemini)
    const chatSession = model.startChat({
        systemInstruction: systemPrompt
    });
    const result = await chatSession.sendMessage(userMessage);
    return result? result.response.text(): null;
}