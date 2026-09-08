import OpenAI from "openai";

let openaiClient: OpenAI | null = null;

export function getOpenAIClient(): OpenAI {
	if (!openaiClient) {
		const apiKey = process.env.OPENROUTER_API_KEY;
		if (!apiKey) {
			throw new Error("OPENROUTER_API_KEY environment variable is not set");
		}
		openaiClient = new OpenAI({
			apiKey,
			baseURL: "https://openrouter.ai/api/v1",
		});
	}
	return openaiClient;
}
