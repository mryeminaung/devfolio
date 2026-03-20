import { cn } from "@/lib/utils";

export default function PageWrapper({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return <div className={cn("max-w-6xl mx-auto", className)}>{children}</div>;
}
