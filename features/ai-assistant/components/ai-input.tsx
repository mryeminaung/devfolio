"use client";

import { cn } from "@/lib/utils";
import { Loader2, Send } from "lucide-react";
import { KeyboardEvent, useRef } from "react";

interface AIInputProps {
	value: string;
	onChange: (value: string) => void;
	onSubmit: () => void;
	isLoading: boolean;
	disabled?: boolean;
}

export default function AIInput({
	value,
	onChange,
	onSubmit,
	isLoading,
	disabled = false,
}: AIInputProps) {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			onSubmit();
		}
	};

	const handleSubmit = () => {
		if (value.trim() && !isLoading && !disabled) {
			onSubmit();
		}
	};

	return (
		<div className="flex items-end gap-2 p-3 border-t border-primary-200/50 dark:border-primary-700/50 bg-white/50 dark:bg-primary-900/50 backdrop-blur-sm">
			<textarea
				ref={textareaRef}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder="Ask about Ye Min's skills, projects, experience..."
				rows={1}
				disabled={isLoading || disabled}
				aria-label="Type your message"
				className={cn(
					"flex-1 resize-none rounded-xl border border-primary-200/50 dark:border-primary-700/50 bg-white dark:bg-primary-800/50 px-4 py-2.5 text-sm text-gray-800 dark:text-primary-200 placeholder:text-gray-400 dark:placeholder:text-primary-500 focus:outline-none focus:ring-2 focus:ring-secondary-400/50 focus:border-secondary-400/50 transition-all duration-200",
					"min-h-[42px] max-h-[120px]",
					isLoading && "opacity-50 cursor-not-allowed",
				)}
			/>
			<button
				onClick={handleSubmit}
				disabled={!value.trim() || isLoading || disabled}
				aria-label="Send message"
				className={cn(
					"shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200",
					value.trim() && !isLoading && !disabled
						? "bg-secondary-500 hover:bg-secondary-600 text-white shadow-md shadow-secondary-500/20"
						: "bg-primary-200/50 dark:bg-primary-700/50 text-primary-400 cursor-not-allowed",
				)}>
				{isLoading ? (
					<Loader2
						size={18}
						className="animate-spin"
					/>
				) : (
					<Send size={16} />
				)}
			</button>
		</div>
	);
}
