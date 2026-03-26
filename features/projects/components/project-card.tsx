"use client";

import CornerAccent from "@/components/corner-accent";
import { ExternalLink, Info } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../projects.type";

type ProjectProps = {
	project: Project;
	index?: number;
	onClick: () => void;
};

export const ProjectCard = ({ project, index = 0, onClick }: ProjectProps) => {
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
			viewport={{ once: false, amount: 0.2 }}
			onClick={onClick}
			className="group hover:cursor-pointer relative w-full overflow-hidden rounded-3xl hover:shadow-lg hover:shadow-secondary-400/20 border border-cyan-400/30 dark:bg-primary-950 shadow-xs transition-[border-color,box-shadow,background-color] duration-300 transform-gpu hover:border-secondary-500/50">
			<CornerAccent
				position="top-right"
				className="z-10"
			/>
			<CornerAccent position="bottom-left" />

			<div className="relative h-56 w-full overflow-hidden rounded-xl">
				<Image
					src={project.image}
					alt={project.title}
					fill
					loading="eager"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				{false && (
					<span className="absolute right-4 top-4 rounded-full bg-magenta-500 bg-[#FF00E5] px-4 py-1 text-xs font-bold dark:text-white shadow-lg">
						Featured
					</span>
				)}
			</div>

			<div className="px-6 py-4">
				<h3 className="mb-2 text-xl md:text-2xl font-semibold dark:text-white">
					{project.title}
				</h3>
				<p className="mb-6 line-clamp-2 text-sm dark:text-primary-400">
					{project.description}
				</p>

				<div className="mb-6 flex flex-wrap gap-2">
					{project.tags.slice(0, 3).map((tag) => (
						<span
							key={tag}
							className="rounded-full border border-secondary-500/30 bg-secondary-500/5 px-3 py-1 text-xs font-medium dark:text-secondary-400">
							{tag}
						</span>
					))}
				</div>

				<hr className="mb-6 border-primary-800" />

				<div className="flex items-center justify-between">
					<Link
						target="_blank"
						href={project.github ?? ""}
						onClick={(e) => e.stopPropagation()}
						className="flex items-center gap-2 font-semibold text-secondary-400 transition-colors hover:text-secondary-300">
						View Project <ExternalLink size={18} />
					</Link>
					<button className="flex items-center gap-1 text-sm text-primary-400 transition-colors dark:hover:text-white">
						Details <Info size={16} />
					</button>
				</div>
			</div>
		</motion.div>
	);
};
