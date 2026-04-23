"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const NossasSolucoes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const solucoes = [
    { 
      title: "Consultoria & Arquitetura", 
      category: "Estratégia",
      desc: "Direcionamento estratégico para arquitetura de sistemas e governança tecnológica.", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }, 
    { 
      title: "Fábrica de Software", 
      category: "Desenvolvimento",
      desc: "Desenvolvimento robusto com entregas contínuas e rigorosos padrões de qualidade.", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      title: "Team as a Service (TaaS)", 
      category: "Escalabilidade",
      desc: "Escalabilidade imediata com profissionais de elite integrados diretamente ao seu fluxo.", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      title: "Transformação Digital", 
      category: "Inovação",
      desc: "Migração de legados e modernização de processos para a era da inteligência de dados.", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      title: "Design UX / UI", 
      category: "Interface",
      desc: "Experíencias memoráveis e interfaces intuitivas que conectam sua marca aos usuários.", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      title: "Criação de Site", 
      category: "Web",
      desc: "Desenvolvimento de sites institucionais e landing pages de alta conversão.", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    { 
      title: "Software Customizado", 
      category: "Personalizado",
      desc: "Soluções personalizadas desenhadas especificamente para resolver as dores do seu negócio.", 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % solucoes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, solucoes.length]);

  return (
    <section id="solucoes" className="py-24 bg-white overflow-hidden">
      <div className="w-full bg-qwa-dark/10 py-16 md:py-24 px-10 border-y border-qwa-dark/5">
        <div className="container mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-qwa-dark tracking-tight mb-6">
              Nossas <span className="text-qwa-lilac">Soluções</span>
            </h2>
            <p className="text-gray-500 font-medium max-w-2xl text-base">
              Exploramos o melhor da tecnologia para entregar resultados que transformam negócios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {solucoes.map((item, i) => {
              const isCurrentActive = activeIndex === i;
              
              return (
                <div 
                  key={i} 
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setActiveIndex(i);
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`p-6 rounded-[28px] transition-all duration-500 flex flex-col group cursor-pointer border
                    ${isCurrentActive 
                      ? 'bg-qwa-lilac border-qwa-lilac shadow-xl scale-[1.02]' 
                      : 'bg-white border-white shadow-sm hover:shadow-xl hover:bg-qwa-lilac hover:scale-[1.02]'}`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 flex items-center justify-center transition-colors duration-300
                      ${isCurrentActive ? 'text-white' : 'text-qwa-blue group-hover:text-white'}`}>
                      {item.icon}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors
                      ${isCurrentActive ? 'text-white/60' : 'text-gray-400 group-hover:text-white/60'}`}>
                      {item.category}
                    </span>
                  </div>

                  <h3 className={`text-lg font-black mb-3 leading-tight transition-colors
                    ${isCurrentActive ? 'text-white' : 'text-qwa-dark group-hover:text-white'}`}>
                    {item.title}
                  </h3>
                  
                  <p className={`text-xs font-medium leading-relaxed mb-6 line-clamp-3 transition-colors
                    ${isCurrentActive ? 'text-white/70' : 'text-gray-400 group-hover:text-white/70'}`}>
                    {item.desc}
                  </p>

                  <div className="mt-auto flex items-center justify-end">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500
                      ${isCurrentActive 
                        ? 'bg-white text-qwa-dark opacity-100 translate-x-0' 
                        : 'bg-qwa-dark text-white opacity-0 group-hover:opacity-100 group-hover:bg-white group-hover:text-qwa-dark translate-x-4 group-hover:translate-x-0'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M3 12h18" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="bg-qwa-dark/5 border border-qwa-dark/10 p-1 rounded-[28px] flex items-center justify-center group cursor-pointer hover:bg-qwa-lilac transition-all duration-500">
               <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-qwa-dark font-black uppercase text-[10px] tracking-widest mb-3 group-hover:text-white transition-colors">Explorar tudo</span>
                  <div className="w-10 h-10 rounded-full bg-qwa-dark text-white flex items-center justify-center shadow-lg group-hover:bg-white group-hover:text-qwa-lilac transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M3 12h18" />
                    </svg>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NossasSolucoes;
