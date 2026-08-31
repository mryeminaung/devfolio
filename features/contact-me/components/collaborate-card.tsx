import CornerAccent from "@/components/corner-accent";
import { Mail } from "lucide-react";
import { motion } from "motion/react";

export const CollaborateCard = ({ delay = 0 }: { delay?: number }) => {
	return (
		<motion.section
			initial={{ y: 30, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
			transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
			viewport={{ once: true, amount: 0.2 }}
			className="flex justify-center transform-gpu">
			<div className="relative w-full py-5 overflow-hidden rounded-3xl bg-white dark:bg-primary-950 p-px border border-cyan-400/30">
				<CornerAccent position="top-left" />
				<CornerAccent position="bottom-right" />

				<div className="relative flex flex-col items-center justify-center rounded-[23px] dark:bg-primary-950 px-8 py-16 text-center">
					<div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
						<Mail
							size={32}
							strokeWidth={1.5}
						/>
					</div>

					<h2 className="mb-4 text-xl font-bold tracking-tight dark:text-white">
						Let's Collaborate
					</h2>
					<p className="text-base text-primary-400">
						I'm always excited to work on new projects
					</p>
				</div>
			</div>
		</motion.section>
	);
};
