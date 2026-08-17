"use client";

import { cn } from "@/lib/utils";
import CornerAccent from "./corner-accent";
import PageTransition from "./page-transition";
import ScrollbarIndicator from "./scrollbar-indicator";
import SiteFooter from "./site-footer";
import SiteNav from "./site-nav";

type PageWrapperProps = {
	children: React.ReactNode;
	className?: string;
};

export default function PageWrapper({ children, className }: PageWrapperProps) {
	return (
		<div className={cn("min-h-screen flex flex-col", className)}>
			{/* Skip to content link — visible on focus for keyboard users */}
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-secondary-500 focus:text-white focus:rounded-md focus:font-semibold focus:outline-hidden focus:ring-2 focus:ring-secondary-400">
				Skip to content
			</a>

			<ScrollbarIndicator />

			<SiteNav />

			<PageTransition>
				<div className="px-3">
					{/*  Main Content Area */}
					<main
						id="main-content"
						className={cn(
							"flex-1 relative overflow-hidden max-w-300 mx-auto w-full mt-32 pb-4",
							// "border border-secondary-400/30 dark:border-secondary-900 dark:bg-primary-950/50 backdrop-blur-lg rounded-3xl",
							// "shadow-2xl shadow-secondary-500/5 py-10",
						)}>
						{/* <CornerAccent position="top-left" /> */}
						{/* <CornerAccent position="bottom-right" /> */}
						{children}
					</main>
				</div>
			</PageTransition>

			<SiteFooter />
		</div>
	);
}
