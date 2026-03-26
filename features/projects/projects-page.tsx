"use client";

import Underline from "@/components/underline";
import { useEffect, useState } from "react";
import { ProjectCard } from "./components/project-card";
import ProjectDetailModal from "./components/project-detail-modal";
import { projects } from "./constants/projects";
import { Project } from "./projects.type";

export default function ProjectsPage() {
	const uniqueCategories = Array.from(
		new Set(projects.map((project) => project.category)),
	);
	const tags = uniqueCategories.map((tag, index) => ({
		id: index + 1,
		name: tag,
	}));

	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [isModelOpen, setIsModelOpen] = useState(false);

	const handleModelClose = () => {
		setIsModelOpen(false);
		setSelectedProject(null);
	};

	useEffect(() => {
		if (selectedProject === null) {
			setIsModelOpen(false);
		} else {
			setIsModelOpen(true);
		}
	}, [selectedProject]);

	return (
		<section className="">
			<div className="flex flex-col mb-10 gap-y-3">
				<h2 className="text-3xl md:text-5xl font-semibold text-center dark:text-white">
					Projects
				</h2>
				<Underline />
			</div>
			<div className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
				{projects.map((project, index) => (
					<ProjectCard
						key={project.id}
						project={project}
						index={index}
						onClick={() => setSelectedProject(project)}
					/>
				))}
			</div>
			{isModelOpen && selectedProject !== null && (
				<ProjectDetailModal
					project={selectedProject}
					isOpen={isModelOpen}
					onClose={handleModelClose}
				/>
			)}
		</section>
	);
}
