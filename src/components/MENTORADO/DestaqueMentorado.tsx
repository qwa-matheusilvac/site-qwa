import Image from "next/image";
import { FaInfoCircle, FaProjectDiagram, FaUserPlus } from "react-icons/fa";

const DestaqueMentorado = () => {
  const menuItems = [
    { label: "O que é", icon: <FaInfoCircle className="text-2xl" /> },
    { label: "Fluxo", icon: <FaProjectDiagram className="text-2xl" /> },
    { label: "Como participar", icon: <FaUserPlus className="text-2xl" /> }
  ];

  return (
    <section id="home" className="relative bg-gradient-to-br from-qwa-lilac to-[#4d3ef7] text-white pt-32 pb-12 z-10 overflow-hidden rounded-b-[80px] shadow-2xl">
      <div className="container mx-auto px-10 mt-16 flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2 z-10">
          <h1 className="text-4xl md:text-6xl lg:text-[70px] font-black leading-[0.95] tracking-tighter mb-8 uppercase">
            PROGRAMA DE<br />
            <span className="text-qwa-cyan">MENTORADO</span>
          </h1>
          <p className="text-lg md:text-xl font-medium mb-12 opacity-80 max-w-lg leading-relaxed">
            Desenvolvemos talentos e impulsionamos carreiras através de um acompanhamento próximo e prático.
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
                className="w-full h-auto object-contain opacity-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Items Bar at the bottom of Hero */}
      <div className="mt-20 mb-[-20px] relative z-20">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto bg-white/10 backdrop-blur-md py-8 rounded-[40px] border border-white/20">
            {menuItems.map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-4 group cursor-pointer hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-qwa-cyan group-hover:text-qwa-dark transition-colors shadow-lg">
                  {item.icon}
                </div>
                <span className="text-sm font-black uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestaqueMentorado;
