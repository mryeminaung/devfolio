"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function PageTransition({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={pathname}
				initial={{ y: -15, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					type: "spring",
					stiffness: 140,
					damping: 20,
					mass: 0.9,
					duration: 0.5,
				}}
				viewport={{ once: true, amount: 0.9 }}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
