import Image from "next/image";

const SimplifiqueMentorado = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-[#1e1b4b] mb-4">
              SIMPLIFIQUE<br />
              <span className="text-[#8d5ae2]">MENTORADO</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Acreditamos no desenvolvimento contínuo. Por isso criamos o MENTORADO, um projeto pensado para fortalecer talentos, estimular o aprendizado e apoiar cada etapa da jornada. Aqui, cultivamos o valor de fazer pela e para a empresa e para a equipe, promovendo um ambiente de colaboração, crescimento e excelência.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/MENTORADO/MentoradoLOGO.png"
              alt="Mentorado Logo"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifiqueMentorado;