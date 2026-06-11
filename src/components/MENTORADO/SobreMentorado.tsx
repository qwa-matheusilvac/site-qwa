import Image from "next/image";

const SobreMentorado = () => {
  return (
    <section id="sobre-mentorado" className="py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Left Side - Content */}
              <div className="lg:w-1/2">
                <div className="inline-block bg-qwa-cyan/10 text-qwa-cyan px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-widest mb-6">
                  Nossa História
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-qwa-dark tracking-tighter leading-[0.95] mb-8 uppercase">
                  Simplifique<br />
                  <span className="text-qwa-primary text-10xl md:text-7xl">MENTORADO</span>
                </h2>
                <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-xl">
                 Acreditamos no desenvolvimento contínuo. <b>Por isso criamos o MENTORADO, um projeto pensado para fortalecer talentos, estimular o aprendizado e apoiar cada etapa da jornada. </b><b>Aqui, cultivamos o valor de fazer pela e para a empresa e para a equipe, promovendo um ambiente de colaboração, crescimento e excelência.</b>
                </p>
              </div>

          {/* Right Side - Image without decorative element */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[60px] overflow-hidden">
              <Image 
                src="/MENTORADO/MentoradoLOGO.png" 
                alt="Nosso Mentorado" 
                width={600} 
                height={700} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SobreMentorado;
