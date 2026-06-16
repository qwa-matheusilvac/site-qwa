"use client";

import Image from "next/image";
import Contagem from "../HOME/Contagem";
import React from "react";

const pilaresData = [
  {
    title: "Visão",
    description: "Ser referência em inovação e qualidade no desenvolvimento de soluções digitais, proporcionando satisfação aos clientes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: "Missão",
    description: "Entregar soluções tecnológicas de alta performance que impulsionam resultados reais para nossos clientes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Valores",
    description: "Nossos valores são pautados em Qualidade, Agilidade, Inovação, Simplicidade e Parceria.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
  {
    title: "Excelência",
    description: "Buscamos a excelência em tudo o que fazemos, superando expectativas e agregando máximo valor.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
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
    title: "Quando",
    text: "Sempre que houver um desafio a ser resolvido, estamos prontos para agir e entregar resultados.",
  }
];

const valoresEquipe = [
  {
    nome: "Foco em Pessoas e Interações",
    desc: "Pessoas são o cerne de tudo o que fazemos",
    imagem: "/SOBRE/Foco em Pessoas e Interações.png"
  },
  {
    nome: "Espírito de Equipe",
    desc: "Juntos somos mais fortes e mais eficazes",
    imagem: "/SOBRE/Espírito de Equipe.png"
  },
  {
    nome: "Humildade Técnica e Mentoria",
    desc: "Sempre aprendendo e compartilhando conhecimento",
    imagem: "/SOBRE/Humildade Técnica e Mentoria.png"
  },
  {
    nome: "Protagonismo e Evolução Contínua",
    desc: "Crescendo constantemente como profissionais",
    imagem: "/SOBRE/Protagonismo e Evolução Contínua.png"
  }
];

const SobreNos = () => {
  const statsData = [
    { value: "13", label: "Anos de Experiência" },
    { value: "200", label: "Soluções Entregues" },
    { value: "50 mil", label: "Horas de Projetos" },
    { value: "100%", label: "Qualidade Garantida" }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section - Capa igual à home */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-qwa-lilac to-[#4d3ef7] text-white pt-24 md:pt-50 pb-16 md:pb-18 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]"
      >
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 items-center gap-6 md:gap-10">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black leading-[0.95] tracking-tighter mb-6">
                <span className="text-[#22d3ee]">Quality With</span>
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
          <div className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-30 md:mt-40">
              {statsData.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 "
                >
                  {i > 0 && (
                    <div className="hidden md:block w-[1px] h-10 bg-white/20 mr-4"></div>
                  )}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black whitespace-nowrap">
                    <Contagem end={stat.value} />
                  </h3>
                  <p className="text-[7px] sm:text-xs md:text-sm font-bold text-white/70 uppercase leading-tight max-w-[70px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Pilares com ícones SVG padrão */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="w-full bg-qwa-dark/10 py-16 md:py-24 px-10 border-y border-qwa-dark/5">
          <div className="container mx-auto">
            <div className="mb-16 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-qwa-dark tracking-tight mb-6">
                Nossos <span className="text-qwa-lilac">Pilares</span>
              </h2>
              <p className="text-gray-500 font-medium max-w-2xl text-base">
                Fundamentos que guiam todas as nossas ações e decisões.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {pilaresData.map((item, i) => {
                return (
                  <div 
                    key={i} 
                    className="p-6 rounded-[28px] transition-all duration-500 flex flex-col bg-white border-white shadow-sm hover:shadow-xl hover:bg-qwa-lilac hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 flex items-center justify-center text-qwa-blue">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-black mb-3 leading-tight text-qwa-dark">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium leading-relaxed mb-6 text-gray-400">
                      {item.description}
                    </p>
                    <div className="mt-auto flex items-center justify-end">
                      <div className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 bg-qwa-dark text-white opacity-0 hover:opacity-100 hover:bg-white hover:text-qwa-dark hover:translate-x-0 translate-x-4 group-hover:translate-x-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M3 12h18" />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Não nascemos para seguir tendências com Time.jpg */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image 
                src="/SOBRE/Time.jpg" 
                alt="Equipe QWA" 
                width={500} 
                height={400} 
                className="rounded-2xl w-full h-auto" 
              />
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
                  src={item.imagem} 
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
