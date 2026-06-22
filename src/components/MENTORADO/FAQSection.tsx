"use client";
import { useState } from "react";

const FAQSection = () => {
 const faqs = [
  {
    question: "Qualidade",
    answer: "Módulo introdutório voltado à importância da qualidade de software, com foco em testes, boas práticas e aplicação prática dos conceitos.",
    featured: false
  },
  {
    question: "Algoritmos",
    answer: "Conteúdo baseado no cotidiano, com foco no desenvolvimento do pensamento computacional e na resolução estruturada de problemas.",
    featured: false
  },
  {
    question: "Lógica de Programação",
    answer: "Aborda conceitos fundamentais além da linguagem de programação, enfatizando a importância da compreensão e do raciocínio lógico antes da implementação do código.",
    featured: false
  },
  {
    question: "Estruturas de Dados",
    answer: "Apresenta conceitos essenciais e suas aplicações práticas, explorando diferentes estruturas e suas metodologias de uso.",
    featured: false
  },
  {
    question: "Relacionamento",
    answer: "Desenvolvimento de habilidades interpessoais por meio de dinâmicas práticas, promovendo a colaboração e a aplicação do conhecimento na prática.",
    featured: false
  },
  {
    question: "Banco de Dados",
    answer: "Introdução ao universo de bancos de dados, com abordagem simplificada e foco na compreensão do seu funcionamento no mercado.",
    featured: false
  }
];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-[#1e1b4b] mb-4">
            Fluxo de <span className="text-[#3b82f6]">Aprendizado</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
           Fluxo de aprendizagem
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border ${
                faq.featured
                  ? "bg-[#1e1b4b] text-white border-transparent shadow-xl"
                  : "bg-gray-50 text-gray-800 border-gray-200"
              }`}
            >
              <h3 className="text-lg font-bold mb-4">{faq.question}</h3>
              <p className={`text-sm ${faq.featured ? "text-white/80" : "text-gray-600"}`}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;