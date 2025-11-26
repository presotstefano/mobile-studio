import React from 'react';
import { Mic2, Heart, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <h2 className="font-display text-5xl md:text-6xl text-white leading-tight">
              SENTIRE LO SPETTACOLO <span className="text-brand-red">FIN DAL PRIMO ISTANTE</span>
            </h2>
            <div className="w-20 h-1 bg-brand-red"></div>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Lo Studio Mobile non è solo un luogo insonorizzato. È un ecosistema nato per musicisti esperti e artisti emergenti che vogliono fare sul serio. Con oltre 20 anni di esperienza, abbiamo progettato spazi che traspirano energia scenica.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Dalla sala prove trattata acusticamente al palco virtuale del nostro streaming, ogni dettaglio è curato per farti sentire come se fossi già live davanti al tuo pubblico.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {[
                { icon: <Mic2 className="text-brand-red" size={32} />, label: "Gear Pro", desc: "Attrezzatura Top" },
                { icon: <Zap className="text-brand-red" size={32} />, label: "Vibe", desc: "Luci Sceniche" },
                { icon: <Heart className="text-brand-red" size={32} />, label: "Passione", desc: "Staff Esperto" },
              ].map((item, idx) => (
                <div key={idx} className="bg-brand-gray p-4 rounded border border-white/5 text-center hover:border-brand-red/50 transition-colors">
                  <div className="mb-3 flex justify-center">{item.icon}</div>
                  <h4 className="font-bold text-white uppercase text-sm mb-1">{item.label}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-red/20 blur-xl rounded-full opacity-50"></div>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <img src="https://picsum.photos/id/453/400/500" alt="Musician performing" className="rounded shadow-2xl w-full h-full object-cover translate-y-8 grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="https://picsum.photos/id/338/400/500" alt="Studio gear" className="rounded shadow-2xl w-full h-full object-cover -translate-y-8 grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};