"use client";

import CornerAccent from "@/components/corner-accent";
import { cn } from "@/lib/utils";
import { MessageSquare, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { type Language, translations } from "../constants/translations";
import AIChat from "./ai-chat";

interface AIChatDialogProps {
	trigger?: React.ReactNode;
}

export default function AIChatDialog({ trigger }: AIChatDialogProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [language, setLanguage] = useState<Language>("en");
	const t = translations[language];

	// Close on Escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isOpen) {
				setIsOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [isOpen]);

	// Prevent body scroll when dialog is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<>
			{/* Trigger button */}
			{trigger ? (
				<div onClick={() => setIsOpen(true)}>{trigger}</div>
			) : (
				<button
					onClick={() => setIsOpen(true)}
					aria-label="Open AI Assistant"
					className="inline-flex items-center gap-2.5 px-8 py-3 rounded-xl border border-secondary-400/60 dark:bg-primary-950 bg-white hover:bg-gray-50 dark:hover:bg-primary-900 font-semibold text-sm transition-all duration-200 dark:text-white hover:border-secondary-400 hover:shadow-md hover:shadow-secondary-400/20 relative">
					<MessageSquare size={16} />
					Ask My AI
				</button>
			)}

			{/* Dialog overlay */}
			<AnimatePresence>
				{isOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							onClick={() => setIsOpen(false)}
							className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
							aria-hidden="true"
						/>

						{/* Dialog */}
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 20 }}
							transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
							className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
							role="dialog"
							aria-modal="true"
							aria-label="AI Assistant Chat">
							<div className="w-full max-w-md h-[600px] max-h-[90vh] bg-white dark:bg-primary-950 rounded-3xl border border-secondary-400/30 shadow-2xl shadow-secondary-500/10 flex flex-col overflow-hidden pointer-events-auto relative">
								<CornerAccent
									position="top-left"
									className="z-10 pointer-events-none"
								/>
								<CornerAccent
									position="top-right"
									className="z-10 pointer-events-none"
								/>
								<CornerAccent
									position="bottom-left"
									className="z-10 pointer-events-none"
								/>
								<CornerAccent
									position="bottom-right"
									className="z-10 pointer-events-none"
								/>

								{/* Header */}
								<div className="flex items-center justify-between px-4 py-3 border-b border-primary-200/50 dark:border-primary-700/50 bg-white/80 dark:bg-primary-900/80 backdrop-blur-sm">
									<div className="flex items-center gap-2">
										<div className="w-8 h-8 rounded-full bg-secondary-400/10 border border-secondary-400/30 flex items-center justify-center">
											<MessageSquare
												size={16}
												className="text-secondary-500"
											/>
										</div>
										<div>
											<h2 className={cn(
												"text-sm font-semibold text-gray-800 dark:text-white",
												language === "mm" && "text-[13px]",
											)}>
												{t.title}
											</h2>
											<p className="text-[10px] text-gray-400 dark:text-primary-500">
												{t.subtitle}
											</p>
										</div>
									</div>
									<div className="flex items-center gap-2">
										{/* Language Toggle */}
										<div className="flex items-center rounded-full border border-primary-200/50 dark:border-primary-700/50 bg-primary-100/50 dark:bg-primary-800/50 p-0.5">
											<button
												onClick={() => setLanguage("en")}
												aria-label="Switch to English"
												className={cn(
													"px-2 py-0.5 text-[10px] font-medium rounded-full transition-all duration-200",
													language === "en"
														? "bg-secondary-500 text-white shadow-sm"
														: "text-gray-500 dark:text-primary-400 hover:text-gray-700 dark:hover:text-primary-300",
												)}>
												EN
											</button>
											<button
												onClick={() => setLanguage("mm")}
												aria-label="Switch to Myanmar"
												className={cn(
													"px-2 py-0.5 text-[10px] font-medium rounded-full transition-all duration-200",
													language === "mm"
														? "bg-secondary-500 text-white shadow-sm"
														: "text-gray-500 dark:text-primary-400 hover:text-gray-700 dark:hover:text-primary-300",
												)}>
												MM
											</button>
										</div>
										<button
											onClick={() => setIsOpen(false)}
											aria-label="Close chat"
											className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors">
											<X size={16} />
										</button>
									</div>
								</div>

								{/* Chat content */}
								<div className="flex-1 overflow-hidden">
									<AIChat language={language} onLanguageChange={setLanguage} />
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
