"use client";

import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Comentarios = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonials = [
    {
      name: "Alisson Honório",
      role: "Estágio 2024",
      rating: 5,
      text: "Grande oportunidade de aprendizado praticando e interagindo com projetos reais! A QWA realmente entrega valor.",
    },
    {
      name: "Matheus Correia",
      role: "Estágio 2025",
      rating: 5,
      text: "A agilidade e qualidade técnica da equipe são impressionantes. Superaram nossas expectativas em cada entrega.",
    },
    {
      name: "Gabriel Corrêa",
      role: "Estágio 2025",
      rating: 5,
      text: "Transformaram nossos desafios complexos em soluções simples. O suporte e a consultoria são de primeiro nível.",
    },
    {
      name: "Ana Luiza de Oliveira",
      role: "Estágio 2026",
      rating: 5,
      text: "Grata por cada oportunidade de aprendizado, o mentorado vem sendo um exemplo de crescimento diário! 💙",
    },
  ];

  const step = isMobile ? 1 : 2;

  const next = () =>
    setActiveIndex((prev) => (prev + step) % testimonials.length);

  const prev = () =>
    setActiveIndex(
      (prev) => (prev - step + testimonials.length) % testimonials.length
    );

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-qwa-primary/5 blur-[140px] rounded-full" />

      <div className="container mx-auto px-5 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Texto */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <span className="uppercase tracking-[0.3em] text-qwa-primary text-xs font-bold">
              Depoimentos
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-qwa-dark leading-none mt-4 mb-6">
              Quem fez parte
              <br />
              dessa jornada.
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8">
              O sucesso de cada projeto é construído através da colaboração e
              dedicação de todos os envolvidos. Confira o que dizem sobre nossa
              jornada juntos.
            </p>

            <button className="bg-qwa-dark text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl">
              Saber Mais
            </button>
          </div>

          {/* Carrossel */}
          <div className="w-full lg:w-2/3 overflow-hidden">
            <div className="overflow-hidden p-10">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${
                    isMobile
                      ? activeIndex * 100
                      : activeIndex * 50
                  }%)`,
                }}
              >
                {testimonials.map((item, i) => {
                  const isActive = isMobile
                    ? i === activeIndex
                    : i === activeIndex ||
                      i === (activeIndex + 1) % testimonials.length;

                  return (
                    <div
                      key={i}
                      className={`
                        ${
                          isMobile
                            ? "w-full"
                            : "w-1/2 px-3"
                        }
                        flex-shrink-0
                      `}
                    >
                      <div
                        className={`
                          rounded-[32px]
                          p-15
                          min-h-[380px]
                          border
                          transition-all
                          duration-500
                          backdrop-blur-xl
                          flex flex-col
                          ${
                            isActive
                              ? "bg-white/90 scale-100 border-white p-10"
                              : "bg-white/60 scale-95 opacity-70 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border-gray-100 p-10"
                          }
                        `}
                      >
                        <div className="flex flex-col h-full">
                          {/* Avaliação */}
                          <div className="flex items-center justify-between">
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, starIndex) => (
                                <span
                                  key={starIndex}
                                  className={`text-sm ${
                                    starIndex < item.rating
                                      ? "opacity-100"
                                      : "opacity-20"
                                  }`}
                                >
                                  ⭐
                                </span>
                              ))}
                            </div>

                            <FaQuoteRight className="text-qwa-primary/20 text-lg" />
                          </div>

                          {/* Comentário */}
                          <div className="flex-1 flex items-center py-6">
                            <p className="text-gray-600 text-[15px] leading-7">
                              {item.text}
                            </p>
                          </div>

                          {/* Autor */}
                          <div className="flex items-center gap-4">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-qwa-primary via-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold shadow-md">
                              {item.name.charAt(0)}
                            </div>

                            <div>
                              <h5 className="font-semibold text-sm text-qwa-dark">
                                {item.name}
                              </h5>

                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-qwa-primary/10 text-qwa-primary text-[11px] font-medium mt-1">
                                {item.role}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navegação */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-10 mb-10">
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-white shadow-lg hover:scale-110 transition-all flex items-center justify-center"
                >
                  ←
                </button>

                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-white shadow-lg hover:scale-110 transition-all flex items-center justify-center"
                >
                  →
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-bold text-sm">
                  {activeIndex + 1}
                </span>

                <div className="w-24 h-[3px] bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-qwa-primary transition-all duration-500"
                    style={{
                      width: `${
                        ((activeIndex + 1) /
                          testimonials.length) *
                        100
                      }%`,
                    }}
                  />
                </div>

                <span className="text-gray-400 text-sm">
                  {testimonials.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comentarios;