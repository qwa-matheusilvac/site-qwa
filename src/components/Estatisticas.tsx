import Image from "next/image";

const Estatisticas = () => {
  const logos = [
    { src: "/COLABORADORES/porto.png", alt: "Porto", width: 180, height: 60 },
    { src: "/COLABORADORES/evertec.png", alt: "Evertec", width: 180, height: 60 },
    { src: "/COLABORADORES/oliveiraTrust.png", alt: "Oliveira Trust", width: 220, height: 60 },
    { src: "/COLABORADORES/parca.png", alt: "Parca", width: 160, height: 60 }
  ];

  return (
    <section className="bg-white py-12 relative z-0 border-b border-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:opacity-100 transition-opacity duration-500">
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
