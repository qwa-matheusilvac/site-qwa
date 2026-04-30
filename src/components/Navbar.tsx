"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

          {/* MENU DESKTOP (inalterado) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 transition-all duration-300 px-8 py-3 rounded-full gap-8 text-xs font-black uppercase tracking-[0.15em] border bg-white/10 backdrop-blur-md border-white/20 text-white">
            <Link href="/" className="hover:text-qwa-cyan transition-colors">Home</Link>
            <Link href="sobrenos" className="hover:text-qwa-cyan transition-colors">Sobre Nós</Link>
            <Link href="/mentorado" className="hover:text-qwa-cyan transition-colors">Mentorado</Link>
            <Link href="contato" className="hover:text-qwa-cyan transition-colors">Contato</Link>
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
          <Link href="/sobrenos" onClick={() => setMenuOpen(false)} className="hover:text-qwa-lilac">Sobre Nós</Link>
          <Link href="/mentorado" onClick={() => setMenuOpen(false)} className="hover:text-qwa-lilac">Mentorado</Link>
          <Link href="/contato" onClick={() => setMenuOpen(false)} className="hover:text-qwa-lilac">Contato</Link>
        </div>

      </div>
    </>
  );
};

export default Navbar;