import React from 'react';

const SobreNos = () => {
  const cards = [
    { 
      title: "Nossa Missão", 
      desc: "Soluções sob medida que simplifiquem processos e impulsionem negócios.", 
      icon: "🎯" 
    },
    { 
      title: "Nossa Visão", 
      desc: "Reconhecida pela excelência técnica, agilidade e inovação contínua.", 
      icon: "💡" 
    },
    { 
      title: "Nossos Valores", 
      desc: "Simplicidade, Transparência, Excelência e Parceria.", 
      icon: "🤝" 
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase text-center md:text-left tracking-tight">
          <span className="text-qwa-primary">Quem Somos</span> <span className="text-qwa-dark">Nós</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="bg-qwa-primary text-white p-12 rounded-3xl relative shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-between items-start mb-8">
                <h4 className="font-black uppercase text-2xl tracking-wide">{card.title}</h4>
                <div className="text-4xl drop-shadow-lg">{card.icon}</div>
              </div>
              <p className="text-lg opacity-90 leading-relaxed font-medium">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreNos;
