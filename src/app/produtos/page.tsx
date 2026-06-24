"use client";
import Navbar from "@/components/Navbar";
import Rodape from "@/components/Rodape";

const ProdutosPage = () => {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section - same style as others */}
      <section className="relative bg-gradient-to-br from-qwa-lilac to-[#4d3ef7] text-white pt-24 md:pt-50 pb-16 md:pb-18 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black mb-6">
              Nossos Produtos
            </h1>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <h3 className="font-black text-2xl text-[#1e1b4b] mb-3">CHRONOS</h3>
              <p className="text-sm text-gray-600">Gerenciamento de tempo e projetos.</p>
            </div>
          </div>
        </div>
      </section>

      <Rodape />
    </main>
  );
};

export default ProdutosPage;
