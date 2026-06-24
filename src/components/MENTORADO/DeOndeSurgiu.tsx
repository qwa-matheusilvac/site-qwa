import Image from "next/image";

const DeOndeSurgiu = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-[#1e1b4b] mb-6">
            De onde Surgiu
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <p className="text-gray-600 text-sm leading-relaxed">
                Baseamos nossa fundação no Manifesto Ágil de 2001, que estabelece que indivíduos e interações têm mais valor do que processos e ferramentas. Aqui, nossa cultura é sempre repassar conhecimento, dentro disso criamos esse processo que nos auxilia a sempre estender a mão e auxiliar nossos colegas de trabalho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeOndeSurgiu;