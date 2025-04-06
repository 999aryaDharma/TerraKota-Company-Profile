import React from 'react';
import { Award, Target } from 'lucide-react';

const CertificationCard = ({ icon: Icon, title, description, status }: { icon: any, title: string, description: string, status: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-emerald-600" />
    </div>
    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-3">
      {status}
    </span>
    <h3 className="text-lg font-semibold text-emerald-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Certifications = () => {
  const certifications = [
    {
      icon: Target,
      title: 'Sertifikasi Pangan Organik',
      description: 'Standar kualitas produk pangan organik nasional',
      status: 'Target 2025'
    },
    {
      icon: Target,
      title: 'ISO 14001',
      description: 'Standar internasional sistem manajemen lingkungan',
      status: 'Target 2025'
    },
    {
      icon: Award,
      title: 'Greenovator Awards',
      description: 'Penghargaan inovasi teknologi hijau nasional',
      status: 'Nominasi 2026'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Sertifikasi & Target</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Komitmen kami terhadap standar kualitas dan keberlanjutan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;