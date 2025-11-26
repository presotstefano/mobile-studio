import React, { useState, useEffect } from 'react';
import { Menu, X, Music2 } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Chi Siamo', href: '#about' },
  { label: 'Sale Prove', href: '#rooms' },
  { label: 'Streaming', href: '#streaming' },
  { label: 'Noleggio', href: '#rental' },
  { label: 'Contatti', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="bg-brand-red p-2 rounded text-white group-hover:shadow-[0_0_15px_rgba(255,0,51,0.6)] transition-all">
            <Music2 size={24} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl tracking-wider text-white">LO STUDIO MOBILE</span>
            <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">Sala Prove & Noleggio</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-brand-red transition-colors font-medium relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-red text-white px-6 py-2 rounded-sm font-bold uppercase text-sm tracking-wider hover:bg-red-700 transition-colors shadow-[0_0_10px_rgba(255,0,51,0.3)] hover:shadow-[0_0_20px_rgba(255,0,51,0.6)]"
          >
            Prenota Ora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-brand-red transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen py-8' : 'max-h-0 py-0'}`}>
        <div className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xl font-display tracking-widest text-white hover:text-brand-red"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};