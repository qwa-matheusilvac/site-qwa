"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const AreasNegocio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const areas = [
    { 
      title: "SEGUROS", 
      desc: "Soluções robustas para gestão de apólices, sinistros e integração com corretores, focando em segurança e conformidade.", 
      icon: "🛡️" 
    },
    { 
      title: "FINANCEIROS", 
      desc: "Sistemas core banking, gateways de pagamento e soluções de tesouraria com alta performance e precisão.", 
      icon: "💳" 
    },
    { 
      title: "GESTÃO DE VENDAS", 
      desc: "Otimização do funil de vendas, CRM customizado e dashboards inteligentes para impulsionar seus resultados comerciais.", 
      icon: "📈" 
    }
  ];

  return (
    <section id="atuacao" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-qwa-dark tracking-tight leading-tight inline-block">
            Ramos de
            <span className="relative inline-block ml-3">
              <span className="text-qwa-lilac">Atuação</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-qwa-lilac rounded-full"></span>
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center max-w-5xl mx-auto">
          {areas.map((area, i) => {
            const isActive = hoveredIndex === null ? i === 1 : hoveredIndex === i;
            
            return (
              <div 
                key={i} 
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-8 transition-all duration-500 flex flex-col relative h-full group cursor-default
                  ${isActive 
                    ? 'bg-qwa-lilac rounded-[32px] z-10 shadow-[0_30px_70px_rgba(157,93,255,0.4)]' 
                    : 'bg-white rounded-[32px] border border-gray-50 shadow-[0_20px_50px_rgba(0,0,0,0.03)] z-0'} 
                  min-h-[420px]`}
              >
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 flex items-start justify-start mb-6 transition-transform duration-500 group-hover:scale-110">
                    <svg className={`w-10 h-10 ${isActive ? 'text-white' : 'text-qwa-lilac'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      {area.title === "SEGUROS" && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                      {area.title === "FINANCEIROS" && <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />}
                      {area.title === "GESTÃO DE VENDAS" && <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />}
                    </svg>
                  </div>
                  <h4 className={`font-black text-xl mb-3 uppercase tracking-tight ${isActive ? 'text-white' : 'text-qwa-dark'}`}>
                    {area.title}
                  </h4>
                  <p className={`font-medium leading-relaxed mb-8 text-xs ${isActive ? 'text-white/90' : 'text-gray-500'}`}>
                    {area.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <button 
                      className={`w-full flex items-center justify-between px-6 py-3 rounded-xl font-black uppercase text-[9px] tracking-widest transition-all duration-300 border-2 
                        ${isActive 
                          ? 'bg-white border-white text-qwa-lilac hover:bg-qwa-dark hover:text-white hover:border-qwa-dark shadow-lg' 
                          : 'bg-transparent border-qwa-lilac/30 text-qwa-lilac hover:bg-qwa-lilac hover:text-white hover:border-qwa-lilac'
                        }`}
                    >
                      Saber Mais
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center border transition-colors duration-300 ${isActive ? 'border-qwa-lilac text-qwa-lilac' : 'border-qwa-lilac/30 text-qwa-lilac group-hover:border-white group-hover:text-white'}`}>
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AreasNegocio;
