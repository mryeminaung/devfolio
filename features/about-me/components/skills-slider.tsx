"use client";

import { skills } from "../constants/skills";
import SkillCard from "./skill-card";

type Skill = {
	name: string;
	logo: string;
};

const MarqueeRow = ({
	skills: rowSkills,
	direction,
}: {
	skills: Skill[];
	direction: "left" | "right";
}) => (
	<div className="flex mb-3 overflow-hidden rounded-md shadow-inner">
		<div
			className="flex gap-3 shrink-0"
			// animate={{ x: direction === "left" ? [0, -2000] : [-1500, 0] }}
			// transition={{
			// 	x: {
			// 		repeat: Infinity,
			// 		repeatType: "loop",
			// 		duration: 20,
			// 		ease: "linear",
			// 	},
			// }}>
		>
			{rowSkills.map((skill) => (
				<SkillCard
					key={skill.name}
					skill={skill}
				/>
			))}
			{rowSkills.map((skill) => (
				<SkillCard
					key={`${skill.name}-duplicate`}
					skill={skill}
				/>
			))}
		</div>
	</div>
);

export default function SkillsSlider() {
	return (
		<div className="text-white">
			<h3 className="text-3xl md:text-4xl text-center my-5">
				Technical Skills
			</h3>
			<MarqueeRow
				skills={skills.slice(0, 9)}
				direction="left"
			/>
			<MarqueeRow
				skills={[...skills.slice(9, skills.length - 1)].reverse()}
				direction="right"
			/>
		</div>
	);
}
