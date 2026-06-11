import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const PorQueEscolherMentorado = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="relative rounded-[40px] overflow-hidden bg-white shadow-2xl flex flex-col lg:flex-row min-h-[600px] border border-gray-100">
          
          {/* Left Side Content */}
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-qwa-cyan"></div>
              <span className="text-qwa-cyan font-bold uppercase tracking-widest text-xs">Por que nos escolher</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-qwa-dark leading-tight mb-12">
              Sua melhor <span className="text-qwa-primary">escolha</span> para evolução técnica.
            </h2>

            <button className="flex items-center gap-4 bg-gradient-to-r from-qwa-primary to-[#be185d] text-white px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-xl w-fit group">
              Agendar uma conversa
              <div className="bg-white/20 p-2 rounded-full group-hover:translate-x-1 transition-transform">
                <FaArrowRight className="text-white" />
              </div>
            </button>
          </div>

          {/* Right Side Image (Tags removed as per request) */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <Image 
              src="/MENTORADO/CamisaMentorado.png" 
              alt="Mentorado QWA" 
              fill
              className="object-cover"
            />
            
            {/* Overlay for consistency */}
            <div className="absolute inset-0 bg-black/5"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PorQueEscolherMentorado;
