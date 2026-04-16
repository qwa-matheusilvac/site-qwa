"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const data = [
  {
    name: "Alisson Honório",
    text: "Primeiro Comentário",
  },
  {
    name: "Matheus Correia",
    text: "Segundo Comentário",
  },
  {
    name: "Gabriel Corrêa",
    text: "Terceiro Comentário",
  },
  {
    name: "Ana Luiza de Oliveira",
    text: "Grata por cada oportunidade de aprendizado, o mentorado vem sendo um exemplo de crescimento diário! 💙",
  },
];

const TextCarousel = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
      >
        {data.map((item, i) => (
          <div key={i} className="flex justify-center items-center p-4">
            <div className="bg-qwa-primary text-white p-6 rounded-3xl relative transition-all duration-500 hover:scale-[1.02] w-full">
              
              <h5 className="font-black uppercase text-lg mb-4 tracking-widest">
                {item.name}
              </h5>

              <p className="text-lg italic opacity-90 leading-relaxed">
                {item.text}
              </p>

              <div className="absolute right-6 bottom-4 text-qwa-cyan opacity-50">
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