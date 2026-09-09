"use client";

import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { type Language } from "../constants/translations";

interface Message {
	role: "user" | "assistant";
	content: string;
}

interface AIMessageProps {
	message: Message;
	language: Language;
}

export default function AIMessage({ message, language }: AIMessageProps) {
	const isUser = message.role === "user";

	return (
		<div
			className={cn(
				"flex gap-3",
				isUser ? "flex-row-reverse" : "flex-row",
			)}
			role="article"
			aria-label={`${isUser ? "You" : "AI Assistant"}: ${message.content}`}>
			{/* Avatar */}
			<div
				className={cn(
					"shrink-0 w-7 h-7 rounded-full flex items-center justify-center",
					isUser
						? "bg-secondary-500/20 text-secondary-500"
						: "bg-primary-800 dark:bg-primary-700 text-primary-300",
				)}>
				{isUser ? <User size={14} /> : <Bot size={14} />}
			</div>

			{/* Message bubble */}
			<div
				className={cn(
					"max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
					isUser
						? "bg-secondary-500/10 text-gray-800 dark:text-primary-200 rounded-tr-sm"
						: "bg-primary-100 dark:bg-primary-800/50 text-gray-700 dark:text-primary-300 rounded-tl-sm border border-primary-200/50 dark:border-primary-700/50",
					language === "mm" && "text-[13px]",
				)}>
				<div className="whitespace-pre-wrap break-words">
					{formatMessage(message.content)}
				</div>
			</div>
		</div>
	);
}

function formatMessage(content: string): React.ReactNode {
	// Simple markdown-like filtering
	const parts = content.split(/(```[\s\S]*?```|`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);

	return parts.map((part, index) => {
		// Code blocks
		if (part.startsWith("```") && part.endsWith("```")) {
			const code = part.slice(3, -3);
			const firstNewline = code.indexOf("\n");
			const codeContent = firstNewline > -1 ? code.slice(firstNewline + 1) : code;
			return (
				<pre
					key={index}
					className="bg-primary-900 dark:bg-primary-950 text-primary-200 p-3 rounded-lg text-xs overflow-x-auto my-2 font-mono">
					<code>{codeContent}</code>
				</pre>
			);
		}

		// Inline code
		if (part.startsWith("`") && part.endsWith("`")) {
			return (
				<code
					key={index}
					className="bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 px-1.5 py-0.5 rounded text-xs font-mono">
					{part.slice(1, -1)}
				</code>
			);
		}

		// Bold text
		if (part.startsWith("**") && part.endsWith("**")) {
			return (
				<strong key={index} className="font-semibold text-gray-900 dark:text-white">
					{part.slice(2, -2)}
				</strong>
			);
		}

		// Markdown links [text](url)
		const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
		if (linkMatch) {
			const [, text, url] = linkMatch;
			return (
				<a
					key={index}
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-secondary-500 dark:text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-300 underline underline-offset-2">
					{text}
				</a>
			);
		}

		// Plain text with line breaks
		return part.split("\n").map((line, lineIndex) => (
			<span key={`${index}-${lineIndex}`}>
				{lineIndex > 0 && <br />}
				{line}
			</span>
		));
	});
}
