"use client";
import Navbar from "@/components/Navbar";
import Rodape from "@/components/Rodape";
import Image from "next/image";

const SobreNosPage = () => {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-qwa-lilac to-[#4d3ef7] text-white pt-24 md:pt-50 pb-16 md:pb-18 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="/SOBRE/Time.png" 
            alt="Team background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-qwa-lilac to-[#4d3ef7] z-5"></div>
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-2 items-center gap-6 md:gap-10">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black leading-[0.95] tracking-tighter mb-6">
                Transformamos<br />
                <span className="text-[#22d3ee]">software</span> em<br />
                resultados reais para o seu negócio.
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-medium opacity-80 max-w-md leading-relaxed">
                Unimos engenharia de software, agilidade e colaboração para entregar soluções que geram impacto e impulsionam o crescimento dos nossos clientes.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="px-8 py-4 bg-qwa-lilac text-white font-bold rounded-xl hover:bg-qwa-lilac/90 transition-all shadow-lg flex items-center gap-2">
                  Fale com um especialista 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M3 12h18" />
                  </svg>
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2">
                  Conheça nossas soluções 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M3 12h18" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/SOBRE/logoNome.png"
                alt="QWA Solutions"
                width={800}
                height={800}
                className="
                  w-[360px]
                  h-auto
                  object-contain
                  opacity-20
                  md:opacity-80
                  absolute
                "
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Pilares - same as image 1 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <span className="inline-block text-xs font-black text-qwa-lilac uppercase tracking-[0.3em] mb-4">NOSSOS PILARES</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1e1b4b] mb-4">
                Os valores que nos guiam
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Acreditamos que tecnologia só faz sentido quando é guiada por propósito, colaboração e evolução contínua.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Missão", 
                  items: ["Comprometidos com a entrega de soluções que realmente geram impacto positivo nos negócios e na vida das pessoas."],
                  icon: (
                    <svg className="w-16 h-16 text-qwa-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                { 
                  title: "Visão", 
                  items: ["Ser referência em soluções de software, reconhecida pela qualidade, inovação e pelo desenvolvimento de pessoas."],
                  icon: (
                    <svg className="w-16 h-16 text-qwa-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )
                },
                { 
                  title: "Valores", 
                  items: ["Ética e transparência", "Colaboração radical", "Evolução contínua", "Simplicidade com propósito", "Compromisso com resultados"],
                  icon: (
                    <svg className="w-16 h-16 text-qwa-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-black text-[#1e1b4b] mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.items.map((text, j) => (
                      <li key={j} className="flex items-start gap-2 text-lg text-gray-600">
                        <span className="text-qwa-lilac text-xl mt-1">•</span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Nosso Propósito - same as image 2 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="bg-qwa-light rounded-3xl p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border border-qwa-lilac/20 flex-shrink-0">
                  <svg className="w-12 h-12 text-qwa-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <span className="inline-block text-xs font-black text-qwa-lilac uppercase tracking-[0.3em] mb-3">NOSSO PROPÓSITO</span>
                  <h2 className="text-3xl font-black text-[#1e1b4b] leading-tight">
                    Desenvolver pessoas e soluções que gerem impacto real.
                  </h2>
                </div>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Criamos um ambiente onde as pessoas "aprendem a voar", desenvolvendo autonomia, responsabilidade e excelência técnica. Nosso objetivo é construir produtos próprios que garantam nossa liberdade para continuar sendo uma Empresa Escola e uma Empresa Família, com foco em impacto positivo e evolução contínua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* O que Fazemos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-black text-qwa-lilac uppercase tracking-[0.3em] mb-4">O QUE FAZEMOS</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1e1b4b] mb-4">
              Soluções completas para transformar seu negócio
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Software On Demand", 
                text: "Desenvolvemos software completamente personalizado para sua necessidade.",
                icon: (
                  <svg className="w-10 h-10 text-qwa-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              { 
                title: "Consultoria Inicial", 
                text: "Entendemos o seu negócio e a ajuda a tomar decisões inteligentes sobre tecnologia.",
                icon: (
                  <svg className="w-10 h-10 text-qwa-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: "Fábrica de Software", 
                text: "Times dedicados para processar e entregar seu projeto com qualidade.",
                icon: (
                  <svg className="w-10 h-10 text-qwa-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              { 
                title: "Mentoria & Educação", 
                text: "Formação contínua de pessoas e capazes de transformar o seu negócio com resultados.",
                icon: (
                  <svg className="w-10 h-10 text-qwa-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="font-black text-xl text-[#1e1b4b]">{item.title}</h3>
                  {item.icon}
                </div>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Nossos Diferenciais - same as image 3 */}
      <section className="py-20 bg-qwa-dark text-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-black text-qwa-lilac uppercase tracking-[0.3em] mb-4">NOSSOS DIFERENCIAIS</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              O que nos torna únicos
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "DNA de Evolução (Empresa Escola)", 
                text: "Dedicamos uma hora diária ao estudo profundo e incentivamos nosso time a \"beber direto da fonte\" para garantir autonomia e excelência técnica.",
                icon: (
                  <svg className="w-12 h-12 text-qwa-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" />
                  </svg>
                )
              },
              { 
                title: "Colaboração Radical (O Fim do \"Eu\")", 
                text: "Aqui, o problema de um é problema de todos. Trabalhamos como uma engrenagem viva, até encontrar a melhor solução juntos.",
                icon: (
                  <svg className="w-12 h-12 text-qwa-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              { 
                title: "Simplicidade Pragmática", 
                text: "Focamos 80% na solução e 20% na execução. Entregamos o que realmente importa, eliminando desperdícios e complexidade desnecessária.",
                icon: (
                  <svg className="w-12 h-12 text-qwa-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex items-start gap-6">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-black text-xl mb-4">{item.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Nossa História + Conquistas - same as image 4 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Nossa História */}
            <div>
              <span className="inline-block text-xs font-black text-qwa-lilac uppercase tracking-[0.3em] mb-4">NOSSA HISTÓRIA</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1e1b4b] mb-6">
                De onde surgimos
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nascemos em 2013 da frustração com um mercado que tratava desenvolvedores como meros "apertadores de parafusos". Decidimos ser rebeldes e criar um ambiente onde a verdade técnica e o bem-estar humano vêm antes do lucro a qualquer custo.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-transparent border border-qwa-lilac text-qwa-lilac font-bold rounded-xl hover:bg-qwa-lilac hover:text-white transition-all flex items-center gap-2">
                  Conheça nossa história 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7-7 7M3 12h18" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Conquistas */}
            <div className="relative">
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-20">
                <svg className="w-40 h-40 text-qwa-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <div className="relative">
                <span className="inline-block text-xs font-black text-qwa-lilac uppercase tracking-[0.3em] mb-6 block">CONQUISTAS</span>
                <div className="grid grid-cols-3 gap-8">
                  {[
                    { 
                      number: "13+", 
                      label: "Anos de atuação", 
                      subtext: "Mais de uma década de história construída com propósito e resultados.",
                      icon: (
                        <svg className="w-10 h-10 text-qwa-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      )
                    },
                    { 
                      number: "100+", 
                      label: "Projetos realizados", 
                      subtext: "Soluções entregues com qualidade, agilidade e impacto real.",
                      icon: (
                        <svg className="w-10 h-10 text-qwa-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      )
                    },
                    { 
                      number: "50+", 
                      label: "Clientes satisfeitos", 
                      subtext: "Parcerias de confiança que geram crescimento contínuo.",
                      icon: (
                        <svg className="w-10 h-10 text-qwa-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )
                    }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="mb-4">{stat.icon}</div>
                      <div className="text-4xl font-black text-qwa-dark mb-2">{stat.number}</div>
                      <div className="text-sm font-bold text-[#1e1b4b] mb-2">{stat.label}</div>
                      <p className="text-xs text-gray-500">{stat.subtext}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-qwa-lilac to-qwa-dark text-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Pronto para evoluir seu software?
              </h2>
              <p className="text-gray-200">
                Vamos conversar sobre desafios do seu negócio e como podemos ajuda-lo a atingir os seus objetivos.
              </p>
            </div>
            <div className="flex justify-end">
              <button className="px-8 py-4 bg-white text-qwa-dark font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg">
                Fale com um especialista →
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Rodape />
    </main>
  );
};

export default SobreNosPage;
