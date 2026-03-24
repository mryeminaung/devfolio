import { cn } from "@/lib/utils";
import CornerAccent from "./corner-accent";
import SiteFooter from "./site-footer";
import SiteNav from "./site-nav";

type PageWrapperProps = {
	children: React.ReactNode;
	className?: string;
};

export default function PageWrapper({ children, className }: PageWrapperProps) {
	return (
		<div className={cn("min-h-screen flex flex-col", className)}>
			<SiteNav />
			{/* <WorkCard /> */}

			<div className="px-3">
				{/*  Main Content Area */}
				<main
					className={cn(
						"flex-1 relative overflow-hidden max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-8 mt-24",
						"border border-secondary-400/30 dark:border-secondary-900 dark:bg-primary-950/50 backdrop-blur-lg rounded-3xl",
						"shadow-2xl shadow-secondary-500/5 py-10",
					)}>
					<CornerAccent position="top-left" />
					<CornerAccent position="bottom-right" />
					{children}
				</main>
			</div>

			<SiteFooter />
		</div>
	);
}
