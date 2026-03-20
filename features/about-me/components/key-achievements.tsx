"use client";

import { achievements } from "../constants/achievements";
import { StatsCard } from "./stats-card";

export default function KeyAchievements() {
	return (
		<div className="">
			<h3 className="text-3xl md:text-4xl text-white text-center my-5">
				Key Achievements
			</h3>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
				{achievements.map((achievement) => (
					<StatsCard
						key={achievement.title}
						achievement={achievement}
					/>
				))}
			</div>
		</div>
	);
}
