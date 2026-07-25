"use client";

import CornerAccent from "@/components/corner-accent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

export default function ContactForm({ delay = 0 }: { delay?: number }) {
	const prefersReducedMotion = useReducedMotion();
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		console.log("Contact form submission:", data);
		setIsSubmitted(true);
		form.reset();
	};

	if (prefersReducedMotion) {
		return (
			<div className="border overflow-hidden relative border-secondary-400/30 p-5 md:p-8 rounded-xl dark:bg-primary-950 dark:text-white transform-gpu">
				<CornerAccent position="top-right" />
				<CornerAccent position="bottom-left" />

				<h3 className="text-center text-2xl md:text-3xl mb-5 font-semibold">
					Send Me a Message
				</h3>
				{isSubmitted && (
					<div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-300 text-sm text-center">
						Thank you! Your message has been sent successfully.
					</div>
				)}
				<form
					autoComplete="off"
					method="post"
					onSubmit={handleSubmit}
					className="flex flex-col gap-5">
					<div className="flex flex-col gap-1 space-y-1">
						<label
							htmlFor="name"
							className="font-medium text-sm md:text-base">
							Your Name
						</label>
						<Input
							className="rounded-md focus:ring-secondary-400! border border-secondary-400/30"
							type="text"
							id="name"
							name="name"
							required
							placeholder="eg. John Doe"
						/>
					</div>
					<div className="flex flex-col gap-1 space-y-1">
						<label
							htmlFor="email"
							className="font-medium text-sm md:text-base">
							Your Email
						</label>
						<Input
							className="rounded-md focus:ring-secondary-400! border border-secondary-400/30"
							type="email"
							id="email"
							name="email"
							required
							placeholder="eg. example@gmail.com"
						/>
					</div>
					<div className="flex flex-col gap-1 space-y-1">
						<label
							htmlFor="message"
							className="font-medium text-sm md:text-base">
							Your Message
						</label>
						<Textarea
							id="message"
							name="message"
							required
							className="border border-secondary-400/30 min-h-38 focus:ring-secondary-400! rounded-md p-2 resize-none"
							placeholder="Tell me about your project..."
						/>
					</div>
					<Button
						type="submit"
						className="py-6 hover:cursor-pointer rounded-xl border border-secondary-400/30 relative overflow-hidden hover:bg-gray-100 dark:bg-primary-900 dark:hover:bg-primary-950 bg-white font-medium text-black dark:text-white">
						<CornerAccent position="top-left" />
						<CornerAccent position="bottom-right" />
						Send Message
					</Button>
				</form>
			</div>
		);
	}

	return (
		<motion.div
			initial={{ y: 30, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
			viewport={{ once: true, amount: 0.2 }}
			className="border overflow-hidden relative border-secondary-400/30 p-5 md:p-8 rounded-xl dark:bg-primary-950 dark:text-white transform-gpu">
			<CornerAccent position="top-right" />
			<CornerAccent position="bottom-left" />

			<h3 className="text-center text-2xl md:text-3xl mb-5 font-semibold">
				Send Me a Message
			</h3>
			{isSubmitted && (
				<div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-300 text-sm text-center">
					Thank you! Your message has been sent successfully.
				</div>
			)}
			<form
				autoComplete="off"
				method="post"
				onSubmit={handleSubmit}
				className="flex flex-col gap-5">
				<div className="flex flex-col gap-1 space-y-1">
					<label
						htmlFor="name"
						className="font-medium text-sm md:text-base">
						Your Name
					</label>
					<Input
						className="rounded-md focus:ring-secondary-400! border border-secondary-400/30"
						type="text"
						id="name"
						name="name"
						required
						placeholder="eg. John Doe"
					/>
				</div>
				<div className="flex flex-col gap-1 space-y-1">
					<label
						htmlFor="email"
						className="font-medium text-sm md:text-base">
						Your Email
					</label>
					<Input
						className="rounded-md focus:ring-secondary-400! border border-secondary-400/30"
						type="email"
						id="email"
						name="email"
						required
						placeholder="eg. example@gmail.com"
					/>
				</div>
				<div className="flex flex-col gap-1 space-y-1">
					<label
						htmlFor="message"
						className="font-medium text-sm md:text-base">
						Your Message
					</label>
					<Textarea
						id="message"
						name="message"
						required
						className="border border-secondary-400/30 min-h-38 focus:ring-secondary-400! rounded-md p-2 resize-none"
						placeholder="Tell me about your project..."
					/>
				</div>
				<Button
					type="submit"
					className="py-6 hover:cursor-pointer rounded-xl border border-secondary-400/30 relative overflow-hidden hover:bg-gray-100 dark:bg-primary-900 dark:hover:bg-primary-950 bg-white font-medium text-black dark:text-white">
					<CornerAccent position="top-left" />
					<CornerAccent position="bottom-right" />
					Send Message
				</Button>
			</form>
		</motion.div>
	);
}
