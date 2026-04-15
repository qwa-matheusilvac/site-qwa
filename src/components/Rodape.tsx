import React from 'react';
import Image from 'next/image';
import { LuMapPinned } from "react-icons/lu";
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneVolume, FaSquareFacebook } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io5';

const Rodape = () => {
  return (
    <footer className="bg-qwa-primary text-white border-t border-white/10">
      <div className="mx-auto px-10" style={{ marginTop: '20px' }}>
        <div className="container-links">
          <div>
            <h5 className="font-black uppercase text-lg tracking-widest espacamento">a QWA</h5>
            <ul className="text-sm space-y-2 font-medium">
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Início</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Cultura QWA</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Nossa História</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black uppercase text-lg tracking-widest espacamento">nosso ramo</h5>
            <ul className="text-sm space-y-2 font-medium">
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Automação</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Gestão de Tempo</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Seguro & Finanças</a></li>
            </ul>
          </div>
          <div style={{ textAlign: 'start' }}>
            <h5 className="font-black uppercase text-lg tracking-widest espacamento">soluções</h5>
            <ul className="text-sm space-y-2 font-medium">
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Nossos Produtos</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Mentoria & Educação</a></li>
              <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Software On-Demand</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-12 flex flex-col md:flex-row justify-between items-center gap-8"></div>

        <div className="border-t border-white/10" style={{ display: 'flex', paddingTop: '20px', paddingBottom: '30px', justifyContent: 'space-between' }}>
          <div>
            <Image
              src="/CAPA/LogoQWA.png"
              alt="QWA"
              width={80}
              height={50}
              className="brightness-0 invert"
            />
          </div>
          <div>
            <p className="text-xs opacity-70" style={{ textAlign: 'start' }}>
              <span className="flex items-center gap-1.5 font-bold">
                <LuMapPinned />
                Fábrica de Software
              </span>
              <span className="block mt-1">
                Av. Ordem e Progresso, 157 Cj. 412 <br />
                Barra Funda - São Paulo - SP  <br />
              </span>
            </p>
          </div>
          <div>
            <p className="text-xs opacity-70" style={{ textAlign: 'start' }}>
              <span className="flex items-center gap-1.5 font-bold">
                <LuMapPinned />
                Administrativo / Comercial
              </span>
              <span className="block mt-1">
                Av. Brig. Faria Lima, 1572 Cj. 513 <br />
                Jardim Paulistano - São Paulo - SP <br />
              </span>
            </p>
          </div>
          <div>
            <p className="text-xs opacity-70" style={{ textAlign: 'start' }}>
              <span className="flex items-center gap-1.5 font-bold">
                <FaPhoneVolume />
                Contato
              </span>
              <span className="block mt-1">
                (11) 3014-2803< br />
                contato@qwasolucoes.com.br
              </span>
            </p>
          </div>
          <div style={{ display: 'flex',  alignItems: 'center' }}>
            <p className="opacity-70" style={{ textAlign: 'start', fontSize: '20px' }}>
              <span className="flex items-center gap-1.5 font-bold">
                <a><FaInstagram /></a>
                <a><IoLogoLinkedin /></a>
                <a><FaSquareFacebook /></a>
              </span>
            </p>
          </div>
        </div>
        <div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', paddingBottom: '10px' }}>
          <p className="text-xs font-medium opacity-60">© 2026 QWA Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
