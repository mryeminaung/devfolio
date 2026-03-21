"use client";

import { ExternalLink, Info } from "lucide-react";
import Image from "next/image";

type ProjectProps = {
	project: {
		title: string;
		description: string;
		tags: string[];
		image: string;
		isFeatured?: boolean;
	};
	onClick: () => void;
};

export const ProjectCard = ({ project, onClick }: ProjectProps) => {
	return (
		<div
			onClick={onClick}
			className="group relative w-full overflow-hidden rounded-3xl hover:shadow-xs hover:shadow-cyan-400/20 border border-slate-800 bg-slate-950 shadow-2xl transition-all hover:border-cyan-500/50">
			<div className="relative h-56 w-full overflow-hidden rounded-xl ">
				<Image
					src={project.image}
					alt={project.title}
					fill
					loading="eager"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				{project.isFeatured && (
					<span className="absolute right-4 top-4 rounded-full bg-magenta-500 bg-[#FF00E5] px-4 py-1 text-xs font-bold text-white shadow-lg">
						Featured
					</span>
				)}
			</div>

			<div className="p-6">
				<h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>
				<p className="mb-6 line-clamp-2 text-sm text-slate-400">
					{project.description}
				</p>

				<div className="mb-6 flex flex-wrap gap-2">
					{project.tags.slice(0, 3).map((tag) => (
						<span
							key={tag}
							className="rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-400">
							{tag}
						</span>
					))}
				</div>

				<hr className="mb-6 border-slate-800" />

				<div className="flex items-center justify-between">
					<a
						href="#"
						className="flex items-center gap-2 font-bold text-cyan-400 transition-colors hover:text-cyan-300">
						View Project <ExternalLink size={18} />
					</a>
					<button className="flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white">
						Details <Info size={16} />
					</button>
				</div>
			</div>
		</div>
	);
};
