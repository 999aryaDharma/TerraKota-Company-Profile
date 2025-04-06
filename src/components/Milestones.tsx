import React from 'react';
import { Calendar } from 'lucide-react';

const MilestoneCard = ({ date, title, description }: { date: string, title: string, description: string }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center">
        <Calendar className="h-6 w-6 text-emerald-600" />
      </div>
    </div>
    <div className="flex-grow">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <span className="text-sm font-medium text-emerald-600">{date}</span>
        <h3 className="text-lg font-semibold text-emerald-900 mt-1 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const Milestones = () => {
  const milestones = [
    {
      date: 'Q1 2025',
      title: 'Ide Bisnis Dicetuskan',
      description: 'TERRAKOTA dimulai dengan visi menciptakan kota yang lebih hijau dan berkelanjutan'
    },
    {
      date: 'Q2 2025',
      title: 'Uji Coba Greenhouse Mini',
      description: 'Implementasi prototype greenhouse dan sistem hidroponik pertama'
    },
    {
      date: 'Q3 2025',
      title: 'First Partner',
      description: 'Dapat kerja sama pertama dengan partner lokal'
    },
    {
      date: 'Q4 2025',
      title: 'Peluncuran Produk Clean Food',
      description: 'Meluncurkan lini produk sayuran hidroponik dan paket berlangganan'
    }
  ];

  return (
    <section id="milestones" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Milestone</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Perjalanan kami menuju pertanian urban yang berkelanjutan
          </p>
        </div>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <MilestoneCard key={index} {...milestone} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;