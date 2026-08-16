"use client";

import CornerAccent from "@/components/corner-accent";
import { ExternalLink, Info, Lock } from "lucide-react";
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
	const isPrivate = !project.link || project.link === "#";
	const [c1, c2] = DIAGONALS[index % 2];

	return (
		<Link
			href={`/projects/${project.id}`}
			className="group relative w-full overflow-hidden rounded-3xl hover:shadow-lg hover:shadow-secondary-400/20 border border-secondary-400/30 dark:bg-primary-950 shadow-xs transition-[border-color,box-shadow] duration-300 transform-gpu hover:border-secondary-500/50 flex flex-col">
			<CornerAccent
				position={c1}
				className="z-10"
			/>
			<CornerAccent position={c2} />

			<div className="relative h-56 w-full overflow-hidden rounded-xl">
				<Image
					src={project.image}
					alt={project.title}
					fill
					loading="lazy"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover transition-transform duration-500 group-hover:scale-110"
				/>
			</div>

			<div className="px-6 py-4 flex flex-col flex-1">
				<h3 className="mb-2 text-lg font-semibold tracking-tight dark:text-white truncate">
					{project.title}
				</h3>
				<p className="mb-4 line-clamp-2 text-sm dark:text-primary-400 text-gray-500">
					{project.description}
				</p>

				<div className="mb-4 flex flex-wrap gap-2">
					{project.tags.slice(0, 3).map((tag) => (
						<span
							key={tag}
							className="rounded-full border border-secondary-500/30 bg-secondary-500/5 px-3 py-1 text-xs font-medium dark:text-secondary-400">
							{tag}
						</span>
					))}
				</div>

				<hr className="mb-4 border-primary-800 mt-auto" />

				<div className="flex items-center justify-between">
					{isPrivate ? (
						<span className="inline-flex items-center gap-1.5 text-xs text-gray-400 dark:text-primary-500 border border-primary-700 rounded-full px-2.5 py-1">
							<Lock size={11} /> Academic
						</span>
					) : (
						<span
							onClick={(e) => {
								e.preventDefault();
								window.open(project.link, "_blank");
							}}
							className="flex items-center gap-1.5 font-semibold text-sm text-secondary-400 hover:text-secondary-300 transition-colors">
							Live Demo <ExternalLink size={15} />
						</span>
					)}
					<span className="flex items-center gap-1 text-sm text-primary-400 group-hover:text-secondary-400 transition-colors">
						Details <Info size={15} />
					</span>
				</div>
			</div>
		</Link>
	);
}

export const ProjectCard = ({ project, index = 0 }: ProjectProps) => {
	const prefersReducedMotion = useReducedMotion();

	if (prefersReducedMotion)
		return (
			<Card
				project={project}
				index={index}
			/>
		);

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
			<Card
				project={project}
				index={index}
			/>
		</motion.div>
	);
};
