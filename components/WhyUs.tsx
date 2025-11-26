import React from 'react';
import { Award, Users, ShieldCheck, Clock } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const features = [
    { icon: <Award size={32} />, title: "20+ Anni Esperienza", text: "Conosciamo ogni aspetto del live e dello studio." },
    { icon: <ShieldCheck size={32} />, title: "Qualità Certificata", text: "Solo brand top di gamma per la massima affidabilità." },
    { icon: <Users size={32} />, title: "Staff Presente", text: "Assistenza tecnica dedicata durante tutto l'evento." },
    { icon: <Clock size={32} />, title: "Flessibilità", text: "Orari e soluzioni su misura per ogni esigenza." },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-brand-red to-red-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              <div className="mb-4 p-3 bg-white/10 rounded-full backdrop-blur-sm">
                {feature.icon}
              </div>
              <h4 className="font-display text-xl mb-2">{feature.title}</h4>
              <p className="text-white/80 text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};