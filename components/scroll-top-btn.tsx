"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 230;

export default function ScrollTopBtn() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > SCROLL_THRESHOLD);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const onScrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<motion.button
			type="button"
			onClick={onScrollTop}
			aria-label="Scroll to top"
			initial={false}
			animate={{
				opacity: isVisible ? 1 : 0,
				y: isVisible ? 0 : 16,
			}}
			transition={{ duration: 0.22, ease: "easeOut" }}
			className={`fixed right-6 bottom-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-950/90 text-cyan-300 shadow-lg shadow-cyan-900/30 backdrop-blur hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200 ${
				isVisible ? "pointer-events-auto" : "pointer-events-none"
			}`}>
			<ArrowUp
				size={18}
				strokeWidth={2.25}
			/>
		</motion.button>
	);
}
