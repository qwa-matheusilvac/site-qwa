import Navbar from "@/components/SOBRE_NOS/Navbar";
import Rodape from "@/components/SOBRE_NOS/Rodape";
import SobreNos from "@/components/SOBRE_NOS/SobreNos";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <SobreNos />
      <Rodape />
    </main>
  );
}
