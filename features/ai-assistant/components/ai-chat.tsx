"use client";

import { AlertCircle, Bot, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { type Language, translations } from "../constants/translations";
import AIInput from "./ai-input";
import AIMessage from "./ai-message";
import SuggestedPrompts from "./suggested-prompts";

interface Message {
	role: "user" | "assistant";
	content: string;
}

interface AIChatProps {
	language: Language;
	onLanguageChange: (lang: Language) => void;
}

export default function AIChat({ language, onLanguageChange }: AIChatProps) {
	const [messages, setMessages] = useState<Message[]>([]);
	const [input, setInput] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const abortControllerRef = useRef<AbortController | null>(null);
	const t = translations[language];

	const scrollToBottom = useCallback(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, []);

	useEffect(() => {
		scrollToBottom();
	}, [messages, scrollToBottom]);

	const sendMessage = useCallback(
		async (content: string) => {
			if (!content.trim() || isLoading) return;

			// Clear any previous error
			setError(null);

			// Add user message
			const userMessage: Message = { role: "user", content: content.trim() };
			setMessages((prev) => [...prev, userMessage]);
			setInput("");
			setIsLoading(true);

			// Prepare conversation history
			const conversationHistory = [...messages, userMessage].map((m) => ({
				role: m.role,
				content: m.content,
			}));

			try {
				// Create abort controller for cancellation
				abortControllerRef.current = new AbortController();

				const response = await fetch("/api/chat", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ messages: conversationHistory, language }),
					signal: abortControllerRef.current.signal,
				});

				const data = await response.json();

				if (!response.ok) {
					throw new Error(data.error || "Failed to get response");
				}

				// Add assistant message
				const assistantMessage: Message = {
					role: "assistant",
					content: data.content,
				};
				setMessages((prev) => [...prev, assistantMessage]);
			} catch (err: unknown) {
				if (err instanceof Error && err.name === "AbortError") {
					// Request was cancelled, do nothing
					return;
				}

				const errorMessage =
					err instanceof Error ? err.message : "Something went wrong";
				setError(errorMessage);

				// Add error message to chat
				setMessages((prev) => [
					...prev,
					{
						role: "assistant",
						content: t.errorMessage,
					},
				]);
			} finally {
				setIsLoading(false);
				abortControllerRef.current = null;
			}
		},
		[messages, isLoading, language],
	);

	const handleSuggestedPrompt = useCallback(
		(prompt: string) => {
			sendMessage(prompt);
		},
		[sendMessage],
	);

	const handleRetry = useCallback(() => {
		if (messages.length > 0) {
			// Get the last user message and resend it
			const lastUserMessage = [...messages]
				.reverse()
				.find((m) => m.role === "user");
			if (lastUserMessage) {
				// Remove the last assistant message (error message)
				setMessages((prev) => prev.slice(0, -1));
				sendMessage(lastUserMessage.content);
			}
		}
	}, [messages, sendMessage]);

	return (
		<div className="flex flex-col h-full">
			{/* Messages area */}
			<div
				className="flex-1 overflow-y-auto p-4 space-y-4"
				role="log"
				aria-label="Chat messages"
				aria-live="polite">
				{messages.length === 0 ? (
					<div className="flex flex-col items-center justify-center h-full text-center space-y-6 py-8">
						{/* Welcome message */}
						<div className="w-14 h-14 rounded-2xl bg-secondary-400/10 border border-secondary-400/30 flex items-center justify-center">
							<Bot
								size={28}
								className="text-secondary-500"
							/>
						</div>
						<div className="space-y-2">
							<h3 className="text-lg font-semibold text-gray-800 dark:text-white">
								{t.welcomeTitle}
							</h3>
							<p className="text-sm text-gray-500 dark:text-primary-400 max-w-xs">
								{t.welcomeDescription}
							</p>
						</div>

						{/* Suggested prompts */}
						<SuggestedPrompts onSelect={handleSuggestedPrompt} language={language} />
					</div>
				) : (
					<>
						{messages.map((message, index) => (
							<AIMessage
								key={`${message.role}-${index}`}
								message={message}
								language={language}
							/>
						))}

						{/* Loading indicator */}
						{isLoading && (
							<div className="flex gap-3">
								<div className="shrink-0 w-7 h-7 rounded-full bg-primary-800 dark:bg-primary-700 flex items-center justify-center text-primary-300">
									<Bot size={14} />
								</div>
								<div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-primary-100 dark:bg-primary-800/50 border border-primary-200/50 dark:border-primary-700/50">
									<div className="flex items-center gap-2">
										<div className="flex gap-1">
											<span
												className="w-2 h-2 rounded-full bg-secondary-400 animate-bounce"
												style={{ animationDelay: "0ms" }}
											/>
											<span
												className="w-2 h-2 rounded-full bg-secondary-400 animate-bounce"
												style={{ animationDelay: "150ms" }}
											/>
											<span
												className="w-2 h-2 rounded-full bg-secondary-400 animate-bounce"
												style={{ animationDelay: "300ms" }}
											/>
										</div>
										<span className="text-xs text-gray-400 dark:text-primary-500">
											{t.thinking}
										</span>
									</div>
								</div>
							</div>
						)}

						{/* Error state with retry */}
						{error && !isLoading && (
							<div className="flex items-center gap-2 px-4 py-2 text-xs text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
								<AlertCircle size={14} />
								<span>{error}</span>
								<button
									onClick={handleRetry}
									className="ml-auto flex items-center gap-1 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium">
									<RefreshCw size={12} />
									{t.retry}
								</button>
							</div>
						)}

						<div ref={messagesEndRef} />
					</>
				)}
			</div>

			{/* Input area */}
			<AIInput
				value={input}
				onChange={setInput}
				onSubmit={() => sendMessage(input)}
				isLoading={isLoading}
				language={language}
			/>
		</div>
	);
}
