"use client";

import CornerAccent from "@/components/corner-accent";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "../projects.type";

const DIAGONALS = [
	["top-left", "bottom-right"],
	["top-right", "bottom-left"],
] as const;

type ProjectProps = {
	project: Project;
	index?: number;
};

function Card({ project, index = 0 }: { project: Project; index?: number }) {
	const [c1, c2] = DIAGONALS[index % 2];

	return (
		<Link
			href={`/projects/${project.slug}`}
			className="group relative w-full overflow-hidden rounded-3xl border border-secondary-400/30 dark:bg-primary-950/80 hover:border-secondary-500/50 hover:shadow-lg hover:shadow-secondary-400/15 transition-all duration-300 flex flex-col">
			<CornerAccent position={c1} className="z-10" />
			<CornerAccent position={c2} />

			{/* Image */}
			<div className="relative h-52 w-full overflow-hidden">
				<Image
					src={project.image}
					alt={project.title}
					fill
					loading="lazy"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
				<span className="absolute bottom-3 left-4 text-xs font-medium text-white/80 bg-secondary-500/30 border border-secondary-400/30 rounded-full px-3 py-1 backdrop-blur-sm">
					{project.category}
				</span>
			</div>

			<div className="px-5 py-4 flex flex-col flex-1">
				<h3 className="text-lg font-bold dark:text-white mb-1.5 truncate">
					{project.title}
				</h3>

				{/* Problem snippet — the storytelling hook */}
				{project.problem && (
					<p className="text-sm italic text-gray-500 dark:text-primary-400 line-clamp-2 mb-3">
						&ldquo;{project.problem}&rdquo;
					</p>
				)}

				{/* Tags */}
				<div className="flex flex-wrap gap-1.5 mb-3">
					{project.tags.slice(0, 3).map((tag) => (
						<span
							key={tag}
							className="rounded-full border border-secondary-500/30 bg-secondary-500/5 px-2.5 py-0.5 text-xs dark:text-secondary-400">
							{tag}
						</span>
					))}
				</div>

				{/* Footer */}
				<div className="flex items-center gap-1.5 mt-auto pt-3 border-t border-primary-800 text-sm font-medium text-secondary-400 group-hover:text-secondary-300 transition-colors">
					Read case study
					<ArrowRight
						size={14}
						className="transition-transform duration-300 group-hover:translate-x-1"
					/>
				</div>
			</div>
		</Link>
	);
}

export const ProjectCard = ({ project, index = 0 }: ProjectProps) => {
	const prefersReducedMotion = useReducedMotion();

	if (prefersReducedMotion)
		return <Card project={project} index={index} />;

	return (
		<motion.div
			initial={{ y: 30, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
			transition={{
				duration: 0.55,
				delay: index * 0.1,
				ease: [0.22, 1, 0.36, 1],
			}}
			viewport={{ once: true, amount: 0.2 }}>
			<Card project={project} index={index} />
		</motion.div>
	);
};
