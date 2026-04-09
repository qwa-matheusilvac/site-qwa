import Image from "next/image";
import Contagem from "./Contagem";

const Estatisticas = () => {
  const statsData = [
    { value: "+200", label: "Soluções\nentregues" },
    { value: "+12", label: "Anos de\nexperiência" },
    { value: "+20", label: "Horas de\nprojetos" },
    { value: "+200", label: "Projetos\ndesenvolvidos" },
    { value: "+5", label: "Parceiros" }
  ];

  const logos = [
    { src: "/COLABORADORES/porto.png", alt: "Porto", width: 180, height: 60 },
    { src: "/COLABORADORES/evertec.png", alt: "Evertec", width: 180, height: 60 },
    { src: "/COLABORADORES/oliveiraTrust.png", alt: "Oliveira Trust", width: 220, height: 60 },
    { src: "/COLABORADORES/parca.png", alt: "Parca", width: 160, height: 60 }
  ];

  return (
    <section className="bg-white pt-20 pb-10 relative z-0">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 md:gap-0 text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="px-4">
              <h3 className="text-5xl md:text-6xl font-black text-[#7c5dfa] tracking-tighter">
                <Contagem end={stat.value} />
              </h3>
              <p className="text-xs font-light text-gray-400 uppercase tracking-widest mt-3 leading-tight whitespace-pre-line">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale grayscale-100">
          {logos.map((logo, index) => (
            <Image 
              key={index}
              src={logo.src} 
              alt={logo.alt} 
              width={logo.width} 
              height={logo.height} 
              className="object-contain" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Estatisticas;
