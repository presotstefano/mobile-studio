import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-center md:text-left">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col">
            <h5 className="font-display text-2xl text-white tracking-widest">LO STUDIO MOBILE</h5>
            <p className="text-xs text-gray-500 mt-1">© {new Date().getFullYear()} Tutti i diritti riservati.</p>
          </div>

          <div className="flex gap-8 text-sm text-gray-400 font-medium">
            <a href="#rooms" className="hover:text-brand-red transition-colors">Sala Prove</a>
            <a href="#rental" className="hover:text-brand-red transition-colors">Noleggio</a>
            <a href="#contact" className="hover:text-brand-red transition-colors">Contatti</a>
            <a href="#" className="hover:text-brand-red transition-colors">Privacy</a>
          </div>

          <div className="text-gray-500 text-xs text-right">
             <p>Designed with <span className="text-brand-red">♥</span> in Lainate</p>
          </div>
        </div>
      </div>
    </footer>
  );
};