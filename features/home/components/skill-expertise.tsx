"use client";

import Underline from "@/components/underline";
import { Code2, Server } from "lucide-react";
import CoreSkillCard from "./core-skill-card";

export default function SkillExpertise() {
	const skills = [
		{
			title: "Frontend Development",
			description:
				"Building responsive, interfaces with React, Next.js, and modern CSS frameworks",
			icon: Code2,
		},
		{
			title: "Backend Development",
			description:
				"Developing secure authentication, robust APIs and server-side solutions with Laravel",
			icon: Server,
		},
		{
			title: "FullStack Development",
			description:
				"Creating immersive 3D experiences using Three.js and cutting-edge web graphics",
			icon: Code2,
		},
	];
	return (
		<div>
			<div className="flex flex-col mb-10 gap-y-3">
				<h2 className="text-3xl md:text-4xl font-semibold text-center dark:text-white">
					Core Expertise
				</h2>
				<Underline />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
				{skills.map((skill, index) => (
					<CoreSkillCard
						key={skill.title}
						skill={skill}
						index={index}
					/>
				))}
			</div>
		</div>
	);
}
