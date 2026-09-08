import { NextRequest, NextResponse } from "next/server";
import { getOpenAIClient } from "@/lib/ai/client";
import { systemPrompt } from "@/lib/ai/knowledge-base";

const MAX_MESSAGES = 20;
const MAX_CONTENT_LENGTH = 2000;
const MAX_REQUESTS_PER_MINUTE = 10;

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getRateLimitKey(request: NextRequest): string {
	const forwarded = request.headers.get("x-forwarded-for");
	const ip = forwarded?.split(",")[0] ?? "unknown";
	return ip;
}

function checkRateLimit(key: string): boolean {
	const now = Date.now();
	const record = rateLimitMap.get(key);

	if (!record || now > record.resetTime) {
		rateLimitMap.set(key, { count: 1, resetTime: now + 60_000 });
		return true;
	}

	if (record.count >= MAX_REQUESTS_PER_MINUTE) {
		return false;
	}

	record.count++;
	return true;
}

interface ChatMessage {
	role: "user" | "assistant";
	content: string;
}

function validateMessages(messages: unknown): messages is ChatMessage[] {
	if (!Array.isArray(messages) || messages.length === 0) return false;
	if (messages.length > MAX_MESSAGES) return false;

	const validRoles = ["user", "assistant"];

	return messages.every(
		(m) =>
			typeof m === "object" &&
			m !== null &&
			"role" in m &&
			"content" in m &&
			validRoles.includes((m as ChatMessage).role) &&
			typeof (m as ChatMessage).content === "string" &&
			(m as ChatMessage).content.length > 0 &&
			(m as ChatMessage).content.length <= MAX_CONTENT_LENGTH,
	);
}

// Prompt injection detection
function containsSuspiciousContent(content: string): boolean {
	const suspiciousPatterns = [
		/ignore\s+(previous|all|your)\s+(instructions|prompts|rules)/i,
		/show\s+me\s+(your|the)\s+(system\s+)?prompt/i,
		/what\s+(are|is)\s+your\s+(system\s+)?(prompt|instructions)/i,
		/reveal\s+(your|the)\s+(system\s+)?(prompt|instructions)/i,
		/you\s+are\s+now\s+(a|an)/i,
		/pretend\s+you\s+(are|were)/i,
		/act\s+as\s+if/i,
		/demonstrate\s+your/i,
		/safety\s+filter/i,
	];

	return suspiciousPatterns.some((pattern) => pattern.test(content));
}

export async function POST(request: NextRequest) {
	try {
		// Rate limiting
		const rateLimitKey = getRateLimitKey(request);
		if (!checkRateLimit(rateLimitKey)) {
			return NextResponse.json(
				{ error: "Too many requests. Please try again later." },
				{ status: 429 },
			);
		}

		// Check if API key is configured
		if (!process.env.OPENROUTER_API_KEY) {
			return NextResponse.json(
				{ error: "AI assistant is not configured. Please try again later." },
				{ status: 503 },
			);
		}

		// Parse request body
		const body = await request.json();
		const { messages } = body;

		// Validate messages
		if (!validateMessages(messages)) {
			return NextResponse.json(
				{ error: "Invalid request. Please try again." },
				{ status: 400 },
			);
		}

		// Check for prompt injection in user messages
		const lastUserMessage = messages[messages.length - 1];
		if (containsSuspiciousContent(lastUserMessage.content)) {
			return NextResponse.json({
				content:
					"I'm here to help you learn about Ye Min Aung's portfolio. Feel free to ask about his skills, projects, experience, or education!",
			});
		}

		// Prepare messages for OpenAI
		const openaiMessages = [
			{ role: "system" as const, content: systemPrompt },
			...messages.map((m) => ({
				role: m.role as "user" | "assistant",
				content: m.content,
			})),
		];

		// Call OpenRouter
		const openai = getOpenAIClient();
		const model = process.env.OPENROUTER_MODEL || "google/gemini-2.5-flash";
		const completion = await openai.chat.completions.create({
			model,
			messages: openaiMessages,
			max_tokens: 1024,
			temperature: 0.7,
		});

		const assistantMessage = completion.choices[0]?.message?.content;

		if (!assistantMessage) {
			return NextResponse.json(
				{ error: "Failed to generate response. Please try again." },
				{ status: 500 },
			);
		}

		return NextResponse.json({ content: assistantMessage });
	} catch (error: unknown) {
		console.error("Chat API error:", error);

		// Handle specific OpenAI errors
		if (error && typeof error === "object" && "status" in error) {
			const openaiError = error as { status: number; message?: string };

			if (openaiError.status === 401) {
				return NextResponse.json(
					{ error: "AI service configuration error. Please try again later." },
					{ status: 500 },
				);
			}

			if (openaiError.status === 429) {
				return NextResponse.json(
					{ error: "AI service is busy. Please try again in a moment." },
					{ status: 429 },
				);
			}
		}

		return NextResponse.json(
			{ error: "I'm having trouble responding right now. Please try again later." },
			{ status: 500 },
		);
	}
}
