import PageWrapper from "@/components/page-wrapper";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-linear-to-br from-white to-white/30 dark:from-gray-900 dark:to-primary-950">
			<PageWrapper>{children}</PageWrapper>
		</div>
	);
}
