import React from 'react';

const ComoTrabalhamos = () => {
  const steps = [
    { title: "Entendendo a necessidade", icon: "clipboard" },
    { title: "Análise / Solução", icon: "search" },
    { title: "Desenvolvimento", icon: "code" },
    { title: "Teste", icon: "beaker" },
    { title: "Homologação", icon: "check" },
    { title: "Implantação em produção", icon: "gear" },
    { title: "Garantia", icon: "medal" }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl md:text-5xl font-black mb-32 text-center uppercase tracking-tight">
          <span className="text-qwa-primary">Como</span> <span className="text-qwa-dark">Trabalhamos</span>
        </h2>
        
        <div className="relative flex justify-between items-start max-w-7xl mx-auto">
          {/* Continuous Connector Line - Fixed to not exceed circles */}
          <div className="absolute top-[44px] left-[46px] right-[46px] h-[2px] bg-qwa-primary z-0"></div>

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center w-full relative z-10 group">
              {/* Circle Style - Simple Circle with Icon */}
              <div className="w-[92px] h-[92px] rounded-full bg-qwa-primary flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-[0_10px_30px_rgba(77,62,247,0.2)] border-[4px] border-white relative">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  {step.icon === "clipboard" && <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />}
                  {step.icon === "search" && <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />}
                  {step.icon === "code" && <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
                  {step.icon === "beaker" && <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.644.258a2 2 0 01-1.564 0l-.644-.258a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547V10a11 11 0 1122 0v5.428z" />}
                  {step.icon === "check" && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  {step.icon === "gear" && <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.65 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />}
                  {step.icon === "medal" && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />}
                </svg>
              </div>
              
              <p className="text-[9px] font-black text-center mt-10 uppercase text-qwa-dark px-2 tracking-[0.2em] leading-tight max-w-[120px]">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoTrabalhamos;
