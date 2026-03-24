import { cn } from "@/lib/utils";
import { Code2, Package, Server, Smartphone } from "lucide-react";
import { skillCategories, skills } from "../constants/skills";
import SkillCard from "./skill-card";

export default function SkillsListByCategory() {
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
						{group.skills.map((skill) => (
							<SkillCard
								key={skill.name}
								skill={skill}
								type="list"
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
