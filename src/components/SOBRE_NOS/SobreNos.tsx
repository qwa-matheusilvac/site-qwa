"use client";

import Image from 'next/image';
import React from 'react';

const pilaresData = [
  {
    icon: "👁️",
    title: "Visão",
    description: "Ser referência em inovação e qualidade no desenvolvimento de soluções digitais, proporcionando satisfação aos clientes.",
  },
  {
    icon: "🎯",
    title: "Missão",
    description: "Entregar soluções tecnológicas de alta performance que impulsionam resultados reais para nossos clientes.",
  },
  {
    icon: "💎",
    title: "Valores",
    description: "Nossos valores são pautados em Qualidade, Agilidade, Inovação, Simplicidade e Parceria.",
  },
  {
    icon: "🚀",
    title: "Excelência",
    description: "Buscamos a excelência em tudo o que fazemos, superando expectativas e agregando máximo valor.",
  }
];

const porQueData = [
  {
    title: "Porque",
    text: "Acreditamos que a tecnologia deve ser acessível e realmente útil, não apenas um produto complexo.",
  },
  {
    title: "Onde",
    text: "Atuamos em diversos mercados, transformando negócios de pequenos a grandes empreendimentos.",
  },
  {
    title: "Como",
    text: "Com metodologias ágeis, foco no usuário e paixão por criar soluções que realmente resolvem problemas.",
  },
  {
    title: "Aonde",
    text: "Vamos além do código, construindo relacionamentos duradouros e resultados sustentáveis para todos.",
  }
];

const valoresEquipe = [
  {
    nome: "Foco em Pessoas e Interações",
    desc: "Pessoas são o cerne de tudo o que fazemos",
  },
  {
    nome: "Espírito de Equipe",
    desc: "Juntos somos mais fortes e mais eficazes",
  },
  {
    nome: "Humildade Técnica e Mentoria",
    desc: "Sempre aprendendo e compartilhando conhecimento",
  },
  {
    nome: "Protagonismo e Evolução Contínua",
    desc: "Crescendo constantemente como profissionais",
  }
];

const SobreNos = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section - Capa */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-qwa-lilac to-[#4d3ef7] text-white pt-24 md:pt-50 pb-16 md:pb-18 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]"
      >
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 items-center gap-6 md:gap-10">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black leading-[0.95] tracking-tighter mb-6">
                <span className="bg-gradient-to-r from-qwa-cyan to-qwa-primary bg-clip-text text-transparent">Quality With</span>
                <br />
                Agility
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-medium opacity-80 max-w-md leading-relaxed">
                Soluções que vão além do código
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/CAPA/LogoQWABranca.png"
                alt="QWA Solutions"
                width={800}
                height={800}
                className="
                w-[360px]
                h-auto
                object-contain
                opacity-20
                md:opacity-80
                absolute
              "
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Pilares */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#1a1b3a] tracking-tight mb-4">
              Nossos Pilares
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pilaresData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 flex items-start gap-4"
              >
                <div className="text-4xl">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-black text-[#1a1b3a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="text-gray-300 text-2xl">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Não nascemos para seguir tendências */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image 
                src="https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=business%20team%20meeting%2C%20professional%20office%20environment%2C%20collaboration&image_size=square_hd" 
                alt="Equipe trabalhando" 
                width={500} 
                height={400} 
                className="rounded-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex gap-2 mb-4">
                  <Image src="/COLABORADORES/evertec.png" alt="Colaborador" width={40} height={40} className="w-10 h-10 rounded-full" />
                  <Image src="/COLABORADORES/oliveiraTrust.png" alt="Colaborador" width={40} height={40} className="w-10 h-10 rounded-full -ml-3" />
                  <Image src="/COLABORADORES/porto.png" alt="Colaborador" width={40} height={40} className="w-10 h-10 rounded-full -ml-3" />
                </div>
                <p className="text-xs font-bold text-gray-500 mb-2">Trusted by 5K+ People</p>
                <div className="flex items-center gap-2">
                  <p className="text-3xl font-black text-[#7c3aed]">25+</p>
                  <p className="text-xs text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="inline-block px-4 py-2 bg-[#fef3c7] text-[#d97706] text-sm font-bold rounded-full mb-6 w-fit">
                About QWA Company
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1b3a] mb-6">
                Não nascemos para seguir tendências
              </h2>
              <p className="text-gray-600 mb-8">
                Estamos aqui para mudar a forma como a tecnologia é entregue, com foco no real valor para o negócio.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {porQueData.map((item, index) => (
                  <div key={index} className="bg-[#e0e7ff] p-6 rounded-xl">
                    <h3 className="text-2xl font-black text-[#4f46e5] mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 md:py-28 bg-[#1a1b3a]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-white p-2 rounded-lg mb-4">
              <span className="text-[#7c3aed] font-bold">Team members</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              Nossos Valores
            </h2>
          </div>
          
          {/* Valores Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {valoresEquipe.map((item, i) => (
              <div key={i} className="bg-white/10 rounded-lg overflow-hidden">
                <Image 
                  src={`https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=professional%20business%20person%20portrait%2C%20friendly%20smile%2C%20modern%20style&image_size=square_hd`} 
                  alt={item.nome} 
                  width={250} 
                  height={300} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-4">
                  <p className="text-white font-bold">{item.nome}</p>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Nossa base */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
            <div className="bg-[#7c3aed] p-10 flex flex-col justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                Nossa base
              </h3>
              <p className="text-white/80 text-sm">
                baseada no Manifesto Ágil de 2001
              </p>
            </div>
            <div className="bg-white p-4 flex items-center justify-center">
              <Image 
                src="https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=business%20team%20collaboration%20meeting%2C%20laptop%2C%20modern%20office&image_size=square_hd" 
                alt="Equipe colaborando" 
                width={400} 
                height={300} 
                className="rounded-lg w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nova seção - Imagem 5 */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image 
                src="https://coresg-normal.trae.ai/api/v1/text_to_image?prompt=professional%20business%20people%20collaborating%2C%20modern%20office%2C%20success%20meeting&image_size=square_hd" 
                alt="Equipe de sucesso" 
                width={500} 
                height={400} 
                className="rounded-2xl w-full h-auto" 
              />
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <p className="text-3xl font-black text-[#7c3aed]">$2,850</p>
                  <p className="text-xs text-gray-400">Revenue per client</p>
                  <div className="mt-4 space-y-1">
                    <div className="w-24 h-1 bg-gray-200 rounded">
                      <div className="w-16 h-1 bg-[#7c3aed] rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="inline-block px-4 py-2 bg-[#fef3c7] text-[#d97706] text-sm font-bold rounded-full mb-6 w-fit">
                Grow Your Business
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a1b3a] mb-6">
                Innovative Business Increase And Branding Solutions
              </h2>
              <p className="text-gray-600 mb-8">
                Soluções personalizadas que realmente impulsionam resultados. Trabalhamos com foco no crescimento sustentável dos nossos clientes.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div>
                  <p className="text-3xl font-black text-[#7c3aed]">85%</p>
                  <p className="text-sm text-gray-500">Increase in sales</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-[#7c3aed]">15%</p>
                  <p className="text-sm text-gray-500">Reduction in costs</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-[#7c3aed]">93%</p>
                  <p className="text-sm text-gray-500">Return on growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNos;
