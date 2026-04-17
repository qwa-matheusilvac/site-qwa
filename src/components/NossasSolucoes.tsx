"use client";

import React from 'react';
import Image from 'next/image';

const NossasSolucoes = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const solucoes = [
    { 
      title: "Consultoria & Arquitetura", 
      desc: "Direcionamento estratégico para arquitetura de sistemas e governança tecnológica de alto nível.", 
      image: "/SERVICOS/consultoria.png" 
    },
    { 
      title: "Fábrica de Software", 
      desc: "Desenvolvimento robusto com entregas contínuas e rigorosos padrões de qualidade técnica.", 
      image: "/SERVICOS/fabricaSoftware.png" 
    },
    { 
      title: "Team as a Service (TaaS)", 
      desc: "Escalabilidade imediata com profissionais de elite integrados diretamente ao seu fluxo de trabalho.", 
      image: "/SERVICOS/teamAsService.png" 
    },
    { 
      title: "Transformação Digital", 
      desc: "Migração de legados e modernização de processos para a era da inteligência de dados.", 
      image: "/SERVICOS/transformacaoDigital.png" 
    },
    { 
      title: "Design UX / UI", 
      desc: "Experiências memoráveis e interfaces intuitivas que conectam sua marca aos usuários de forma eficiente.", 
      image: "/SERVICOS/Ux.png" 
    },
    { 
      title: "Criação de Site", 
      desc: "Desenvolvimento de sites institucionais e landing pages de alta conversão com foco em performance e SEO.", 
      image: "/SERVICOS/CriaSite.png" 
    },
    { 
      title: "Software Customizado", 
      desc: "Soluções personalizadas desenhadas especificamente para resolver as dores únicas do seu modelo de negócio.", 
      image: "/SERVICOS/SoftwareCustomizado.png" 
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-qwa-lilac to-[#4d3ef7] text-white overflow-hidden rounded-[80px] shadow-2xl">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row items-center mb-20 gap-12">
          <div className="flex-shrink-0">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.8] flex flex-col">
              <span className="block mb-2">NOSSAS</span>
              <span className="text-qwa-cyan">SOLUÇÕES</span>
            </h2>
          </div>
          {/* Vertical Line and Larger Text */}
          <div className="hidden md:block w-[2px] h-24 bg-white/20"></div>
          <div className="max-w-xl pt-2">
            <p className="text-white font-bold text-2xl leading-tight">
              Soluções inteligentes para desafios complexos em tecnologia.
            </p>
          </div>
        </div>
        
        <div className="flex gap-4 h-[600px] w-full">
          {solucoes.map((item, i) => {
            const isExpanded = activeIndex === i;
            const isAnyExpanded = activeIndex !== null;
            
            return (
              <div 
                key={i} 
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`
                  relative h-full rounded-[60px] overflow-hidden transition-all duration-700 ease-in-out cursor-pointer group
                  ${isExpanded ? 'flex-[4.5] bg-white' : isAnyExpanded ? 'flex-[0.5] bg-white/10 backdrop-blur-sm' : 'flex-1 bg-white/20 backdrop-blur-sm'}
                `}
              >
                {/* Background Image - Always present */}
                <div className="absolute inset-0 transition-all duration-700">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    className="object-cover"
                  />
                  {/* Vignette effect for closed cards */}
                  {!isExpanded && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60"></div>
                  )}
                  {/* Overlay for expanded cards - LILAC 35% */}
                  {isExpanded && (
                    <div className="absolute inset-0 bg-[#7c3aed]/35 backdrop-blur-[2px]"></div>
                  )}
                </div>

                {/* Content Container */}
                <div className={`relative h-full w-full p-12 flex flex-col transition-all duration-500 ${isExpanded ? 'justify-end pb-24' : 'justify-center'}`}>
                  <div className={`z-10 transition-all duration-500 ${isExpanded ? 'w-full mb-6' : 'w-full flex items-center justify-center'}`}>
                    {isExpanded ? (
                      <h4 className="text-white text-4xl mb-6 font-black uppercase tracking-widest drop-shadow-2xl animate-fadeIn">
                        {item.title}
                      </h4>
                    ) : (
                      !isAnyExpanded && (
                        <h4 className="text-white text-[18px] md:text-[20px] font-black uppercase tracking-[0.15em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] animate-fadeIn text-center px-4 leading-tight group-hover:scale-105 transition-transform duration-300">
                          {item.title}
                        </h4>
                      )
                    )}
                    
                    {isExpanded && (
                      <p className="text-white font-bold text-lg leading-relaxed max-w-xl animate-fadeIn drop-shadow-lg border-t border-white/20 pt-6">
                        {item.desc}
                      </p>
                    )}
                  </div>

                  {isExpanded && (
                    <button className="absolute bottom-12 right-12 px-8 py-4 rounded-full bg-white text-qwa-primary flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-20 font-black uppercase text-xs tracking-widest">
                      Saber Mais
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NossasSolucoes;
