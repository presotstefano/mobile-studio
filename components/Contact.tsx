import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-900 relative">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Info Block */}
                <div>
                    <h2 className="font-display text-6xl text-white mb-8">PRENOTA LA TUA SESSIONE</h2>
                    <p className="text-gray-400 mb-12">
                        Hai bisogno di una sala prove, vuoi organizzare un live streaming o cerchi attrezzatura per il tuo evento? Contattaci subito.
                    </p>
                    
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-brand-red mt-1" />
                            <div>
                                <h4 className="text-white font-bold uppercase tracking-wide mb-1">Dove Siamo</h4>
                                <p className="text-gray-400">Via A. De Gasperi 1, 20045 Lainate (MI)<br/>Plus Code: H285+FR Lainate</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <Phone className="text-brand-red mt-1" />
                            <div>
                                <h4 className="text-white font-bold uppercase tracking-wide mb-1">Telefono</h4>
                                <a href="tel:3342984796" className="text-2xl text-white hover:text-brand-red transition-colors font-display tracking-wide">334 298 4796</a>
                                <p className="text-gray-500 text-sm">Anche WhatsApp</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Mail className="text-brand-red mt-1" />
                            <div>
                                <h4 className="text-white font-bold uppercase tracking-wide mb-1">Email</h4>
                                <a href="mailto:info@lostudiomobile.it" className="text-gray-400 hover:text-white transition-colors">info@lostudiomobile.it</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-12">
                        <a href="#" className="p-3 bg-neutral-800 rounded-full hover:bg-brand-red hover:text-white text-gray-400 transition-all"><Facebook size={20} /></a>
                        <a href="#" className="p-3 bg-neutral-800 rounded-full hover:bg-brand-red hover:text-white text-gray-400 transition-all"><Instagram size={20} /></a>
                    </div>
                </div>

                {/* Form & Map */}
                <div className="space-y-8">
                    <form className="bg-black p-8 rounded border border-white/10 shadow-2xl">
                        <h3 className="text-white font-bold text-xl mb-6">Inviaci una richiesta</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <input type="text" placeholder="Nome" className="bg-neutral-900 border border-neutral-800 text-white p-4 rounded focus:outline-none focus:border-brand-red" />
                            <input type="tel" placeholder="Telefono" className="bg-neutral-900 border border-neutral-800 text-white p-4 rounded focus:outline-none focus:border-brand-red" />
                        </div>
                        <input type="email" placeholder="Email" className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 rounded mb-4 focus:outline-none focus:border-brand-red" />
                        <select className="w-full bg-neutral-900 border border-neutral-800 text-gray-400 p-4 rounded mb-4 focus:outline-none focus:border-brand-red">
                            <option>Sala Prove</option>
                            <option>Live Streaming</option>
                            <option>Noleggio Audio/Video</option>
                            <option>Altro</option>
                        </select>
                        <textarea rows={4} placeholder="Messaggio" className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 rounded mb-6 focus:outline-none focus:border-brand-red"></textarea>
                        <button type="button" className="w-full bg-brand-red text-white font-bold uppercase py-4 rounded hover:bg-red-700 transition-colors shadow-[0_0_15px_rgba(255,0,51,0.4)]">
                            Invia Richiesta
                        </button>
                    </form>

                    {/* Placeholder Map */}
                    <div className="w-full h-48 bg-neutral-800 rounded border border-white/10 relative overflow-hidden group">
                        <img src="https://picsum.photos/id/10/800/400" alt="Map Location" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a 
                              href="https://www.google.com/maps/search/?api=1&query=Via+A.+De+Gasperi+1+20045+Lainate+MI" 
                              target="_blank" 
                              rel="noreferrer"
                              className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-brand-red hover:text-white transition-colors flex items-center gap-2"
                            >
                                <MapPin size={16} /> Apri Maps
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};