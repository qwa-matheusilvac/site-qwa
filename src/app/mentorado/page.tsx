import Navbar from "@/components/Navbar";
import Rodape from "@/components/CONTATO/Rodape";
import DestaqueMentorado from "@/components/MENTORADO/DestaqueMentorado";
import SobreMentorado from "@/components/MENTORADO/SobreMentorado";
import ComoTrabalhamos from "@/components/MENTORADO/ComoTrabalhamos";

export default function MentoradoPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <DestaqueMentorado />
      <SobreMentorado />
      <ComoTrabalhamos />
      <Rodape />
    </main>
  );
}
