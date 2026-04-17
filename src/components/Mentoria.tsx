import React from 'react';
import Image from 'next/image';

const Mentoria = () => {
  const stats = [
    { value: "+15", label: "PARTICIPANTES", desc: "Se aperfeiçoaram com o projeto!" },
    { value: "+100", label: "MATERIAIS", desc: "físicos e digitais para apoiar o aprendizado!" },
    { value: "+10", label: "MENTORES", desc: "que disponibilizam momentos de auxílio" },
    { value: "+6mil", label: "HORAS", desc: "Focadas por ano para o aprendizado!" }
  ];

  return (
    <section id="mentorado" className="py-24 bg-white overflow-hidden">
      <div className="relative w-full min-h-[600px] bg-[#2a1b7a] rounded-none shadow-none overflow-hidden">
        {/* Background Image - Full Section */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/MENTORADO/mentorado.png" 
            alt="Mentorado Background" 
            fill 
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a0b5a]/90 via-transparent to-[#1a0b5a]/90"></div>
        </div>

        <div className="container mx-auto px-10 relative z-10 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left Content */}
            <div className="lg:w-1/3 text-white">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.9] mb-8">
                Focamos na <br />
                evolução de <br />
                <span className="text-qwa-cyan">pessoas</span>
              </h2>
              <p className="text-white font-medium leading-relaxed mb-10 max-w-sm text-sm">
                Um processo de aprendizado prático e contínuo, focado em transformar potencial em excelência técnica e profissional.
              </p>
              <a href="#contato" className="inline-block bg-white text-qwa-primary px-8 py-3 rounded-full font-black hover:scale-105 transition-transform shadow-xl uppercase text-[10px] tracking-widest text-center">
                Saber Mais
              </a>
            </div>

            {/* Right Content / Stats - VERTICAL STACKED STYLE - MOVED FURTHER TO THE RIGHT */}
            {/* DICA: Para mover mais para a direita, aumente o valor de 'lg:pl-80' abaixo */}
            <div className="lg:w-1/2 lg:pl-16 xl:pl-32">
              <div className="flex flex-col gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-5 text-white group">
                    <div className="flex items-baseline gap-5 w-full transition-transform duration-300 group-hover:translate-x-2">
                      <h3 className="text-4xl md:text-6xl font-black text-white drop-shadow-[0_4px_12px_rgba(255,255,255,0.1)]">{stat.value}</h3>
                      <div className="flex flex-col">
                        <span className="text-qwa-cyan font-black text-[18px] md:text-[22px] uppercase tracking-[0.3em] leading-none mb-2">{stat.label}</span>
                        <p className="text-white/60 font-medium text-[11px] md:text-[12px] uppercase tracking-wider leading-relaxed max-w-[240px]">{stat.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentoria;
