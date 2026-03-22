"use client";

import { MonitorCog, Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	const baseClass =
		"px-5 py-4 border rounded-3xl transition-colors dark:text-white";

	const getThemeClass = (value: string) =>
		theme === value
			? "bg-slate-800 hover:bg-slate-800 text-white hover:text-white"
			: "hover:bg-slate-900 hover:text-white";

	const buttonVariants = {
		initial: { scale: 1, opacity: 1 },
		// hover: { scale: 1.1, opacity: 1 },
		tap: { scale: 0.95, opacity: 0.9 },
	};

	return (
		<div className="flex border items-center justify-evenly border-gray-300 dark:border-gray-700 rounded-full">
			{/* Light */}
			<motion.div
				variants={buttonVariants}
				initial="initial"
				whileHover="hover"
				whileTap="tap">
				<Button
					variant="ghost"
					className={`${baseClass} ${getThemeClass("light")}`}
					onClick={() => setTheme("light")}>
					<Sun className="h-[1.2rem] w-[1.2rem]" />
					<span className="sr-only">Light</span>
				</Button>
			</motion.div>

			{/* System */}
			<motion.div
				variants={buttonVariants}
				initial="initial"
				whileHover="hover"
				whileTap="tap">
				<Button
					variant="ghost"
					className={`${baseClass} ${getThemeClass("system")}`}
					onClick={() => setTheme("system")}>
					<MonitorCog className="h-[1.2rem] w-[1.2rem]" />
					<span className="sr-only">System</span>
				</Button>
			</motion.div>

			{/* Dark */}
			<motion.div
				variants={buttonVariants}
				initial="initial"
				whileHover="hover"
				whileTap="tap">
				<Button
					variant="ghost"
					className={`${baseClass} ${getThemeClass("dark")}`}
					onClick={() => setTheme("dark")}>
					<Moon className="h-[1.2rem] w-[1.2rem]" />
					<span className="sr-only">Dark</span>
				</Button>
			</motion.div>
		</div>
	);
}
