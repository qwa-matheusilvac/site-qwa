"use client";

import Image from 'next/image';
import React from 'react';

const SobreNos = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* 1. CAPA EXATA COMO HOME - MESMA COR E TAMANHO */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-qwa-lilac to-[#4d3ef7] text-white pt-32 pb-12 overflow-hidden rounded-b-[80px] shadow-2xl"
      >
        <div className="container mx-auto px-10 mt-16">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl lg:text-[70px] font-black leading-[0.95] tracking-tighter mb-8">
              <span className="text-[#22d3ee]">Quality With</span> Agility
            </h1>
          </div>
        </div>
      </section>

      {/* 2. 3 RETÂNGULOS GRANDES - NA BORDA DA CAPA */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto -mt-24 md:-mt-32 relative z-20">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all">
              <div className="flex items-start gap-6 mb-6">
                <svg className="w-12 h-12 text-[#8d5ae2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <h3 className="text-2xl font-black text-[#1e1b4b]">Visão</h3>
              </div>
              <p className="text-gray-600 text-lg">Ser referência em inovação e qualidade no desenvolvimento de soluções digitais.</p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all">
              <div className="flex items-start gap-6 mb-6">
                <svg className="w-12 h-12 text-[#8d5ae2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="text-2xl font-black text-[#1e1b4b]">Missão</h3>
              </div>
              <p className="text-gray-600 text-lg">Entregar soluções tecnológicas de alta performance que impulsionam resultados reais.</p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all">
              <div className="flex items-start gap-6 mb-6">
                <svg className="w-12 h-12 text-[#8d5ae2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <h3 className="text-2xl font-black text-[#1e1b4b]">Valores</h3>
              </div>
              <p className="text-gray-600 text-lg">Qualidade, Agilidade, Inovação, Simplicidade, Parceria e Satisfação do Cliente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUEM SOMOS NÓS - COMO IMAGEM 2 */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[#1e1b4b] mb-8 leading-tight">
                Quem Somos Nós?
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Há 13 anos movidos por uma inquietação: recusar a ideia de uma TI limitada a apertadores de parafusos. Somos uma Empresa Escola e uma Empresa Família, onde o conhecimento não é diferencial é fundamento. Aqui, ninguém é número. Somos 24 pessoas guiadas por um único propósito: evoluir todos os dias e transformar, juntos, a realidade ao nosso redor.
              </p>
              <div className="grid grid-cols-1 gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#8d5ae2]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#8d5ae2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Manifesto Ágil como base</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#8d5ae2]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#8d5ae2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Qualidade e agilidade unidas</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#8d5ae2]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#8d5ae2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Inovação de forma simples</span>
                </div>
              </div>
              <button className="px-8 py-4 bg-[#8d5ae2] text-white font-bold rounded-xl hover:bg-[#7c3aed] transition-all shadow-lg">
                Fazer parte do Time
              </button>
            </div>
            <div>
              <Image 
                src="/SERVICOS/logoNome.png" 
                alt="Quem somos nós QWA" 
                width={700} 
                height={600} 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOSSOS VALORES - IMAGEM FULL WIDTH */}
      <section className="py-20 md:py-28 bg-white">
        <div className="relative w-full overflow-hidden">
          <Image 
            src="/SOBRE/Nossosvalores.jpg" 
            alt="Nossos Valores QWA" 
            width={1600} 
            height={800} 
            className="w-full h-[600px] object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="container mx-auto px-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Nossos Valores
              </h2>
              <p className="text-xl text-white opacity-90 max-w-2xl">
                Eles fazem parte do nosso dia a dia e acreditamos tanto nesses valores que os tornamos visíveis, estampando-os em nossa parede como um lembrete constante de quem somos e de onde queremos chegar.
                Na QWA, esses princípios não são apenas palavras: são pilares essenciais que sustentam nosso desenvolvimento, fortalecem nossas relações e guiam a forma como convivemos e crescemos juntos. É através deles que construímos um ambiente de trabalho saudável, colaborativo e verdadeiramente transformador.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NOSSA CULTURA - LUGAR DE MEET EXPERT INSTRUCTOR */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-[#1e1b4b]">
              Nossa <span className="text-[#8d5ae2]">Cultura</span>
            </h2>
            <button className="px-6 py-3 border-2 border-gray-200 text-[#1e1b4b] font-bold rounded-xl hover:border-[#8d5ae2] hover:text-[#8d5ae2] transition-all">
              Saiba mais
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                img: "Foco em Pessoas e Interações.png", 
                title: "Foco em Pessoas", 
                description: "Acreditamos que o nosso maior ativo não são as linhas de código, mas as pessoas que as escrevem. Na QWA, você não é um número; você é parte de uma família que evolui junta."
              },
              { 
                img: "Espírito de Equipe.png", 
                title: "Espírito de Equipe", 
                description: "Na QWA, acreditamos piamente que não existe 'Eu' no desenvolvimento de software; somos um time onde as vitórias e as derrotas são compartilhadas por todos"
              },
              { 
                img: "Humildade Técnica e Mentoria.png", 
                title: "Humildade Técnica", 
                description: "Ouvir e aprender como ponto de partida. Na QWA, a humildade é considerada nosso maior aliado."
              },
              { 
                img: "Protagonismo e Evolução Contínua.png", 
                title: "Evolução Contínua", 
                description: "Beber direto da fonte para voar mais alto. Nossa área é ingrata com quem para no tempo, por isso a evolução está no nosso DNA"
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <Image 
                  src={`/SOBRE/${item.img}`} 
                  alt={item.title} 
                  width={300} 
                  height={350} 
                  className="w-full h-72 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e1b4b] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ONDE QUEREMOS CHEGAR - IMAGEM 5 */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-5 py-2 bg-[#8d5ae2]/10 text-[#8d5ae2] text-base font-bold rounded-full mb-6">
                O nosso futuro
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#1e1b4b] mb-8 leading-tight">
                Onde queremos chegar
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                A empresa está em uma "maratona rumo à liberdade", buscando o equilíbrio onde seus produtos próprios (como o SCE, Bigom e Sigai) ultrapassem as despesas geradas pela prestação de serviços. O objetivo final dos fundadores é que todos os colaboradores "aprendam a voar".
              </p>
              <div className="grid grid-cols-1 gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#8d5ae2] flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1e1b4b]">Autonomia dos colaboradores</h4>
                    <p className="text-gray-600 text-base">Desenvolvimento de responsabilidade e capacidade de tomar decisões.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#8d5ae2] flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1e1b4b]">Conhecimento técnico profundo</h4>
                    <p className="text-gray-600 text-base">Capacitação contínua para excelência em entregas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#8d5ae2] flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1e1b4b]">Liderança de mercado</h4>
                    <p className="text-gray-600 text-base">Representar a QWA com excelência na frente de clientes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#8d5ae2] flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#1e1b4b]">Produtos próprios sustentáveis</h4>
                    <p className="text-gray-600 text-base">Equilíbrio financeiro através das soluções desenvolvidas internamente.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image 
                src="/SOBRE/Time.png" 
                alt="Time QWA" 
                width={700} 
                height={600} 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNos;
