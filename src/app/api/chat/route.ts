import { createOpenAI } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages } from "ai";

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: groq("llama3-8b-8192"),
    system: `You are a career guidance chatbot. Give by giving accurate Info. Main focus should be india and indian colleges`,
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
