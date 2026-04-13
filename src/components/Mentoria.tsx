import React from 'react';
import Image from 'next/image';
import { Coustard } from "next/font/google";

const coustard = Coustard({
  weight: "900",
  variable: "--font-coustard",
  subsets: ["latin"],
});

const Mentoria = () => {
  const testimonials = [
    {
      name: "Alisson Honório",
      text: "Grande oportunidade de aprendizado praticando e interagindo com projetos reais!"
    },
    {
      name: "Matheus Correia",
      text: "Grande oportunidade de aprendizado praticando e interagindo com projetos reais!"
    },
    {
      name: "Gabriel Corrêa",
      text: "Grande oportunidade de aprendizado praticando e interagindo com projetos reais!"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-10 flex flex-col md:flex-row gap-20">
        <div className="md:w-1/2 relative group">
          <div className="w-full aspect-square rounded-[40px] overflow-hidden relative shadow-2xl transition-all duration-500">
            <Image
              src="/MENTORADO/mentorado.png"
              alt="Mentorado"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Título integrado na imagem */}
            <div className="absolute top-6 left-5 z-30 pointer-events-none">
              <h2 className="texto-mentoria font-black uppercase leading-[1.2] tracking-tighter object-cover group-hover:scale-110 transition-transform duration-700">
                Focados na<br />
                Evolução de<br />
                <span className="text-qwa-primary">Pessoas</span>
              </h2>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-qwa-primary/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-10 flex flex-col justify-center">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-qwa-primary text-white p-6 rounded-3xl relative shadow-xl hover:translate-x-4 transition-all duration-300"
            >
              <h5 className="font-black uppercase text-lg mb-4 tracking-widest">{item.name}</h5>
              <p className="text-lg italic opacity-90 leading-relaxed">
                &quot;{item.text}&quot;
              </p>
              <div className="absolute right-8 bottom-15 text-qwa-cyan opacity-50">
                <p className="--qwa-cyan" style={{ fontSize: '56px', fontFamily: 'coustard' }}>&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentoria;
