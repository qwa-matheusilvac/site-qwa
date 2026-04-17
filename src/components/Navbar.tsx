"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-4 bg-qwa-dark shadow-lg' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-10 flex items-center relative">
        <div className="flex items-center">
          <Image 
            src="/CAPA/LogoQWA.png" 
            alt="QWA" 
            width={120} 
            height={50} 
            className={`transition-all duration-300 brightness-0 invert`}
            priority
          />
        </div>
        
        {/* Pill-shaped centered nav */}
        <div className={`absolute left-1/2 -translate-x-1/2 flex transition-all duration-300 px-4 md:px-8 py-2 md:py-3 rounded-full gap-4 md:gap-8 text-[10px] md:text-xs font-black uppercase tracking-[0.1em] md:tracking-[0.15em] border 
          bg-white/10 backdrop-blur-md border-white/20 text-white`}>
          <a href="#home" className="hover:text-qwa-lilac transition-colors">Home</a>
          <a href="#sobre-nos" className="hover:text-qwa-lilac transition-colors">Sobre Nós</a>
          <a href="#mentorado" className="hover:text-qwa-lilac transition-colors">Mentorado</a>
          <a href="#contato" className="hover:text-qwa-lilac transition-colors">Contato</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
