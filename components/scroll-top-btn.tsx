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
			className={`fixed right-6 bottom-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-secondary-400/30 bg-white/80 dark:bg-primary-900/80 text-secondary-400 shadow-lg shadow-secondary-400/10 backdrop-blur-md hover:-translate-y-0.5 hover:shadow-secondary-400/20 hover:scale-110 transition-all duration-300 ${
				isVisible ? "pointer-events-auto" : "pointer-events-none"
			}`}>
			<ArrowUp
				size={18}
				strokeWidth={2.25}
			/>
		</motion.button>
	);
}
