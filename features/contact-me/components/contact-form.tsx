"use client";

import { motion } from "motion/react";

export default function ContactForm() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.45, ease: "easeOut" }}
			className="border p-8 rounded-xl bg-slate-950  text-white">
			<h3 className="text-3xl mb-5 font-semibold">Send Me a Message</h3>
			<motion.form
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.3 }}
				variants={{
					hidden: {},
					show: {
						transition: { staggerChildren: 0.08, delayChildren: 0.08 },
					},
				}}
				method="post"
				className="flex flex-col gap-5">
				<motion.div
					variants={{
						hidden: { opacity: 0, y: 12 },
						show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
					}}
					className="flex flex-col gap-1 space-y-1">
					<label htmlFor="name">Your Name</label>
					<input
						className="border rounded-md p-2"
						type="text"
						id="name"
						placeholder="eg. John Wick"
					/>
				</motion.div>
				<motion.div
					variants={{
						hidden: { opacity: 0, y: 12 },
						show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
					}}
					className="flex flex-col gap-1 space-y-1">
					<label htmlFor="email">Your Email</label>
					<input
						className="border rounded-md p-2"
						type="email"
						id="email"
						placeholder="eg. john_wick@gmail.com"
					/>
				</motion.div>
				<motion.div
					variants={{
						hidden: { opacity: 0, y: 12 },
						show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
					}}
					className="flex flex-col gap-1 space-y-1">
					<label htmlFor="email">Your Message</label>
					<textarea
						className="border rounded-md p-2 resize-none"
						rows={6}
						placeholder="Tell me about your project..."
					/>
				</motion.div>
				<motion.button
					variants={{
						hidden: { opacity: 0, y: 12 },
						show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
					}}
					type="submit"
					className="border py-3 rounded-md">
					Send Message
				</motion.button>
			</motion.form>
		</motion.div>
	);
}
