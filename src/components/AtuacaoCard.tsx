import React from 'react';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { MdInsertChart } from 'react-icons/md';
import { RxLapTimer } from 'react-icons/rx';

const cardsData = [
  {
    icone: IoShieldCheckmarkSharp,
    titulo: 'SEGURO & FINANÇAS',
    texto: 'Não quebre, é melhor dar uma segurada',
  },
  {
    icone: MdInsertChart,
    titulo: 'GESTÃO DE VENDAS',
    texto: 'Tire as vendas para enxergar um mundo novo e bem gerido',
  },
  {
    icone: RxLapTimer,
    titulo: 'GESTÃO DE TEMPO',
    texto: 'Organize seu tempo pra evitar procrastinação, mas depois você vê isso com calma',
  },
];

export default function Card() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center px-" style={{ marginBottom: '40px'}}>
      {cardsData.map((card, index) => {
        const Icon = card.icone;

        return (
          <div
            key={index}
            className="w-full max-w-[350px] h-[180px] p-6 rounded-[40px] 
            bg-gradient-to-b from-[#9b66ff] to-[#3B1E91] text-[#F0E7FF] 
            relative transition-all duration-500 hover:translate-y-[-10px]"
          >
            <div className="flex flex-col h-full justify-between">
              
              <div className="flex items-center gap-3 font-bold text-lg">
                <div className="bg-[#3B1E91] text-[#F0E7FF] 
                  w-10 h-10 flex items-center justify-center 
                  rounded-[16px] text-xl">
                  <Icon />
                </div>
                {card.titulo}
              </div>

              <p className="text-sm opacity-80 mt-2">
                {card.texto}
              </p>

              <span className="text-xs text-[#F0E7FF] self-end opacity-80">
                Saiba mais
              </span>

            </div>
          </div>
        );
      })}
    </div>
  );
}
