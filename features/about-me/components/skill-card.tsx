"use client";

import CornerAccent from "@/components/corner-accent";
import { motion } from "motion/react";
import Image from "next/image";

type Skill = {
	name: string;
	logo: string;
	progress: number;
};

type SkillCardProps = {
	skill: Skill;
	type: "slider" | "list" | "progress";
	index?: number;
};

function getProficiency(progress: number): { label: string; color: string; barColor: string } {
	if (progress >= 85)
		return {
			label: "Expert",
			color:
				"text-secondary-500 dark:text-secondary-400 border-secondary-400/40 bg-secondary-400/8",
			barColor: "bg-secondary-400",
		};
	if (progress >= 65)
		return {
			label: "Advanced",
			color:
				"text-emerald-600 dark:text-emerald-400 border-emerald-400/40 bg-emerald-400/8",
			barColor: "bg-emerald-400",
		};
	if (progress >= 45)
		return {
			label: "Intermediate",
			color:
				"text-amber-600 dark:text-amber-400 border-amber-400/40 bg-amber-400/8",
			barColor: "bg-amber-400",
		};
	return {
		label: "Beginner",
		color:
			"text-gray-500 dark:text-primary-400 border-primary-600/40 bg-primary-700/10",
		barColor: "bg-gray-400 dark:bg-primary-500",
	};
}

export default function SkillCard({ skill, type, index = 0 }: SkillCardProps) {
	const { label, color, barColor } = getProficiency(skill.progress);
	const cornerPos1 = index % 2 === 0 ? "top-right" : "top-left";
	const cornerPos2 = index % 2 === 0 ? "bottom-left" : "bottom-right";

	if (type === "list") {
		return (
			<motion.div
				initial={{ y: 28, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
				transition={{
					duration: 0.5,
					delay: index * 0.1,
					ease: [0.22, 1, 0.36, 1],
				}}
				viewport={{ once: true, amount: 0.2 }}
				className="relative overflow-hidden flex flex-col gap-3 p-4 bg-white dark:bg-primary-950/50 border border-secondary-400/20 rounded-xl hover:border-secondary-400/50 hover:shadow-md hover:shadow-secondary-400/10 transition-all duration-300 transform-gpu group">
				<CornerAccent
					position={cornerPos1}
					size={30}
				/>
				<CornerAccent
					position={cornerPos2}
					size={30}
				/>

				<div className="flex items-center gap-2.5">
					<Image
						src={skill.logo}
						alt={skill.name}
						width={24}
						height={24}
						className="w-5 h-5 md:w-6 md:h-6 shrink-0"
					/>
					<span className="dark:text-white text-sm font-medium leading-tight">
						{skill.name}
					</span>
				</div>

				<span
					className={`self-start text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${color}`}>
					{label}
				</span>
			</motion.div>
		);
	}

	if (type === "slider") {
		return (
			<div className="flex items-center gap-3 px-5 md:px-8 py-3 md:py-4 bg-white dark:bg-primary-950/50 border border-secondary-400/20 rounded-xl whitespace-nowrap font-medium text-base hover:border-secondary-400/50 transition-all">
				<Image
					src={skill.logo}
					alt={skill.name}
					width={28}
					height={28}
					className="w-6 md:w-7 h-6 md:h-7"
				/>
				<span className="dark:text-white text-sm">{skill.name}</span>
			</div>
		);
	}

	if (type === "progress") {
		return (
			<motion.div
				initial={{ y: 24, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
				transition={{
					duration: 0.55,
					delay: index * 0.1,
					ease: [0.22, 1, 0.36, 1],
				}}
				viewport={{ once: true, amount: 0.2 }}
				className="relative overflow-hidden flex flex-col gap-2.5 p-4 bg-white dark:bg-primary-950/50 border border-secondary-400/20 rounded-xl hover:border-secondary-400/50 hover:shadow-md hover:shadow-secondary-400/10 transition-all duration-300 transform-gpu group">
				<CornerAccent position={cornerPos1} size={30} />
				<CornerAccent position={cornerPos2} size={30} />

				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2.5">
						<Image
							src={skill.logo}
							alt={skill.name}
							width={24}
							height={24}
							className="w-5 h-5 md:w-6 md:h-6 shrink-0"
						/>
						<span className="dark:text-white text-sm font-medium leading-tight">
							{skill.name}
						</span>
					</div>
					<span className="text-xs font-semibold text-gray-500 dark:text-primary-400 tabular-nums">
						{skill.progress}%
					</span>
				</div>

				{/* Progress bar */}
				<div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-neutral-800 overflow-hidden">
					<motion.div
						initial={{ width: 0 }}
						whileInView={{ width: `${skill.progress}%` }}
						transition={{ duration: 0.8, delay: index * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
						viewport={{ once: true, amount: 0.2 }}
						className={`h-full rounded-full ${barColor}`}
					/>
				</div>
			</motion.div>
		);
	}
}
