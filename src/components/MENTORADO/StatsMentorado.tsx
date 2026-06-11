import React from 'react';

const StatsMentorado = () => {
  const stats = [
    {
      value: "+ 15",
      label: "participantes",
      desc: "Se aperfeiçoaram com o projeto!"
    },
    {
      value: "+ 100",
      label: "materiais",
      desc: "físicos e digitais para apoiar o aprendizado!"
    },
    {
      value: "+ 10",
      label: "mentores",
      desc: "que disponibilizam momentos de auxilio"
    },
    {
      value: "+ 6mil",
      label: "horas",
      desc: "Focadas por ano para o aprendizado!"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#1a1b3a] tracking-tight mb-4">
            Nossos números falam por nós
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Resultados reais de um projeto focado no crescimento e evolução constante de talentos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start relative overflow-hidden group"
            >
              {/* Decorative dot */}
              <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-purple-600"></div>
              
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-purple-50/0 group-hover:from-purple-50/50 group-hover:to-blue-50/50 transition-colors duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-black text-[#1a1b3a] mb-8 tracking-tighter">
                  {stat.value}
                </h3>
                <div className="space-y-2">
                  <p className="text-sm font-black text-gray-900 uppercase tracking-widest">
                    {stat.label}
                  </p>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsMentorado;
