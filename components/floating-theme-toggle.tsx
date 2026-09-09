"use client";

import { AIChatDialog } from "@/features/ai-assistant";
import { Monitor, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const themes: Theme[] = ["light", "dark", "system"];

const icons = {
	light: Sun,
	dark: Moon,
	system: Monitor,
};

const labels = {
	light: "Switch to dark mode",
	dark: "Switch to system mode",
	system: "Switch to light mode",
};

export default function FloatingThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const currentIndex = themes.indexOf(theme as Theme);
	const nextTheme = themes[(currentIndex + 1) % themes.length];
	const Icon = icons[theme as Theme] || icons.system;

	return (
		<div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
			{/* AI Chat Icon */}
			<AIChatDialog
				trigger={
					<motion.button
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 1, duration: 0.3 }}
						className="p-3 rounded-full bg-white/80 dark:bg-primary-900/80 backdrop-blur-md border border-secondary-400/30 shadow-lg shadow-secondary-400/10 hover:shadow-secondary-400/20 transition-all duration-300 hover:scale-110"
						aria-label="Open AI Assistant">
						<motion.div
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={1.5}
								strokeLinecap="round"
								strokeLinejoin="round"
								className="w-5 h-5 text-secondary-400">
								<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
							</svg>
						</motion.div>
					</motion.button>
				}
			/>

			{/* Theme Toggle */}
			<motion.button
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 1, duration: 0.3 }}
				onClick={() => setTheme(nextTheme)}
				className="p-3 rounded-full bg-white/80 dark:bg-primary-900/80 backdrop-blur-md border border-secondary-400/30 shadow-lg shadow-secondary-400/10 hover:shadow-secondary-400/20 transition-all duration-300 hover:scale-110"
				aria-label={labels[theme as Theme] || labels.system}>
				<motion.div
					key={theme}
					initial={{ rotate: -90, opacity: 0 }}
					animate={{ rotate: 0, opacity: 1 }}
					transition={{ duration: 0.2 }}>
					<Icon className="w-5 h-5 text-secondary-400" />
				</motion.div>
			</motion.button>
		</div>
	);
}
