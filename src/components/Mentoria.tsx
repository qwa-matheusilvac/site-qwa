import React from 'react';
import Image from 'next/image';

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
      name: "Gabriel Ferreira", 
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
            <div className="absolute top-10 left-10 z-30 pointer-events-none">
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.8] tracking-tighter">
                Focados na<br />
                Evolução de<br />
                <span className="text-qwa-primary">Pessoas</span>
              </h2>
            </div>

            <div className="absolute bottom-12 left-12 text-white z-20">
              <p className="font-black text-3xl uppercase tracking-widest drop-shadow-lg">Mentorado</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-qwa-primary/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <div className="md:w-1/2 space-y-10 flex flex-col justify-center">
          {testimonials.map((item, i) => (
            <div 
              key={i} 
              className="bg-qwa-primary text-white p-10 rounded-3xl relative shadow-xl hover:translate-x-4 transition-all duration-300"
            >
              <h5 className="font-black uppercase text-lg mb-4 tracking-widest">{item.name}</h5>
              <p className="text-lg italic opacity-90 leading-relaxed">
                "{item.text}"
              </p>
              <div className="absolute right-8 bottom-8 text-qwa-cyan opacity-40">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21H10.017V17.031L12.017 13C12.017 13 12.665 11.003 14.017 11.003V13.003C14.017 13.003 13.017 13.003 13.017 14.003H14.017C15.1216 14.003 16.017 14.8984 16.017 16.003V17.003C16.017 18.1076 15.1216 19.003 14.017 19.003V21ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C9.12157 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.12157 23 8.017 23H5.017C3.91243 23 3.017 22.1046 3.017 21ZM3.017 21H0.017V17.031L2.017 13C2.017 13 2.665 11.003 4.017 11.003V13.003C4.017 13.003 3.017 13.003 3.017 14.003H4.017C5.12157 14.003 6.017 14.8984 6.017 16.003V17.003C6.017 18.1076 5.12157 19.003 4.017 19.003V21Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentoria;
