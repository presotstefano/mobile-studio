import React from 'react';
import { Music, Video, Speaker, Truck, Clock, Wifi } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="bg-neutral-900">

      {/* --- REHEARSAL ROOMS --- */}
      <section id="rooms" className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-sm">Il Cuore Dello Studio</span>
            <h2 className="font-display text-5xl md:text-7xl text-white mt-2">SALE PROVE PREMIUM</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded bg-brand-gray border border-white/5 hover:border-brand-red/50 transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img src="https://picsum.photos/id/145/600/400" alt="Sala A" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-3xl text-white mb-2">SALA A - "THE STAGE"</h3>
                <p className="text-gray-400 text-sm mb-6">Ampia metratura, ideale per band numerose. Acustica trattata per simulare la risposta di un palco live.</p>
                <ul className="text-gray-500 text-sm space-y-2 mb-6">
                  <li className="flex items-center gap-2"><Music size={14} className="text-brand-red" /> Amplificatori Valvolari.</li>
                  <li className="flex items-center gap-2"><Wifi size={14} className="text-brand-red" /> Live Recording Ready.</li>
                  <li className="flex items-center gap-2"><Clock size={14} className="text-brand-red" /> Climatizzata.</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded bg-brand-gray border border-white/5 hover:border-brand-red/50 transition-all duration-300 transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold px-3 py-1 z-10">POPULAR</div>
              <div className="h-64 overflow-hidden">
                <img src="https://picsum.photos/id/158/600/400" alt="Sala B" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-3xl text-white mb-2">SALA B - "THE STUDIO"</h3>
                <p className="text-gray-400 text-sm mb-6">Perfetta per la pre-produzione. Suono asciutto, preciso, ideale per registrare demo al volo.</p>
                <ul className="text-gray-500 text-sm space-y-2 mb-6">
                  <li className="flex items-center gap-2"><Music size={14} className="text-brand-red" /> Batteria Premium</li>
                  <li className="flex items-center gap-2"><Wifi size={14} className="text-brand-red" /> Mixer Digitale</li>
                  <li className="flex items-center gap-2"><Clock size={14} className="text-brand-red" /> Climatizzata</li>
                </ul>
              </div>
            </div>

            {/* Card 3 - Info */}
            <div className="flex flex-col justify-center bg-gradient-to-br from-neutral-800 to-black p-8 rounded border border-white/10">
              <Clock className="text-brand-red mb-4" size={48} />
              <h3 className="font-display text-3xl text-white mb-2">ORARI ESTESI</h3>
              <p className="text-gray-400 mb-6">Aperti tutti i giorni per la tua creatività notturna.</p>
              <div className="text-2xl font-bold text-white mb-1">10:00 → 01:00</div>
              <div className="text-sm text-gray-500 mb-8">7 Giorni su 7</div>
              <a href="#contact" className="text-center w-full py-3 border border-white/20 text-white font-bold uppercase hover:bg-white hover:text-black transition-colors">Prenota Ora</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- STREAMING --- */}
      <section id="streaming" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/450/1920/1080')] bg-cover bg-fixed opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,0,51,0.2)]">
                <img src="https://picsum.photos/id/250/800/600" alt="Streaming Setup" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-all cursor-pointer">
                  <Video size={64} className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-display text-5xl text-white mb-6">LIVE STREAMING <span className="text-brand-red">BROADCAST</span></h2>
              <p className="text-gray-400 text-lg mb-6">
                Porta la tua musica ovunque. Che sia un concerto intimo in sala prove o un evento in location esterna, la nostra regia mobile garantisce qualità televisiva.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Regia multicamera Full HD/4K",
                  "Audio mixato e masterizzato in tempo reale",
                  "Streaming su Facebook, YouTube, Twitch e Instagram",
                  "Ideale per concerti, webinar e presentazioni"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-brand-red rounded-full shadow-[0_0_8px_#FF0033]"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-3 bg-brand-red text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-colors">
                Scopri i Pacchetti
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- RENTAL --- */}
      <section id="rental" className="py-24 bg-brand-dark border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-white">NOLEGGIO & SERVICE</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Soluzioni chiavi in mano per eventi aziendali, congressi e concerti. Trasporto e montaggio sempre inclusi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Speaker size={40} className="text-brand-red mb-4" />,
                title: "AUDIO PROFESSIONALE",
                items: ["Impianti PA & Line Array", "Microfoni Shure/Sennheiser", "Mixer Digitali", "Backline completo"]
              },
              {
                icon: <Video size={40} className="text-brand-red mb-4" />,
                title: "VIDEO & PROIEZIONE",
                items: ["Videoproiettori Laser", "Ledwall", "Regia video mobile", "Monitor di palco"]
              },
              {
                icon: <Truck size={40} className="text-brand-red mb-4" />,
                title: "PEDANE & STRUTTURE",
                items: ["Palchi modulari", "Pedane per conferenze", "Americane & Truss", "Luci motorizzate"]
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-neutral-900 p-8 rounded border-l-4 border-brand-red hover:bg-neutral-800 transition-colors">
                {service.icon}
                <h3 className="font-display text-2xl text-white mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm border-b border-white/5 pb-2 last:border-0">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};