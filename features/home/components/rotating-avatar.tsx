"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function RotatingAvatar() {
	const [loaded, setLoaded] = useState(false);

	return (
		<div className="relative flex items-center justify-center w-80 h-80 md:w-96 md:h-96">
			{/* Rotating rings */}
			<svg aria-hidden="true" viewBox="0 0 200 200" className="absolute inset-0 w-full h-full overflow-visible">
				<motion.circle
					cx="100" cy="100" r="95"
					fill="none" stroke="#22d3ee" strokeWidth="3"
					strokeDasharray="15 25" strokeLinecap="round"
					animate={{ strokeDashoffset: [-0, -40] }}
					transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
				/>
				<motion.circle
					cx="100" cy="100" r="80"
					fill="none" stroke="#22d3ee" strokeWidth="5"
					strokeDasharray="10 30" strokeLinecap="round"
					animate={{ strokeDashoffset: [0, 40] }}
					transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
				/>
				<motion.circle
					cx="100" cy="100" r="65"
					fill="none" stroke="#22d3ee" strokeWidth="6"
					strokeDasharray="8 32" strokeLinecap="round"
					animate={{ strokeDashoffset: [0, -40] }}
					transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
				/>
			</svg>

			{/* Avatar with skeleton */}
			<div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full border-2 border-cyan-400/30 overflow-hidden">
				{/* Skeleton shimmer */}
				{!loaded && (
					<div className="absolute inset-0 avatar-skeleton rounded-full z-10">
						{/* Pulse ring */}
						<motion.div
							className="absolute inset-0 rounded-full border-2 border-secondary-400/40"
							animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.2, 0.6] }}
							transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
						/>
					</div>
				)}

				<Image
					src="/me/profile.jpg"
					alt="Ye Min Aung"
					fill
					loading="eager"
					fetchPriority="high"
					className={`object-cover object-center transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
					onLoad={() => setLoaded(true)}
				/>
			</div>
		</div>
	);
}
