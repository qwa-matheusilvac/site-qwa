import Image from 'next/image';
import React from 'react';

const SobreNos = () => {

  return (
    <section className="py-24 bg-gradient-to-b from-qwa-dark to-qwa-lilac">
      <div className="container mx-auto px-10 mt-12  ">
        <h2 className="text-5xl md:text-6xl pb-8 text-center md:text-left tracking-tight  w-[50%]" style={{ lineHeight: 1.25 }}>
          <span className="text-qwa-light font-black">Sua parceira em qualidade, agilidade e</span> <span className="text-qwa-cyan opacity-85"> inovação.</span>
        </h2>
        <p className="text-gray-300  w-[50%] text-1xl" style={{ lineHeight: 1.75 }}>
          Na QWA (Quality With Agility), nosso time é especializado em transcender o comum para entregar excelência tecnológica.
          Catalisamos complexidade para transformá-la em simplicidade.
        </p>
      </div>
      <div className="md:w-2/2 relative mt-16 md:mt-0 flex px-10 mt-12 py-24">
        <h1 className="text-2xl md:text-3xl mb-16 md:text-left tracking-tight font-black text-qwa-dark">Nossa Trajetória</h1>
        <div className="relative max-w-2xl">
          <div className="relative z-10 overflow-hidden">
            <Image
              src="/CAPA/LogoQWABranca.png"
              alt="QWA Solutions"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      <div>
      </div>
    </section>
  );
};

export default SobreNos;
