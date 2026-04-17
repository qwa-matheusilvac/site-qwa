import React from 'react';

const FaleConosco = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-qwa-dark tracking-tight leading-tight">
              Fale
              <span className="text-qwa-primary"> Conosco</span>
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.04)] overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content */}
            <div className="lg:w-1/2 p-12 lg:p-20 bg-qwa-lilac text-white">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-8">
                Vamos transformar seu projeto em realidade?
              </h2>
              <p className="text-white/90 font-medium leading-relaxed mb-12 max-w-md">
                Nossa equipe está pronta para entender seus desafios e desenvolver a solução ideal para o seu negócio. Entre em contato e vamos conversar.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-qwa-lilac transition-all duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">E-mail</p>
                    <p className="text-white font-black">contato@qwa.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-qwa-lilac transition-all duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Telefone</p>
                    <p className="text-white font-black">+55 11 99999-9999</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Form */}
            <div className="lg:w-1/2 bg-white p-12 lg:p-20">
              <h3 className="text-2xl font-black text-qwa-dark uppercase tracking-tight mb-8">Fale conosco</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Nome</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome completo"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-qwa-lilac focus:ring-0 transition-all outline-none bg-white font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">E-mail</label>
                  <input 
                    type="email" 
                    placeholder="exemplo@email.com"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-qwa-lilac focus:ring-0 transition-all outline-none bg-white font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Setor</label>
                  <select className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-qwa-lilac focus:ring-0 transition-all outline-none bg-white font-medium appearance-none">
                    <option>Selecione...</option>
                    <option>Financeiro</option>
                    <option>Seguros</option>
                    <option>Vendas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Mensagem</label>
                  <textarea 
                    placeholder="Como podemos te ajudar?"
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-qwa-lilac focus:ring-0 transition-all outline-none bg-white font-medium resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-qwa-lilac text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-qwa-dark transition-all shadow-xl flex items-center justify-center gap-4 group">
                  Iniciar Transformação Digital
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M3 12h18" />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaleConosco;
