"use client";

import { achievements } from "../constants/achievements";
import { StatsCard } from "./stats-card";

export default function KeyAchievements() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
			{achievements.map((achievement) => (
				<StatsCard
					key={achievement.title}
					achievement={achievement}
				/>
			))}
		</div>
	);
}
