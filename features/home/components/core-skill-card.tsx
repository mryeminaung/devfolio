import CornerAccent from "@/components/corner-accent";
import { type LucideIcon } from "lucide-react";

type CoreSkillCardProps = {
	skill: {
		title: string;
		description: string;
		icon: LucideIcon;
	};
};

export default function CoreSkillCard({ skill }: CoreSkillCardProps) {
	return (
		<div className="relative overflow-hidden h-full bg-white dark:border-gray-800 rounded-2xl p-8 group-hover:border-transparent border border-secondary-400/30 dark:bg-primary-950/50 hover:border-secondary-400/50 hover:shadow-md hover:shadow-secondary-500/20 backdrop-blur-sm hover:-translate-y-1.25 transition-all">
			<CornerAccent position="top-right" />
			<CornerAccent position="bottom-left" />
			<div className="mb-6 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl border border-secondary-500/30 bg-secondary-500/5 text-secondary-400">
				<skill.icon
					strokeWidth={2}
					className={`w-5 h-5 md:w-7 md:h-7`}
				/>
			</div>

			<h3 className="text-lg md:text-xl font-semibold mb-3">{skill.title}</h3>

			<p className="text-gray-600 text-[14px] md:text-base dark:text-gray-400 leading-relaxed">
				{skill.description}
			</p>
		</div>
	);
}
