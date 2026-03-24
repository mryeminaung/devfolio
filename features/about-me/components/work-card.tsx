"use client";

import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";

export default function WorkCard() {
	const pathname = usePathname();
	const router = useRouter();

	if (pathname !== "/about-me") {
		return null;
	}

	return (
		<>
			{/* Sticky Available for Work Card*/}
			<motion.div
				initial={{ opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.5 }}
				className="fixed top-30 right-40 z-40 hidden lg:block">
				<div
					onClick={() => router.push("/contact-me")}
					className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200/50 dark:border-secondary-400/50 rounded-full px-4 py-3 shadow-sm hover:shadow-md hover:bg-white/80 dark:hover:bg-secondary-900 transition-all group hover:cursor-pointer">
					<div className="flex items-center gap-2.5">
						{/* Minimal Status Indicator */}
						<div className="relative shrink-0">
							<span className="flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
							</span>
						</div>

						<p className="text-xs font-medium text-gray-700 dark:text-gray-300">
							Available for Work
						</p>
					</div>
				</div>
			</motion.div>
		</>
	);
}
