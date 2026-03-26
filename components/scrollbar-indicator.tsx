import { motion, useScroll } from "motion/react";

export default function ScrollbarIndicator() {
	const { scrollYProgress } = useScroll();

	return (
		<motion.div
			className="sticky top-0 left-0 right-0 z-100 bg-secondary-400 rounded-full"
			style={{ scaleX: scrollYProgress, height: 3 }}
		/>
	);
}
