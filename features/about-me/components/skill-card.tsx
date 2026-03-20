type Skill = {
	name: string;
	logo: string;
};

export default function SkillCard({ skill }: { skill: Skill }) {
	return (
		<div className="flex items-center gap-3 px-5 md:px-8 py-3 md:py-4 bg-linear-to-br from-gray-900 to-black border-2 border-cyan-400/30 rounded-xl whitespace-nowrap font-semibold text-white text-base hover:border-cyan-400/50 hover:shadow-md hover:shadow-cyan-500/20 transition-all">
			<img
				src={skill.logo}
				alt={skill.name}
				className="w-6 md:w-8 h-6 md:h-8"
			/>
			<span>{skill.name}</span>
		</div>
	);
}
