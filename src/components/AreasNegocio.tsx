import React from 'react';
import Image from 'next/image';

const AreasNegocio = () => {
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
      title: "Gestão de vendas", 
      desc: "Otimização do funil de vendas, CRM customizado e dashboards inteligentes para impulsionar seus resultados comerciais.", 
      icon: "📈" 
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-qwa-dark tracking-tight leading-tight">
              Ramos de
              <span className="relative inline-block ml-3">
                <span className="text-qwa-lilac">Atuação</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-qwa-lilac rounded-full"></span>
              </span>
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center">
          {areas.map((area, i) => (
            <div 
              key={i} 
              className={`p-10 transition-all duration-500 flex flex-col relative h-full
                ${i === 1 
                  ? 'bg-qwa-lilac rounded-[40px] scale-105 z-10 shadow-[0_30px_70px_rgba(157,93,255,0.4)] min-h-[520px]' 
                  : 'bg-transparent border-none shadow-none z-0 min-h-[520px]'}`}
            >
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 flex items-start justify-start mb-8 transition-transform duration-500 group-hover:scale-110">
                  <svg className={`w-12 h-12 ${i === 1 ? 'text-white' : 'text-qwa-lilac'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    {area.title === "SEGUROS" && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                    {area.title === "FINANCEIROS" && <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />}
                    {area.title === "Gestão de vendas" && <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />}
                  </svg>
                </div>
                <h4 className={`font-black text-2xl mb-4 uppercase tracking-tight ${i === 1 ? 'text-white' : 'text-qwa-dark'}`}>
                  {area.title}
                </h4>
                <p className={`font-medium leading-relaxed mb-10 text-sm ${i === 1 ? 'text-white/90' : 'text-gray-500'}`}>
                  {area.desc}
                </p>
                
                <div className="mt-auto">
                  <button 
                    className={`w-full flex items-center justify-between px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest transition-all duration-300 border-2 
                      ${i === 1 
                        ? 'bg-white border-white text-qwa-lilac hover:bg-qwa-dark hover:text-white hover:border-qwa-dark shadow-lg' 
                        : 'bg-transparent border-qwa-lilac text-qwa-dark hover:bg-qwa-lilac hover:text-white'
                      }`}
                  >
                    Saber Mais
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center border ${i === 1 ? 'border-qwa-lilac text-qwa-lilac' : 'border-qwa-dark text-qwa-dark group-hover:border-white group-hover:text-white'}`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasNegocio;
