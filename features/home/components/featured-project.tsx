"use client";

import CornerAccent from "@/components/corner-accent";
import Underline from "@/components/underline";
import { projects } from "@/features/projects/constants/projects";
import { ExternalLink, Github } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProject() {
	const prefersReducedMotion = useReducedMotion();
	const project = projects.find((p) => p.title === "Cocktail Explorer") ?? projects[5];

	if (prefersReducedMotion) {
		return (
			<div>
				<div className="flex flex-col mb-10 gap-y-3">
					<h2 className="text-2xl md:text-3xl font-semibold text-center dark:text-white">
						Featured Project
					</h2>
					<Underline />
				</div>

				<div className="group relative w-full overflow-hidden rounded-3xl border border-cyan-400/30 bg-white/60 shadow-xs transition-[border-color,box-shadow,background-color] duration-300 hover:border-secondary-500/50 hover:shadow-md hover:shadow-secondary-400/20 dark:bg-primary-950/90 mb-10 transform-gpu">
					<CornerAccent
						position="top-left"
						className="z-10"
					/>
					<CornerAccent position="bottom-right" />

					<div className="grid grid-cols-1 lg:grid-cols-3">
						<div className="col-span-1 relative min-h-64 lg:min-h-full">
							<Image
								src={project.image}
								alt={project.title}
								fill
								priority
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover transition-transform rounded-r-2xl"
							/>
						</div>

						<div className="col-span-2 p-6 sm:p-8 lg:p-10">
							<h3 className="text-2xl sm:text-3xl font-semibold leading-tight dark:text-white">
								{project.title}
							</h3>

							<div className="mt-5">
								<p className="text-xs uppercase font-semibold tracking-[0.18em] text-secondary-500">
									Overview
								</p>
								<p className="mt-2 text-base leading-relaxed dark:text-primary-300">
									{project.fullDescription}
								</p>
							</div>

							<div className="mt-6">
								<p className="text-xs uppercase font-semibold tracking-[0.18em] text-secondary-500">
									Language
								</p>
								<div className="mt-3 flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="rounded-full border border-secondary-500/40 bg-secondary-500/10 px-3 py-1 text-xs font-medium dark:text-secondary-300">
											{tag}
										</span>
									))}
								</div>
							</div>

							<div className="mt-8 flex flex-wrap gap-3">
								<Link
									href={`/projects/${project.slug}`}
									className="inline-flex items-center gap-2 rounded-lg border border-secondary-500/40 bg-secondary-500/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary-500/20 dark:text-secondary-300">
									View Details
								</Link>
								{project.link && project.link !== "#" && (
									<Link
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 rounded-lg border border-secondary-500/40 bg-secondary-500/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary-500/20 dark:text-secondary-300">
										Live Demo <ExternalLink size={16} />
									</Link>
								)}
								{project.github && (
									<Link
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 rounded-lg border border-primary-700 bg-primary-900 px-4 py-2 text-sm font-medium text-primary-200 transition-colors hover:border-primary-600 hover:bg-primary-800">
										Source Code <Github size={16} />
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div>
			<div className="flex flex-col mb-10 gap-y-3">
				<h2 className="text-2xl md:text-3xl font-semibold text-center dark:text-white">
					Featured Project
				</h2>
				<Underline />
			</div>

			<motion.div
				initial={{ y: 40, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
				transition={{
					duration: 0.65,
					delay: 0.12,
					ease: [0.22, 1, 0.36, 1],
				}}
				viewport={{ once: true, amount: 0.3 }}
				className="group relative w-full overflow-hidden rounded-3xl border border-cyan-400/30 bg-white/60 shadow-xs transition-[border-color,box-shadow,background-color] duration-300 hover:border-secondary-500/50 hover:shadow-md hover:shadow-secondary-400/20 dark:bg-primary-950/90 mb-10 transform-gpu">
				<CornerAccent
					position="top-left"
					className="z-10"
				/>
				<CornerAccent position="bottom-right" />

				<div className="grid grid-cols-1 lg:grid-cols-3">
					<div className="col-span-1 relative min-h-64 lg:min-h-full">
						<Image
							src={project.image}
							alt={project.title}
							fill
							priority
							sizes="(max-width: 1024px) 100vw, 50vw"
							className="object-cover transition-transform rounded-r-2xl"
						/>
					</div>

					<div className="col-span-2 p-6 sm:p-8 lg:p-10">
						<h3 className="text-2xl sm:text-3xl font-semibold leading-tight dark:text-white">
							{project.title}
						</h3>

						<div className="mt-5">
							<p className="text-xs uppercase font-semibold tracking-[0.18em] text-secondary-500">
								Overview
							</p>
							<p className="mt-2 text-base leading-relaxed dark:text-primary-300">
								{project.fullDescription}
							</p>
						</div>

						<div className="mt-6">
							<p className="text-xs uppercase font-semibold tracking-[0.18em] text-secondary-500">
								Language
							</p>
							<div className="mt-3 flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="rounded-full border border-secondary-500/40 bg-secondary-500/10 px-3 py-1 text-xs font-medium dark:text-secondary-300">
										{tag}
									</span>
								))}
							</div>
						</div>

						<div className="mt-8 flex flex-wrap gap-3">
							{project.link && project.link !== "#" && (
								<Link
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 rounded-lg border border-secondary-500/40 bg-secondary-500/10 px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary-500/20 dark:text-secondary-300">
									Live Demo <ExternalLink size={16} />
								</Link>
							)}
							{project.github && (
								<Link
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 rounded-lg border border-primary-700 bg-primary-900 px-4 py-2 text-sm font-medium text-primary-200 transition-colors hover:border-primary-600 hover:bg-primary-800">
									Source Code <Github size={16} />
								</Link>
							)}
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
