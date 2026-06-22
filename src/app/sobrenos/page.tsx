import Navbar from "@/components/Navbar";
import Rodape from "@/components/Rodape";
import Image from "next/image";

const SobreNosPage = () => {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section (Capa no inicio) */}
      <section className="relative bg-gradient-to-br from-qwa-lilac to-[#4d3ef7] text-white pt-24 md:pt-50 pb-16 md:pb-18 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black leading-[0.95] tracking-tighter mb-6">
                The Effective Solutions To Grow Your Business
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-medium opacity-80 max-w-md leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="mt-8 px-8 py-4 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-all">
                Get Started
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-200 to-purple-400 rounded-3xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">Hero Image</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-purple-600 font-bold">100% Satisfaction</span>
              </div>
              <div className="absolute bottom-8 -left-8 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-purple-600 font-bold">20+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Integrates Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e1b4b] mb-2">Business Integrates With All</h2>
            <p className="text-gray-500">Your Favorite Tools</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔗</span>
                </div>
                <p className="text-gray-700 font-bold text-sm">Tool {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grow Your Business Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-800 rounded-3xl h-48 flex items-center justify-center">Image 1</div>
                <div className="bg-gray-800 rounded-3xl h-48 flex items-center justify-center mt-8">Image 2</div>
              </div>
              <div className="bg-purple-500 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                25+
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Grow Your Business With Our Next Agency</h2>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">98%</p>
                  <p className="text-gray-400 text-sm">Client Satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">3541+</p>
                  <p className="text-gray-400 text-sm">Projects Done</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">92%</p>
                  <p className="text-gray-400 text-sm">Repeat Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1e1b4b] mb-12">
            Meet Our Professional Team Members
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="w-full h-64 bg-gray-200 rounded-3xl mb-4 flex items-center justify-center">
                  Team Member {i}
                </div>
                <p className="font-bold text-[#1e1b4b]">Name {i}</p>
                <p className="text-gray-500 text-sm">Role {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready To Boost Business & Product Sales?
              </h2>
            </div>
            <div className="bg-white rounded-3xl h-64 flex items-center justify-center">
              Image
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-3xl h-80 flex items-center justify-center">
              Image
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-6">
                Innovative Business Increase And Branding Solutions
              </h2>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">85%</p>
                  <p className="text-sm text-gray-500">Lorem</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">15%</p>
                  <p className="text-sm text-gray-500">Lorem</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">93%</p>
                  <p className="text-sm text-gray-500">Lorem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1e1b4b] mb-12">
            We Complete Our Work To Follow Some Easy Ways
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-gray-50 rounded-3xl">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 font-bold text-xl">
                    {i}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e1b4b]">Step {i}</h3>
                    <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center">
              Image
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Explore Our Latest News & Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">Image</div>
                <div className="p-8">
                  <h3 className="font-bold text-[#1e1b4b] mb-4">Blog Post {i}</h3>
                  <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Rodape />
    </main>
  );
};

export default SobreNosPage;