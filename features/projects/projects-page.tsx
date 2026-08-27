"use client";

import CornerAccent from "@/components/corner-accent";
import Underline from "@/components/underline";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProjectCard } from "./components/project-card";
import { projects } from "./constants/projects";

const CATEGORIES = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
	const [active, setActive] = useState("All");

	const filtered =
		active === "All" ? projects : projects.filter((p) => p.category === active);

	const featured = filtered[0];
	const rest = filtered.slice(1);

	return (
		<section>
			{/* Heading */}
			<div className="flex flex-col mb-8 gap-y-3">
				<h2 className="text-2xl md:text-3xl font-semibold text-center dark:text-white">
					Projects
				</h2>
				<Underline />
			</div>

			{/* Filter tabs */}
			<div className="flex flex-wrap gap-2 mb-10">
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

			{/* Featured hero card */}
			{featured && (
				<motion.div
					initial={{ y: 24, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
					viewport={{ once: true, amount: 0.15 }}
					className="mb-10">
					<Link
						href={`/projects/${featured.slug}`}
						className="group relative overflow-hidden rounded-3xl border border-secondary-400/30 dark:bg-primary-950/80 hover:border-secondary-400/60 hover:shadow-lg hover:shadow-secondary-400/15 transition-all duration-300 flex flex-col md:flex-row">
						<CornerAccent position="top-left" className="z-10" />
						<CornerAccent position="bottom-right" />

						{/* Image */}
						<div className="relative h-auto w-full md:w-1/2 overflow-hidden">
							<Image
								src={featured.image}
								alt={featured.title}
								fill
								loading="eager"
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-fill transition-transform duration-500 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent md:bg-linear-to-r" />
							<span className="absolute bottom-3 left-4 text-xs font-medium text-white/80 bg-secondary-500/30 border border-secondary-400/30 rounded-full px-3 py-1 backdrop-blur-sm">
								Featured
							</span>
						</div>

						{/* Content */}
						<div className="p-6 md:p-8 flex flex-col flex-1 justify-center">
							<span className="text-xs font-medium text-secondary-400 uppercase tracking-wider mb-2">
								{featured.category}
							</span>
							<h3 className="text-xl md:text-2xl font-bold dark:text-white mb-3">
								{featured.title}
							</h3>
							<p className="text-sm text-gray-500 dark:text-primary-400 line-clamp-2 mb-4">
								{featured.description}
							</p>

							{/* Narrative snippet */}
							{featured.problem && (
								<p className="text-sm italic text-gray-400 dark:text-primary-500 mb-4 line-clamp-2 border-l-2 border-secondary-400/40 pl-3">
									&ldquo;{featured.problem}&rdquo;
								</p>
							)}

							<div className="flex flex-wrap gap-2 mb-5">
								{featured.tags.slice(0, 4).map((tag) => (
									<span
										key={tag}
										className="rounded-full border border-secondary-500/30 bg-secondary-500/5 px-3 py-1 text-xs dark:text-secondary-400">
										{tag}
									</span>
								))}
							</div>

							<span className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary-400 group-hover:text-secondary-300 transition-colors">
								Read case study
								<ArrowRight
									size={14}
									className="transition-transform duration-300 group-hover:translate-x-1"
								/>
							</span>
						</div>
					</Link>
				</motion.div>
			)}

			{/* Case study grid */}
			{rest.length > 0 && (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{rest.map((project, index) => (
						<ProjectCard
							key={project.id}
							project={project}
							index={index}
						/>
					))}
				</div>
			)}

			{filtered.length === 0 && (
				<p className="text-center text-gray-400 py-16">
					No projects in this category yet.
				</p>
			)}
		</section>
	);
}
