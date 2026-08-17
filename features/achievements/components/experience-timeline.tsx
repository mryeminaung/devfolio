"use client";

import CornerAccent from "@/components/corner-accent";
import { motion } from "motion/react";
import { experiences } from "../constants/experiences";

const DIAGONALS = [
	["top-right", "bottom-left"],
	["top-left", "bottom-right"],
] as const;

const STATUS_MAP: Record<string, { label: string; color: string }> = {
	ongoing: { label: "ONGOING", color: "text-emerald-400 border-emerald-400/40 bg-emerald-400/8" },
	completed: { label: "COMPLETED", color: "text-secondary-400 border-secondary-400/40 bg-secondary-400/8" },
};

function getStatus(year: string) {
	return year.toLowerCase().includes("present") ? STATUS_MAP.ongoing : STATUS_MAP.completed;
}

export default function ExperienceTimeline() {
	return (
		<div className="relative">
			{/* Animated vertical timeline line */}
			<div className="absolute left-6 top-0 bottom-0 w-px">
				<motion.div
					initial={{ scaleY: 0 }}
					whileInView={{ scaleY: 1 }}
					transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
					viewport={{ once: true, amount: 0.1 }}
					className="w-full h-full bg-linear-to-b from-secondary-400/50 via-secondary-400/30 to-transparent origin-top"
				/>
			</div>

			<div className="flex flex-col gap-6">
				{experiences.map((exp, index) => {
					const [c1, c2] = DIAGONALS[index % 2];
					const status = getStatus(exp.year);
					const num = String(index + 1).padStart(2, "0");

					return (
						<motion.div
							key={index}
							initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
							viewport={{ once: true, amount: 0.2 }}
							className="relative pl-16">

							{/* Timeline dot */}
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								transition={{ duration: 0.4, delay: index * 0.12 + 0.3, ease: [0.22, 1, 0.36, 1] }}
								viewport={{ once: true, amount: 0.2 }}
								className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-secondary-400 bg-primary-950 z-10"
							>
								<motion.div
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									transition={{ duration: 0.3, delay: index * 0.12 + 0.5, ease: [0.22, 1, 0.36, 1] }}
									viewport={{ once: true, amount: 0.2 }}
									className="absolute inset-1 rounded-full bg-secondary-400"
								/>
							</motion.div>

							<div className="relative overflow-hidden rounded-2xl border border-secondary-400/20 dark:bg-primary-950/50 hover:border-secondary-400/40 hover:shadow-lg hover:shadow-secondary-400/8 transition-[border-color,box-shadow] duration-300 transform-gpu">

								<CornerAccent position={c1} />
								<CornerAccent position={c2} />

								{/* Header row */}
								<div className="flex items-center justify-between gap-4 px-6 pt-5 pb-4 border-b border-secondary-400/10">
									<div className="flex items-center gap-3">
										<span className="font-mono text-xs tracking-widest text-secondary-400/60">
											PROJECT / {num}
										</span>
										<span className={`font-mono text-[10px] font-semibold tracking-wider px-2.5 py-0.5 rounded-full border ${status.color}`}>
											{status.label}
										</span>
									</div>
									<span className="font-mono text-xs text-gray-400 dark:text-primary-500 shrink-0">
										{exp.year}
									</span>
								</div>

								{/* Body */}
								<div className="p-6">
									<h3 className="text-base md:text-lg font-semibold dark:text-white mb-0.5 leading-snug">
										{exp.title}
									</h3>
									<p className="text-sm text-secondary-500 dark:text-secondary-400 font-medium mb-5">
										{exp.company}
									</p>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										{/* What I built / learned */}
										<ul className="space-y-2.5">
											{exp.knowledge.map((fact) => (
												<li key={fact} className="flex items-start gap-2.5 text-sm text-gray-500 dark:text-primary-300">
													<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-400" />
													{fact}
												</li>
											))}
										</ul>

										{/* Tech stack */}
										<div className="flex flex-wrap gap-2 content-start md:justify-end">
											{exp.skills.map((skill) => (
												<span
													key={skill}
													className="text-[11px] px-3 py-1 font-medium bg-secondary-400/8 dark:text-secondary-400 text-secondary-600 border border-secondary-400/25 rounded-full">
													{skill}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
