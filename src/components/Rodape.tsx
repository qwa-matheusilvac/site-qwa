import React from 'react';
import Image from 'next/image';

const Rodape = () => {
  return (
    <footer className="bg-qwa-primary text-white py-24 border-t border-white/10">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          <div className="space-y-6">
            <h5 className="font-black uppercase text-lg tracking-widest">Links</h5>
            <ul className="text-sm space-y-4 font-medium">
              <li><a href="#home" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Home</a></li>
              <li><a href="#sobre-nos" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Sobre nós</a></li>
              <li><a href="#mentorado" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Mentorado</a></li>
              <li><a href="#contato" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Contato</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="font-black uppercase text-lg tracking-widest">Links</h5>
            <ul className="text-sm space-y-4 font-medium">
              <li><a href="#contato" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Contate-nos</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Trabalhe conosco</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Treinamentos</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="font-black uppercase text-lg tracking-widest">PRODUTOS</h5>
            <ul className="text-sm space-y-4 font-medium">
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Evolução</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Criatividade</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Trabalhe em equipe</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="font-black uppercase text-lg tracking-widest">Mídia Social</h5>
            <ul className="text-sm space-y-4 font-medium">
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Facebook</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Instagram</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">LinkedIn</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="font-black uppercase text-lg tracking-widest">Contate-nos</h5>
            <ul className="text-sm space-y-4 font-medium">
              <li className="opacity-80">Email</li>
              <li className="opacity-80">Telefone</li>
              <li className="opacity-80">Whatsapp</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-4">
              <Image 
                src="/CAPA/LogoQWA.png" 
                alt="QWA" 
                width={120} 
                height={50} 
                className="brightness-0 invert"
              />
              <span className="font-black text-xl tracking-[0.2em]">SOLUTIONS</span>
           </div>
           <p className="text-xs font-medium opacity-60">© 2026 QWA Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
