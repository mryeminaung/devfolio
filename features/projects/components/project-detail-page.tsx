"use client";

import CornerAccent from "@/components/corner-accent";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, MoveLeft } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Project } from "../projects.type";

export default function ProjectDetailPage({ project }: { project: Project }) {
	const [activeImage, setActiveImage] = useState(project.image);

	return (
		<div className="max-w-5xl mx-auto">
			{/* Back link */}
			<Link
				href="/projects"
				className="inline-flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-400 hover:text-secondary-400 dark:hover:text-secondary-300 mb-8 transition-colors">
				<MoveLeft size={16} />
				Back to Projects
			</Link>

			{/* Hero image */}
			<motion.div
				initial={{ y: 24, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
				className="relative w-full h-72 md:h-96 overflow-hidden rounded-2xl mb-10 border border-secondary-400/20">
				<Image
					src={activeImage}
					alt={project.title}
					fill
					priority
					sizes="(max-width: 768px) 100vw, 80vw"
					className="object-cover transition-all duration-500"
				/>
			</motion.div>

			<div className="space-y-8">
				{/* Title & tags — full width */}
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>
					<h1 className="text-2xl md:text-4xl font-bold dark:text-white mb-4 leading-tight">
						{project.title}
					</h1>
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag) => (
							<Badge
								key={tag}
								variant="outline"
								className="border-secondary-400/40 text-secondary-500 dark:text-secondary-400 text-xs">
								{tag}
							</Badge>
						))}
					</div>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Left column — main info */}
					<div className="lg:col-span-2 space-y-8">
						{/* Overview */}
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.45, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
							className="relative overflow-hidden rounded-xl border border-secondary-400/20 dark:bg-primary-950/50 p-6">
							<CornerAccent position="top-left" />
							<CornerAccent position="bottom-right" />
							<h2 className="text-lg font-semibold dark:text-white mb-3">Overview</h2>
							<p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-primary-300">
								{project.fullDescription}
							</p>
						</motion.div>

						{/* Key Features */}
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.45, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
							className="relative overflow-hidden rounded-xl border border-secondary-400/20 dark:bg-primary-950/50 p-6">
							<CornerAccent position="top-right" />
							<CornerAccent position="bottom-left" />
							<h2 className="text-lg font-semibold dark:text-white mb-4">Key Features</h2>
							<ul className="space-y-3">
								{project.features.map((feature) => (
									<li key={feature} className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-primary-300">
										<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-400" />
										{feature}
									</li>
								))}
							</ul>
						</motion.div>

						{/* Screenshots */}
						{project.screenshots.length > 0 && (
							<motion.div
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.45, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}>
								<h2 className="text-lg font-semibold dark:text-white mb-4">Screenshots</h2>
								<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
									{[project.image, ...project.screenshots].slice(0, 4).map((shot, i) => (
										<button
											key={i}
											onClick={() => setActiveImage(shot)}
											className={`relative h-24 sm:h-28 overflow-hidden rounded-lg border transition-all duration-200 ${
												activeImage === shot
													? "border-secondary-400 shadow-md shadow-secondary-400/30"
													: "border-primary-800 hover:border-secondary-400/50"
											}`}>
											<Image
												src={shot}
												alt={`Screenshot ${i + 1}`}
												fill
												sizes="25vw"
												className="object-cover"
											/>
										</button>
									))}
								</div>
							</motion.div>
						)}
					</div>

					{/* Right column — sidebar */}
					<div className="space-y-5">
						{/* Category */}
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.45, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
							className="relative overflow-hidden rounded-xl border border-secondary-400/20 dark:bg-primary-950/50 p-5">
							<CornerAccent position="top-left" />
							<CornerAccent position="bottom-right" />
							<p className="text-xs text-gray-500 dark:text-primary-500 uppercase tracking-wider mb-1">Category</p>
							<p className="text-sm font-semibold dark:text-white">{project.category}</p>
						</motion.div>

						{/* Tech stack */}
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.45, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
							className="relative overflow-hidden rounded-xl border border-secondary-400/20 dark:bg-primary-950/50 p-5">
							<CornerAccent position="top-right" />
							<CornerAccent position="bottom-left" />
							<p className="text-xs text-gray-500 dark:text-primary-500 uppercase tracking-wider mb-3">Tech Stack</p>
							<div className="flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="px-2.5 py-1 text-xs rounded-full border border-secondary-500/30 bg-secondary-500/5 dark:text-secondary-400">
										{tag}
									</span>
								))}
							</div>
						</motion.div>

						{/* Links */}
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.45, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
							className="relative overflow-hidden rounded-xl border border-secondary-400/20 dark:bg-primary-950/50 p-5">
							<CornerAccent position="top-left" />
							<CornerAccent position="bottom-right" />
							<h2 className="text-base font-semibold dark:text-white mb-4">Links</h2>

							{project.link && project.link !== "#" && (
								<Link
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg border border-secondary-400/30 bg-secondary-400/5 text-secondary-500 dark:text-secondary-400 hover:border-secondary-400/60 hover:bg-secondary-400/10 transition-all duration-200 text-sm font-medium">
									<ExternalLink size={15} />
									Live Demo
								</Link>
							)}

							{project.github && (
								<Link
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg border border-secondary-400/30 bg-secondary-400/5 text-secondary-500 dark:text-secondary-400 hover:border-secondary-400/60 hover:bg-secondary-400/10 transition-all duration-200 text-sm font-medium">
									<Github size={15} />
									Source Code
								</Link>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}
