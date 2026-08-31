"use client";

import CornerAccent from "@/components/corner-accent";
import { type LucideIcon } from "lucide-react";
import { motion } from "motion/react";

type CoreSkillCardProps = {
	skill: {
		title: string;
		description: string;
		icon: LucideIcon;
	};
	index: number;
};

export default function CoreSkillCard({ skill, index }: CoreSkillCardProps) {
	return (
		<motion.div
			initial={{ y: 40, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
			transition={{
				duration: 0.65,
				delay: index * 0.12,
				ease: [0.22, 1, 0.36, 1],
			}}
			viewport={{ once: true, amount: 0.3 }}
			className="relative overflow-hidden h-full bg-white dark:border-gray-800 rounded-2xl p-8 group-hover:border-transparent border border-secondary-400/30 dark:bg-primary-950/50 hover:border-secondary-400/50 hover:shadow-md hover:shadow-secondary-500/20 transform-gpu transition-[border-color,box-shadow,background-color] duration-300">
			<CornerAccent position="top-right" />
			<CornerAccent position="bottom-left" />
			<div className="mb-6 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl border border-secondary-500/30 bg-secondary-500/5 text-secondary-400">
				<skill.icon
					strokeWidth={2}
					className={`w-5 h-5 md:w-7 md:h-7`}
				/>
			</div>

			<h3 className="text-lg font-semibold mb-3">{skill.title}</h3>

			<p className="text-gray-600 text-[14px] dark:text-gray-400 leading-relaxed">
				{skill.description}
			</p>
		</motion.div>
	);
}
