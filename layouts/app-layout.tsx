import PageWrapper from "@/components/page-wrapper";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-slate-900 relative">
			<PageWrapper>{children}</PageWrapper>
			{/* <div className="absolute inset-0 bg-linear-to-br from-cyan-800 via-transparent to-purple-800 opacity-50 " /> */}
		</div>
	);
}
