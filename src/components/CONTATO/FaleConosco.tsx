import React from 'react';
import { FaArrowRight, FaPhone } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const faleconosco = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
        </div>

        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 bg-gradient-to-br from-qwa-lilac to-qwa-primary text-white">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-8">
                Vamos transformar seu projeto em realidade?
              </h2>
              <p className="text-white/90 font-medium leading-relaxed mb-12 max-w-md">
                Nossa equipe está pronta para entender seus desafios e desenvolver a solução ideal para o seu negócio. Entre em contato e vamos conversar.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-qwa-lilac transition-all duration-300">
                    <MdOutlineMail className="w-6 h-6"/>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">E-mail</p>
                    <p className="text-white">contato@qwasolucoes.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-qwa-lilac transition-all duration-300">
                    <FaPhone  className="w-5 h-5"/>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-1">Telefone</p>
                    <p className="text-white">+55 (11) 3014-2803</p>
                  </div>
                </div>
              </div>
            </div>

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
                <button className="w-full bg-qwa-primary text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-qwa-dark transition-all shadow-xl flex items-center justify-center gap-4 group">
                  Iniciar Transformação Digital
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <FaArrowRight />
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

export default faleconosco;
