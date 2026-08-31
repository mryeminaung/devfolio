"use client";

import CornerAccent from "@/components/corner-accent";
import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";

const education = [
	{
		degree: "B.E (Hons) in Electronics and Communication Engineering",
		institution: "Myanmar Institute of Information Technology (MIIT)",
		period: "2019 – 2026",
		status: "Final Year",
		coursework: [
			"Data Structures & Algorithms",
			"Software Engineering",
			"Database Fundamentals",
			"Networking Basics",
			"Problem Solving",
		],
	},
];

export default function EducationSection() {
	return (
		<div className="space-y-5">
			{education.map((edu, i) => (
				<motion.div
					key={edu.degree}
					initial={{ y: 24, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
					viewport={{ once: true, amount: 0.2 }}
					className="relative overflow-hidden rounded-2xl border border-secondary-400/30 bg-white dark:bg-primary-950/50 p-6 md:p-8 hover:border-secondary-400/50 hover:shadow-md hover:shadow-secondary-400/10 transition-all duration-300">

					<CornerAccent position="top-right" />
					<CornerAccent position="bottom-left" />

					<div className="flex items-start gap-4">
						<div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl border border-secondary-400/30 bg-secondary-400/5 text-secondary-400">
							<GraduationCap size={22} strokeWidth={1.8} />
						</div>

						<div className="flex-1 min-w-0">
							<div className="flex flex-wrap items-center gap-2 mb-1">
								<span className="text-xs font-medium px-2.5 py-0.5 rounded-full border border-secondary-400/30 bg-secondary-400/10 text-secondary-500 dark:text-secondary-400">
									{edu.status}
								</span>
								<span className="text-xs text-gray-400 dark:text-primary-500">
									{edu.period}
								</span>
							</div>

							<h3 className="text-base md:text-lg font-semibold dark:text-white leading-snug mt-1">
								{edu.degree}
							</h3>
							<p className="text-sm text-gray-500 dark:text-primary-400 mt-1">
								{edu.institution}
							</p>

							<div className="mt-4">
								<p className="text-xs uppercase tracking-widest text-gray-400 dark:text-primary-500 mb-2">
									Relevant Coursework
								</p>
								<div className="flex flex-wrap gap-2">
									{edu.coursework.map((c) => (
										<span
											key={c}
											className="text-xs px-3 py-1 rounded-full border border-secondary-400/20 bg-secondary-400/5 dark:text-secondary-400 text-secondary-600">
											{c}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
}
