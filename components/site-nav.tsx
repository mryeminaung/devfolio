"use client";

import { Briefcase, Home, Mail, Menu, User, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SiteNav() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = usePathname();

	useEffect(() => {
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
		{ name: "Contact", path: "/contact-me", icon: Mail },
	];

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-full max-w-7xl px-5 ${
				isScrolled ? "top-2" : "top-4"
			}`}>
			<div
				className={`rounded-4xl  transition-all duration-300 ${
					isScrolled
						? "bg-slate-900/70 backdrop-blur-md shadow-md shadow-cyan-400/10 border border-cyan-400/20"
						: "bg-slate-950/30 backdrop-blur-sm border border-cyan-400/10"
				}`}>
				<div className="px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						{/* Logo - Left Side */}
						<Link
							href="/"
							className="flex items-center">
							<motion.span
								whileHover={{ scale: 1.05 }}
								className="text-xl sm:text-2xl font-bold">
								<span className="text-cyan-400">&lt;</span>
								<span className="text-white">Devfolio</span>
								<span className="text-magenta-500">/&gt;</span>
							</motion.span>
						</Link>

						{/* Desktop Navigation - Right Side */}
						<div className="hidden md:flex items-center space-x-6 lg:space-x-8">
							{navLinks.map((link) => (
								<Link
									key={link.path}
									href={link.path}
									className={`relative flex items-center gap-2 text-sm font-medium transition-colors ${
										location === link.path
											? "text-cyan-400"
											: "text-gray-300 hover:text-cyan-400"
									}`}>
									<link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
									<span className="hidden sm:inline">{link.name}</span>
									{location === link.path && (
										<motion.div
											layoutId="activeTab"
											className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-cyan-400 to-magenta-500"
										/>
									)}
								</Link>
							))}
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors text-cyan-400"
							aria-label="Site Nav Button">
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
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="md:hidden border-t border-cyan-500/20">
							<div className="px-4 py-6 space-y-4">
								{navLinks.map((link) => (
									<Link
										key={link.path}
										href={link.path}
										onClick={() => setIsMobileMenuOpen(false)}
										className={`flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium transition-colors ${
											location === link.path
												? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
												: "text-gray-300 hover:bg-gray-800/50 hover:text-cyan-400"
										}`}>
										<link.icon className="w-5 h-5" />
										{link.name}
									</Link>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</motion.nav>
	);
}
