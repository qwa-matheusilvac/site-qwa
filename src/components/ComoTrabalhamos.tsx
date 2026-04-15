import React from 'react';
import { BsClipboard2Pulse } from 'react-icons/bs';
import { SiDevbox } from 'react-icons/si';
import { GrTest, GrValidate } from 'react-icons/gr';
import { LuCloudUpload } from "react-icons/lu";
import { FaMedal } from 'react-icons/fa';
import { FaMagnifyingGlassChart } from 'react-icons/fa6';

const ComoTrabalhamos = () => {
  const steps = [
    { title: "Entendendo a necessidade", icon: BsClipboard2Pulse },
    { title: "Análise / Solução", icon: FaMagnifyingGlassChart },
    { title: "Desenvolvimento", icon: SiDevbox },
    { title: "Teste", icon: GrTest },
    { title: "Homologação", icon: GrValidate },
    { title: "Implantação em produção", icon: LuCloudUpload },
    { title: "Garantia", icon: FaMedal }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl font-black mb-24 uppercase text-center tracking-tight">
          <span className="text-qwa-primary">Como</span> Trabalhamos
        </h2>

        <div className="flex flex-wrap justify-center gap-12 md:gap-4 items-center">
          {steps.map((step, i, arr) => {
            const Icon = step.icon;

            return (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center w-36 relative group transition-all hover:scale-110">
                  <div className="w-20 h-20 rounded-full border-4 border-qwa-primary flex items-center justify-center bg-white z-10 group-hover:bg-qwa-primary group-hover:text-white transition-all shadow-xl text-3xl">
                    <Icon style={{ color: '#3B1E91' }} className=" hover: white "/>
                  </div>

                  <p className="text-[12px] font-black text-center mt-6 uppercase text-gray-700 px-2 tracking-wider leading-tight">
                    {step.title}
                  </p>

                  {i < arr.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[80%] w-[100%] h-[4px] bg-gradient-to-r from-qwa-primary/40 to-qwa-primary/10 -z-0"></div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComoTrabalhamos;
