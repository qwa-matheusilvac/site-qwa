import React from 'react';
import Card from './AtuacaoCard';

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
      <Card />
        
      </div>
    </section>
  );
};

export default AreasNegocio;
