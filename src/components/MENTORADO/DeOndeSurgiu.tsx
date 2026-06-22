import Image from "next/image";

const DeOndeSurgiu = () => {
  return (
    <section className="py-2 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-start max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-[#1e1b4b] mb-0">
              De onde Surgiu
            </h2>
          </div>
          <div>
            <p className="text-gray-600 text-sm leading-relaxed mb-0">
              Baseamos nossa fundação no Manifesto Ágil de 2001, que estabelece que indivíduos e interações têm mais valor do que processos e ferramentas. Aqui, nossa cultura é sempre repassar conhecimento, dentro disso criamos esse processo que nos auxilia a sempre estender a mão e auxiliar nossos colegas de trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeOndeSurgiu;