"use client";

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function Typewriter({ words: WORDS }: { words: string[] }) {
	const [index, setIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const count = useMotionValue(0);
	const rounded = useTransform(count, (latest) => Math.round(latest));
	const displayText = useTransform(rounded, (latest) =>
		WORDS[index].slice(0, latest),
	);

	useEffect(() => {
		let controls;
		const currentWord = WORDS[index];

		if (!isDeleting) {
			// Typing Phase
			controls = animate(count, currentWord.length, {
				type: "tween",
				duration: 1,
				ease: "easeOut",
				onComplete: () => {
					// Pause at the end of the word before deleting
					setTimeout(() => setIsDeleting(true), 1500);
				},
			});
		} else {
			// Deleting Phase (Faster than typing)
			controls = animate(count, 0, {
				type: "tween",
				duration: 0.5,
				ease: "easeIn",
				onComplete: () => {
					setIsDeleting(false);
					setIndex((prev) => (prev + 1) % WORDS.length);
				},
			});
		}

		return controls.stop;
	}, [index, isDeleting, count]);

	return (
		<div className="flex items-center">
			<div className="relative">
				<motion.span className="line-clamp-1">{displayText}</motion.span>

				{/* The Animated Cursor */}
				<motion.div
					animate={{ opacity: [0, 1, 0] }}
					transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
					className="absolute -right-3 top-0.5 h-[1.1em] w-0.75 bg-secondary-400 shadow-[0_0_10px_#22d3ee]"
				/>
			</div>
		</div>
	);
}
