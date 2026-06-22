"use client";
import Image from "next/image";

const QuerFazerParteDoTime = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="relative rounded-[40px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/MENTORADO/CamisaMentorado.png"
              alt="Camisa Mentorado"
              fill
              className="object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#1e1b4b]/80"></div>
          </div>
          
          {/* Content on top */}
          <div className="relative z-10 p-12 md:p-24 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Quer fazer Parte do Time?
            </h2>
            <p className="text-gray-300 mb-8 max-w-md mx-auto">
              {/* Subtitle here */}
              Subtítulo para "Quer fazer Parte do Time?"
            </p>
            <button className="px-10 py-4 bg-[#8d5ae2] text-white rounded-xl font-bold hover:bg-[#7c3aed] transition-all">
              Fazer parte do Time
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuerFazerParteDoTime;