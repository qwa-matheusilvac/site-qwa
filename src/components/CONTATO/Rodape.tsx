import React from 'react';
import Image from 'next/image';
import { LuMapPinned } from "react-icons/lu";
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneVolume, FaSquareFacebook } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io5';

const Rodape = () => {
  return (
    <footer className="bg-qwa-primary text-white">
      <div className="px-6 md:px-10">

        {/* WRAPPER */}
        <div className="flex md:block items-stretch">

          {/* TOP LINKS */}
          <div className="w-1/2 md:w-full">
            <div className="mx-auto max-w-7xl mt-0 md:mt-20 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

              <div>
                <h5 className="font-black uppercase text-lg tracking-widest">a QWA</h5>
                <ul className="text-sm space-y-2 font-medium">
                  <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Início</a></li>
                  <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Cultura QWA</a></li>
                  <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Nossa História</a></li>
                </ul>
              </div>

              <div>
                <h5 className="font-black uppercase text-lg tracking-widest">nosso ramo</h5>
                <ul className="text-sm space-y-2 font-medium">
                  <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Automação</a></li>
                  <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Gestão de Tempo</a></li>
                  <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Seguro & Finanças</a></li>
                </ul>
              </div>

              <div>
                <h5 className="font-black uppercase text-lg tracking-widest">soluções</h5>
                <ul className="text-sm space-y-2 font-medium">
                  <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Nossos Produtos</a></li>
                  <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Mentoria & Educação</a></li>
                  <li><a href="#" className="hover:text-qwa-cyan opacity-80 hover:opacity-100 transition-all">Software On-Demand</a></li>
                </ul>
              </div>

            </div>
          </div>

          {/* INFOS */}
          <div className="w-1/2 md:w-full border-l md:border-l-0 md:border-t border-white/10 mt-6 pt-6 pb-8">

            <div className="
              mx-auto max-w-8xl
              grid gap-6
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:flex lg:justify-center lg:items-center lg:gap-35
            ">

              {/* Logo */}
              <div className="flex justify-center lg:justify-start">
                <Image
                  src="/CAPA/LogoQWA.png"
                  alt="QWA"
                  width={80}
                  height={50}
                  className="brightness-0 invert"
                />
              </div>

              {/* Endereço 1 */}
              <div className="text-xs opacity-70 text-center lg:text-left">
                <span className="flex items-center justify-center lg:justify-start gap-1.5 font-bold">
                  <LuMapPinned />
                  Fábrica de Software
                </span>
                <span className="block mt-1">
                  Av. Ordem e Progresso, 157 Cj. 412 <br />
                  Barra Funda - São Paulo - SP
                </span>
              </div>

              {/* Endereço 2 */}
              <div className="text-xs opacity-70 text-center lg:text-left">
                <span className="flex items-center justify-center lg:justify-start gap-1.5 font-bold">
                  <LuMapPinned />
                  Administrativo / Comercial
                </span>
                <span className="block mt-1">
                  Av. Brig. Faria Lima, 1572 Cj. 513 <br />
                  Jardim Paulistano - São Paulo - SP
                </span>
              </div>

              {/* Contato */}
              <div className="text-xs opacity-70 text-center lg:text-left">
                <span className="flex items-center justify-center lg:justify-start gap-1.5 font-bold">
                  <FaPhoneVolume />
                  Contato
                </span>
                <span className="block mt-1">
                  (11) 3014-2803 <br />
                  contato@qwasolucoes.com.br
                </span>
              </div>

              {/* Redes */}
              <div className="flex justify-center lg:justify-start items-center gap-4 text-xl opacity-70">
                <a className="hover:text-qwa-cyan transition" href="https://www.instagram.com/qwa_solucoes/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a className="hover:text-qwa-cyan transition" href="https://www.linkedin.com/company/qwa-solu%C3%A7%C5%8Des-digitais" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin /></a>
                <a className="hover:text-qwa-cyan transition" href="https://www.facebook.com/qwasolucoes" target="_blank" rel="noopener noreferrer"><FaSquareFacebook /></a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Rodape;