import React from "react";
import { Droplets, Zap, Cpu, Plane as Plant, Thermometer, Database, Smartphone, Cloud, Settings, Leaf, Sun, Wind } from "lucide-react";

const TechCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
	<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
		<div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
			<Icon className="h-6 w-6 text-emerald-600" />
		</div>
		<h3 className="text-lg font-semibold text-emerald-900 mb-2">{title}</h3>
		<p className="text-gray-600">{description}</p>
	</div>
);

const SystemSection = ({ title, description, image, features }: { title: string; description: string; image: string; features: string[] }) => (
	<div className="bg-white rounded-xl overflow-hidden shadow-sm">
		<div className="md:flex">
			<div className="md:w-1/3">
				<img src={image} alt={title} className="w-full h-full object-cover" style={{ minHeight: "200px" }} />
			</div>
			<div className="md:w-1/2 p-8">
				<h3 className="text-2xl font-bold text-emerald-900 mb-4">{title}</h3>
				<p className="text-gray-600 mb-6">{description}</p>
				<ul className="space-y-3">
					{features.map((feature, index) => (
						<li key={index} className="flex items-center text-gray-600">
							<Leaf className="h-5 w-5 text-emerald-600 mr-2" />
							{feature}
						</li>
					))}
				</ul>
			</div>
		</div>
	</div>
);

const HydroponicTech = () => {
	const technologies = [
		{
			icon: Cpu,
			title: "Sistem Kontrol Otomatis",
			description: "Pengaturan nutrisi, pH, dan sirkulasi air secara otomatis dengan mikrokontroler canggih",
		},
		{
			icon: Droplets,
			title: "Smart Irrigation",
			description: "Sistem irigasi pintar dengan pengaturan waktu dan volume yang presisi",
		},
		{
			icon: Thermometer,
			title: "Monitoring Suhu",
			description: "Kontrol suhu real-time untuk pertumbuhan optimal tanaman",
		},
		{
			icon: Database,
			title: "Data Analytics",
			description: "Analisis data pertumbuhan untuk optimasi hasil panen",
		},
		{
			icon: Smartphone,
			title: "Mobile Control",
			description: "Kendali sistem melalui aplikasi mobile dari mana saja",
		},
		{
			icon: Cloud,
			title: "Cloud Integration",
			description: "Penyimpanan dan analisis data di cloud untuk monitoring jangka panjang",
		},
	];

	const systems = [
		{
			title: "NFT (Nutrient Film Technique)",
			description: "Sistem hidroponik modern dengan aliran nutrisi tipis yang mengalir secara kontinu.",
			image: "https://plus.unsplash.com/premium_photo-1679428402040-e3c93439ec13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			features: ["Sirkulasi nutrisi optimal", "Hemat penggunaan air", "Cocok untuk sayuran daun", "Monitoring pH otomatis"],
		},
		{
			title: "Deep Flow Technique (DFT)",
			description: "Sistem dengan kolam nutrisi dalam yang ideal untuk berbagai jenis tanaman.",
			image: "https://static.wixstatic.com/media/ea190b_6bedfb5b04ee4cb7975b9a7e4a20e50a~mv2.jpeg/v1/fill/w_700,h_525,al_c,q_85,enc_avif,quality_auto/ea190b_6bedfb5b04ee4cb7975b9a7e4a20e50a~mv2.jpeg",
			features: ["Stabilitas nutrisi tinggi", "Mendukung tanaman besar", "Kontrol suhu lebih baik", "Sistem backup otomatis"],
		},
	];

	return (
		<div className="min-h-screen bg-gray-50 pt-20">
			{/* Hero Section */}
			<div className="relative h-[50vh] flex items-center justify-center">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
						backgroundImage: 'url("https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
					}}
				>
					<div className="absolute inset-0 bg-emerald-900/40 backdrop-blur-sm" />
				</div>
				<div className="relative z-10 text-center px-4">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Teknologi Hidroponik Modern</h1>
					<p className="text-xl text-white/90 max-w-2xl mx-auto">Solusi pertanian masa depan dengan teknologi canggih dan ramah lingkungan</p>
				</div>
			</div>

			{/* Technologies Section */}
			<section className="py-20 px-4">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-emerald-900 text-center mb-12">Teknologi yang Kami Gunakan</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{technologies.map((tech, index) => (
							<TechCard key={index} {...tech} />
						))}
					</div>
				</div>
			</section>

			{/* Systems Section */}
			<section className="py-20 px-4 bg-white">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-emerald-900 text-center mb-12">Sistem Hidroponik Kami</h2>
					<div className="space-y-8">
						{systems.map((system, index) => (
							<SystemSection key={index} {...system} />
						))}
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-20 px-4">
				<div className="max-w-7xl mx-auto text-center">
					<h2 className="text-3xl font-bold text-emerald-900 mb-12">Keunggulan Teknologi Kami</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-xl shadow-sm">
							<Sun className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-emerald-900 mb-4">Hemat Energi</h3>
							<p className="text-gray-600">Sistem yang dioptimalkan untuk efisiensi energi maksimal</p>
						</div>
						<div className="bg-white p-8 rounded-xl shadow-sm">
							<Droplets className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-emerald-900 mb-4">Hemat Air</h3>
							<p className="text-gray-600">Penggunaan air 90% lebih efisien dibanding pertanian konvensional</p>
						</div>
						<div className="bg-white p-8 rounded-xl shadow-sm">
							<Settings className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-emerald-900 mb-4">Mudah Dikelola</h3>
							<p className="text-gray-600">Sistem otomatis yang dapat dipantau dan dikontrol dari jarak jauh</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HydroponicTech;
