"use client";

import CornerAccent from "@/components/corner-accent";
import Underline from "@/components/underline";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProjectCard } from "./components/project-card";
import { projects } from "./constants/projects";

const CATEGORIES = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const featuredIds = [6, 5]; // Cocktail Explorer + Food Recipe Browser

export default function ProjectsPage() {
	const [active, setActive] = useState("All");

	const featured = projects.filter((p) => featuredIds.includes(p.id));
	const rest = projects.filter((p) => !featuredIds.includes(p.id));

	const filtered =
		active === "All" ? rest : rest.filter((p) => p.category === active);

	return (
		<section>
			{/* Heading */}
			<div className="flex flex-col mb-10 gap-y-3">
				<h2 className="text-2xl md:text-3xl font-semibold text-center dark:text-white">
					Projects
				</h2>
				<Underline />
			</div>

			{/* Featured row */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
				{featured.map((project, i) => (
					<motion.div
						key={project.id}
						initial={{ y: 24, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						whileHover={{ y: -4, transition: { duration: 0.2 } }}
						transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
						viewport={{ once: true, amount: 0.15 }}>
						<Link
							href={`/projects/${project.slug}`}
							className="group relative overflow-hidden rounded-3xl border border-secondary-400/30 dark:bg-primary-950/80 hover:border-secondary-400/60 hover:shadow-lg hover:shadow-secondary-400/15 transition-all duration-300 flex flex-col h-full">
							<CornerAccent position="top-left" className="z-10" />
							<CornerAccent position="bottom-right" />

							{/* Image */}
							<div className="relative h-52 w-full overflow-hidden">
								<Image
									src={project.image}
									alt={project.title}
									fill
									sizes="(max-width: 768px) 100vw, 50vw"
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
								<span className="absolute bottom-3 left-4 text-xs font-medium text-white/80 bg-secondary-500/30 border border-secondary-400/30 rounded-full px-3 py-1">
									Featured
								</span>
							</div>

							<div className="p-5 flex flex-col flex-1">
								<h3 className="text-lg font-bold dark:text-white mb-2">{project.title}</h3>
								<p className="text-sm text-gray-500 dark:text-primary-400 line-clamp-2 mb-4">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.slice(0, 4).map((tag) => (
										<span
											key={tag}
											className="rounded-full border border-secondary-500/30 bg-secondary-500/5 px-3 py-1 text-xs dark:text-secondary-400">
											{tag}
										</span>
									))}
								</div>

								<div className="flex items-center gap-3 mt-auto pt-3 border-t border-primary-800">
									{project.link && project.link !== "#" ? (
										<span
											onClick={(e) => { e.preventDefault(); window.open(project.link, "_blank"); }}
											className="flex items-center gap-1.5 text-sm font-medium text-secondary-400 hover:text-secondary-300 transition-colors">
											<ExternalLink size={14} /> Live Demo
										</span>
									) : null}
									{project.github && (
										<span
											onClick={(e) => { e.preventDefault(); window.open(project.github, "_blank"); }}
											className="flex items-center gap-1.5 text-sm text-primary-400 dark:hover:text-white transition-colors">
											<Github size={14} /> Source
										</span>
									)}
								</div>
							</div>
						</Link>
					</motion.div>
				))}
			</div>

			{/* Filter tabs */}
			<div className="flex flex-wrap gap-2 mb-8">
				{CATEGORIES.map((cat) => (
					<button
						key={cat}
						onClick={() => setActive(cat)}
						className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
							active === cat
								? "border-secondary-400 bg-secondary-400/10 text-secondary-500 dark:text-secondary-400"
								: "border-primary-700 text-gray-500 dark:text-primary-400 hover:border-secondary-400/40"
						}`}>
						{cat}
					</button>
				))}
			</div>

			{/* Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{filtered.map((project, index) => (
					<ProjectCard key={project.id} project={project} index={index} />
				))}
				{filtered.length === 0 && (
					<p className="col-span-3 text-center text-gray-400 py-16">
						No projects in this category yet.
					</p>
				)}
			</div>
		</section>
	);
}
