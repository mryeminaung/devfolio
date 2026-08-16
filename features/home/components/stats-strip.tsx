"use client";

import CornerAccent from "@/components/corner-accent";
import { motion } from "motion/react";

const stats = [
	{ value: "1.5+", label: "Years Experience" },
	{ value: "6+", label: "Projects Built" },
	{ value: "10+", label: "Technologies" },
	{ value: "5+", label: "Certificates" },
];

const DIAGONALS = [
	["top-left", "bottom-right"],
	["top-right", "bottom-left"],
] as const;

export default function StatsStrip() {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10 md:my-16">
			{stats.map((stat, i) => {
				const [c1, c2] = DIAGONALS[i % 2];
				return (
					<motion.div
						key={stat.label}
						initial={{ y: 20, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							duration: 0.5,
							delay: i * 0.08,
							ease: [0.22, 1, 0.36, 1],
						}}
						viewport={{ once: true, amount: 0.5 }}
						className="relative overflow-hidden flex flex-col items-center justify-center text-center py-6 rounded-2xl border border-secondary-400/20 dark:bg-primary-950/50 hover:border-secondary-400/40 hover:shadow-sm hover:shadow-secondary-400/10 transition-all duration-300">
						<CornerAccent position={c1} />
						<CornerAccent position={c2} />
						<span className="text-3xl md:text-4xl font-bold text-secondary-500 dark:text-secondary-400 leading-none mb-1">
							{stat.value}
						</span>
						<span className="text-xs md:text-sm text-gray-500 dark:text-primary-400 mt-1">
							{stat.label}
						</span>
					</motion.div>
				);
			})}
		</div>
	);
}
