import { HexagonBackground } from "@/components/hexagon";
import PageWrapper from "@/components/page-wrapper";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative">
			<HexagonBackground className="fixed inset-0 -z-10" />
			{/* Gradient tint — sits above hexagons but below content */}
			<div className="pointer-events-none fixed inset-0 -z-[5] bg-linear-to-br from-background/50 to-secondary-50/30 dark:from-gray-900/80 dark:to-primary-950/80" />
			<PageWrapper>{children}</PageWrapper>
		</div>
	);
}
