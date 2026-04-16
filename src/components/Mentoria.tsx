import React from 'react';
import Image from 'next/image';
import { Coustard } from "next/font/google";
import TextCarousel from './CarrosselMentorado';

const coustard = Coustard({
  weight: "900",
  variable: "--font-coustard",
  subsets: ["latin"],
});

const Mentoria = () => {
  
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-10 flex flex-col md:flex-row gap-20">
        <div className="md:w-1/2 relative group">
          <div className="w-full aspect-square rounded-[40px] overflow-hidden relative transition-all duration-500">
            <Image
              src="/MENTORADO/mentorado.png"
              alt="Mentorado"
              fill
              className="object-cover group-hover:scale-102 transition-transform duration-500"
            />

            {/* Título integrado na imagem */}
            <div className="absolute top-5 left-5 z-30 pointer-events-none">
              <h2 className="texto-mentoria font-black uppercase leading-[1.3] tracking-tighter object-cover group-hover:scale-102 transition-transform duration-500">
                Focados na<br />
                Evolução de<br />
              </h2>
              <h1 className="texto-eco font-black uppercase leading-[1.6] tracking-tighter object-cover group-hover:scale-102 transition-transform duration-500">
                <span className="text-qwa-primary">Pessoas</span>
              </h1>

            </div>

          </div>
        </div>

        <div className="md:w-1/2 space-y-10 flex flex-col justify-center" style={{backgroundColor: 'purple'}}>
          <TextCarousel />
        </div>
      </div>
    </section>
  );
};

export default Mentoria;
