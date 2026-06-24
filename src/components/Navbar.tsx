"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contatoDropdownOpen, setContatoDropdownOpen] = useState(false);
  const [produtosDropdownOpen, setProdutosDropdownOpen] = useState(false);
  const contatoTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const produtosTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContatoMouseEnter = () => {
    if (contatoTimeoutRef.current) clearTimeout(contatoTimeoutRef.current);
    setContatoDropdownOpen(true);
  };

  const handleContatoMouseLeave = () => {
    contatoTimeoutRef.current = setTimeout(() => {
      setContatoDropdownOpen(false);
    }, 300); // 300ms delay
  };

  const handleProdutosMouseEnter = () => {
    if (produtosTimeoutRef.current) clearTimeout(produtosTimeoutRef.current);
    setProdutosDropdownOpen(true);
  };

  const handleProdutosMouseLeave = () => {
    produtosTimeoutRef.current = setTimeout(() => {
      setProdutosDropdownOpen(false);
    }, 300); // 300ms delay
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-4 bg-qwa-dark shadow-lg' : 'py-6 bg-transparent'}`}>

        <div className="container mx-auto px-6 md:px-10 flex items-center justify-between relative">

          {/* MOBILE - HAMBURGER */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white text-xl"
          >
            <FaBars />
          </button>

          {/* LOGO CENTRAL NO MOBILE */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/CAPA/LogoQWA.png"
                alt="QWA"
                width={80}
                height={34}
                className="brightness-0 invert w-10 md:w-[80px] h-auto"
                priority
              />
            </Link>
          </div>

          {/* ESPAÇO DIREITA MOBILE (equilibra layout) */}
          <div className="md:hidden w-6" />

          {/* MENU DESKTOP */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 transition-all duration-300 px-8 py-3 rounded-full gap-6 text-xs font-black uppercase tracking-[0.15em] border bg-white/10 backdrop-blur-md border-white/20 text-white">
            <Link href="/" className="hover:text-qwa-cyan transition-colors">Home</Link>
            <Link href="/sobrenos" className="hover:text-qwa-cyan transition-colors">Sobre</Link>
            <Link href="/mentorado" className="hover:text-qwa-cyan transition-colors">Mentorado</Link>
            
            {/* PRODUTOS DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={handleProdutosMouseEnter}
              onMouseLeave={handleProdutosMouseLeave}
            >
              <Link href="/produtos" className="flex items-center gap-2 hover:text-qwa-cyan transition-colors">
                Produtos <FaChevronDown className="text-[10px]" />
              </Link>
              {produtosDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-qwa-dark border border-white/20 rounded-xl px-4 py-3 min-w-[150px] shadow-lg z-50">
                  <Link href="/chronos" onClick={() => setProdutosDropdownOpen(false)} className="block text-white hover:text-qwa-cyan transition-colors py-2">CHRONOS</Link>
                </div>
              )}
            </div>

            {/* CONTATO DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={handleContatoMouseEnter}
              onMouseLeave={handleContatoMouseLeave}
            >
              <Link href="/contato" className="flex items-center gap-2 hover:text-qwa-cyan transition-colors">
                Contato <FaChevronDown className="text-[10px]" />
              </Link>
              {contatoDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-qwa-dark border border-white/20 rounded-xl px-4 py-3 min-w-[150px] shadow-lg z-50">
                  <Link href="/trabalhe-conosco" onClick={() => setContatoDropdownOpen(false)} className="block text-white hover:text-qwa-cyan transition-colors py-2">Trabalhe Conosco</Link>
                </div>
              )}
            </div>
          </div>

        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-[99] transition-opacity duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* DRAWER */}
      <div className={`fixed top-0 left-0 h-full w-[260px] bg-qwa-dark z-[100] transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        {/* HEADER DO DRAWER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <Image
            src="/CAPA/LogoQWA.png"
            alt="QWA"
            width={40}
            height={10}
            className="brightness-0 invert"
          />
          <button onClick={() => setMenuOpen(false)} className="text-white text-xl">
            <FaTimes />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col px-6 py-6 gap-6 text-sm font-bold uppercase tracking-wider text-white">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-qwa-lilac">Home</Link>
          <Link href="/sobrenos" onClick={() => setMenuOpen(false)} className="hover:text-qwa-lilac">Sobre</Link>
          <Link href="/mentorado" onClick={() => setMenuOpen(false)} className="hover:text-qwa-lilac">Mentorado</Link>
          <Link href="/chronos" onClick={() => setMenuOpen(false)} className="hover:text-qwa-lilac">Produtos</Link>
          <Link href="/contato" onClick={() => setMenuOpen(false)} className="hover:text-qwa-lilac">Contato</Link>
          <Link href="/trabalhe-conosco" onClick={() => setMenuOpen(false)} className="hover:text-qwa-lilac">Trabalhe Conosco</Link>
        </div>

      </div>
    </>
  );
};

export default Navbar;