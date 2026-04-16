"use client";

import React, { useState, useEffect } from 'react';
import { BsClipboard2Pulse } from 'react-icons/bs';
import { SiDevbox } from 'react-icons/si';
import { GrTest, GrValidate } from 'react-icons/gr';
import { FaMedal } from 'react-icons/fa';
import { FaMagnifyingGlassChart, FaHammer } from 'react-icons/fa6';

const ComoTrabalhamos = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const steps = [
    { title: "Entendendo a necessidade", icon: BsClipboard2Pulse },
    { title: "Análise / Solução", icon: FaMagnifyingGlassChart },
    { title: "Desenvolvimento", icon: SiDevbox },
    { title: "Teste", icon: GrTest },
    { title: "Homologação", icon: GrValidate },
    { title: "Implantação em produção", icon: FaHammer },
    { title: "Garantia", icon: FaMedal }
  ];

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setActiveIndex(i);
      i++;

      if (i >= steps.length) {
        clearInterval(interval);
      }
    }, 350); 

    return () => clearInterval(interval);
  }, []);

  const interpolateColor = (start: string, end: string, factor: number): string => {
    const s = start.match(/\w\w/g)?.map(c => parseInt(c, 16)) || [];
    const e = end.match(/\w\w/g)?.map(c => parseInt(c, 16)) || [];

    const result = s.map((val, i) =>
      Math.round(val + ((e[i] ?? 0) - val) * factor)
    );

    return `#${result.map(x => x.toString(16).padStart(2, '0')).join('')}`;
  };

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-black mb-24 uppercase text-center tracking-tight">
          <span className="text-qwa-primary">Como</span> Trabalhamos
        </h2>

        <div className="lg:hidden relative flex flex-col gap-16">
          <div className="absolute left-10 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#4A5DFF] to-[#7B4DFF] opacity-20 z-0" />

          {steps.map((step, i, arr) => {
            const Icon = step.icon as React.ElementType;
            const factor = i / (arr.length - 1);
            const color = interpolateColor("#4A5DFF", "#3B1E91", factor);
            const isActive = activeIndex !== null && i <= activeIndex;

            return (
              <div
                key={i}
                className="flex items-center gap-6 relative z-10"
              >
                <div
                  className="relative w-20 h-20 rounded-full flex items-center justify-center bg-white z-10"
                  style={{ border: `4px solid ${isActive ? color : '#ccc'}` }}
                >
                  <div
                    className="absolute inset-0 rounded-full transition-all duration-300"
                    style={{
                      background: color,
                      transform: isActive ? 'scale(0.92)' : 'scale(0)'
                    }}
                  />

                  <Icon className="text-3xl relative z-10" style={{ color: isActive ? '#fff' : color }} />
                </div>

                <p className="text-sm font-black uppercase text-gray-700">
                  {step.title}
                </p>
              </div>
            );
          })}
        </div>

        <div className="hidden lg:block relative">

          {/* linha base */}

          <div
            className="absolute top-10 h-[4px] z-0 duration-3000"
            style={{
              left: '30px',
              width:
                activeIndex !!= null
                  ? `calc(${(7 / (steps.length - 1)) * 85}% - 60px)`
                  : '0%',
              background: 'linear-gradient(to right, #4A5DFF, #3B1E91)'
            }}
          />

          <div className="flex justify-between relative z-10">
            {steps.map((step, i, arr) => {
              const Icon = step.icon as React.ElementType;
              const factor = i / (arr.length - 1);
              const color = interpolateColor("#4A5DFF", "#3B1E91", factor);
              const isActive = activeIndex !== null && i <= activeIndex;

              return (
                <div
                  key={i}
                  className="flex flex-col items-center w-[120px]"
                >
                  <div
                    className="relative w-20 h-20 rounded-full flex items-center justify-center bg-white z-10"
                    style={{
                      border: `4px solid ${isActive ? color : '#ccc'}`,
                      boxShadow: isActive ? `0 0 20px ${color}55` : ''
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-full transition-all duration-500"
                      style={{
                        background: color,
                        transform: isActive ? 'scale(0.92)' : 'scale(0)'
                      }}
                    />

                    <Icon className="text-3xl relative z-10" style={{ color: isActive ? '#fff' : color }} />
                  </div>

                  <p className="text-[12px] font-black mt-6 uppercase text-gray-700 text-center">
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ComoTrabalhamos;