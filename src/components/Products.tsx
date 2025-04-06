import React from 'react';
import { Salad, Package, Home, BookOpen, ArrowRight } from 'lucide-react';

const ProductCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
    <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-emerald-600" />
    </div>
    <h3 className="text-lg font-semibold text-emerald-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex space-x-4">
      <button className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
        Pesan Sekarang
        <ArrowRight className="h-4 w-4 ml-1" />
      </button>
    </div>
  </div>
);

const Products = () => {
  const products = [
    {
      icon: Salad,
      title: 'Hasil Panen Segar',
      description: 'Sayuran segar berkualitas tinggi yang ditanam dengan sistem hidroponik modern'
    },
    {
      icon: Salad,
      title: 'Produk Olahan Sehat',
      description: 'Salad siap saji, jus buah segar, dan makanan clean food lainnya yang praktis dan cocok untuk gaya hidup sehat'
    },
    {
      icon: Package,
      title: 'Langganan Paket Sayur',
      description: 'Paket sayuran mingguan diantar langsung ke rumah Anda'
    },
    
    {
      icon: BookOpen,
      title: 'Wisata Edukasi & Workshop',
      description: 'Program edukasi dan pelatihan tentang pertanian urban modern'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Produk & Layanan</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Solusi lengkap untuk kebutuhan pertanian urban Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;