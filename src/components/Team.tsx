import React from 'react';
import { Users2 } from 'lucide-react';

const TeamMember = ({ role, department }: { role: string, department: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
    <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
      <Users2 className="h-6 w-6 text-emerald-600" />
    </div>
    <h3 className="text-lg font-semibold text-emerald-900 mb-1">{role}</h3>
    <p className="text-gray-600">{department}</p>
  </div>
);

const Team = () => {
  const executives = [
    { role: 'Chief Executive Officer', department: 'Management' },
    { role: 'Chief Technology Officer', department: 'Technology' },
    { role: 'Chief Operating Officer', department: 'Operations' },
    { role: 'Chief Marketing Officer', department: 'Marketing' }
  ];

  const supportTeam = [
    { role: 'Lead Agronom', department: 'Research & Development' },
    { role: 'Senior Teknisi', department: 'Operations' },
    { role: 'Design Lead', department: 'Creative' },
    { role: 'Admin Manager', department: 'Administration' }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Struktur Organisasi</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tim kami yang berdedikasi untuk mengembangkan solusi pertanian urban
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-emerald-900 mb-6">Jajaran Eksekutif</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {executives.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-emerald-900 mb-6">Tim Pendukung</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportTeam.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;