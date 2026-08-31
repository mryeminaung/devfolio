"use client";

import { cn } from "@/lib/utils";
import { Code2, List, Package, Server, Smartphone, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { skillCategories, skills } from "../constants/skills";
import SkillCard from "./skill-card";

export default function SkillsListByCategory() {
	const [viewMode, setViewMode] = useState<"labels" | "progress">("labels");
	const categorizedSkills = {
		frontend: skills.filter(
			(skill) => skill.categoryId === skillCategories.FRONTEND,
		),
		backend: skills.filter(
			(skill) => skill.categoryId === skillCategories.BACKEND,
		),
		mobile: skills.filter(
			(skill) => skill.categoryId === skillCategories.MOBILE,
		),
		tools: skills.filter((skill) => skill.categoryId === skillCategories.TOOLS),
	};

	const skillGroups = [
		{ title: "Frontend", icon: Code2, skills: categorizedSkills.frontend },
		{ title: "Backend", icon: Server, skills: categorizedSkills.backend },
		{ title: "Mobile", icon: Smartphone, skills: categorizedSkills.mobile },
		{ title: "Tools", icon: Package, skills: categorizedSkills.tools },
	];

	return (
		<div className="">
			{/* Toggle */}
			<div className="flex items-center justify-end gap-2 mb-8">
				<button
					onClick={() => setViewMode("labels")}
					className={cn(
						"inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200",
						viewMode === "labels"
							? "border-secondary-400 bg-secondary-400/10 text-secondary-500 dark:text-secondary-400"
							: "border-gray-300 dark:border-neutral-700 text-gray-500 dark:text-primary-400 hover:border-secondary-400/50",
					)}>
					<List size={14} />
					Labels
				</button>
				<button
					onClick={() => setViewMode("progress")}
					className={cn(
						"inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200",
						viewMode === "progress"
							? "border-secondary-400 bg-secondary-400/10 text-secondary-500 dark:text-secondary-400"
							: "border-gray-300 dark:border-neutral-700 text-gray-500 dark:text-primary-400 hover:border-secondary-400/50",
					)}>
					<SlidersHorizontal size={14} />
					Progress
				</button>
			</div>

			{skillGroups.map((group, idx) => (
				<div
					key={group.title}
					className="mb-10">
					{/* title */}
					<div
						className={cn(
							"flex items-center  gap-x-3 mb-5",
							idx % 2 === 0 ? "" : "flex-row-reverse",
						)}>
						<div className="flex h-13 w-13 items-center justify-center rounded-xl border border-secondary-500/30 bg-secondary-500/5 text-secondary-400">
							<group.icon
								size={28}
								strokeWidth={2}
							/>
						</div>
						<span className="text-xl md:text-2xl font-semibold">
							{group.title}
						</span>
						<div className="flex-1 ml-3 border"></div>
					</div>
					{/* skills list */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
						{group.skills.map((skill, skillIdx) => (
							<SkillCard
								key={skill.name}
								skill={skill}
								type={viewMode === "labels" ? "list" : "progress"}
								index={skillIdx}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
