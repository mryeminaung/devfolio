"use client";

import { Sparkles } from "lucide-react";

interface SuggestedPromptsProps {
	onSelect: (prompt: string) => void;
}

const SUGGESTED_PROMPTS = [
	"Tell me about Ye Min",
	"What projects has he built?",
	"What is his tech stack?",
	"Tell me about his IoT project",
	"What are his strongest skills?",
];

export default function SuggestedPrompts({ onSelect }: SuggestedPromptsProps) {
	return (
		<div className="space-y-3">
			<p className="text-xs text-gray-400 dark:text-primary-500 flex items-center gap-1.5">
				<Sparkles size={12} />
				Suggested questions
			</p>
			<div className="flex flex-wrap gap-2">
				{SUGGESTED_PROMPTS.map((prompt) => (
					<button
						key={prompt}
						onClick={() => onSelect(prompt)}
						className="px-3 py-1.5 text-xs rounded-full border border-secondary-400/30 bg-secondary-400/5 text-secondary-600 dark:text-secondary-400 hover:border-secondary-400/50 hover:bg-secondary-400/10 transition-all duration-200">
						{prompt}
					</button>
				))}
			</div>
		</div>
	);
}
