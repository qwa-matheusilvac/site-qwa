import React from 'react';
import Image from 'next/image';

const Rodape = () => {
  return (
    <footer className="bg-qwa-primary text-white border-t border-white/10">
      <div className="mx-auto px-10" style={{ marginTop: '20px'}}>
        <div className="container-links">
          <div className="link-group">
            <h5 className="font-black uppercase text-lg tracking-widest espacamento">a QWA</h5>
            <ul className="text-sm space-y-4 font-medium">
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Início</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Cultura QWA</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Nossa História</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h5 className="font-black uppercase text-lg tracking-widest espacamento">nosso ramo</h5>
            <ul className="text-sm space-y-4 font-medium">
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Automação</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Gestão de Tempo</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Seguro & Finanças</a></li>
            </ul>
          </div>
          <div className="link-group" style={{ textAlign: 'center' }}>
            <h5 className="font-black uppercase text-lg tracking-widest espacamento">soluções</h5>
            <ul className="text-sm space-y-4 font-medium">
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Nossos Produtos</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Mentoria & Educação</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Software On-Demand</a></li>
            </ul>
          </div>
          <div className="link-group" style={{ textAlign: 'end' }}>
            <h5 className="font-black uppercase text-lg tracking-widest espacamento">redes sociais</h5>
            <ul className="text-sm space-y-4 font-medium">
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">LinkedIn</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Facebook</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Instagram</a></li>
            </ul>
          </div>
          <div className="link-group" style={{ textAlign: 'end' }}>
            <h5 className="font-black uppercase text-lg tracking-widest espacamento">Contate-nos</h5>
            <ul className="text-sm space-y-4 font-medium">
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Email</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Telefone</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Whatsapp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">

        </div>
        <div className="border-t border-white/10" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', margin: '20px'}}>
            <Image
              src="/CAPA/LogoQWA.png"
              alt="QWA"
              width={80}
              height={50}
              className="brightness-0 invert"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', marginBottom: '10px' }}>
            <p className="text-xs font-medium opacity-60">© 2026 QWA Solutions. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
