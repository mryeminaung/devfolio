"use client";

import CornerAccent from "@/components/corner-accent";
import { Achievement } from "../about.types";

type StatsCardProps = {
	achievement: Achievement;
};

export const StatsCard = ({ achievement }: StatsCardProps) => {
	const Icon = achievement.icon;

	return (
		<div className="relative overflow-hidden flex w-full flex-col items-center justify-center rounded-3xl border border-secondary-400/30 dark:bg-primary-950/50 p-8 text-center hover:border-secondary-400/50 hover:shadow-md hover:shadow-secondary-500/20 backdrop-blur-sm hover:-translate-y-1.25 transition-all">
			<div className="mb-6 flex h-15 w-15 items-center justify-center rounded-full border border-secondary-500/30 bg-secondary-500/5 text-secondary-400">
				<Icon
					size={28}
					strokeWidth={2}
				/>
			</div>

			<CornerAccent position="top-left" />
			<CornerAccent position="bottom-right" />

			<h3 className="mb-2 text-xl md:text-2xl font-semibold tracking-tight dark:text-white">
				{achievement.title}
			</h3>

			<p className="text-[15px] md:text-base font-medium text-gray-500 dark:text-gray-400">
				{achievement.description}
			</p>
		</div>
	);
};
