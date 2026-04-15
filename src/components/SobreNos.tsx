import React from 'react';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { PiRocketLaunchFill } from 'react-icons/pi';
import { RiLightbulbFlashLine } from 'react-icons/ri';

const SobreNos = () => {
  const cards = [
    {
      title: "Missão",
      desc: "Soluções sob medida que simplifiquem processos e impulsionem negócios.",
      icon: PiRocketLaunchFill
    },
    {
      title: "Visão",
      desc: "Reconhecida pela excelência técnica, agilidade e inovação contínua.",
      icon: RiLightbulbFlashLine
    },
    {
      title: "Valores",
      desc: "Simplicidade, Transparência, Excelência e Parceria.",
      icon: LiaBalanceScaleSolid
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl font-black mb-16 uppercase tracking-tight">
          Quem Somos <span className="text-qwa-dark opacity-90">Nós</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, i) => {
            const Icon = card.icon;

            return (
              <div
                key={i}
                className="relative bg-gradient-to-b from-[#3B1E91] to-[#4A5DFF] text-white p-12 rounded-tl-[60px] rounded-br-[60px] shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden opacity-90"
              >
                <div className="absolute right-2 bottom-32 text-[100px] opacity-45 z-0 pointer-events-none" style={{ color: '#bd91ff'}}>
                  <Icon />
                </div>
                <div className="relative z-10">
                  <h4 className="font-black uppercase text-2xl tracking-wide mb-6" style={{ color: '#F0E7FF'}}>
                    {card.title}
                  </h4>
                  <p className="text-lg opacity-90 leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
