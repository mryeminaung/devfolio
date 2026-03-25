"use client";

import { motion } from "motion/react";

type Skill = {
	name: string;
	logo: string;
	progress: number;
};

type SkillCardProps = {
	skill: Skill;
	type: "slider" | "list";
};

export default function SkillCard({ skill, type }: SkillCardProps) {
	if (type === "list") {
		return (
			<div className="flex flex-col justify-between gap-3 px-4 py-3 md:py-4 bg-linear-to-br dark:from-primary-900 dark:to-primary-950 border-2 border-secondary-400/30 rounded-xl whitespace-nowrap font-medium text-base hover:border-secondary-400/50 hover:shadow-md hover:shadow-secondary-500/20 transition-all hover:-translate-y-1.25">
				<div className="flex items-center justify-between">
					<div className="flex items-center	gap-3">
						<img
							src={skill.logo}
							alt={skill.name}
							className="w-6 md:w-8 h-6 md:h-8"
						/>
						<span className="dark:text-white">{skill.name}</span>
					</div>
					{/* animate progress percentage */}
					<motion.span
						className="text-secondary-400"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, ease: "easeOut" }}>
						{skill.progress}%
					</motion.span>
				</div>

				{/* animate progress bar */}
				<div className="relative w-full h-2.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
					<motion.div
						initial={{ width: 0 }}
						whileInView={{ width: `${skill.progress}%` }}
						viewport={{ once: true }}
						transition={{
							duration: 1,
							// delay: groupIndex * 0.1 + skillIndex * 0.05 + 0.3,
							ease: "easeOut",
						}}
						className="h-full bg-blue-500 dark:bg-blue-500 rounded-full relative overflow-hidden">
						{/* Animated shine effect */}
						<motion.div
							className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
							initial={{ x: "-100%" }}
							animate={{ x: "200%" }}
							transition={{
								duration: 2,
								// delay: groupIndex * 0.1 + skillIndex * 0.05 + 1.5,
								ease: "easeInOut",
							}}
						/>
					</motion.div>
				</div>
			</div>
		);
	}

	if (type === "slider") {
		return (
			<div className="flex items-center gap-3 px-5 md:px-8 py-3 md:py-4 bg-linear-to-br dark:from-primary-900 dark:to-primary-950 border-2 border-secondary-400/30 rounded-xl whitespace-nowrap font-semibold text-base hover:border-secondary-400/50 hover:shadow-md hover:shadow-secondary-500/20 transition-all">
				<img
					src={skill.logo}
					alt={skill.name}
					className="w-6 md:w-8 h-6 md:h-8"
				/>
				<span className="dark:text-white">{skill.name}</span>
			</div>
		);
	}
}
