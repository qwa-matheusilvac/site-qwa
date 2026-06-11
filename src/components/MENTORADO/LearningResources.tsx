import React from 'react';
import Image from 'next/image';

const LearningResources = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="md:w-1/4 flex items-center gap-6">
            <h3 className="text-gray-600 text-sm font-black leading-relaxed max-w-[200px]">
              Recursos de aprendizado para o seu desenvolvimento
            </h3>
            <div className="hidden md:block w-[1px] h-12 bg-gray-200"></div>
          </div>
          
          <div className="md:w-3/4 flex items-center justify-center md:justify-start">
            <div className="relative px-12 py-5 rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center bg-white">
              <div className="relative w-32 h-10">
                <Image
                  src="/MENTORADO/udemy.png"
                  alt="Udemy - Plataforma de Aprendizado"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningResources;
