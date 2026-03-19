"use client";

import { Mail } from "lucide-react";
import { motion } from "motion/react";

export const CollaborateCard = () => {
	return (
		<section className="flex justify-center ">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="relative w-full py-5 overflow-hidden border rounded-3xl bg-slate-950 p-px">
				<div className="relative flex flex-col items-center justify-center rounded-[23px] bg-slate-950 px-8 py-16 text-center">
					<div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
						<Mail
							size={32}
							strokeWidth={1.5}
						/>
					</div>

					<h2 className="mb-4 text-3xl font-bold tracking-tight text-white">
						Let's Collaborate
					</h2>
					<p className="text-lg text-slate-400">
						I'm always excited to work on new projects
					</p>
				</div>
			</motion.div>
		</section>
	);
};
