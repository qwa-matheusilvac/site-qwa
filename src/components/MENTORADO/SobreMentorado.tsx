import Image from "next/image";

const SobreMentorado = () => {
  return (
    <section id="sobre-mentorado" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#1e1b4b] tracking-tighter leading-[0.95] mb-4">
            Fluxo do Projeto
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {/* Add your subtitle here */}
            Subtítulo para Fluxo do Projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              image: "/MENTORADO/Qualidade.png",
              title: "Qualidade",
              desc: "Defendemos que a qualidade vem antes de qualquer desenvolvimento. Acreditamos que testes e validações desde o início evitam erros, reduzem retrabalho e garantem que a solução entregue valor de verdade."
            },
            {
              image: "/MENTORADO/Tecnologias.png",
              title: "Nossas Tecnologias",
              desc: "Apresentaremos as ferramentas que utilizamos no dia a dia e a importância de cada uma nesse processo. Acreditamos que as ferramentas certas potencializam a qualidade, organizam o trabalho e garantem mais eficiência, rastreabilidade e consistência nas entregas."
            },
            {
              image: "/MENTORADO/Projetos.png",
              title: "Projetos Reais",
              desc: "Inserimos os projetos reais para colocar em prática todo o conhecimento adquirido. É neles que a teoria ganha sentido, permitindo validar aprendizados, desenvolver habilidades e entender os desafios reais do dia a dia."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                <h3 className="text-lg font-black text-[#1e1b4b] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreMentorado;