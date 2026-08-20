import { cn } from "@/lib/utils";

export default function Underline({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				"w-37.5 rounded-full mx-auto bg-primary-400 h-0.5 bg-linear-to-r from-secondary-400 to-primary-400 dark:to-primary-900",
				className,
			)}></div>
	);
}
