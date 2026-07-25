"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function RotatingAvatar() {
	return (
		<div className="relative flex items-center justify-center w-full h-64">
			<svg
				viewBox="0 0 200 200"
				className="w-96 h-96 overflow-visible">
				{/* Outer Ring: Dash 15 + Gap 25 = 40 total */}
				<motion.circle
					cx="100"
					cy="100"
					r="95"
					fill="none"
					stroke="#22d3ee"
					strokeWidth="3"
					strokeDasharray="15 25"
					strokeLinecap="round"
					initial={{ strokeDashoffset: 0 }}
					animate={{ strokeDashoffset: -40 }}
					transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
				/>

				{/* Middle Ring: Dash 10 + Gap 30 = 40 total */}
				<motion.circle
					cx="100"
					cy="100"
					r="80"
					fill="none"
					stroke="#22d3ee"
					strokeWidth="5"
					strokeDasharray="10 30"
					strokeLinecap="round"
					initial={{ strokeDashoffset: 0 }}
					animate={{ strokeDashoffset: 40 }}
					transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
				/>

				{/* Inner Ring: Dash 8 + Gap 32 = 40 total */}
				<motion.circle
					cx="100"
					cy="100"
					r="65"
					fill="none"
					stroke="#22d3ee"
					strokeWidth="6"
					strokeDasharray="8 32"
					strokeLinecap="round"
					initial={{ strokeDashoffset: 0 }}
					animate={{ strokeDashoffset: -40 }}
					transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
				/>
			</svg>

			{/* Image Container */}
			<div className="absolute h-50 w-50 md:h-55 md:w-55 overflow-hidden rounded-full border-2 border-cyan-400/30">
				<Image
					src="/me/profile.jpg"
					alt="Ye Min Aung - Developer"
					loading="eager"
					fetchPriority="high"
					width={220}
					height={220}
					className="object-cover object-center w-full h-full"
				/>
			</div>
		</div>
	);
}
