import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section & Navbar Wrapper */}
      <section className="relative bg-gradient-to-r from-qwa-blue to-qwa-lilac text-white pb-32 pt-6 rounded-b-[60px] md:rounded-b-[100px]">
        {/* Navbar */}
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col items-center gap-0">
            {/* Logo Placeholder */}
            <span className="font-bold text-3xl leading-none">QWA</span>
            <span className="text-[8px] font-bold tracking-[0.2em] leading-none opacity-80">SOLUTIONS</span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.15em]">
            <a href="#" className="hover:text-qwa-cyan transition-colors">Home</a>
            <a href="#" className="hover:text-qwa-cyan transition-colors">Sobre Nós</a>
            <a href="#" className="hover:text-qwa-cyan transition-colors">Mentorado</a>
            <a href="#" className="hover:text-qwa-cyan transition-colors">Contato</a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-6 mt-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tight">
              SIMPLIFIQUE<br />
              SUAS <span className="text-qwa-cyan">IDEIAS</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-white/90">
              Tornamos ideias em Soluções reais
            </p>
            <button className="bg-qwa-cyan text-qwa-dark font-bold px-10 py-3.5 rounded-full hover:bg-white transition-all transform hover:scale-105 uppercase text-xs tracking-wider shadow-lg">
              Quem Somos
            </button>
          </div>
          <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative">
            {/* Abstract Swirl Illustration Placeholder */}
            <div className="w-full max-w-lg aspect-square relative">
              {/* SVG Swirl Simulation based on second print */}
              <svg className="w-full h-full opacity-60" viewBox="0 0 500 500" fill="none" stroke="white" strokeWidth="1.5">
                 <path d="M450,100 Q400,50 350,100 T250,150 T150,200 T100,300 T150,400 T250,450 T350,400 T400,300 T350,200 T250,150" className="animate-pulse" />
                 <circle cx="250" cy="250" r="150" strokeDasharray="10 10" />
                 <circle cx="250" cy="250" r="180" strokeDasharray="5 15" />
                 <circle cx="250" cy="250" r="210" strokeDasharray="20 10" />
              </svg>
              
              <div className="absolute bottom-4 right-4 bg-qwa-cyan p-3 rounded-full shadow-xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
            <div className="space-y-3">
              <h3 className="text-4xl md:text-5xl font-black text-qwa-primary tracking-tighter">+200</h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Soluções<br />entregues</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-4xl md:text-5xl font-black text-qwa-primary tracking-tighter">+12</h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Anos de<br />experiência</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-4xl md:text-5xl font-black text-qwa-primary tracking-tighter">+20Mil</h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Horas de<br />projetos</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-4xl md:text-5xl font-black text-qwa-primary tracking-tighter">+200</h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Projetos<br />desenvolvidos</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-4xl md:text-5xl font-black text-qwa-primary tracking-tighter">+5</h3>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Parceiros</p>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-50 grayscale contrast-125">
            <div className="h-8 w-24 bg-gray-300 rounded"></div> {/* Porto */}
            <div className="h-8 w-24 bg-gray-300 rounded"></div> {/* Evertec */}
            <div className="h-8 w-24 bg-gray-300 rounded"></div> {/* Oliveira Trust */}
            <div className="h-8 w-24 bg-gray-300 rounded"></div> {/* FARCA */}
          </div>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:row gap-20 items-center">
          <div className="md:w-1/2 flex justify-center">
             <h2 className="text-6xl md:text-8xl font-black text-qwa-primary leading-[0.85] select-none tracking-tighter">
                EVOLUÇÃO<br />
                QUALIDADE<br />
                CRIATIVIDADE<br />
                SOLUÇÃO
             </h2>
          </div>
          <div className="md:w-1/2 space-y-12">
            <div>
              <h3 className="text-qwa-primary font-bold text-2xl uppercase">Sua Evolução</h3>
              <p className="text-qwa-dark font-medium italic">Nosso compromisso</p>
            </div>
            
            <div className="space-y-8">
              {[
                { title: "Team as Service", desc: "Solução integrada aos times de desenvolvimento dos clientes.", icon: "👥" },
                { title: "Fábrica de Software", desc: "Transformamos insights em sistemas funcionais, prontos para impulsionar seu negócio.", icon: "🏗️" },
                { title: "Consultoria", desc: "Seu tempo e focado com soluções sob medida.", icon: "💬" },
                { title: "Transformação Digital", desc: "Processos manuais e burocráticos automatizados.", icon: "☁️" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-qwa-light flex items-center justify-center text-2xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-qwa-primary uppercase text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ramos de Atuação */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 uppercase text-center md:text-left">
            Ramos de <span className="text-qwa-primary">Atuação</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Seguro", desc: "Desenvolvimento e manutenção dos sistemas core, aplicativos móveis e portais de corretores.", icon: "🛡️" },
              { title: "Financeiros", desc: "Desenvolvimento e manutenção dos sistemas core, aplicativos móveis e portais de corretores.", icon: "💰", active: true },
              { title: "Vendas", desc: "Desenvolvimento e manutenção dos sistemas core, aplicativos móveis e portais de corretores.", icon: "🛒" }
            ].map((card, i) => (
              <div key={i} className={`p-8 rounded-3xl relative overflow-hidden transition-all duration-300 ${card.active ? 'bg-qwa-primary text-white scale-105 shadow-xl' : 'bg-qwa-light text-qwa-dark'}`}>
                <h4 className="font-bold uppercase mb-4">{card.title}</h4>
                <p className="text-xs mb-8 opacity-80 leading-relaxed">{card.desc}</p>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl absolute bottom-[-10px] right-[-10px] opacity-20 ${card.active ? 'bg-white text-qwa-primary' : 'bg-qwa-primary text-white'}`}>
                  {card.icon}
                </div>
                {card.active && (
                   <div className="absolute bottom-4 right-4 text-qwa-cyan">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/></svg>
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Trabalhamos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 uppercase text-center">
            <span className="text-qwa-primary">Como</span> Trabalhamos
          </h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-0 items-center">
            {[
              { title: "Entendendo a necessidade", icon: "📋" },
              { title: "Análise / Solução", icon: "🔍" },
              { title: "Desenvolvimento", icon: "💻" },
              { title: "Teste", icon: "🧪" },
              { title: "Homologação", icon: "✅" },
              { title: "Implantação em produção", icon: "⚙️" },
              { title: "Garantia", icon: "🏅" }
            ].map((step, i, arr) => (
              <div key={i} className="flex flex-col items-center w-32 relative group">
                <div className="w-12 h-12 rounded-full border-2 border-qwa-primary flex items-center justify-center bg-white z-10 group-hover:bg-qwa-primary group-hover:text-white transition-all">
                  {step.icon}
                </div>
                <p className="text-[10px] font-bold text-center mt-2 uppercase text-gray-600 px-2">{step.title}</p>
                {i < arr.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-20 w-24 h-[2px] bg-qwa-primary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem Somos Nós */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 uppercase">
            Quem Somos <span className="text-qwa-primary">Nós</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Nossa Missão", desc: "Soluções sob medida que simplifiquem processos e impulsionem negócios.", icon: "🎯" },
              { title: "Nossa Visão", desc: "Reconhecida pela excelência técnica, agilidade e inovação contínua.", icon: "💡" },
              { title: "Nossos Valores", desc: "Simplicidade, Transparência, Excelência e Parceria.", icon: "🤝" }
            ].map((card, i) => (
              <div key={i} className="bg-qwa-primary text-white p-8 rounded-tl-[40px] rounded-br-[40px] relative">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="font-bold uppercase text-lg">{card.title}</h4>
                  <div className="text-3xl">{card.icon}</div>
                </div>
                <p className="text-sm opacity-90 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focados na Evolução de Pessoas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 relative">
             <div className="mb-8">
                <h2 className="text-3xl font-bold uppercase leading-tight">
                  Focados na<br />
                  Evolução de<br />
                  <span className="text-qwa-primary">Pessoas</span>
                </h2>
             </div>
             {/* Main Image Placeholder */}
             <div className="w-full aspect-square bg-gray-200 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 italic">Imagem do Mentor / Equipe</div>
                <div className="absolute bottom-8 left-8 text-white z-10">
                   <p className="font-bold text-xl uppercase">Mentorado</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            {[
              { name: "Alisson Honório", text: "Grande oportunidade de aprendizado praticando e interagindo com projetos reais!" },
              { name: "Matheus Correia", text: "Grande oportunidade de aprendizado praticando e interagindo com projetos reais!" },
              { name: "Gabriel Ferreira", text: "Grande oportunidade de aprendizado praticando e interagindo com projetos reais!" }
            ].map((item, i) => (
              <div key={i} className="bg-qwa-primary text-white p-6 rounded-2xl relative">
                <h5 className="font-bold uppercase text-sm mb-2">{item.name}</h5>
                <p className="text-xs italic opacity-90">"{item.text}"</p>
                <div className="absolute right-4 bottom-4 text-qwa-cyan text-xl">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 21H10.017V17.031L12.017 13C12.017 13 12.665 11.003 14.017 11.003V13.003C14.017 13.003 13.017 13.003 13.017 14.003H14.017C15.1216 14.003 16.017 14.8984 16.017 16.003V17.003C16.017 18.1076 15.1216 19.003 14.017 19.003V21ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C9.12157 16 10.017 16.8954 10.017 18V21C10.017 22.1046 9.12157 23 8.017 23H5.017C3.91243 23 3.017 22.1046 3.017 21ZM3.017 21H0.017V17.031L2.017 13C2.017 13 2.665 11.003 4.017 11.003V13.003C4.017 13.003 3.017 13.003 3.017 14.003H4.017C5.12157 14.003 6.017 14.8984 6.017 16.003V17.003C6.017 18.1076 5.12157 19.003 4.017 19.003V21Z" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-qwa-primary text-white text-center relative overflow-hidden">
        {/* Background Swirl Pattern (simplified) */}
        <div className="absolute inset-0 opacity-10">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.5" />
           </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase max-w-2xl mx-auto">
            Pronto para transformar sua empresa em algo maior?
          </h2>
          <p className="mb-12 opacity-80 text-sm italic">
            Aqui na QWA Pensamos pela qualidade constante<br />e a parceria maior ainda
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-transparent border-2 border-white px-10 py-3 rounded-full font-bold uppercase text-sm hover:bg-white hover:text-qwa-primary transition-all">
              Formulário
            </button>
            <button className="bg-qwa-cyan text-qwa-dark px-10 py-3 rounded-full font-bold uppercase text-sm hover:bg-white transition-all">
              WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-qwa-primary text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="space-y-4">
              <h5 className="font-bold uppercase text-sm">Links</h5>
              <ul className="text-xs space-y-2 opacity-80">
                <li><a href="#" className="hover:text-qwa-cyan">Home</a></li>
                <li><a href="#" className="hover:text-qwa-cyan">Sobre nós</a></li>
                <li><a href="#" className="hover:text-qwa-cyan">Mentorado</a></li>
                <li><a href="#" className="hover:text-qwa-cyan">Projetos</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold uppercase text-sm">Links</h5>
              <ul className="text-xs space-y-2 opacity-80">
                <li><a href="#" className="hover:text-qwa-cyan">Contate-nos</a></li>
                <li><a href="#" className="hover:text-qwa-cyan">Trabalhe conosco</a></li>
                <li><a href="#" className="hover:text-qwa-cyan">Treinamentos</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold uppercase text-sm">PRODUTOS</h5>
              <ul className="text-xs space-y-2 opacity-80">
                <li><a href="#" className="hover:text-qwa-cyan">Evolução</a></li>
                <li><a href="#" className="hover:text-qwa-cyan">Criatividade</a></li>
                <li><a href="#" className="hover:text-qwa-cyan">Trabalhe em equipe</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold uppercase text-sm">Mídia Social</h5>
              <ul className="text-xs space-y-2 opacity-80">
                <li><a href="#" className="hover:text-qwa-cyan">Facebook</a></li>
                <li><a href="#" className="hover:text-qwa-cyan">Instagram</a></li>
                <li><a href="#" className="hover:text-qwa-cyan">LinkedIn</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold uppercase text-sm">Contate-nos</h5>
              <ul className="text-xs space-y-2 opacity-80">
                <li>Email</li>
                <li>Telefone</li>
                <li>Whatsapp</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center font-bold">QWA</div>
                <span className="font-bold text-sm">SOLUTIONS</span>
             </div>
             <p className="text-[10px] opacity-60">© 2026 QWA Solutions. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
