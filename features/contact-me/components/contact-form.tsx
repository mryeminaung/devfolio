"use client";

import CornerAccent from "@/components/corner-accent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	EMAILJS_PUBLIC_KEY,
	EMAILJS_SERVICE_ID,
	EMAILJS_TEMPLATE_ID,
} from "@/features/contact-me/constants/emailjs";
import emailjs from "@emailjs/browser";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function ContactForm({ delay = 0 }: { delay?: number }) {
	const prefersReducedMotion = useReducedMotion();
	const formRef = useRef<HTMLFormElement>(null);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!isSubmitted) return;
		const timer = setTimeout(() => setIsSubmitted(false), 5000);
		return () => clearTimeout(timer);
	}, [isSubmitted]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!formRef.current) return;

		setIsLoading(true);
		setError(null);

		const form = formRef.current;
		const formData = new FormData(form);

		try {
			const result = await emailjs.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				{
					title: formData.get("title"),
					from_name: formData.get("name"),
					from_email: formData.get("email"),
					message: formData.get("message"),
				},
				EMAILJS_PUBLIC_KEY,
			);
			setIsSubmitted(true);
			form.reset();
		} catch {
			setError(
				"Couldn't send your message. Try reaching me directly at yeminaung.dev@gmail.com",
			);
		} finally {
			setIsLoading(false);
		}
	};

	const formContent = (
		<>
			<h3 className="text-center text-xl md:text-2xl mb-2 font-semibold">
				Let's Build Something Together
			</h3>
			{isSubmitted && (
				<div aria-live="polite" role="status" className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-300 text-sm text-center">
					🎉 Awesome — your message is on its way! I'll get back to you soon.
				</div>
			)}

			{error && (
				<div aria-live="polite" role="alert" className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300 text-sm text-center">
					{error}
				</div>
			)}

			<form
				ref={formRef}
				autoComplete="off"
				onSubmit={handleSubmit}
				className="flex flex-col gap-5">
				<div className="flex flex-col sm:flex-row gap-5">
					<div className="flex flex-col gap-1 flex-1">
						<label
							htmlFor="name"
							className="font-medium text-sm md:text-base">
							What's your name?
						</label>
						<Input
							className="rounded-md focus:ring-secondary-400! border border-secondary-400/30"
							type="text"
							id="name"
							name="name"
							required
							placeholder="e.g. Ada Lovelace"
						/>
					</div>
					<div className="flex flex-col gap-1 flex-1">
						<label
							htmlFor="email"
							className="font-medium text-sm md:text-base">
							Your email
						</label>
						<Input
							className="rounded-md focus:ring-secondary-400! border border-secondary-400/30"
							type="email"
							id="email"
							name="email"
							required
							placeholder="ada@example.com"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-1 space-y-1">
					<label
						htmlFor="title"
						className="font-medium text-sm md:text-base">
						Subject
					</label>
					<Input
						className="rounded-md focus:ring-secondary-400! border border-secondary-400/30"
						type="text"
						id="title"
						name="title"
						required
						placeholder="What's this about?"
					/>
				</div>
				<div className="flex flex-col gap-1 space-y-1">
					<label
						htmlFor="message"
						className="font-medium text-sm md:text-base">
						What's on your mind?
					</label>
					<Textarea
						id="message"
						name="message"
						required
						className="border border-secondary-400/30 min-h-38 focus:ring-secondary-400! rounded-md p-2 resize-none"
						placeholder="I've got a project idea, a freelance gig, or just want to chat about code..."
					/>
				</div>
				<Button
					type="submit"
					disabled={isLoading}
					className="py-6 hover:cursor-pointer rounded-xl border border-secondary-400/30 relative overflow-hidden hover:bg-gray-100 dark:bg-primary-900 dark:hover:bg-primary-950 bg-white font-medium text-black dark:text-white disabled:opacity-50 disabled:cursor-not-allowed">
					<CornerAccent position="top-left" />
					<CornerAccent position="bottom-right" />
					{isLoading ? "Sending..." : "Send It →"}
				</Button>
			</form>
		</>
	);

	if (prefersReducedMotion) {
		return (
			<div className="border overflow-hidden relative border-secondary-400/30 p-5 md:p-8 rounded-xl dark:bg-primary-950 dark:text-white transform-gpu">
				<CornerAccent position="top-right" />
				<CornerAccent position="bottom-left" />
				{formContent}
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
			{formContent}
		</motion.div>
	);
}
