import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Milestones from "./components/Milestones";
import Team from "./components/Team";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Explore from "./components/Explore";
import { Monitor } from "lucide-react";
import Monitoring from "./components/Monitoring";

// Scroll to section helper
function ScrollToSection() {
	const { hash } = useLocation();

	useEffect(() => {
		if (hash) {
			const element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		} else {
			window.scrollTo(0, 0);
		}
	}, [hash]);

	return null;
}

function HomePage() {
	return (
		<main>
			<Hero />
			<About />
			<Products />
			<Milestones />
			<Team />
			<Certifications />
			<Contact />
		</main>
	);
}

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-gray-50">
				<Navbar />
				<ScrollToSection />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/explore" element={<Explore />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/monitoring" element={<Monitoring />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
