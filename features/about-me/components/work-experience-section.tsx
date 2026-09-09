"use client";

import CornerAccent from "@/components/corner-accent";
import { Briefcase, Code2 } from "lucide-react";
import { motion } from "motion/react";

const workExperience = [
	{
		title: "Software/IoT Engineering Intern",
		company: "Edypyramids, SINE, IIT Bombay",
		period: "June 2026 – September 2026",
		highlights: [
			"Developed an ESP32-based IoT system for monitoring and controlling agricultural devices over a local network.",
			"Implemented communication between ESP32 and frontend applications using HTTP/JSON.",
			"Worked with sensors including soil moisture, DHT, LDR, water-level sensor, relay, and water pump.",
		],
		technologies: [
			"React",
			"TypeScript",
			"React Native",
			"Express.js",
			"MongoDB",
			"ESP32/Arduino",
		],
	},
];

export default function WorkExperienceSection() {
	return (
		<div className="space-y-5">
			{workExperience.map((work, i) => (
				<motion.div
					key={work.title}
					initial={{ y: 24, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
					viewport={{ once: true, amount: 0.2 }}
					className="relative overflow-hidden rounded-2xl border border-secondary-400/30 bg-white dark:bg-primary-950/50 p-6 md:p-8 hover:border-secondary-400/50 hover:shadow-md hover:shadow-secondary-400/10 transition-all duration-300">

					<CornerAccent position="top-right" />
					<CornerAccent position="bottom-left" />

					<div className="flex items-start gap-4">
						<div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl border border-secondary-400/30 bg-secondary-400/5 text-secondary-400">
							<Code2 size={22} strokeWidth={1.8} />
						</div>

						<div className="flex-1 min-w-0">
							<div className="flex flex-wrap items-center gap-2 mb-1">
								<span className="text-xs font-medium px-2.5 py-0.5 rounded-full border border-secondary-400/30 bg-secondary-400/10 text-secondary-500 dark:text-secondary-400">
									{work.period}
								</span>
							</div>

							<h3 className="text-base md:text-lg font-semibold dark:text-white leading-snug mt-1">
								{work.title}
							</h3>
							<p className="text-sm text-gray-500 dark:text-primary-400 mt-1">
								{work.company}
							</p>

							<ul className="mt-4 space-y-2">
								{work.highlights.map((h) => (
									<li
										key={h}
										className="text-sm text-gray-600 dark:text-primary-300 flex items-start gap-2">
										<span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary-400" />
										{h}
									</li>
								))}
							</ul>

							<div className="mt-4">
								<div className="flex flex-wrap gap-2">
									{work.technologies.map((t) => (
										<span
											key={t}
											className="text-xs px-3 py-1 rounded-full border border-secondary-400/20 bg-secondary-400/5 dark:text-secondary-400 text-secondary-600">
											{t}
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
