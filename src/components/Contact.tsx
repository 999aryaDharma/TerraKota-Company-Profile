import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, content }: { icon: any, title: string, content: string }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
        <Icon className="h-5 w-5 text-emerald-600" />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-medium text-emerald-900">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Hubungi Kami</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Hubungi kami sekarang
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">Kirim Pesan</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
              >
                Kirim Pesan
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  content="info@terrakota.id"
                />
                <ContactInfo
                  icon={Phone}
                  title="Telepon"
                  content="+62 821-2345-6789"
                />
                <ContactInfo
                  icon={MapPin}
                  title="Lokasi"
                  content="Desa Sambangan, Kabupaten Buleleng, Bali"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Ayo Berkolaborasi!</h3>
              <p className="text-gray-600 mb-6">
                Kami selalu terbuka untuk kolaborasi dengan berbagai pihak yang memiliki visi yang sama dalam membangun ekosistem pangan yang berkelanjutan.
              </p>
              <button className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
                Mulai Kolaborasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;