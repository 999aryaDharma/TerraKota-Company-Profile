import React from "react";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import hidroponikBg from "../img/hidroponik.jpg";


const Hero = () => {
	return (
		<div id="home" className="relative min-h-screen flex items-center">
			{/* Background Image */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `url(${hidroponikBg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					WebkitBackgroundSize: "cover",
					MozBackgroundSize: "cover",
					OBackgroundSize: "cover",
				}}
			>
				<div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply" />
			</div>

			{/* Content */}
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-4xl md:text-6xl font-bold text-white mb-2">TERRAKOTA</h1>
				<p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">Hijaukan Kota, Mulai dari TERRAKOTA</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link to="/explore" className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
						Jelajahi Kami
						<ArrowRight className="ml-2 h-5 w-5" />
					</Link>
					<Link to="/#contact" className="inline-flex items-center px-6 py-3 rounded-full bg-white text-emerald-900 hover:bg-emerald-50 transition-colors">
						Hubungi Kami
						<PhoneCall className="ml-2 h-5 w-5" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;
