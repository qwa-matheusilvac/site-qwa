const CoinsSection = () => {
  const coins = [
    { name: "Levantamento de requisitos", icon: "polygon" },
    { name: "Análise de sistemas", icon: "dogecoin" },
    { name: "Arquitetura de software", icon: "chainlink" },
    { name: "Desenvolvimento", icon: "harmony" },
    { name: "Revisão de código", icon: "ethereum" },
    { name: "Testes unitários", icon: "tether" },
    { name: "Testes de integração", icon: "solanium" },
    { name: "Integração contínua", icon: "cardano" },
    { name: "Deploy", icon: "cronos" },
    { name: "Monitoramento", icon: "sandbox" },
    { name: "Suporte técnico", icon: "solana" },
    { name: "Gestão de acessos", icon: "binance" },
    { name: "Gerenciamento", icon: "pancake" },
    { name: "Pessoas", icon: "pancake" }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-[#1e1b4b] mb-4">
           Antes de <span className="text-[#3b82f6]">Processos</span> 
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
              Baseamos nossa fundação no Manifesto Ágil de 2001, que estabelece que indivíduos e interações têm mais valor do que processos e ferramentas, aqui nossa cultura
              é sempre repassar conhecimento, dentro disso criamos esse processo que nos auxilia a sempre estender a mao e auxiliar nossos colegas de trbalaho.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoinsSection;