export default function CornerAccent({
	position,
	className,
}: {
	position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
	className?: string;
}) {
	const baseClasses = `${className} absolute -z-0 w-14 h-14 border-secondary-400`;
	const positionClasses = {
		"top-left": "top-0 left-0 border-t-2 border-l-2",
		"top-right": "top-0 right-0 border-t-2 border-r-2",
		"bottom-left": "bottom-0 left-0 border-b-2 border-l-2",
		"bottom-right": "bottom-0 right-0 border-b-2 border-r-2",
	};

	return <div className={`${baseClasses} ${positionClasses[position]}`} />;
}
