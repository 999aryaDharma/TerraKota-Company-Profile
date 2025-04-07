import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Info, Clock, Check } from "lucide-react";

interface ProductData {
	[key: string]: {
		title: string;
		description: string;
		image: string;
		features: string[];
		price?: string;
		benefits: string[];
	};
}

const productData: ProductData = {
	"sayuran-segar": {
		title: "Sayuran Segar Hidroponik",
		description: "Sayuran berkualitas premium yang ditanam dengan sistem hidroponik modern, bebas pestisida dan kaya nutrisi.",
		image: "https://img.freepik.com/free-photo/local-retailer-taking-care-his-business_23-2149349395.jpg?t=st=1744027989~exp=1744031589~hmac=f83dcc16c7f101e620d03d7f68757eec55165affa40c61e214027b9fb9217281&w=1380",
		features: ["Dipanen langsung saat dipesan", "Bebas pestisida", "Kaya nutrisi", "Terjamin kesegarannya"],
		price: "Mulai Rp 15.000/pack",
		benefits: ["Lebih segar dan tahan lama", "Rasa lebih manis dan renyah", "Bebas residu pestisida", "Dipanen pada tingkat kematangan optimal"],
	},
	"produk-olahan": {
		title: "Produk Olahan Sehat",
		description: "Rangkaian produk olahan sehat dari bahan-bahan premium hidroponik kami, dirancang untuk gaya hidup sehat Anda.",
		image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
		features: ["Salad siap saji", "Jus sayur dan buah", "Smoothie bowl", "Wrap sehat"],
		price: "Mulai Rp 25.000/porsi",
		benefits: ["Praktis dan siap santap", "Nutrisi terjaga", "Tanpa pengawet", "Menu berrotasi setiap minggu"],
	},
	"langganan-paket": {
		title: "Langganan Paket Sayur",
		description: "Nikmati kemudahan mendapatkan sayuran segar setiap minggu langsung diantar ke rumah Anda.",
		image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
		features: ["Pengiriman mingguan", "Pilihan paket fleksibel", "Gratis ongkir", "Bisa custom pesanan"],
		price: "Mulai Rp 150.000/minggu",
		benefits: ["Hemat waktu dan tenaga", "Sayuran selalu segar", "Harga lebih ekonomis", "Fleksibel sesuai kebutuhan"],
	},
	"wisata-edukasi": {
		title: "Wisata Edukasi & Workshop",
		description: "Program edukasi dan pelatihan tentang pertanian urban modern untuk individu, komunitas, dan institusi.",
		image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
		features: ["Tour greenhouse", "Workshop hidroponik", "Kelas memasak sehat", "Program magang"],
		price: "Mulai Rp 75.000/orang",
		benefits: ["Pengalaman langsung", "Materi komprehensif", "Sertifikat keikutsertaan", "Networking dengan praktisi"],
	},
};

const ProductDetail = () => {
	const { productId } = useParams();
	const product = productId ? productData[productId] : null;

	if (!product) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-emerald-900 mb-4">Produk tidak ditemukan</h2>
					<Link to="/#products" className="text-emerald-600 hover:text-emerald-700">
						Kembali ke Produk
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen pt-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<Link to="/#products" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
					<ArrowLeft className="h-5 w-5 mr-2" />
					Kembali ke Produk
				</Link>

				<div className="bg-white rounded-xl overflow-hidden shadow-sm">
					<div className="h-96 relative">
						<img src={product.image} alt={product.title} className="w-full h-full object-cover" />
					</div>

					<div className="py-8 px-4">
						<h1 className="text-3xl font-bold text-emerald-900 mb-4">{product.title}</h1>
						<p className="text-gray-600 text-lg mb-6">{product.description}</p>

						{product.price && (
							<div className="bg-emerald-50 p-4 rounded-lg mb-8">
								<div className="flex items-center">
									<ShoppingCart className="h-5 w-5 text-emerald-600 mr-2" />
									<span className="text-emerald-900 font-semibold">{product.price}</span>
								</div>
							</div>
						)}

						<div className="grid md:grid-cols-2 gap-8 mb-8">
							<div>
								<div className="flex items-center mb-4">
									<Info className="h-5 w-5 text-emerald-600 mr-2" />
									<h2 className="text-xl font-semibold text-emerald-900">Fitur</h2>
								</div>
								<ul className="space-y-3">
									{product.features.map((feature, index) => (
										<li key={index} className="flex items-center text-gray-600">
											<Check className="h-5 w-5 text-emerald-600 mr-2" />
											{feature}
										</li>
									))}
								</ul>
							</div>

							<div>
								<div className="flex items-center mb-4">
									<Clock className="h-5 w-5 text-emerald-600 mr-2" />
									<h2 className="text-xl font-semibold text-emerald-900">Manfaat</h2>
								</div>
								<ul className="space-y-3">
									{product.benefits.map((benefit, index) => (
										<li key={index} className="flex items-center text-gray-600">
											<Check className="h-5 w-5 text-emerald-600 mr-2" />
											{benefit}
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="flex justify-center">
							<Link to="/#contact" className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
								Pesan Sekarang
								<ArrowLeft className="h-5 w-5 ml-2 transform rotate-180" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
