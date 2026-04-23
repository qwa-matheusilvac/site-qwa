import Image from "next/image";
import Contagem from "./Contagem";

const Destaque = () => {
  const statsData = [
    { value: "+13", label: "Anos de Experiência" },
    { value: "+200", label: "Soluções Entregues" },
    { value: "50mil", label: "Horas de Projetos" },
    { value: "100%", label: "Qualidade Garantida" }
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-qwa-lilac to-[#4d3ef7] text-white pt-32 pb-12 z-10 overflow-hidden rounded-b-[80px] shadow-2xl">
      <div className="container mx-auto px-10 mt-16 flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2 z-10">
          <h1 className="text-4xl md:text-6xl lg:text-[70px] font-black leading-[0.95] tracking-tighter mb-8">
            SIMPLIFIQUE<br />
            SUAS <span className="text-qwa-cyan">IDEIAS</span>
          </h1>
          <p className="text-lg md:text-xl font-medium mb-12 opacity-80 max-w-lg leading-relaxed">
            Tornamos ideias complexas em soluções digitais robustas e escaláveis para o seu negócio.
          </p>
        </div>
        
        <div className="md:w-1/2 relative mt-16 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-2xl">
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

      <div className="mt-20 mb-[-20px] relative z-20">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {statsData.map((stat, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-4 relative">
                {i > 0 && <div className="hidden md:block absolute -left-6 top-1/4 h-1/2 w-[1px] bg-white/20"></div>}
                
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                  <Contagem end={stat.value} />
                </h3>
                <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-2 leading-tight">
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
