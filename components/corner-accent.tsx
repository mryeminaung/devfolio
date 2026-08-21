export default function CornerAccent({
	position,
	className,
	size,
	offset = 0,
}: {
	position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
	className?: string;
	size?: number;
	offset?: number;
}) {
	const sizeStyle = size ? { width: size, height: size } : undefined;
	const offsetStyle: React.CSSProperties = offset
		? {
				...(position.includes("top") ? { top: offset } : { bottom: offset }),
				...(position.includes("left") ? { left: offset } : { right: offset }),
		  }
		: undefined;
	const baseClasses = `${className} absolute -z-0 border-secondary-400${!size ? " w-14 h-14" : ""}`;
	const positionClasses = {
		"top-left": "top-0 left-0 border-t-2 border-l-2",
		"top-right": "top-0 right-0 border-t-2 border-r-2",
		"bottom-left": "bottom-0 left-0 border-b-2 border-l-2",
		"bottom-right": "bottom-0 right-0 border-b-2 border-r-2",
	};

	return (
		<div
			aria-hidden="true"
			className={`${baseClasses} ${positionClasses[position]}`}
			style={{ ...sizeStyle, ...offsetStyle }}
		/>
	);
}
