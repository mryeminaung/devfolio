"use client";

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
		<motion.button
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay: 1, duration: 0.3 }}
			onClick={() => setTheme(nextTheme)}
			className="fixed bottom-20 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-primary-900/80 backdrop-blur-md border border-secondary-400/30 shadow-lg shadow-secondary-400/10 hover:shadow-secondary-400/20 transition-all duration-300 hover:scale-110"
			aria-label={labels[theme as Theme] || labels.system}>
			<motion.div
				key={theme}
				initial={{ rotate: -90, opacity: 0 }}
				animate={{ rotate: 0, opacity: 1 }}
				transition={{ duration: 0.2 }}>
				<Icon className="w-5 h-5 text-secondary-400" />
			</motion.div>
		</motion.button>
	);
}
