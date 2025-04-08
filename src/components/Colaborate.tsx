import React from "react";
import { Users, Lightbulb, BrainCircuit, MessageCircle, Network, LayoutGrid } from "lucide-react";
import { LucideIcon } from "lucide-react";

type TeamCardProps = {
	icon: LucideIcon;
	title: string;
	description: string;
};

const TeamCard = ({ icon: Icon, title, description }: TeamCardProps) => (
	<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
		<div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
			<Icon className="h-6 w-6 text-emerald-600" />
		</div>
		<h3 className="text-lg font-semibold text-emerald-900 mb-2">{title}</h3>
		<p className="text-gray-600">{description}</p>
	</div>
);

const TeamCollaboration = () => {
	const teamValues = [
		{
			icon: Users,
			title: "Kerja Sama Tim",
			description: "Membangun solusi hidroponik dengan sinergi antar anggota tim yang solid dan saling mendukung.",
		},
		{
			icon: Lightbulb,
			title: "Inovasi Berkelanjutan",
			description: "Ide-ide baru terus dikembangkan untuk menciptakan teknologi pertanian masa depan.",
		},
		{
			icon: BrainCircuit,
			title: "Kecerdasan Terintegrasi",
			description: "Menggabungkan teknologi dan keahlian manusia untuk hasil pertanian terbaik.",
		},
		{
			icon: MessageCircle,
			title: "Komunikasi Aktif",
			description: "Diskusi terbuka dan rutin menjamin setiap ide dan masukan dapat terakomodasi.",
		},
		{
			icon: Network,
			title: "Jaringan Kolaboratif",
			description: "Berkolaborasi dengan komunitas, startup, dan institusi untuk memperluas dampak.",
		},
		{
			icon: LayoutGrid,
			title: "Struktur yang Adaptif",
			description: "Tim kami mampu beradaptasi dengan tantangan dan perubahan di lapangan.",
		},
	];

	return (
		<div className="min-h-screen bg-gray-50 pt-20">
			{/* Hero Section */}
			<div className="relative h-[50vh] flex items-center justify-center">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
						backgroundImage: 'url("https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")',
					}}
				>
					<div className="absolute inset-0 bg-emerald-900/50 backdrop-blur-sm" />
				</div>
				<div className="relative z-10 text-center px-4">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Ruang Kolaborasi Tim</h1>
					<p className="text-xl text-white/90 max-w-2xl mx-auto">Di balik setiap inovasi hidroponik kami, terdapat semangat kolaborasi dan kreativitas dari tim yang luar biasa.</p>
				</div>
			</div>

			{/* Values Section */}
			<section className="py-20 px-4">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-emerald-900 text-center mb-12">Nilai-Nilai yang Kami Junjung</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{teamValues.map((value, index) => (
							<TeamCard key={index} {...value} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default TeamCollaboration;
