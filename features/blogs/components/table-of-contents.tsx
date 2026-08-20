"use client";

import CornerAccent from "@/components/corner-accent";
import { List } from "lucide-react";
import { useEffect, useState } from "react";

interface TocItem {
	id: string;
	text: string;
	level: number;
}

export default function TableOfContents() {
	const [headings, setHeadings] = useState<TocItem[]>([]);
	const [activeId, setActiveId] = useState<string>("");

	useEffect(() => {
		const container = document.querySelector(".prose-blog");
		if (!container) return;

		const elements = container.querySelectorAll("h2, h3");
		const items: TocItem[] = Array.from(elements).map((el) => ({
			id: el.id,
			text: el.textContent || "",
			level: el.tagName === "H2" ? 2 : 3,
		}));
		setHeadings(items);

		// Scroll spy
		const OFFSET = 100;

		const handleScroll = () => {
			let currentId = "";
			const atBottom =
				window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;

			if (atBottom && elements.length > 0) {
				currentId = elements[elements.length - 1].id;
			} else {
				for (const el of Array.from(elements)) {
					const rect = el.getBoundingClientRect();
					if (rect.top <= OFFSET) {
						currentId = el.id;
					}
				}
			}
			setActiveId(currentId);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	if (headings.length === 0) return null;

	return (
		<nav className="fixed top-46 w-60">
			<div className="relative rounded-3xl border border-secondary-400/30 dark:bg-primary-950/60 p-5 overflow-hidden">
				<div className="absolute inset-0 bg-linear-to-br from-secondary-400/5 via-transparent to-transparent pointer-events-none" />
				<CornerAccent
					size={36}
					position="top-left"
					className="z-10"
				/>
				<CornerAccent
					size={36}
					position="top-right"
					className="z-10"
				/>
				<CornerAccent
					size={36}
					position="bottom-left"
				/>
				<CornerAccent
					size={36}
					position="bottom-right"
				/>
				<h4 className="flex items-center gap-2 text-sm font-semibold dark:text-white mb-4">
					<List
						size={16}
						className="text-secondary-400"
					/>
					On This Page
				</h4>
				<ul className="relative ml-2 border-l border-primary-700/50">
					{headings.map((h) => (
						<li
							key={h.id}
							className="relative pl-5 py-1.5">
							{/* Dot */}
							<div
								className={`absolute -left-1.25 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border-2 transition-colors ${
									activeId === h.id
										? "bg-secondary-400 border-secondary-400"
										: "bg-primary-950 border-primary-600 dark:bg-primary-900"
								}`}
							/>
							<a
								href={`#${h.id}`}
								onClick={(e) => {
									e.preventDefault();
									const el = document.getElementById(h.id);
									if (el) {
										const y =
											el.getBoundingClientRect().top + window.scrollY - 100;
										window.scrollTo({ top: y, behavior: "smooth" });
									}
								}}
								className={`block text-sm leading-snug transition-colors hover:text-secondary-400 cursor-pointer ${
									h.level === 3 ? "pl-3" : ""
								} ${
									activeId === h.id
										? "text-secondary-400 font-medium"
										: "text-gray-500 dark:text-primary-400"
								}`}>
								{h.text}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
