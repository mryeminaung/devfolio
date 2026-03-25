"use client";

import CornerAccent from "@/components/corner-accent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
	return (
		<div className="border overflow-hidden relative border-secondary-400/30 p-5 md:p-8 rounded-xl dark:bg-primary-950 dark:text-white">
			<CornerAccent position="top-right" />
			<CornerAccent position="bottom-left" />

			<h3 className="text-center text-2xl md:text-3xl mb-5 font-semibold">
				Send Me a Message
			</h3>
			<form
				autoComplete="off"
				method="post"
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
