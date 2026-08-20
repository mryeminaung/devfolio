"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Check,
	Copy,
	Facebook,
	Globe,
	Linkedin,
	MessageCircle,
	Send,
	Share2,
	Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";

interface ShareBarProps {
	title: string;
}

export default function ShareBar({ title }: ShareBarProps) {
	const [url, setUrl] = useState("");
	const [copied, setCopied] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setUrl(window.location.href);
	}, []);

	const handleCopy = () => {
		navigator.clipboard.writeText(url);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const encodedUrl = encodeURIComponent(url);
	const encodedTitle = encodeURIComponent(title);

	const links = [
		{
			icon: Twitter,
			label: "Twitter",
			href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
		},
		{
			icon: Facebook,
			label: "Facebook",
			href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
		},
		{
			icon: Globe,
			label: "Reddit",
			href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
		},
		{
			icon: MessageCircle,
			label: "WhatsApp",
			href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
		},
		{
			icon: Send,
			label: "Telegram",
			href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
		},
	];

	return (
		<div className="mt-10">
			{/* Desktop: inline bar (original design) */}
			<div className="hidden md:flex items-center gap-4">
				<div className="flex items-center gap-2">
					<Share2
						size={16}
						className="text-gray-400 dark:text-primary-500"
					/>
					<span className="text-sm text-gray-500 dark:text-primary-400">
						Share
					</span>
				</div>
				<div className="flex flex-wrap items-center gap-3">
					<button
						onClick={handleCopy}
						aria-label="Copy link"
						className="w-9 h-9 rounded-full dark:bg-gray-900/50 border dark:border-secondary-400/20 flex items-center justify-center bg-secondary-400/10 hover:border-secondary-400 transition-all text-secondary-400 hover:-translate-y-0.5">
						{copied ? <Check size={14} /> : <Copy size={14} />}
					</button>
					{links.map(({ icon: Icon, label, href }) => (
						<a
							key={label}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Share on ${label}`}
							className="w-9 h-9 rounded-full dark:bg-gray-900/50 border dark:border-secondary-400/20 flex items-center justify-center bg-secondary-400/10 hover:border-secondary-400 transition-all text-secondary-400 hover:-translate-y-0.5">
							<Icon size={14} />
						</a>
					))}
				</div>
			</div>

			{/* Mobile: modal dialog */}
			<div className="md:hidden">
				<Dialog
					open={open}
					onOpenChange={setOpen}>
					<DialogTrigger
						render={
							<button className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-secondary-400 dark:text-primary-400 dark:hover:text-secondary-400">
								<Share2 size={16} />
								Share
							</button>
						}
					/>

					<DialogContent className="p-5! dark:bg-primary-950 dark:border-secondary-400/30">
						<DialogHeader>
							<DialogTitle className="text-lg truncate dark:text-white">
								Share this post
							</DialogTitle>
						</DialogHeader>

						<p className="-mt-2 line-clamp-1 text-sm text-gray-500 dark:text-primary-400">
							{title}
						</p>

						<button
							type="button"
							onClick={handleCopy}
							className="flex min-w-full items-center gap-3 rounded-xl border border-secondary-400/30 px-4 py-3 text-sm text-gray-700 transition-colors hover:border-secondary-400 dark:bg-primary-900/50 dark:text-primary-300">
							{copied ? (
								<Check
									size={16}
									className="shrink-0 text-green-500"
								/>
							) : (
								<Copy
									size={16}
									className="shrink-0 text-gray-400 dark:text-primary-500"
								/>
							)}
							<span className="min-w-0 text-left flex-1 truncate">{url}</span>
							<span className="shrink-0 text-xs text-secondary-400">
								{copied ? "Copied!" : "Copy"}
							</span>
						</button>

						<div className="border-t border-primary-800" />

						<div className="flex overflow-x-auto gap-2 snap-x snap-mandatory">
							{links.map(({ icon: Icon, label, href }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={`Share on ${label}`}
									onClick={() => setOpen(false)}
									className="flex flex-col min-w-25 px-3 items-center gap-1.5 rounded-xl border border-primary-800 py-2.5 text-[11px] text-gray-500 transition-all hover:border-secondary-400 hover:text-secondary-400 dark:bg-primary-900/30 dark:text-primary-400 snap-start">
									<Icon size={16} />
									<span>{label}</span>
								</a>
							))}
						</div>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
}
