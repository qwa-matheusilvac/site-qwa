import Image from "next/image";
import Contagem from "./Contagem";

const Destaque = () => {
  const statsData = [
    { value: "13", label: "Anos de Experiência" },
    { value: "200", label: "Soluções Entregues" },
    { value: "50 mil", label: "Horas de Projetos" },
    { value: "100%", label: "Qualidade Garantida" }
  ];

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-qwa-lilac to-[#4d3ef7] text-white pt-24 md:pt-50 pb-16 md:pb-30 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]"
    >
      <div className="container mx-auto px-6 md:px-10">

        <div className="grid grid-cols-2 items-center gap-6 md:gap-10">

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black leading-[0.95] tracking-tighter mb-6">
              SIMPLIFIQUE<br />
              SUAS <span className="text-qwa-cyan">IDEIAS</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg font-medium opacity-80 max-w-md leading-relaxed">
              Tornamos ideias complexas em soluções digitais robustas e escaláveis para o seu negócio.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/CAPA/LogoQWABranca.png"
              alt="QWA Solutions"
              width={800}
              height={800}
              className="
            w-[360px]
            h-auto
            object-contain
            opacity-20
            md:opacity-60
            absolute
          "
              priority
            />
          </div>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-30 md:mt-24">

            {statsData.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 "
              >
                {i > 0 && (
                  <div className="hidden md:block w-[1px] h-10 bg-white/20 mr-4"></div>
                )}

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black whitespace-nowrap">
                  <Contagem end={stat.value} />
                </h3>

                <p className="text-[7px] sm:text-xs md:text-sm font-bold text-white/70 uppercase leading-tight max-w-[70px]">
                  {stat.label}
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
