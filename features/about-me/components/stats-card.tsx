"use client";

import { Achievement } from "../about.types";

type StatsCardProps = {
	achievement: Achievement;
};

export const StatsCard = ({ achievement }: StatsCardProps) => {
	const Icon = achievement.icon;

	return (
		<div className="relative flex w-full flex-col items-center justify-center rounded-3xl border border-cyan-400/30 bg-slate-950/50 p-8 text-center hover:border-cyan-400/50 hover:shadow-md hover:shadow-cyan-500/20 backdrop-blur-sm">
			<div className="mb-6 flex h-15 w-15 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400">
				<Icon
					size={28}
					strokeWidth={2}
				/>
			</div>

			<h3 className="mb-2 text-2xl font-extrabold tracking-tight text-white">
				{achievement.title}{" "}
			</h3>

			<p className="text-base font-medium text-slate-400">
				{achievement.description}
			</p>
		</div>
	);
};
