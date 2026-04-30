"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setShowNavbar(true); // topo = sempre visível
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // descendo = esconde
      } else {
        setShowNavbar(true); // subindo = mostra
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-[100]
          py-4 backdrop-blur-md
          transition-transform duration-300
          ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
        `}
      >

        <div className="container mx-auto px-6 md:px-10 flex items-center justify-between relative">

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white text-xl"
          >
            <FaBars />
          </button>

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

          <div className="md:hidden w-6" />

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 px-8 py-3 rounded-full gap-8 text-xs font-black uppercase tracking-[0.15em] border bg-white/10 backdrop-blur-md border-white/20 text-white">
            <Link href="/" className="hover:text-qwa-cyan transition-colors">Home</Link>
            <Link href="sobrenos" className="hover:text-qwa-cyan transition-colors">Sobre Nós</Link>
            <Link href="/mentorado" className="hover:text-qwa-cyan transition-colors">Mentorado</Link>
            <Link href="contato" className="hover:text-qwa-cyan transition-colors">Contato</Link>
          </div>

        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/50 z-[99] transition-opacity duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`fixed top-0 left-0 h-full w-[260px] bg-qwa-dark z-[100] transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

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

        <div className="flex flex-col px-6 py-6 gap-6 text-sm font-bold uppercase tracking-wider text-white">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-qwa-lilac">Home</Link>
          <Link href="sobrenos" onClick={() => setMenuOpen(false)} className="hover:text-qwa-lilac">Sobre Nós</Link>
          <Link href="/mentorado" onClick={() => setMenuOpen(false)} className="hover:text-qwa-lilac">Mentorado</Link>
          <Link href="/contato" onClick={() => setMenuOpen(false)} className="hover:text-qwa-lilac">Contato</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;