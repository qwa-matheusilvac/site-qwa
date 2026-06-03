import Navbar from "@/components/Navbar";
import Destaque from "@/components/HOME/Destaque";
import Estatisticas from "@/components/HOME/Estatisticas";
import NossasSolucoes from "@/components/HOME/NossasSolucoes";
import AreasNegocio from "@/components/HOME/AreasNegocio";
import ComoTrabalhamos from "@/components/MENTORADO/ComoTrabalhamos";
import Mentoria from "@/components/MENTORADO/Mentoria";
import Comentarios from "@/components/MENTORADO/Comentarios";
import Rodape from "@/components/Rodape";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden" id='home'>
      <Navbar />
      <Destaque />
      <Estatisticas />

      <section className="py-16 bg-white text-qwa-dark overflow-hidden">
        <div className="container mx-auto px-10">
          <div className="flex flex-col md:flex-row gap-8 items-start text-left max-w-5xl mx-auto">
            <div className="md:w-[45%]">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1]">
                Qualidade em cada <span className="text-qwa-primary"><br />Processo</span>,<br />
                Agilidade em cada <span className="text-qwa-primary"><br />Entrega</span>
              </h2>
            </div>
            <div className="md:w-[55%] space-y-4">
              <p className="text-gray-900 text-base font-bold leading-relaxed">
                Somos uma empresa de inovação em software que utiliza a tecnologia como meio para desenvolver soluções que geram impacto positivo na vida das pessoas.
              </p>
              <p className="text-gray-500 text-base font-bold leading-relaxed">
                Com 13 anos de atuação no mercado, combinamos a precisão da engenharia de software com a agilidade exigida pelo cenário atual, sempre focados em entregar valor real e contribuir para o sucesso dos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <NossasSolucoes />

      <AreasNegocio />
      <ComoTrabalhamos />
      <Mentoria />
      <Comentarios />
      <Rodape />
    </main>
  );
}
