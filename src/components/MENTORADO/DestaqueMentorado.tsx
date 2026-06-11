import Image from "next/image";

const DestaqueMentorado = () => {
  return (
    <section id="home" className="relative h-[90vh] flex flex-col justify-center text-white z-10 overflow-hidden rounded-b-[80px] shadow-2xl pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/MENTORADO/CapaMentorado.png" 
          alt="Capa Mentorado" 
          fill
          className="object-cover"
          priority
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-10 relative z-10 flex flex-col items-start text-left">
        <h1 className="text-5xl md:text-7xl font-black mb-4">
          Sua <span className="bg-gradient-to-r from-qwa-cyan to-qwa-primary bg-clip-text text-transparent">excelência</span><br />
          COM UMA BASE SÓLIDA!
        </h1>

        <p className="text-lg md:text-xl font-black max-w-2xl leading-relaxed mb-10 relative z-20 text-white/90">
          O fluxo de aprendizado exclusivo para o nosso time. Aprenda na prática os pilares que sustentam nossas soluções e <span className="text-qwa-cyan font-black">acelere sua evolução na empresa.</span>
        </p>

        <button className="bg-qwa-dark text-white px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-widest shadow-2xl hover:scale-105 transition-all">
          QUERO COMEÇAR AGORA
        </button>
      </div>
    </section>
  );
};

export default DestaqueMentorado;
