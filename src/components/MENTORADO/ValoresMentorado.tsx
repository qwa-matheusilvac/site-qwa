"use client";

const ValoresMentorado = () => {
  const valores = [
    "LEVANTAMENTO DE REQUISITOS",
    "ANÁLISE DE SISTEMAS",
    "ARQUITETURA DE SOFTWARE",
    "DESENVOLVIMENTO",
    "REVISÃO DE CÓDIGO",
    "TESTES UNITÁRIOS",
    "PESSOAS",
    "INTEGRAÇÃO CONTÍNUA",
    "DEPLOY",
    "MONITORAMENTO",
    "SUPORTE TÉCNICO",
    "GESTÃO DE ACESSOS",
    "GERENCIAMENTO"
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-5xl font-black text-[#1e1b4b] mb-4 text-center">
          Nós valorizamos <span className="text-[#8d5ae2]">Pessoas</span>
        </h2>
        <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto">
          {/* Add your subtitle here */}
          Subtítulo para "Nós valorizamos Pessoas"
        </p>
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {valores.map((valor, index) => (
            <div
              key={index}
              className={`px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all ${
                valor === "PESSOAS"
                  ? "bg-[#8d5ae2] text-white shadow-lg shadow-[#8d5ae2]/30 scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {valor}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValoresMentorado;