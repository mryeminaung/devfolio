"use client";

import CornerAccent from "@/components/corner-accent";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Underline from "@/components/underline";
import { ExternalLink, Github, MoveLeft, X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Project } from "../projects.type";
import ProjectNav from "./project-nav";

export default function ProjectDetailPage({ project }: { project: Project }) {
	const allImages = [project.image, ...project.screenshots];
	const [activeImage, setActiveImage] = useState(project.image);
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

	const openLightbox = useCallback((index: number) => {
		setLightboxIndex(index);
	}, []);

	const closeLightbox = useCallback(() => {
		setLightboxIndex(null);
	}, []);

	// Close lightbox on Escape
	useEffect(() => {
		if (lightboxIndex === null) return;

		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeLightbox();
		};

		document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [lightboxIndex, closeLightbox]);

	return (
		<div className="max-w-6xl mx-auto">
			{/* Back link */}
			<Link
				href="/projects"
				className="inline-flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-400 hover:text-secondary-400 dark:hover:text-secondary-300 mb-6 transition-colors">
				<MoveLeft size={16} />
				Back to Projects
			</Link>

			{/* Full-width hero with overlaid title */}
			<motion.div
				initial={{ y: 24, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
				className="relative w-full h-72 md:h-[35rem] overflow-hidden rounded-2xl mb-8 border border-secondary-400/20">
				<Image
					src={project.image}
					alt={project.title}
					fill
					priority
					loading="eager"
					sizes="(max-width: 768px) 100vw, 80vw"
					className="object-fill transition-all duration-500"
				/>
				{/* Gradient overlay for title */}
				<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
				<div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
					<span className="text-xs font-medium text-secondary-300 uppercase tracking-wider mb-2 block">
						{project.category}
					</span>
					<h1 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
						{project.title}
					</h1>
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag) => (
							<Badge
								key={tag}
								variant="outline"
								className="border-secondary-400/40 text-secondary-300 text-xs bg-black/30 backdrop-blur-sm">
								{tag}
							</Badge>
						))}
					</div>
				</div>
			</motion.div>

			{/* Meta bar */}
			{(project.role || project.timeline || project.category) && (
				<motion.div
					initial={{ y: 16, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.4, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
					className="flex flex-wrap items-center gap-4 md:gap-8 mb-10">
					{project.role && (
						<div>
							<p className="text-xs text-gray-500 dark:text-primary-500 uppercase tracking-wider mb-0.5">
								Role
							</p>
							<p className="text-sm font-medium dark:text-white">
								{project.role}
							</p>
						</div>
					)}
					{project.timeline && (
						<div>
							<p className="text-xs text-gray-500 dark:text-primary-500 uppercase tracking-wider mb-0.5">
								Timeline
							</p>
							<p className="text-sm font-medium dark:text-white">
								{project.timeline}
							</p>
						</div>
					)}
					<div>
						<p className="text-xs text-gray-500 dark:text-primary-500 uppercase tracking-wider mb-0.5">
							Category
						</p>
						<p className="text-sm font-medium dark:text-white">
							{project.category}
						</p>
					</div>
				</motion.div>
			)}

			<Underline className="w-full my-8 bg-linear-to-l" />

			{/* Single-column narrative content */}
			<div className="space-y-8">
				{/* The Problem */}
				{project.problem && (
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 0.45,
							delay: 0.16,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="relative overflow-hidden rounded-xl border border-secondary-400/20 bg-white dark:bg-primary-950/50 p-6">
						<CornerAccent position="top-left" />
						<CornerAccent position="bottom-right" />
						<h2 className="text-lg font-semibold dark:text-white mb-3">
							The Problem
						</h2>
						<p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-primary-300 italic">
							&ldquo;{project.problem}&rdquo;
						</p>
					</motion.div>
				)}

				{/* The Solution */}
				{project.solution && (
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 0.45,
							delay: 0.22,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="relative overflow-hidden rounded-xl border border-secondary-400/20 bg-white dark:bg-primary-950/50 p-6">
						<CornerAccent position="top-right" />
						<CornerAccent position="bottom-left" />
						<h2 className="text-lg font-semibold dark:text-white mb-3">
							The Solution
						</h2>
						<p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-primary-300">
							{project.solution}
						</p>
					</motion.div>
				)}

				{/* Overview */}
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.45, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
					className="relative overflow-hidden rounded-xl border border-secondary-400/20 bg-white dark:bg-primary-950/50 p-6">
					<CornerAccent position="top-left" />
					<CornerAccent position="bottom-right" />
					<h2 className="text-lg font-semibold dark:text-white mb-3">
						Overview
					</h2>
					<p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-primary-300">
						{project.fullDescription}
					</p>
				</motion.div>

				{/* Key Features */}
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.45, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
					className="relative overflow-hidden rounded-xl border border-secondary-400/20 bg-white dark:bg-primary-950/50 p-6">
					<CornerAccent position="top-right" />
					<CornerAccent position="bottom-left" />
					<h2 className="text-lg font-semibold dark:text-white mb-4">
						Key Features
					</h2>
					<ul className="space-y-3">
						{project.features.map((feature) => (
							<li
								key={feature}
								className="flex items-start gap-3 text-sm md:text-base text-gray-600 dark:text-primary-300">
								<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-400" />
								{feature}
							</li>
						))}
					</ul>
				</motion.div>

				{/* The Result */}
				{project.result && (
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 0.45,
							delay: 0.4,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="relative overflow-hidden rounded-xl border border-secondary-400/20 bg-white dark:bg-primary-950/50 p-6">
						<CornerAccent position="top-left" />
						<CornerAccent position="bottom-right" />
						<h2 className="text-lg font-semibold dark:text-white mb-3">
							The Result
						</h2>
						<p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-primary-300">
							{project.result}
						</p>
					</motion.div>
				)}

				{/* Screenshot grid */}
				{allImages.length > 1 && (
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 0.45,
							delay: 0.5,
							ease: [0.22, 1, 0.36, 1],
						}}>
						<h2 className="text-lg font-semibold dark:text-white">
							User Interface Screenshots
						</h2>

						<Underline className="w-full my-4" />

						<div className="grid grid-cols-2 gap-3">
							{allImages.map((shot, i) => (
								<button
									key={i}
									onClick={() => openLightbox(i)}
									className={`relative aspect-video overflow-hidden rounded-xl border transition-all duration-200 ${"border-primary-800 hover:border-secondary-400/50"}`}>
									<Image
										src={shot}
										alt={`Screenshot ${i + 1}`}
										fill
										loading="eager"
										sizes="(max-width: 640px) 50vw, 40vw"
										className="object-fill"
									/>
								</button>
							))}
						</div>
					</motion.div>
				)}

				{/* Links */}
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.45, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
					className="flex flex-wrap gap-3">
					{project.link && project.link !== "#" && (
						<Link
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-lg border border-secondary-400/30 bg-secondary-400/5 px-5 py-2.5 text-sm font-medium text-secondary-500 dark:text-secondary-400 hover:border-secondary-400/60 hover:bg-secondary-400/10 transition-all duration-200">
							<ExternalLink size={15} />
							Live Demo
						</Link>
					)}
					{project.github && (
						<Link
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-lg border border-primary-700 bg-primary-900/50 px-5 py-2.5 text-sm font-medium text-primary-200 transition-colors hover:border-primary-600 hover:bg-primary-800/50">
							<Github size={15} />
							Source Code
						</Link>
					)}
				</motion.div>
			</div>

			<Underline className="w-full my-8" />

			{/* Prev / Next navigation */}
			<ProjectNav currentSlug={project.slug} />

			{/* Lightbox modal */}
			<Dialog
				open={lightboxIndex !== null}
				onOpenChange={(open) => !open && closeLightbox()}>
				<DialogContent
					showCloseButton={false}
					className="max-w-[calc(100vw-2rem)] sm:max-w-5xl w-full max-h-[90dvh] p-0 bg-transparent border-none shadow-none overflow-hidden">
					{/* Close button */}
					<button
						onClick={closeLightbox}
						className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors backdrop-blur-sm">
						<X size={20} />
					</button>

					{/* Main image */}
					{lightboxIndex !== null && (
						<div className="flex items-center justify-center max-h-[85dvh]">
							<Image
								src={allImages[lightboxIndex]}
								alt={`${project.title} screenshot ${lightboxIndex + 1}`}
								width={1200}
								height={800}
								className="max-h-[85dvh] w-auto rounded-xl object-contain"
							/>
						</div>
					)}
				</DialogContent>
			</Dialog>
		</div>
	);
}
