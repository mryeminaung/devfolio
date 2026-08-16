"use client";

import { Award, Briefcase, Home, Mail, Menu, User, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CornerAccent from "./corner-accent";
import { ThemeToggle } from "./theme-toggle";

export default function SiteNav() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = usePathname();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ name: "Home", path: "/", icon: Home },
		{ name: "About", path: "/about-me", icon: User },
		{ name: "Projects", path: "/projects", icon: Briefcase },
		{ name: "Achievements", path: "/achievements", icon: Award },
		{ name: "Contact", path: "/contact-me", icon: Mail },
	];

	return (
		<motion.nav
			initial={{ y: -28, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ type: "spring", stiffness: 140, damping: 20, mass: 0.9 }}
			viewport={{ once: true, amount: 0.9 }}
			className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-[top] duration-300 ease-out w-full max-w-7xl px-3 lg:px-0 ${
				isScrolled ? "top-2" : "top-4"
			}`}>
			<div
				className={`rounded-4xl relative overflow-hidden transition-all duration-300 ${
					isScrolled
						? "bg-white/50 dark:bg-primary-900/70 backdrop-blur-md shadow-md shadow-secondary-400/10 border border-secondary-500/20"
						: "bg-white dark:bg-primary-950/50 backdrop-blur-sm border border-secondary-500/10"
				}`}>
				<CornerAccent
					className="-z-10"
					position="top-right"
				/>
				<CornerAccent
					className="-z-10"
					position="bottom-left"
				/>
				<div className="px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						{/* Logo - Left Side */}
						<Link
							href="/"
							className="flex items-center">
							<span className="text-xl sm:text-2xl font-bold">
								<span className="text-secondary-400">&lt;</span>
								<span className=" dark:text-white text-primary-950">
									Devfolio
								</span>
								<span className="text-secondary-400">/&gt;</span>
							</span>
						</Link>

						{/* Desktop Navigation - Right Side */}
						<div className="hidden md:flex items-center space-x-6 lg:space-x-8">
							{navLinks.map((link) => (
								<Link
									key={link.path}
									href={link.path}
									className={`relative flex items-center gap-2 text-sm font-medium transition-colors ${
										location === link.path
											? "text-secondary-400 font-semibold"
											: "text-black dark:text-white hover:text-secondary-400"
									}`}>
									<link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
									<span className="hidden sm:inline">{link.name}</span>
									{location === link.path && (
										<>
											<div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-secondary-400 to-magenta-500" />
										</>
									)}
								</Link>
							))}
							{mounted && <ThemeToggle />}
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors text-secondary-400"
							aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
							aria-expanded={isMobileMenuOpen}>
							{isMobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.25, ease: "easeInOut" }}
							className="md:hidden border-t border-secondary-500/20 overflow-hidden">
							<div className="px-4 py-6 space-y-4 border">
								{navLinks.map((link) => (
									<Link
										key={link.path}
										href={link.path}
										onClick={() => setIsMobileMenuOpen(false)}
										className={`flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium transition-colors dark:text-white ${
											location === link.path
												? "bg-secondary-500/10 text-secondary-400 border border-secondary-500/30"
												: "text-gray-500 hover:bg-secondary-500/10 hover:text-secondary-400"
										}`}>
										<link.icon className="w-5 h-5" />
										{link.name}
									</Link>
								))}
								{mounted && <ThemeToggle />}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
}
