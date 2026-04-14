import Image from "next/image";

const Destaque = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#4d3ef7] to-[#9b66ff] text-white pt-2 pb-20 rounded-b-[80px] md:rounded-b-[130px] z-10">
      <nav className="container mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center pt-2">
          <Image 
            src="/CAPA/LogoQWA.png" 
            alt="QWA" 
            width={80} 
            height={40} 
            className="brightness-0 invert"
            priority
          />
        </div>
        <div className="hidden md:flex gap-12 text-sm font-light uppercase tracking-[0.2em]">
          <a href="#" className="hover:opacity-70 transition-opacity">Home</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Sobre Nós</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Mentorado</a>
          <a href="#" className="hover:opacity-70 transition-opacity">Contato</a>
        </div>
      </nav>

      <div className="container mx-auto px-5 mt-10 flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2 z-10">
          <h1 className="text-6xl md:text-[100px] font-black leading-[0.9] tracking-tighter mb-6">
            SIMPLIFIQUE<br />
            SUAS <span className="text-[#46e9e9]">IDEIAS</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-10 opacity-90">
            Há 13 anos transformando problemas em soluções reais. 
          </p>
          <button className="bg-[#46e9e9] text-[#4d3ef7] font-extrabold px-12 py-4 rounded-full hover:scale-105 transition-transform uppercase text-sm tracking-widest shadow-xl cursor-pointer">
            Quem Somos
          </button>
        </div>
        
        <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-xl">
            <Image 
              src="/CAPA/LogoQWABranca.png" 
              alt="Vortex" 
              width={800} 
              height={800} 
              className="w-full h-auto object-contain opacity-90"
            />
            {/* O retângulo com checkmark foi removido a pedido do usuário */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destaque;
