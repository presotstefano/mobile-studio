import React from 'react';

const images = [
  "https://picsum.photos/id/453/400/400",
  "https://picsum.photos/id/117/400/400", 
  "https://picsum.photos/id/129/400/400",
  "https://picsum.photos/id/145/400/400",
  "https://picsum.photos/id/158/400/400",
  "https://picsum.photos/id/196/400/400",
  "https://picsum.photos/id/250/400/400",
  "https://picsum.photos/id/338/400/400",
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 mb-12 flex justify-between items-end">
        <div>
           <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-sm">Portfolio</span>
           <h2 className="font-display text-5xl text-white">GALLERY</h2>
        </div>
        <div className="hidden md:block">
            <span className="text-gray-500 text-sm">Follow us on Instagram @lostudiomobile</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-1">
        {images.map((src, i) => (
            <div key={i} className={`relative group overflow-hidden ${i === 0 || i === 5 ? 'col-span-2 row-span-2' : ''}`}>
                <img 
                    src={src} 
                    alt="Gallery item" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-brand-red/80 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
        ))}
      </div>
    </section>
  );
};