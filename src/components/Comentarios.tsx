"use client";

import React from 'react';

const Comentarios = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const testimonials = [
    { 
      name: "Alisson Honório", 
      role: "Estagio 2024",
      text: "Grande oportunidade de aprendizado praticando e interagindo com projetos reais! A QWA realmente entrega valor." 
    },
    { 
      name: "Matheus Correia", 
      role: "Estagio 2025",
      text: "A agilidade e qualidade técnica da equipe são impressionantes. Superaram nossas expectativas em cada entrega." 
    },
    { 
      name: "Gabriel Ferreira", 
      role: "Estagio 2025",
      text: "Transformaram nossos desafios complexos em soluções simples. O suporte e a consultoria são de primeiro nível." 
    },
    { 
      name: "Ana Luiza de Oliveira", 
      role: "Estagio 2026",
      text: "Grata por cada oportunidade de aprendizado, o mentorado vem sendo um exemplo de crescimento diário! 💙" 
    }
  ];

  const next = () => setActiveIndex((prev) => (prev + 2) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-gray-50/30">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Right Content - Moved to the right of the carousel */}
          <div className="lg:w-1/3 order-2 lg:order-2">
            <h2 className="text-5xl font-black text-qwa-dark tracking-tighter leading-[0.9] mb-8">
              pessoas que <br />
              participaram <br />
              do projeto
            </h2>
            <p className="text-gray-500 font-medium leading-relaxed mb-10">
              O sucesso de cada projeto é construído através da colaboração e dedicação de todos os envolvidos. Confira o que dizem sobre nossa jornada juntos.
            </p>
            <button className="bg-qwa-dark text-white px-10 py-4 rounded-full font-black hover:scale-105 transition-transform shadow-xl uppercase text-xs tracking-widest">
              Saber Mais
            </button>
          </div>

          {/* Carousel Section - Moved to the left */}
          <div className="lg:w-2/3 relative py-10 order-1 lg:order-1 overflow-hidden">
            <div className="overflow-visible px-10"> {/* More padding for shadows */}
              <div 
                className="flex transition-transform duration-700 ease-in-out gap-8" 
                style={{ transform: `translateX(-${activeIndex * 40}%)` }}
              >
                {testimonials.map((item, i) => (
                  <div 
                    key={i} 
                    className="w-[calc(40%-24px)] flex-shrink-0 bg-white p-10 rounded-[40px] shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col justify-between min-h-[420px] relative z-10"
                  >
                    <div className="text-qwa-primary/20 mb-6">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21H10.017V17.031L12.017 13C12.017 13 12.665 11.003 14.017 11.003V13.003C14.017 13.003 13.017 13.003 13.017 14.003H14.017C15.1216 14.003 16.017 14.8984 16.017 16.003V17.003C16.017 18.1076 15.1216 19.003 14.017 19.003V21ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C9.12157 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.12157 23 8.017 23H5.017C3.91243 23 3.017 22.1046 3.017 21ZM3.017 21H0.017V17.031L2.017 13C2.017 13 2.665 11.003 4.017 11.003V13.003C4.017 13.003 3.017 13.003 3.017 14.003H4.017C5.12157 14.003 6.017 14.8984 6.017 16.003V17.003C6.017 18.1076 5.12157 19.003 4.017 19.003V21Z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 text-lg font-medium leading-relaxed italic mb-8">
                      "{item.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-qwa-primary/10 flex items-center justify-center text-qwa-primary font-black text-xs">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-black text-qwa-dark uppercase text-[10px] tracking-widest">{item.name}</h5>
                        <p className="text-qwa-primary font-bold text-[8px] uppercase tracking-wider mt-0.5">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              <button 
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-qwa-primary hover:text-white hover:border-qwa-primary transition-all shadow-sm"
              >
                <span>←</span>
              </button>
              <button 
                onClick={next}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-qwa-primary hover:text-white hover:border-qwa-primary transition-all shadow-sm"
              >
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comentarios;
