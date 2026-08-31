"use client";

import CornerAccent from "@/components/corner-accent";
import { motion } from "motion/react";
import { Achievement } from "../achievements.types";

const DIAGONALS = [
	["top-left", "bottom-right"],
	["top-right", "bottom-left"],
] as const;

type StatsCardProps = {
	achievement: Achievement;
	index?: number;
};

export const StatsCard = ({ achievement, index = 0 }: StatsCardProps) => {
	const Icon = achievement.icon;
	const [c1, c2] = DIAGONALS[index % 2];

	return (
		<motion.div
			initial={{ y: 40, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
			transition={{
				duration: 0.55,
				delay: index * 0.1,
				ease: [0.22, 1, 0.36, 1],
			}}
			viewport={{ once: true, amount: 0.2 }}
			className="relative overflow-hidden flex w-full flex-col items-center justify-center rounded-3xl border border-secondary-400/30 bg-white dark:bg-primary-950/50 p-8 text-center hover:border-secondary-400/50 hover:shadow-md hover:shadow-secondary-500/20 transition-[border-color,box-shadow,background-color] duration-300 transform-gpu">

			<CornerAccent position={c1} />
			<CornerAccent position={c2} />

			<div className="mb-6 flex h-15 w-15 items-center justify-center rounded-full border border-secondary-500/30 bg-secondary-500/5 text-secondary-400">
				<Icon size={28} strokeWidth={2} />
			</div>

			<h3 className="mb-2 text-lg md:text-xl font-semibold tracking-tight dark:text-white">
				{achievement.title}
			</h3>

			<p className="text-[15px] md:text-base font-medium text-gray-500 dark:text-gray-400">
				{achievement.description}
			</p>
		</motion.div>
	);
};
