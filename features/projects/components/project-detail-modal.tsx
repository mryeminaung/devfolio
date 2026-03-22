import CornerAccent from "@/components/corner-accent";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Project } from "../projects.type";

type ProjectDetailModalProps = {
	project: Project;
	isOpen: boolean;
	onClose: () => void;
};

export default function ProjectDetailModal({
	project,
	isOpen,
	onClose,
}: ProjectDetailModalProps) {
	const [currentImage, setCurrentImage] = useState(project.image);
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setCurrentImage(project.image);
	}, [project.id, project.image]);

	useEffect(() => {
		if (!isOpen) return;

		const frameId = requestAnimationFrame(() => {
			scrollContainerRef.current?.scrollTo({ top: 0, behavior: "auto" });
		});

		return () => cancelAnimationFrame(frameId);
	}, [isOpen, project.id]);

	return (
		<Dialog
			open={isOpen}
			onOpenChange={(open) => {
				if (!open) onClose();
			}}>
			<DialogContent
				initialFocus={scrollContainerRef}
				className="w-[calc(100vw-1.25rem)] max-w-[calc(100vw-1.25rem)] sm:max-w-7xl max-h-[92dvh] px-4 sm:px-5 overflow-hidden dark:bg-primary-950  pb-0 flex flex-col shadow-lg shadow-secondary-400/20">
				<CornerAccent position="top-left" />
				<CornerAccent position="bottom-right" />
				<DialogHeader>
					<DialogTitle className="text-2xl font-bold">
						{project.title}
					</DialogTitle>
					<DialogDescription className="dark:text-primary-400">
						{project.description}
					</DialogDescription>
				</DialogHeader>

				<div
					ref={scrollContainerRef}
					tabIndex={-1}
					className="min-h-0 flex-1 overflow-y-auto pb-5 overscroll-contain outline-none focus:outline-none focus-visible:outline-none">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="col-span-1">
							<div className="relative mb-5 h-64 w-full overflow-hidden rounded-2xl border border-secondary-400">
								<Image
									src={currentImage}
									alt={project.title}
									fill
									sizes="(max-width: 640px) 100vw, 80vw"
									className="object-cover"
								/>
							</div>

							{project.screenshots.length > 0 && (
								<div className="mb-5">
									<h4 className="mb-3 text-base font-semibold">Screenshots</h4>
									<div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
										{project.screenshots.slice(0, 4).map((shot, index) => (
											<div
												key={`${project.id}-${index}`}
												className={cn(
													"relative h-28 overflow-hidden rounded-lg border border-primary-800 sm:h-32",
													currentImage === shot
														? "border-secondary-500 shadow-lg shadow-secondary-500/30"
														: "hover:border-primary-600 cursor-pointer",
												)}>
												<Image
													src={shot}
													onClick={() => setCurrentImage(shot)}
													alt={`${project.title} screenshot ${index + 1}`}
													fill
													loading="eager"
													sizes="(max-width: 640px) 50vw, 25vw"
													className="object-cover"
												/>
											</div>
										))}
									</div>
								</div>
							)}
						</div>

						<div className="space-y-5 col-span-1">
							{/* overview */}
							<div className="relative overflow-hidden rounded-xl border border-secondary-400/30 dark:border-primary-800 dark:bg-primary-900/60 p-4">
								<h3 className="text-xl mb-3 font-semibold">Overview</h3>
								<p className="leading-relaxed dark:text-primary-300">
									{project.fullDescription}
								</p>
								<CornerAccent position="top-left" />
								<CornerAccent position="bottom-right" />
							</div>

							{/* technologies */}
							<div className="relative overflow-hidden rounded-xl border border-secondary-400/30  dark:border-primary-800 dark:bg-primary-900/60 p-4">
								<h4 className="mb-3 text-xl font-semibold">Technologies</h4>
								<div className="flex flex-wrap gap-2 mt-3">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="rounded-full border border-secondary-500/30 bg-secondary-500/10 px-3 py-1 text-xs font-medium dark:text-secondary-300">
											{tag}
										</span>
									))}
								</div>
								<CornerAccent position="top-left" />
								<CornerAccent position="bottom-right" />
							</div>

							{/* key features */}
							<div className="relative overflow-hidden mb-5 rounded-xl border border-secondary-400/30 dark:border-primary-800 dark:bg-primary-900/60 p-4">
								<h4 className="mb-3 text-xl font-semibold">Key Features</h4>
								<ul className="space-y-2 text-sm dark:text-primary-300">
									{project.features.map((feature) => (
										<li
											key={feature}
											className="flex items-start gap-2">
											<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-400" />
											<span>{feature}</span>
										</li>
									))}
								</ul>
								<CornerAccent position="top-left" />
								<CornerAccent position="bottom-right" />
							</div>

							{/* live demo and source code */}
							<div className="flex flex-wrap items-center gap-3">
								{project.link && (
									<Link
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 rounded-lg border border-secondary-500/40 bg-secondary-500/10 px-4 py-2 text-sm font-medium dark:text-secondary-300 transition-colors hover:bg-secondary-500/20">
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
			</DialogContent>
		</Dialog>
	);
}
