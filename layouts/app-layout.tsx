import PageWrapper from "@/components/page-wrapper";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-linear-to-br from-gray-900 to-slate-950 relative min-h-screen p-5">
			<PageWrapper>{children}</PageWrapper>
		</div>
	);
}
