type Skill = {
	name: string;
	logo: string;
};

export default function SkillCard({ skill }: { skill: Skill }) {
	return (
		<div className="flex items-center gap-3 px-5 md:px-8 py-3 md:py-4 bg-linear-to-br dark:from-primary-900 dark:to-primary-950 border-2 border-secondary-400/30 rounded-xl whitespace-nowrap font-semibold text-base hover:border-secondary-400/50 hover:shadow-md hover:shadow-secondary-500/20 transition-all">
			<img
				src={skill.logo}
				alt={skill.name}
				className="w-6 md:w-8 h-6 md:h-8"
			/>
			<span className="dark:text-white">{skill.name}</span>
		</div>
	);
}
