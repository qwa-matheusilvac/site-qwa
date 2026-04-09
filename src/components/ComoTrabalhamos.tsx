import React from 'react';

const ComoTrabalhamos = () => {
  const steps = [
    { title: "Entendendo a necessidade", icon: "📋" },
    { title: "Análise / Solução", icon: "🔍" },
    { title: "Desenvolvimento", icon: "💻" },
    { title: "Teste", icon: "🧪" },
    { title: "Homologação", icon: "✅" },
    { title: "Implantação em produção", icon: "⚙️" },
    { title: "Garantia", icon: "🏅" }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl font-black mb-24 uppercase text-center tracking-tight">
          <span className="text-qwa-primary">Como</span> Trabalhamos
        </h2>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-4 items-center">
          {steps.map((step, i, arr) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center w-36 relative group transition-all hover:scale-110">
                <div className="w-20 h-20 rounded-full border-4 border-qwa-primary flex items-center justify-center bg-white z-10 group-hover:bg-qwa-primary group-hover:text-white transition-all shadow-xl text-3xl">
                  {step.icon}
                </div>
                <p className="text-[12px] font-black text-center mt-6 uppercase text-gray-700 px-2 tracking-wider leading-tight">
                  {step.title}
                </p>
                
                {/* Connector line for desktop */}
                {i < arr.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[80%] w-[100%] h-[4px] bg-gradient-to-r from-qwa-primary/40 to-qwa-primary/10 -z-0"></div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoTrabalhamos;
