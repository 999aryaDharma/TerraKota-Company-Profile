import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sprout } from "lucide-react";
import logo from "../img/logo_terrakota.png"; // path disesuaikan ya

const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const location = useLocation();

	const isActive = (path: string) => {
		if (path.startsWith("/#")) {
			return location.pathname === "/" && location.hash === path.substring(1);
		}
		return location.pathname === path;
	};

	// Close mobile menu when route changes
	useEffect(() => {
		setIsOpen(false);
	}, [location]);

	const navLinks = [
		{ path: "/", label: "Beranda" },
		{ path: "/explore", label: "Jelajahi" },
		{ path: "/#about", label: "Tentang Kami" },
		{ path: "/#products", label: "Produk & Layanan" },
		{ path: "/#milestones", label: "Milestone" },
	];

	const handleNavClick = (path: string) => {
		if (path === "/" || path === "/explore") {
			window.scrollTo(0, 0);
		}
	};

	return (
		<nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link to="/" className="flex items-center space-x-2 " onClick={() => handleNavClick("/")}>
							<img src={logo} alt="Logo" className="h-12 w-12" />
							<span className="text-2xl font-bold text-emerald-900">TERRAKOTA</span>
						</Link>
					</div>

					<div className="hidden md:block">
						<div className="ml-10 flex items-center space-x-8">
							{navLinks.map((link) => (
								<Link key={link.path} to={link.path} className={`${isActive(link.path) ? "text-emerald-600" : "text-emerald-900 hover:text-emerald-600"} transition-colors`} onClick={() => handleNavClick(link.path)}>
									{link.label}
								</Link>
							))}
							<Link to="/#contact" className="px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
								Hubungi Kami
							</Link>
						</div>
					</div>

					<div className="md:hidden">
						<button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-emerald-900" aria-label="Toggle menu">
							{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
						{navLinks.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								className={`block px-3 py-2 ${isActive(link.path) ? "text-emerald-600" : "text-emerald-900 hover:text-emerald-600"}`}
								onClick={() => {
									setIsOpen(false);
									handleNavClick(link.path);
								}}
							>
								{link.label}
							</Link>
						))}
						<Link to="/#contact" className="block px-3 py-2 text-emerald-900 hover:text-emerald-600" onClick={() => setIsOpen(false)}>
							Hubungi Kami
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
