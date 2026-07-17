"use client";

import CornerAccent from "@/components/corner-accent";
import { motion } from "motion/react";
import { experiences } from "../constants/experiences";

export default function ExperienceTimeline() {
	return (
		<div>
			{experiences.map((exp, index) => (
				<div
					key={index}
					className="relative pl-5 md:pl-8 pb-14 border-l-2 border-secondary-400/30 last:pb-0">
					{/* Timeline Dot */}
					<div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-linear-to-br from-secondary-400 to-secondary-500 transform -translate-x-2.25 ring-4 ring-primary-900/90 shadow-lg shadow-secondary-400/50" />

					{/* year badge */}
					<motion.span
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						whileHover={{
							y: -5,
							transition: { duration: 0.2, ease: "easeOut" },
						}}
						transition={{
							duration: 0.3,
							delay: 0.12,
							ease: [0.22, 1, 0.36, 1],
						}}
						viewport={{ once: true, amount: 0.2 }}
						className="inline-block px-3 py-1 bg-secondary-400/10 dark:text-secondary-400 border border-secondary-400/30 rounded-full text-sm font-medium mb-5">
						{exp.year}
					</motion.span>

					<motion.div
						initial={{ y: 40, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						whileHover={{
							y: -5,
							transition: { duration: 0.2, ease: "easeOut" },
						}}
						transition={{
							duration: 0.55,
							delay: index * 0.12,
							ease: [0.22, 1, 0.36, 1],
						}}
						viewport={{ once: true, amount: 0.2 }}
						className="relative overflow-hidden dark:bg-primary-950/50 border border-secondary-400/30 rounded-xl shadow-md p-6 hover:border-secondary-400/50 hover:shadow-secondary-500/20 transition-[border-color,box-shadow,background-color] duration-300 backdrop-blur-sm transform-gpu">
						<CornerAccent position="top-right" />
						<CornerAccent position="bottom-left" />

						<h3 className="text-base md:text-xl font-semibold dark:text-white mb-1">
							{exp.title}
						</h3>
						<p className="text-[14px] md:text-base dark:text-white font-medium mb-2">
							{exp.company}
						</p>
						<p className="text-[15px] md:text-base hidden text-gray-500 dark:text-gray-400">
							{exp.description}
						</p>
						<ul className="space-y-2 text-sm md:text-base dark:text-primary-300 mt-4">
							{exp.knowledge.map((fact) => (
								<li
									key={fact}
									className="flex items-start gap-2">
									<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-400" />
									<span>{fact}</span>
								</li>
							))}
						</ul>

						<ul className="flex flex-wrap gap-2 dark:text-primary-300 mt-4">
							{exp.skills.map((skill) => (
								<li
									key={skill}
									className="inline-block text-[12px] px-3 py-1 bg-secondary-400/10 dark:text-secondary-400 border border-secondary-400/30 rounded-full font-medium list-none">
									{skill}
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			))}
		</div>
	);
}
