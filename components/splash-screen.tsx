"use client";

import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import CornerAccent from "./corner-accent";

const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;

const HANDLE = "mryeminaung";

const DARK = {
	bg: "#020617",
	logoText: "#e2e8f0",
	handle: "#475569",
	barTrack: "#1e293b",
	cyan: "#22d3ee",
};

const LIGHT = {
	bg: "#f8fafc",
	logoText: "#0f172a",
	handle: "#94a3b8",
	barTrack: "#e2e8f0",
	cyan: "#06b6d4",
};

export default function SplashScreen() {
	const { resolvedTheme } = useTheme();
	const [visible, setVisible] = useState(false);
	const [corners, setCorners] = useState(false);
	const [showSys, setShowSys] = useState(false);
	const [showLogo, setShowLogo] = useState(false);
	const [showHandle, setShowHandle] = useState(false);
	const [typed, setTyped] = useState("");
	const [showBar, setShowBar] = useState(false);
	const [progress, setProgress] = useState(0);
	const [exiting, setExiting] = useState(false);

	// Read theme directly from the DOM so it's available before next-themes resolves
	const isDark =
		resolvedTheme === "dark" ||
		(resolvedTheme === undefined &&
			typeof document !== "undefined" &&
			document.documentElement.classList.contains("dark"));

	const c = isDark ? DARK : LIGHT;

	useIsomorphicLayoutEffect(() => {
		setVisible(true);
		const t1 = setTimeout(() => setCorners(true), 100);
		const t2 = setTimeout(() => setShowSys(true), 500);
		const t3 = setTimeout(() => setShowLogo(true), 900);
		const t4 = setTimeout(() => setShowHandle(true), 1200);

		return () => {
			clearTimeout(t1);
			clearTimeout(t2);
			clearTimeout(t3);
			clearTimeout(t4);
		};
	}, []);

	// Typewriter
	useEffect(() => {
		if (!showHandle) return;
		let i = 0;
		const id = setInterval(() => {
			i++;
			setTyped(HANDLE.slice(0, i));
			if (i >= HANDLE.length) {
				clearInterval(id);
				setTimeout(() => setShowBar(true), 300);
			}
		}, 80);
		return () => clearInterval(id);
	}, [showHandle]);

	// Progress
	useEffect(() => {
		if (!showBar) return;
		let p = 0;
		const id = setInterval(() => {
			p += Math.floor(Math.random() * 7) + 3;
			if (p >= 100) {
				p = 100;
				setProgress(100);
				clearInterval(id);
				setTimeout(() => setExiting(true), 400);
			} else {
				setProgress(p);
			}
		}, 55);
		return () => clearInterval(id);
	}, [showBar]);

	// Unmount after exit animation
	useEffect(() => {
		if (!exiting) return;
		const id = setTimeout(() => setVisible(false), 700);
		return () => clearTimeout(id);
	}, [exiting]);

	const cornerStyle = (
		pos: "tl" | "tr" | "bl" | "br",
	): React.CSSProperties => ({
		position: "absolute",
		width: 24,
		height: 24,
		borderColor: c.cyan,
		borderStyle: "solid",
		borderTopWidth: pos === "tl" || pos === "tr" ? 1.5 : 0,
		borderBottomWidth: pos === "bl" || pos === "br" ? 1.5 : 0,
		borderLeftWidth: pos === "tl" || pos === "bl" ? 1.5 : 0,
		borderRightWidth: pos === "tr" || pos === "br" ? 1.5 : 0,
		top: pos === "tl" || pos === "tr" ? 24 : undefined,
		bottom: pos === "bl" || pos === "br" ? 24 : undefined,
		left: pos === "tl" || pos === "bl" ? 24 : undefined,
		right: pos === "tr" || pos === "br" ? 24 : undefined,
		opacity: corners ? 1 : 0,
		transition: "opacity 0.4s ease",
		transitionDelay:
			pos === "tl"
				? "0ms"
				: pos === "tr"
					? "80ms"
					: pos === "bl"
						? "160ms"
						: "240ms",
	});

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
					style={{
						position: "fixed",
						inset: 0,
						zIndex: 9999,
						background: c.bg,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}>
					{/* Hairlines top / bottom */}
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							height: 1,
							background: `linear-gradient(90deg, transparent, ${c.cyan}35, transparent)`,
						}}
					/>
					<div
						style={{
							position: "absolute",
							bottom: 0,
							left: 0,
							right: 0,
							height: 1,
							background: `linear-gradient(90deg, transparent, #e879f922, transparent)`,
						}}
					/>

					{/* Corner brackets */}
					<div style={cornerStyle("tl")} />
					<div style={cornerStyle("tr")} />
					<div style={cornerStyle("bl")} />
					<div style={cornerStyle("br")} />

					{/* SYS label */}
					<div
						style={{
							fontFamily: "var(--font-mono, monospace)",
							fontSize: 10,
							letterSpacing: "0.2em",
							color: c.cyan,
							opacity: showSys ? 0.35 : 0,
							marginBottom: 28,
							transition: "opacity 0.5s ease",
						}}>
						SYS_INIT // PORTFOLIO
					</div>

					{/* Logo */}
					<div
						style={{
							marginBottom: 10,
							opacity: showLogo ? 1 : 0,
							transform: showLogo ? "translateY(0)" : "translateY(12px)",
							transition:
								"opacity 0.55s ease, transform 0.55s cubic-bezier(0.22,1,0.36,1)",
						}}
						className="relative p-4">
						<CornerAccent
							position="top-left"
							className="border-cyan-400!"
						/>
						<CornerAccent
							position="bottom-right"
							className="border-cyan-400!"
						/>
						<Image
							src="/nav-logo.png"
							alt="Devfolio Logo"
							loading="eager"
							width={180}
							height={107}
							className="rounded-lg h-auto w-auto"
						/>
					</div>

					{/* Handle with typewriter */}
					<div
						style={{
							fontFamily: "var(--font-mono, monospace)",
							fontSize: 13,
							color: c.handle,
							marginBottom: 44,
							minHeight: 20,
							letterSpacing: "0.05em",
							opacity: showHandle ? 1 : 0,
							transition: "opacity 0.3s ease",
						}}>
						{typed}
						<span
							style={{
								color: c.cyan,
								animation: "splash-blink 0.7s step-end infinite",
							}}>
							|
						</span>
					</div>

					{/* Progress bar */}
					<div
						style={{
							width: 220,
							opacity: showBar ? 1 : 0,
							transition: "opacity 0.4s ease",
						}}>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
								marginBottom: 6,
							}}>
							<span
								style={{
									fontFamily: "var(--font-mono, monospace)",
									fontSize: 9,
									letterSpacing: "0.15em",
									color: c.cyan,
									opacity: 0.5,
								}}>
								LOADING
							</span>
							<span
								style={{
									fontFamily: "var(--font-mono, monospace)",
									fontSize: 9,
									color: c.cyan,
									opacity: 0.6,
								}}>
								{progress}%
							</span>
						</div>
						<div
							style={{
								height: 2,
								background: c.barTrack,
								borderRadius: 2,
								overflow: "hidden",
							}}>
							<div
								style={{
									height: "100%",
									width: `${progress}%`,
									background: c.cyan,
									borderRadius: 2,
									transition: "width 0.06s linear",
								}}
							/>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
