import React from 'react';
import Image from 'next/image';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const ServicosMentorado = () => {
  const servicos = [
    {
      title: "Base sólida",
      desc: "Aprimore sua presença profissional com mentorias focadas em soft skills e posicionamento de mercado.",
      icon: <FaCode />,
      img: "/MENTORADO/mentorado.png"
    },
    {
      title: "Pensamento Analítico",
      desc: "Nossos mentores utilizam técnicas avançadas para limpar seu código e otimizar sua lógica de programação.",
      icon: <FaLaptopCode />,
      img: "/MENTORADO/CamisaMentorado.png"
    },
    {
      title: "Visão Computacional",
      desc: "Soluções imediatas para problemas complexos de arquitetura, escalabilidade e performance.",
      icon: <FaRocket />,
      img: "/MENTORADO/CapaMentorado.png"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-qwa-cyan"></div>
            <span className="text-qwa-cyan font-bold uppercase tracking-widest text-xs">O que entregamos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-qwa-dark mb-6">
            Pilares <span className="text-qwa-primary">do processo</span>
          </h2>
          <p className="text-gray-500 max-w-2xl leading-relaxed">
            Transforme sua carreira com nosso acompanhamento especializado. Da revisão de código ao design de sistemas, nosso time garante o suporte completo para uma jornada confiante e brilhante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((servico, i) => (
            <div key={i} className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 group hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src={servico.img} 
                  alt={servico.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-br from-qwa-cyan to-qwa-primary p-3 rounded-2xl shadow-lg text-white text-xl">
                  {servico.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-qwa-dark mb-4 group-hover:text-qwa-primary transition-colors">{servico.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {servico.desc}
                </p>
                <button className="flex items-center gap-2 text-qwa-dark font-bold text-sm group-hover:text-qwa-cyan transition-colors">
                  Saiba mais <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicosMentorado;
