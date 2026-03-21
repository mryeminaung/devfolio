import { cn } from "@/lib/utils";
import SiteFooter from "./site-footer";
import SiteNav from "./site-nav";

type PageWrapperProps = {
	children: React.ReactNode;
	className?: string;
};

export default function PageWrapper({ children, className }: PageWrapperProps) {
	return (
		<div className={cn("max-w-7xl mx-auto p-5", className)}>
			<SiteNav />
			<main className="mt-16 w-full mb-5 min-h-screen md:px-5 py-5 rounded-xl backdrop-blur-lg">
				{children}
			</main>
			<SiteFooter />
		</div>
	);
}
