"use client";
import Navbar from "@/components/Navbar";
import Rodape from "@/components/Rodape";

const ChronosPage = () => {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-qwa-lilac to-[#4d3ef7] text-white pt-32 pb-20 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              CHRONOS
            </h1>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Nosso produto para gerenciamento de tempo e projetos.
            </p>
          </div>
        </div>
      </section>
      
      <Rodape />
    </main>
  );
};

export default ChronosPage;
