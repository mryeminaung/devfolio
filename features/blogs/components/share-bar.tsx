"use client";

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
			<div className="flex items-center gap-4">
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
		</div>
	);
}
