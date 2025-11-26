import React from 'react';
import { ChevronDown, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/452/1920/1080" 
          alt="Studio Background" 
          className="w-full h-full object-cover filter brightness-50 contrast-125 grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-brand-dark"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-block border border-brand-red/50 bg-brand-red/10 px-4 py-1 rounded-full mb-6 backdrop-blur-sm animate-fade-in-up">
          <span className="text-brand-red font-bold text-xs tracking-[0.2em] uppercase">Lainate • Milano</span>
        </div>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-none mb-6 drop-shadow-2xl animate-fade-in-up">
          CREA. SUONA. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-400">TRASMETTI.</span>
        </h1>
        
        <p className="font-light text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-100">
          La tua sala prove professionale con <strong className="text-white">Live Streaming Integrato</strong>. 
          Spazi climatizzati, strumentazione top e servizi di noleggio per eventi che lasciano il segno.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200">
          <a 
            href="#rooms" 
            className="w-full md:w-auto px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,0,51,0.4)]"
          >
            Prenota Sala
          </a>
          <a 
            href="#rental" 
            className="w-full md:w-auto px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white font-bold uppercase tracking-widest rounded-sm hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
          >
            <PlayCircle size={20} />
            Noleggio A/V
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};