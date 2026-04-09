import React from 'react';

const ChamadaAcao = () => {
  return (
    <section className="py-32 bg-qwa-primary text-white text-center relative overflow-hidden">
      {/* Background Swirl Pattern (simplified) */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="container mx-auto px-10 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase max-w-4xl mx-auto leading-tight tracking-tight">
          Pronto para transformar sua empresa em algo maior?
        </h2>
        <p className="mb-16 opacity-90 text-xl font-medium italic max-w-2xl mx-auto leading-relaxed">
          Aqui na QWA Pensamos pela qualidade constante e a parceria maior ainda
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <button className="bg-transparent border-4 border-white px-14 py-5 rounded-full font-black uppercase text-sm hover:bg-white hover:text-qwa-primary transition-all shadow-2xl tracking-widest">
            Formulário
          </button>
          <button className="bg-qwa-cyan text-qwa-dark px-14 py-5 rounded-full font-black uppercase text-sm hover:bg-white transition-all shadow-2xl tracking-widest">
            WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChamadaAcao;
