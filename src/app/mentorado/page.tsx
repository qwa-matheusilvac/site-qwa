import Navbar from "@/components/Navbar";
import Rodape from "@/components/Rodape";
import DestaqueMentorado from "@/components/MENTORADO/DestaqueMentorado";
import SobreMentorado from "@/components/MENTORADO/SobreMentorado";
import FeaturesMentorado from "@/components/MENTORADO/FeaturesMentorado";
import StatsMentorado from "@/components/MENTORADO/StatsMentorado";
import TrabalheConosco from "@/components/MENTORADO/TrabalheConosco";

export default function MentoradoPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <DestaqueMentorado />
      <SobreMentorado />
      <FeaturesMentorado />
      <StatsMentorado />
      <TrabalheConosco />
      <Rodape />
    </main>
  );
}
