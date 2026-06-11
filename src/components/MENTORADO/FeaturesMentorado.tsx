import React from 'react';
import Image from 'next/image';

const FeaturesMentorado = () => {
  const features = [
    {
      title: "Qualidade",
      description: "Aprendemos a importância e a valorização da qualidade e as ferramentas para alcançar ela.",
      image: "/MENTORADO/APRENDIZADO/Qualidade.png"
    },
    {
      title: "Análise Computacional",
      description: "Dominamos as bases teóricas e práticas para resolver problemas complexos com eficiência.",
      image: "/MENTORADO/APRENDIZADO/Análise Computacional.png"
    },
    {
      title: "Tecnologias",
      description: "Aqui ensinamos as tecnologias do nosso dia a dia que usamos nos projetos.",
      image: "/MENTORADO/APRENDIZADO/Tecnologias.png"
    },
    {
      title: "TCE",
      description: "O TCE é um projeto de conclusão do estágio onde passamos uma situação problema e os estagiários precisarão criar uma ferramenta para solucionar esse problema.",
      image: "/MENTORADO/APRENDIZADO/TCE.png"
    },
    {
      title: "Algoritmos",
      description: "Dominamos a arte de criar algoritmos eficientes para solucionar desafios reais do mercado.",
      image: "/MENTORADO/APRENDIZADO/Algoritmos.png"
    }
  ];

  return (
    <section className="py-24 bg-[#f8f9ff]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#1a1b3a] tracking-tight mb-4">
            O que Ensinamos
          </h2>
          <p className="text-gray-500 font-black">
            Conheça os pilares que moldam nossos aprendizados e impulsionam nossa excelência
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* First two cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.slice(0, 2).map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <h3 className="text-xl font-black text-[#1a1b3a] mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{feature.description}</p>
                <div className="relative flex-grow rounded-2xl overflow-hidden border border-gray-50 bg-gray-50/50">
                  <Image 
                    src={feature.image} 
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
            
            {/* Middle two cards (bottom of first column) */}
            {features.slice(2, 4).map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <h3 className="text-xl font-black text-[#1a1b3a] mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{feature.description}</p>
                <div className="relative flex-grow rounded-2xl overflow-hidden border border-gray-50 bg-gray-50/50">
                  <Image 
                    src={feature.image} 
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right large card */}
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <h3 className="text-xl font-black text-[#1a1b3a] mb-2">{features[4].title}</h3>
            <p className="text-gray-400 text-sm mb-6">{features[4].description}</p>
            <div className="relative flex-grow rounded-2xl overflow-hidden border border-gray-50 bg-gray-50/50">
              <Image 
                src={features[4].image} 
                alt={features[4].title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesMentorado;
