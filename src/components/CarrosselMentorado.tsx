"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const data = [
  {
    name: "Luciana Ferreira da Silva",
    text: "O Mentorado ajudou a me aproximar dos colegas de equipe devido aos desafios constantes. Aprendi a trabalhar em equipe, retirar dúvidas, a fazer perguntas mais diretas e a conseguir pesquisar de forma assertiva também. Apesar de ter atuado de forma breve, o Mentorado foi importante no início da minha jornada na QWA e como desenvolvedora de software.",
  },
  {
    name: "Gabriel Corrêa",
    text: "Uma experiência inigualável! O Mentorado é repleto de desafios que incentivam e facilitam o processo de aprendizagem. Além disso, possui diversas fontes de conhecimento que despertam o questionamento e instigam o raciocínio. Obrigado, QWA!",
  },
  {
    name: "Ana Luiza de Oliveira",
    text: "Grata por cada oportunidade de aprendizado, o mentorado vem sendo um exemplo de crescimento diário! 💙",
  },
];

const TextCarousel = () => {
  return (
    <div style={{ width: "600px", margin: "0" }}>
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showThumbs={false}
        showStatus={true}
        showIndicators={true}
        showArrows={false}
      >
        {data.map((item, i) => (
          <div key={i} className="flex justify-start items-start p-4"style={{ padding: '2px' }}>
            <div className="text-white p-6 rounded-2xl duration-700]"
            style={{ width: '700px', height: '200px', color: '#171717', backgroundColor: '#7c4dff81' }}>
              
              <h5 className="font-black uppercase text-lg mb-4">
                {item.name}
              </h5>

              <p className="text-s opacity-90">
                {item.text}
              </p>

              <div className="absolute right-12 bottom-18 text-qwa-cyan opacity-50">
                <span
                  style={{ fontSize: "56px", fontFamily: "coustard" }}
                >
                  &quot;
                </span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TextCarousel;