import React from 'react';
import { Plane as Plant, Droplets, Sun, Wind, Thermometer, Activity } from 'lucide-react';

const MetricCard = ({ icon: Icon, title, value, unit }: { icon: any; title: string; value: string; unit: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center space-x-4">
      <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center">
        <Icon className="h-6 w-6 text-emerald-600" />
      </div>
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-emerald-900">
          {value}
          <span className="text-lg font-normal text-gray-600 ml-1">{unit}</span>
        </p>
      </div>
    </div>
  </div>
);

const FeatureCard = ({ title, description, image }: { title: string; description: string; image: string }) => (
  <div className="group relative overflow-hidden rounded-xl">
    <div 
      className="absolute inset-0 bg-cover bg-center transform transition-transform group-hover:scale-110"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 to-transparent opacity-90" />
    <div className="relative p-8 h-full flex flex-col justify-end">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
  </div>
);

const Explore = () => {
  const metrics = [
    { icon: Plant, title: 'Tanaman Aktif', value: '2,500', unit: 'plants' },
    { icon: Droplets, title: 'Penggunaan Air', value: '85', unit: 'L/day' },
    { icon: Sun, title: 'Efisiensi Energi', value: '95', unit: '%' },
    { icon: Wind, title: 'Sirkulasi Udara', value: '24/7', unit: 'active' },
    { icon: Thermometer, title: 'Suhu Optimal', value: '23', unit: '°C' },
    { icon: Activity, title: 'Produktivitas', value: '+12', unit: '%' }
  ];

  const features = [
    {
      title: 'Sistem Hidroponik Modern',
      description: 'Teknologi terkini untuk hasil panen optimal',
      image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Monitoring Real-time',
      description: 'Pantau pertumbuhan tanaman 24/7',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Laboratorium Penelitian',
      description: 'Inovasi untuk kualitas terbaik',
      image: 'https://images.unsplash.com/photo-1576319155264-99536e0be1ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-emerald-900/40 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Jelajahi Teknologi Kami
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Lihat bagaimana kami mengintegrasikan teknologi modern dengan pertanian urban
          </p>
        </div>
      </div>

      {/* Metrics Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 text-center mb-12">
            Metrik Performa
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 text-center mb-12">
            Fitur Unggulan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 h-[400px]">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">
            Ingin Melihat Lebih Dekat?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Jelajahi fasilitas kami melalui tur virtual atau kunjungi langsung greenhouse kami
          </p>
          <button className="px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors text-lg font-medium">
            Mulai Tur Virtual
          </button>
        </div>
      </section>
    </div>
  );
};

export default Explore;