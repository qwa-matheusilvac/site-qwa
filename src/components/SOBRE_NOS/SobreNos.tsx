"use client";

import Image from 'next/image';
import React from 'react';

const mvvData = [
  {
    title: "Visão",
    description: "Ser referência em inovação e qualidade no desenvolvimento de soluções digitais, proporcionando satisfação aos clientes através do desenvolvimento de ferramentas de fácil utilização com alta produtividade, mantendo-os sempre um passo a frente em seu mercado de atuação.",
  },
  {
    title: "Missão",
    description: "Entregar soluções tecnológicas de alta performance que impulsionam resultados reais para nossos clientes, criando software de qualidade, superando expectativas e agregando o máximo de valor em curto tempo.",
  },
  {
    title: "Valores",
    description: "Nossos valores são pautados em Qualidade, Agilidade, Inovação, Simplicidade, Parceria, Satisfação do Cliente e Trabalho em Equipe, mantendo sempre o foco na inovação contínua em tudo o que fazemos.",
  }
];

const SobreNos = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] flex flex-col justify-center text-white z-10 overflow-hidden rounded-b-[80px] shadow-2xl pb-16">
        <div className="absolute inset-0 z-0 bg-black/60" />
        <Image 
          src="/CAPA/LogoQWABranca.png" 
          alt="Background" 
          fill 
          className="object-cover opacity-20" 
          priority
        />
        <div className="container mx-auto px-10 relative z-10 flex flex-col items-start text-left">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            <span className="bg-gradient-to-r from-qwa-cyan to-qwa-primary bg-clip-text text-transparent">Quality With</span>
            <br />
            Agility
          </h1>
          <p className="text-4xl md:text-5xl font-serif italic text-qwa-cyan mt-8">
            QWA
          </p>
        </div>
      </section>

      {/* Nossos Pilares */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#1a1b3a] tracking-tight mb-4">
              Nossos Pilares
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mvvData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-qwa-primary/10 flex items-center justify-center mb-6">
                  <div className="w-8 h-8 rounded-full bg-qwa-primary/20" />
                </div>
                <h3 className="text-xl font-black text-[#1a1b3a] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNos;
