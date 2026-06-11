import Image from "next/image";
import { FaShieldAlt, FaRobot } from "react-icons/fa";

const InovacaoMentorado = () => {
  const stats = [
    { value: "+ 15", label: "participantes", desc: "Se aperfeiçoaram com o projeto!" },
    { value: "+ 100", label: "materiais", desc: "físicos e digitais para apoiar o aprendizado!" },
    { value: "+ 10", label: "mentores", desc: "que disponibilizam momentos de auxílio" },
    { value: "+ 6mil", label: "horas", desc: "Focadas por ano para o aprendizado!" }
  ];

  return (
    <div className="bg-transparent">
      {/* Section based on Print 4 (Stats + Image Right) */}
      <section className="py-24">
        <div className="container mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">
              UM PROJETO FOCADO NA<br />
              <span className="text-qwa-primary">EVOLUÇÃO DE PESSOAS</span>
            </h2>
            <div className="w-24 h-1 bg-qwa-cyan mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 px-12 py-16 rounded-[40px] border border-white/10 shadow-sm bg-white/5 backdrop-blur-sm">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-3 text-center md:text-left">
                <h3 className="text-4xl font-black text-qwa-primary tracking-tighter">
                  {stat.value} <span className="text-lg font-medium text-white/80">{stat.label}</span>
                </h3>
                <p className="text-sm text-white/60 font-medium leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[0.95] mb-8 uppercase">
                TRANSFORMANDO POTENCIAL<br />
                <span className="text-qwa-primary text-5xl md:text-7xl">EM RESULTADOS REAIS</span>
              </h2>
              
              <div className="mt-8 space-y-6">
                <p className="text-white/70 text-lg font-medium leading-relaxed">
                  Na QWA, acreditamos no desenvolvimento contínuo. Por isso criamos o MENTORADO, um projeto pensado para fortalecer talentos, estimular o aprendizado e apoiar cada etapa da jornada.
                </p>
                <p className="text-white/70 text-lg font-medium leading-relaxed">
                  Aqui, cultivamos o valor de fazer pela e para a empresa e para a equipe, promovendo um ambiente de colaboração, crescimento e excelência.
                </p>
              </div>
              
              <div className="flex gap-6 mt-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-qwa-lilac/10 flex items-center justify-center text-qwa-lilac">
                    <FaShieldAlt />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">Cultura de<br />Excelência</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-qwa-lilac/10 flex items-center justify-center text-qwa-lilac">
                    <FaRobot />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">Aprendizado<br />Contínuo</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="rounded-[40px] overflow-hidden shadow-2xl">
                <div className="bg-qwa-dark h-[450px] flex items-center justify-center relative">
                  <Image 
                    src="/MENTORADO/mentorado.png" 
                    alt="Mentorado QWA" 
                    fill
                    className="object-cover opacity-70"
                  />
                  <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white">
                    <h4 className="text-2xl font-black">+ 15</h4>
                    <p className="text-[10px] uppercase tracking-widest opacity-70">Talentos Formados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InovacaoMentorado;
