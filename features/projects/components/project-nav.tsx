"use client";

import { MoveLeft, MoveRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { projects } from "../constants/projects";

export default function ProjectNav({ currentSlug }: { currentSlug: string }) {
	const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
	const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
	const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
	const prefersReducedMotion = useReducedMotion();

	if (!prev && !next) return null;

	const container = (
		<div className="flex items-stretch gap-4 mt-12 pt-8 border-t border-primary-800">
			{prev ? (
				<Link
					href={`/projects/${prev.slug}`}
					className="group flex-1 flex items-center gap-3 p-4 rounded-2xl border border-primary-800 hover:border-secondary-400/40 dark:bg-primary-950/50 transition-all duration-300">
					<MoveLeft
						size={18}
						className="text-secondary-400 shrink-0 transition-transform duration-300 group-hover:-translate-x-1"
					/>
					<div className="min-w-0">
						<p className="text-xs text-gray-500 dark:text-primary-500 mb-0.5">
							Previous
						</p>
						<p className="text-sm font-medium dark:text-white truncate">
							{prev.title}
						</p>
					</div>
				</Link>
			) : (
				<div className="flex-1" />
			)}

			{next ? (
				<Link
					href={`/projects/${next.slug}`}
					className="group flex-1 flex items-center justify-end gap-3 p-4 rounded-2xl border border-primary-800 hover:border-secondary-400/40 dark:bg-primary-950/50 transition-all duration-300 text-right">
					<div className="min-w-0">
						<p className="text-xs text-gray-500 dark:text-primary-500 mb-0.5">
							Next
						</p>
						<p className="text-sm font-medium dark:text-white truncate">
							{next.title}
						</p>
					</div>
					<MoveRight
						size={18}
						className="text-secondary-400 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
					/>
				</Link>
			) : (
				<div className="flex-1" />
			)}
		</div>
	);

	if (prefersReducedMotion) return container;

	return (
		<motion.div
			initial={{ y: 20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.45, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
			{container}
		</motion.div>
	);
}
