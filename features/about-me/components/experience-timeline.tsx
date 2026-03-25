"use client";

import CornerAccent from "@/components/corner-accent";
import { experiences } from "../constants/experiences";

export default function ExperienceTimeline() {
	return (
		<div>
			<h3 className="text-3xl md:text-4xl text-center my-5 text-white"></h3>
			{experiences.map((exp, index) => (
				<div
					key={index}
					className="relative pl-5 md:pl-8 pb-10 border-l-2 border-secondary-400/30 last:pb-0">
					{/* Timeline Dot */}
					<div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-linear-to-br from-secondary-400 to-secondary-500 transform -translate-x-2.25 ring-4 ring-primary-900/90 shadow-lg shadow-secondary-400/50" />

					{/* year badge */}
					<span className="inline-block px-3 py-1 bg-secondary-400/10 dark:text-secondary-400 border border-secondary-400/30 rounded-full text-sm font-medium mb-3">
						{exp.year}
					</span>

					<div className="relative overflow-hidden dark:bg-primary-950/50 border border-secondary-400/30 rounded-xl shadow-md p-6 hover:border-secondary-400/50 hover:shadow-secondary-500/20 transition-all backdrop-blur-sm">
						<CornerAccent position="top-right" />
						<CornerAccent position="bottom-left" />

						<h3 className="text-base md:text-xl font-semibold dark:text-white mb-1">
							{exp.title}
						</h3>
						<p className="text-[14px] md:text-base dark:text-white font-medium mb-2">
							{exp.company}
						</p>
						<p className="text-[15px] md:text-base text-gray-500 dark:text-gray-400">
							{exp.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
