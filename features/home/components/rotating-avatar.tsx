"use client";

import { motion } from "motion/react";

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
					animate={{ strokeDashoffset: -40 }} // Matches 15 + 25
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
					animate={{ strokeDashoffset: 40 }} // Matches 10 + 30
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
					animate={{ strokeDashoffset: -40 }} // Matches 8 + 32
					transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
				/>
			</svg>

			{/* Image Container */}
			<div className="absolute h-60 w-60 overflow-hidden rounded-full border-2 border-cyan-400/30">
				<img
					src="/profile.png"
					alt="User"
					className="object-cover object-center w-full h-full"
				/>
			</div>
		</div>
	);
}
