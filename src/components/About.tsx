import React from 'react';
import { Leaf, Users, Lightbulb, Shield } from 'lucide-react';

const ValueCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-emerald-600" />
    </div>
    <h3 className="text-lg font-semibold text-emerald-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Keberlanjutan',
      description: 'Komitmen kami untuk masa depan yang lebih hijau dan berkelanjutan'
    },
    {
      icon: Users,
      title: 'Kolaborasi',
      description: 'Bersama membangun ekosistem pangan yang lebih baik'
    },
    {
      icon: Lightbulb,
      title: 'Inovasi',
      description: 'Selalu mencari solusi baru yang efisien dan berdampak.'
    },
    {
      icon: Shield,
      title: 'Integritas',
      description: 'Menjunjung kejujuran dan tanggung jawab lingkungan'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Tentang Kami</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            TERRAKOTA adalah inisiatif hijau berbasis hidroponik urban yang ingin menciptakan ruang hijau produktif di tengah kota.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Visi</h3>
            <p className="text-gray-600">
              Menjadi pelopor dalam solusi pertanian modern berkelanjutan yang mendukung ekosistem kota hijau yang dimulai dari skala terkecil yaitu desa.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Misi</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Mengembangkan sistem pertanian hidroponik yang efisien.</li>
              <li>• Menyediakan produk segar dan sehat langsung dari greenhouse ke konsumen.</li>
              <li>• Berkolaborasi dengan mitra bisnis untuk membentuk jaringan pangan lokal yang kuat.</li>
              <li>• Menyediakan produk segar dan sehat langsung dari greenhouse ke konsumen.</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-emerald-900 text-center mb-8">Nilai Perusahaan</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;