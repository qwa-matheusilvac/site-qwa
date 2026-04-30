import Navbar from "@/components/CONTATO/Navbar";
import Rodape from "@/components/CONTATO/Rodape";
import FaleConosco from "../../components/CONTATO/FaleConosco";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <FaleConosco />
      <Rodape />
    </main>
  );
}
