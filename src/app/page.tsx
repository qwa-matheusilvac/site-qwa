import Destaque from "@/components/Destaque";
import Estatisticas from "@/components/Estatisticas";
import AreasNegocio from "@/components/AreasNegocio";
import ComoTrabalhamos from "@/components/ComoTrabalhamos";
import Mentoria from "@/components/Mentoria";
import Comentarios from "@/components/Comentarios";
import NossasSolucoes from "@/components/NossasSolucoes";
import ChamadaAcao from "@/components/ChamadaAcao";
import Rodape from "@/components/Rodape";
import FaleConosco from "@/components/FaleConosco";
import Navbar from "@/components/Navbar";
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
                Qualidade em cada <span className="text-qwa-primary">Processo</span>,<br />
                Agilidade em cada <span className="text-qwa-primary">Entrega</span>
              </h2>
            </div>
            <div className="md:w-[55%] space-y-4">
              <p className="text-gray-900 text-base font-bold leading-relaxed">
                Somos uma empresa de inovação em softwares que usa a tecnologia como meio para desenvolver soluções que impactam positivamente a vida das pessoas.
              </p>
              <p className="text-gray-500 text-base font-bold leading-relaxed">
                Com 13 anos no mercado no mercado, unimos a precisão técnica da engenharia de software com a agilidade necessária para o mercado moderno. Nosso compromisso é com o seu sucesso, entregando não apenas código, mas valor real para o seu negócio.
              </p>
            </div>
          </div>

          {/* Missão, Visão e Valores - Side by Side - Spanning across width */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-10 max-w-5xl mx-auto pt-2">
            <div className="flex flex-col items-center px-10 group">
              <h4 className="text-lg font-black text-qwa-dark uppercase tracking-tight mb-2">Missão</h4>
              <p className="text-gray-500 text-xs font-medium leading-relaxed text-center">Transformar ideias em soluções digitais de alto impacto, priorizando a qualidade.</p>
            </div>

            <div className="flex flex-col items-center px-10 border-x border-gray-100 group">
              <h4 className="text-lg font-black text-qwa-dark uppercase tracking-tight mb-2">Visão</h4>
              <p className="text-gray-500 text-xs font-medium leading-relaxed text-center">Ser referência global em engenharia de software, reconhecida pela excelência.</p>
            </div>

            <div className="flex flex-col items-center px-10 group">
              <h4 className="text-lg font-black text-qwa-dark uppercase tracking-tight mb-2">Valores</h4>
              <p className="text-gray-500 text-xs font-medium leading-relaxed text-center">Qualidade intransigente, transparência total e inovação constante.</p>
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
