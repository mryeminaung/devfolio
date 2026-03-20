"use client";

import { motion } from "motion/react";
import { experiences } from "../constants/experiences";

export default function ExperienceTimeline() {
	return (
		<div>
			<h3 className="text-3xl md:text-4xl text-center my-5 text-white">
				Experience Timeline
			</h3>
			{experiences.map((exp, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ delay: index * 0.1 }}
					className="relative pl-8 pb-10 border-l-2 border-cyan-400/30 last:pb-0">
					{/* Timeline Dot */}
					<div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-linear-to-br from-cyan-400 to-magenta-500 transform -translate-x-2.25 ring-4 ring-slate-950 shadow-lg shadow-cyan-400/50" />

					{/* year badge */}
					<span className="inline-block px-3 py-1 bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 rounded-full text-sm font-medium mb-3">
						{exp.year}
					</span>

					<div className="bg-slate-950/50 border border-cyan-400/30 rounded-xl shadow-md p-6 hover:border-cyan-400/50 hover:shadow-cyan-500/20 transition-all backdrop-blur-sm">
						<h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
						<p className="text-magenta-400 text-white font-medium mb-2">
							{exp.company}
						</p>
						<p className="text-gray-400">{exp.description}</p>
					</div>
				</motion.div>
			))}
		</div>
	);
}
