import Image from "next/image";

const TaxExpertiseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1e1b4b] mb-6">
              De onde Surgiu
            </h2>
          </div>
          <div>
            <p className="text-gray-600 mb-6">
              Baseamos nossa fundação no Manifesto Ágil de 2001, que estabelece que indivíduos e interações têm mais valor do que processos e ferramentas, aqui nossa cultura
              é sempre repassar conhecimento, dentro disso criamos esse processo que nos auxilia a sempre estender a mao e auxiliar nossos colegas de trbalaho.
            </p>
            <div className="flex items-center gap-4">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxExpertiseSection;