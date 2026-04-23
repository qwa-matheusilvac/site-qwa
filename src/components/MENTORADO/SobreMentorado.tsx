import Image from "next/image";

const SobreMentorado = () => {
  const stats = [
    { value: "+15", label: "Participantes", desc: "Já se beneficiaram do programa." },
    { value: "+100", label: "Aulas Práticas", desc: "Focadas em problemas reais." },
    { value: "+10", label: "Mentores", desc: "Especialistas do mercado." }
  ];

  return (
    <section id="sobre-mentorado" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side - Image with decorative element */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl border-8 border-gray-50">
              <Image 
                src="/MENTORADO/mentorado.png" 
                alt="Nosso Mentorado" 
                width={600} 
                height={700} 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative circle behind image */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-qwa-lilac/10 rounded-full blur-3xl -z-0 animate-pulse"></div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-qwa-cyan/10 rounded-full blur-3xl -z-0"></div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-qwa-lilac/10 text-qwa-lilac px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-widest mb-6">
              Nossa História
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-qwa-dark tracking-tighter leading-[0.95] mb-8 uppercase">
              NOSSA JORNADA COM<br />
              <span className="text-qwa-primary text-5xl md:text-7xl">MENTORADOS</span>
            </h2>

            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-12 max-w-xl">
              Acreditamos que o conhecimento deve ser compartilhado. Nosso programa não é apenas sobre ensinar código, mas sobre formar profissionais completos, prontos para os desafios do mundo real.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <h3 className="text-4xl font-black text-qwa-primary tracking-tighter">{stat.value}</h3>
                  <div className="w-10 h-1 bg-qwa-lilac/30 rounded-full mb-2"></div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-qwa-dark">{stat.label}</h4>
                  <p className="text-[10px] font-medium text-gray-400 leading-tight">{stat.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
               <button className="bg-qwa-dark text-white px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest shadow-xl hover:scale-105 transition-all flex items-center gap-4 group">
                 Saiba como participar
                 <span className="group-hover:translate-x-1 transition-transform">→</span>
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SobreMentorado;
