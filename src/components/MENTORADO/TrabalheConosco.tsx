'use client';

import React from "react";
import Image from "next/image";

const TrabalheConosco = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Candidatura enviada com sucesso!");
  };

  return (
    <section id="trabalhe-conosco" className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-gray-100">
          <div className="relative min-h-[400px] lg:min-h-[500px] overflow-hidden">
            <Image 
              src="/MENTORADO/CamisaMentorado.png" 
              alt="Trabalhe Conosco Mentorado" 
              fill 
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-center items-center text-center p-12 lg:p-20">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4 max-w-2xl">
                Quer fazer parte do time?
              </h2>
              <p className="text-white/80 text-lg font-medium leading-relaxed max-w-2xl mb-10">
                O Mentorado é a porta de entrada para quem busca excelência. Deixe seus dados e venha construir o futuro com a gente.
              </p>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-12 py-5 bg-qwa-primary text-white rounded-2xl font-black uppercase text-sm tracking-widest flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-qwa-primary/30"
              >
                Fazer parte desse time
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrabalheConosco;
