import React from 'react';

const AreasNegocio = () => {
  const areas = [
    { 
      title: "Seguro", 
      desc: "Desenvolvimento e manutenção dos sistemas core, aplicativos móveis e portais de corretores.", 
      icon: "🛡️" 
    },
    { 
      title: "Financeiros", 
      desc: "Desenvolvimento e manutenção dos sistemas core, aplicativos móveis e portais de corretores.", 
      icon: "💰", 
      active: true 
    },
    { 
      title: "Vendas", 
      desc: "Desenvolvimento e manutenção dos sistemas core, aplicativos móveis e portais de corretores.", 
      icon: "🛒" 
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl font-black mb-16 uppercase text-center md:text-left tracking-tight">
          Ramos de <span className="text-qwa-primary">Atuação</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {areas.map((card, i) => (
            <div 
              key={i} 
              className={`p-10 rounded-[40px] relative overflow-hidden transition-all duration-500 hover:translate-y-[-10px] ${
                card.active 
                  ? 'bg-qwa-primary text-white scale-105 shadow-2xl z-10' 
                  : 'bg-qwa-light text-qwa-dark shadow-lg'
              }`}
            >
              <h4 className="font-black uppercase text-2xl mb-6 tracking-wide">{card.title}</h4>
              <p className="text-sm mb-12 opacity-80 leading-relaxed font-medium">
                {card.desc}
              </p>
              <div 
                className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl absolute bottom-[-15px] right-[-15px] opacity-20 ${
                  card.active ? 'bg-white text-qwa-primary' : 'bg-qwa-primary text-white'
                }`}
              >
                {card.icon}
              </div>
              {card.active && (
                <div className="absolute bottom-6 right-6 text-qwa-cyan">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasNegocio;
