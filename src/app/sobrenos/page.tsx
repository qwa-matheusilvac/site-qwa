import Navbar from "@/components/Navbar";
import Rodape from "@/components/Rodape";
import Image from "next/image";

const SobreNosPage = () => {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section (Capa no inicio) */}
      <section className="relative bg-gradient-to-br from-qwa-lilac to-[#4d3ef7] text-white pt-24 md:pt-50 pb-16 md:pb-18 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black leading-[0.95] tracking-tighter mb-6">
                Quality With Agility
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-medium opacity-80 max-w-md leading-relaxed">
                Nascida da rebeldia contra o modelo tradicional de TI, agregamos valor real aos nossos clientes através de soluções de qualidade e inovação pensadas de forma simples
. Acreditamos que pessoas motivadas e com suporte total são o motor de qualquer entrega extraordinária
              </p>
            </div>
            <div className="relative">
              <div className="w-full flex items-center justify-center">
                <Image
                  src="/SOBRE/logoNome.png"
                  alt="QWA Logo"
                  width={400}
                  height={200}
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Pilares Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e1b4b] mb-2">Nossos Pilares</h2>
            <p className="text-gray-500">Os valores que nos guiam</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: "🎯", title: "Missão", subtitle: "Comprometidos com a entrega de soluções que realmente geram impacto positivo." },
              { icon: "🤝", title: "Visão", subtitle: "Trabalhamos juntos, compartilhando conhecimento e crescendo como equipe." },
              { icon: "🚀", title: "Valores", subtitle: "Sempre buscando novas formas de melhorar e evoluir nossas soluções." }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl flex items-start gap-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-[#1e1b4b] text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Proposito Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-800 rounded-3xl h-48 flex items-center justify-center">
                  <Image src="/SOBRE/Time.png" alt="Time" width={200} height={150} className="object-cover rounded-3xl" />
                </div>
                <div className="bg-gray-800 rounded-3xl h-48 flex items-center justify-center mt-8">
                  <Image src="/SOBRE/QuemSomos.png" alt="Quem Somos" width={200} height={150} className="object-cover rounded-3xl" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nosso Proposito</h2>
              <p className="text-gray-300 text-lg mb-8">
                transformar ideias em soluções de software que gerem impacto positivo na vida das pessoas e nos negócios de seus clientes
. No entanto, as fontes revelam que a razão de existir da empresa é muito mais profunda e centrada no desenvolvimento humano.
Para os fundadores, o propósito vai além de ser apenas uma empresa de TI; trata-se de um compromisso com a evolução contínua, a ética e a união do time
. Um dos objetivos centrais e mais enfatizados internamente é o de fazer com que os colaboradores "aprendam a voar"
. Isso envolve fornecer o ambiente, a confiança e o suporte necessários para que cada indivíduo desenvolva autonomia, responsabilidade e um conhecimento técnico profundo, tornando-se protagonista de sua própria carreira e capaz de representar a empresa com excelência
.
Além disso, esse propósito está conectado à "maratona rumo à liberdade"
. A visão estratégica da QWA é atingir um estágio em que seus produtos próprios (como o SCE, Bigom e Sigai) sustentem a operação financeira, garantindo que a empresa tenha total liberdade para agir de acordo com seus valores e continue a ser uma "Empresa Escola" e uma "Empresa Família", independentemente das pressões externas do mercado
.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1e1b4b] mb-12">
            Nossa História
          </h2>
          <div className="bg-gradient-to-br from-qwa-light to-white rounded-3xl p-12 border border-gray-100 shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 text-lg leading-relaxed">
                Com 13 anos de atuação no mercado, a QWA começou como um sonho de transformar a forma como software é desenvolvido. 
                Hoje, combinamos a precisão da engenharia de software com a agilidade exigida pelo cenário atual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* De onde surgimos Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                De onde surgimos
              </h2>
              <p className="text-purple-100 text-lg">
                Surgimos em 2013 da frustração com um mercado que tratava desenvolvedores como meros apertadores de parafusos
. Decidimos ser rebeldes e criar um ambiente onde a verdade técnica e o bem-estar humano vêm antes do lucro a qualquer custo

              </p>
            </div>
            <div className="bg-white rounded-3xl h-64 flex items-center justify-center">
              <Image src="/SOBRE/Nossosvalores.jpg" alt="Nossos Valores" width={400} height={250} className="object-cover rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-3xl h-80 flex items-center justify-center">
              <Image src="/SOBRE/Espírito de Equipe.png" alt="Espírito de Equipe" width={400} height={300} className="object-cover rounded-3xl" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-4">
                O que fazemos
              </h2>
              <p className="text-gray-600 text-lg">
                Não apenas escrevemos código; realizamos consultorias imersivas para entender a dor do negócio e, se necessário, temos a coragem de propor o 'caminho difícil' para garantir a sustentabilidade futura do seu software
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1e1b4b] mb-12">
           Nossos Diferenciais
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-gray-50 rounded-3xl">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 font-bold text-xl">
                    {i}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e1b4b]">Step {i}</h3>
                    <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center">
              Image
            </div>
          </div>
        </div>
      </section>

      {/* Conquistas Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Conquistas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "13+", label: "Anos de Atuação" },
              { number: "100+", label: "Projetos Realizados" },
              { number: "50+", label: "Clientes Satisfeitos" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-3xl p-10 text-center border border-white/20">
                <div className="text-5xl font-black mb-2">{item.number}</div>
                <div className="text-white/80 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Rodape />
    </main>
  );
};

export default SobreNosPage;