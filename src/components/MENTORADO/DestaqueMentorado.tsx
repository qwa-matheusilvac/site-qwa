import Image from "next/image";

const DestaqueMentorado = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-qwa-lilac to-[#4d3ef7] text-white pt-24 md:pt-50 pb-16 md:pb-18 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]">
      <div className="absolute inset-0 z-0 opacity-30">
        <Image 
          src="/MENTORADO/CapaMentorado.png" 
          alt="Mentorado background" 
          fill 
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-qwa-lilac to-[#4d3ef7] z-5"></div>
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-2 items-center gap-6 md:gap-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black leading-[0.95] tracking-tighter mb-6">
              Sua <span className="text-[#22d3ee]">evolução</span><br />
              COM UMA BASE SÓLIDA!
            </h1>

            <p className="text-sm sm:text-base md:text-lg font-medium opacity-80 max-w-md leading-relaxed">
              O fluxo de aprendizado exclusivo para o nosso time. Aprenda na prática os pilares que sustentam nossas soluções e acelere sua evolução na empresa.
            </p>
          </div>
          <div className="flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
};

export default DestaqueMentorado;