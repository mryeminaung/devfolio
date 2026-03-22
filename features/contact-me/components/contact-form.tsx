"use client";

import CornerAccent from "@/components/corner-accent";

export default function ContactForm() {
	return (
		<div className="border overflow-hidden relative border-secondary-400/30 p-5 md:p-8 rounded-xl dark:bg-primary-950 dark:text-white">
			<CornerAccent position="top-right" />
			<CornerAccent position="bottom-left" />

			<h3 className="text-2xl md:text-3xl mb-5 font-semibold">
				Send Me a Message
			</h3>
			<form
				method="post"
				className="flex flex-col gap-5">
				<div className="flex flex-col gap-1 space-y-1">
					<label htmlFor="name">Your Name</label>
					<input
						className="rounded-md focus:ring-secondary-400 border border-secondary-400/30 p-2"
						type="text"
						id="name"
						placeholder="eg. John Wick"
					/>
				</div>
				<div className="flex flex-col gap-1 space-y-1">
					<label htmlFor="email">Your Email</label>
					<input
						className="rounded-md focus:ring-secondary-400 border border-secondary-400/30 p-2"
						type="email"
						id="email"
						placeholder="eg. john_wick@gmail.com"
					/>
				</div>
				<div className="flex flex-col gap-1 space-y-1">
					<label htmlFor="email">Your Message</label>
					<textarea
						className="border border-secondary-400/30 rounded-md p-2 resize-none"
						rows={6}
						placeholder="Tell me about your project..."
					/>
				</div>
				<button
					type="submit"
					className="py-3 dark:bg-primary-900 bg-secondary-300 border rounded-xl">
					Send Message
				</button>
			</form>
		</div>
	);
}
