import Destaque from "@/components/Destaque";
import Estatisticas from "@/components/Estatisticas";
import AreasNegocio from "@/components/AreasNegocio";
import ComoTrabalhamos from "@/components/ComoTrabalhamos";
import SobreNos from "@/components/SobreNos";
import Mentoria from "@/components/Mentoria";
import ChamadaAcao from "@/components/ChamadaAcao";
import Rodape from "@/components/Rodape";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Destaque />
      <Estatisticas />

      <section className="pb-24 pt-0 bg-white">
        <div className="container mx-auto px-10 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
             <Image 
               src="/SERVICOS/frases.png" 
               alt="Evolução, Qualidade, Criatividade, Solução" 
               width={600} 
               height={400} 
               className="w-full h-auto object-contain"
             />
          </div>
          <div className="md:w-1/2">
            <div className="mb-16">
              <h3 className="text-[#4d3ef7] font-black text-4xl uppercase tracking-tight mb-2">Sua Evolução</h3>
              <p className="text-[#46e9e9] font-light text-2xl uppercase tracking-wider">Nosso compromisso</p>
            </div>
            <div className="grid gap-12">
              {[
                { title: "Team as Service", desc: "Solução integrada aos times de desenvolvimento dos clientes.", icon: "/SERVICOS/teamAsService.png" },
                { title: "Fábrica de Software", desc: "Transformamos insights em sistemas funcionais, prontos para impulsionar seu negócio.", icon: "/SERVICOS/fabricaSoftware.png" },
                { title: "Consultoria", desc: "Seu tempo e focado com soluções sob medida.", icon: "/SERVICOS/consultoria.png" },
                { title: "Transformação Digital", desc: "Processos manuais e burocráticos automatizados.", icon: "/SERVICOS/transformacaoDigital.png" }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-center">
                  <div className="w-20 h-20 flex items-center justify-center shrink-0 overflow-hidden">
                    {item.icon.startsWith("/") ? (
                      <Image 
                        src={item.icon} 
                        alt={item.title} 
                        width={80} 
                        height={80} 
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-5xl">{item.icon}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#4d3ef7] uppercase text-2xl tracking-wider mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-xl">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AreasNegocio />
      <ComoTrabalhamos />
      <SobreNos />
      <Mentoria />
      <ChamadaAcao />
      <Rodape />
    </main>
  );
}
