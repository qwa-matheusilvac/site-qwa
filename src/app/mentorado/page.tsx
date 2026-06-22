import Navbar from "@/components/Navbar";
import Rodape from "@/components/Rodape";
import DestaqueMentorado from "@/components/MENTORADO/DestaqueMentorado";
import ValoresMentorado from "@/components/MENTORADO/ValoresMentorado";
import SimplifiqueMentorado from "@/components/MENTORADO/SimplifiqueMentorado";
import DeOndeSurgiu from "@/components/MENTORADO/DeOndeSurgiu";
import CoinsSection from "@/components/MENTORADO/CoinsSection";
import TaxExpertiseSection from "@/components/MENTORADO/TaxExpertiseSection";
import SobreMentorado from "@/components/MENTORADO/SobreMentorado";
import FAQSection from "@/components/MENTORADO/FAQSection";
import QuerFazerParteDoTime from "@/components/MENTORADO/QuerFazerParteDoTime";

export default function MentoradoPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <DestaqueMentorado />
      <ValoresMentorado />
      <SimplifiqueMentorado />
      <TaxExpertiseSection />
      <SobreMentorado />
      <FAQSection />
      <QuerFazerParteDoTime />
      <Rodape />
    </main>
  );
}