import PageWrapper from "@/components/page-wrapper";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-linear-to-br from-gray-900 to-slate-950">
			<PageWrapper>{children}</PageWrapper>
		</div>
	);
}
