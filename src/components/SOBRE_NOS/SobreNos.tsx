"use client";

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { LuHandHeart, LuTornado } from 'react-icons/lu';
import { MdOutlineRocketLaunch } from 'react-icons/md';
import { PiChatTeardropText, PiTarget } from 'react-icons/pi';
import { TbHandFingerRight } from 'react-icons/tb';

const mvvData = [
  {
    title: "Missão",
    description: "Entregar soluções tecnológicas de alta performance que impulsionam resultados reais para nossos clientes.",
    icon: MdOutlineRocketLaunch
  },
  {
    title: "Visão",
    description: "Ser referência em inovação e qualidade no desenvolvimento de soluções digitais na América Latina.",
    icon: PiTarget
  },
  {
    title: "Valores",
    description: "Excelência, transparência, agilidade, foco no cliente e inovação contínua em tudo o que fazemos.",
    icon: LuHandHeart
  }
];

const timelineData = [
  { year: 2013, title: "Fundação", description: "Início da QWA." },
  { year: 2014, title: "Primeiros projetos", description: "Entrega dos primeiros sistemas." },
  { year: 2015, title: "Crescimento", description: "Expansão da base de clientes." },
  { year: 2016, title: "Estruturação", description: "Organização interna e processos." },
  { year: 2017, title: "Escala", description: "Aumento de demanda e equipe." },
  { year: 2018, title: "Inovação", description: "Novas tecnologias adotadas." },
];

const SobreNos = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-qwa-dark via-qwa-blue to[##ffffff00] overflow-hidden">

      <Image
        src="/CAPA/LogoQWABranca.png"
        alt="QWA Background"
        fill
        className="object-cover opacity-3"
      />

      <div className="relative container mx-auto px-6 md:px-10 mt-28">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">

          <div className="md:w-[80%]">
            <h2 className="text-4xl md:text-6xl pb-6 tracking-tight leading-tight">
              <span className="text-qwa-light font-black">
                Sua parceira em qualidade, agilidade e
              </span>{" "}
              <span className="text-qwa-cyan opacity-90">
                inovação.
              </span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed md:w-[80%] mt-12 text-justify">
              Na QWA, combinamos expertise técnica com visão estratégica para desenvolver
              soluções digitais escaláveis, seguras e orientadas a resultados. Atuamos lado
              a lado com nossos clientes para transformar desafios complexos em produtos
              eficientes, de maneira simplificada.
            </p>

            <Link href="/contato">
              <button className="mt-18 bg-qwa-cyan opacity-75 text-qwa-dark font-bold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4px' }}
              >CONVERSE CONOSCO
                <PiChatTeardropText className='w-6 h-6'/>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-6 md:px-10 mt-50">
        <h3 className="text-3xl md:text-4xl font-black uppercase text-qwa-light mb-30">
          Pilares da QWA
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mvvData.map((item, index) => {
            const Icon = item.icon as React.ElementType;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Icon className="text-qwa-light text-3xl mr-4" />
                  <h4 className="text-xl font-bold text-qwa-light">
                    {item.title}
                  </h4>
                </div>
                <p className="text-qwa-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="relative container mx-auto px-6 md:px-10 mt-44 pt-20 pb-40 rounded-[20px]">
        <h3 className="text-3xl md:text-4xl font-black text-qwa-light uppercase mb-30 text-center">
          Nossa trajetória
        </h3>

        <div className="relative">

          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-qwa-dark/40 to-transparent" />

          <div className="hidden md:flex justify-between items-center gap-4">
            {timelineData.map((item, index) => {
              const isTop = index % 2 === 0;

              return (
                <div key={index} className="flex flex-col items-center flex-1 hover:scale-110 transition-all">

                  {isTop && (
                    <div className="mb-20 text-center max-w-[180px]">
                      <h4 className="font-bold text-qwa-light uppercase leading-relaxed">{item.title}</h4>
                      <p className="text-sm leading-relaxed font-black text-qwa-dark">{item.description}</p>
                    </div>
                  )}

                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-qwa-dark/70 backdrop-blur-lg border border-white/10 shadow-lg">
                    <span className="font-black text-qwa-light leading-relaxed">{item.year}</span>
                  </div>

                  {!isTop && (
                    <div className="mt-20 text-center max-w-[180px]">
                      <h4 className="font-bold text-qwa-light uppercase leading-relaxed">{item.title}</h4>
                      <p className="text-sm leading-relaxed font-black text-qwa-dark">{item.description}</p>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          <div className="md:hidden flex flex-col gap-8 mt-10">
            {timelineData.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="min-w-[50px] h-[50px] flex items-center justify-center rounded-full bg-qwa-dark/70 backdrop-blur-lg border border-white/10">
                  <span className="font-black text-qwa-light leading-relaxed">{item.year}</span>
                </div>
                <div>
                  <h4 className="font-bold text-qwa-light uppercase leading-relaxed">{item.title}</h4>
                  <p className="text-sm leading-relaxed font-black text-qwa-dark">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="relative container mx-auto px-6 md:px-10 mt-44 pb-10 text-qwa-dark">
        <h3 className="text-3xl font-black md:text-4xl mb-12">
          &lt; Quality With Agility /&gt;
        </h3>

        <div className="" style={{ display: 'flex', flexDirection: 'row', gap: '18px' }}>

          <Image
            src="/CAPA/LogoQWABranca.png"
            alt="imagem"
            width={250}
            height={250}
            className="object-contain"
            style={{ justifySelf: 'start', alignSelf: 'baseline' }}
            priority
          />

          <p className="text-lg md:text-xl leading-relaxed text-justify">
            A QWA carrega em sua essência o equilíbrio entre qualidade e agilidade — dois pilares que sustentam tudo o que construímos.
            Nossa atuação é guiada pela criação de ecossistemas digitais robustos, pensados não apenas para atender demandas atuais,
            mas para sustentar evolução contínua e vantagem competitiva.
            Acreditamos no desenvolvimento humano como força central. Por isso, mais do que entregar soluções, estruturamos fundamentos
            que impulsionam o crescimento de clientes e colaboradores de forma consistente e duradoura.
          </p>
        </div>

        <p className="text-lg md:text-3xl text-qwa-dark font-black leading-relaxed text-justify md:mt-12 uppercase"
          style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'baseline' }}
        >
          <LuTornado className="w-6 h-6" />
          Simplifique
        </p>

        <p className="text-lg md:text-3xl text-qwa-dark font-black leading-relaxed text-justify md:mt-12 uppercase"
          style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'baseline' }}
        >
          <LuTornado className="w-6 h-6" />
          Tornado
        </p>

        <p className="text-lg md:text-3xl text-qwa-dark font-black leading-relaxed text-justify md:mt-12 uppercase"
          style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'baseline' }}
        >
          <LuTornado className="w-6 h-6" />
          Simplex
        </p>
        
        <p className="text-lg md:text-3xl text-qwa-dark font-black leading-relaxed text-justify md:mt-12 uppercase"
          style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'baseline' }}
        >
          <LuTornado className="w-6 h-6" />
          Mentorado
        </p>

      </div>


    </section>
  );
};

export default SobreNos;