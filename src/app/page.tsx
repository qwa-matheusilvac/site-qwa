import Navbar from "@/components/Navbar";
import Destaque from "@/components/HOME/Destaque";
import Estatisticas from "@/components/HOME/Estatisticas";
import NossasSolucoes from "@/components/HOME/NossasSolucoes";
import AreasNegocio from "@/components/HOME/AreasNegocio";
import ComoTrabalhamos from "@/components/MENTORADO/ComoTrabalhamos";
import Mentoria from "@/components/MENTORADO/Mentoria";
import Comentarios from "@/components/MENTORADO/Comentarios";
import Rodape from "@/components/CONTATO/Rodape";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Destaque />
      <Estatisticas />

      <section id="sobre-nos" className="py-16 bg-white text-qwa-dark overflow-hidden">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-10 max-w-5xl mx-auto pt-2">
            <div className="flex flex-col items-center px-10 group">
              <h4 className="text-lg font-black text-qwa-dark group-hover:text-qwa-primary transition-colors uppercase tracking-tight mb-2">Missão</h4>
              <p className="text-gray-600 text-sm font-medium leading-relaxed text-center">Transformar ideias em soluções digitais de alto impacto, priorizando a qualidade.</p>
            </div>

            <div className="flex flex-col items-center px-10 border-x border-gray-100 group">
              <h4 className="text-lg font-black text-qwa-dark group-hover:text-qwa-primary transition-colors uppercase tracking-tight mb-2">Visão</h4>
              <p className="text-gray-600 text-sm font-medium leading-relaxed text-center">Ser referência global em engenharia de software, reconhecida pela excelência.</p>
            </div>

            <div className="flex flex-col items-center px-10 group">
              <h4 className="text-lg font-black text-qwa-dark group-hover:text-qwa-primary transition-colors uppercase tracking-tight mb-2">Valores</h4>
              <p className="text-gray-600 text-sm font-medium leading-relaxed text-center">Qualidade intransigente, transparência total e inovação constante.</p>
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
