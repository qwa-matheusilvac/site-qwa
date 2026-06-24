"use client";
import Navbar from "@/components/Navbar";
import Rodape from "@/components/Rodape";

const TrabalheConoscoPage = () => {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gray-50 text-qwa-dark pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-6 py-2 border border-gray-300 rounded-full text-sm font-bold text-gray-600 mb-6">
                Daily Activity
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Trabalhe Conosco<br />
              </h1>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
                Estamos muito anciosos para conhecer mais sobre você! clique no botão a baixo e preencha nosso formulario de contratação, vem entrar para nossa familia!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-qwa-dark text-white font-bold rounded-full hover:bg-[#1e1b4b] transition-all shadow-lg flex items-center gap-3">
                  Preencher Formulario
                  <div className="w-8 h-8 bg-qwa-cyan rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Image Circles */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute top-0 right-0 w-80 h-80 border border-gray-200 rounded-full -z-10 translate-x-8 -translate-y-8"></div>
              <div className="relative">
                <div className="w-72 h-72 rounded-full overflow-hidden border-8 border-white shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-4xl">👨‍👩‍👧</div>
                      <div className="mt-2 text-sm">Happy Family</div>
                    </div>
                  </div>
                </div>
                
                {/* Smaller Circle */}
                <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full overflow-hidden border-8 border-white shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="text-2xl">📜</div>
                      <div className="mt-1 text-xs">Policy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Rodape />
    </main>
  );
};

export default TrabalheConoscoPage;
