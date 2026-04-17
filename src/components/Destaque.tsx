import Image from "next/image";
import Contagem from "./Contagem";

const Destaque = () => {
  const statsData = [
    { value: "+13", label: "Anos de Experiência" },
    { value: "+200", label: "Soluções Entregues" },
    { value: "+50mil", label: "Horas de Projetos" },
    { value: "100%", label: "Qualidade Garantida" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-qwa-lilac to-[#4d3ef7] text-white pt-6 pb-12 z-10 overflow-hidden rounded-b-[80px] shadow-2xl">
      <nav className="container mx-auto px-10 flex justify-between items-center relative z-20">
        <div className="flex items-center">
          <Image 
            src="/CAPA/LogoQWA.png" 
            alt="QWA" 
            width={120} 
            height={50} 
            className="brightness-0 invert"
            priority
          />
        </div>
        
        {/* Pill-shaped centered nav */}
        <div className="hidden lg:flex bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3 rounded-full gap-8 text-xs font-medium uppercase tracking-[0.15em]">
          <a href="#" className="hover:text-qwa-cyan transition-colors">Home</a>
          <a href="#" className="hover:text-qwa-cyan transition-colors">Sobre Nós</a>
          <a href="#" className="hover:text-qwa-cyan transition-colors">Mentorado</a>
          <a href="#" className="hover:text-qwa-cyan transition-colors">Contato</a>
        </div>

        <div className="w-[120px] hidden md:block"></div> {/* Spacer to keep nav centered */}
      </nav>

      <div className="container mx-auto px-10 mt-16 flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2 z-10">
          <h1 className="text-6xl md:text-[85px] font-black leading-[0.95] tracking-tighter mb-8">
            SIMPLIFIQUE<br />
            SUAS <span className="text-qwa-cyan">IDEIAS</span>
          </h1>
          <p className="text-lg md:text-xl font-medium mb-12 opacity-80 max-w-lg leading-relaxed">
            Tornamos ideias complexas em soluções digitais robustas e escaláveis para o seu negócio.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <button className="bg-white text-qwa-primary font-black px-10 py-4 rounded-full hover:scale-105 transition-transform uppercase text-xs tracking-widest shadow-2xl flex items-center gap-3">
              Fale Conosco
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 relative mt-16 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-2xl">
            {/* Main Image without background rectangle */}
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
      </div>

      {/* Stats Bar at the bottom of Hero */}
      <div className="mt-20 pt-10">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-4 relative">
                {/* Discreet divider line */}
                {i > 0 && <div className="hidden md:block absolute -left-4 top-1/4 h-1/2 w-[1px] bg-white/20"></div>}
                
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                  <Contagem end={stat.value} />
                </h3>
                <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mt-2 leading-tight">
                  {stat.label.split(' ').map((word, idx) => (
                    <span key={idx} className="block">{word}</span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destaque;
