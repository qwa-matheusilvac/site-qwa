"use client";

import { useEffect, useRef } from "react";

export default function Tornado() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "scale(8) translateY(-20px)";
    el.style.filter = "blur(10px)";

    setTimeout(() => {
      el.style.transition =
        "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.opacity = "1";
      el.style.transform = "scale(1.2) translateY(0)";
      el.style.filter = "blur(0)";
    }, 200);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 1;
    const y = (e.clientY - rect.top) / rect.height - 1;

    const el = imgRef.current;
    if (!el) return;

    const moveX = x * 20; 
    const moveY = y * 20; 

    el.style.transform = `
      scale(1)
      translate(${moveX}px, ${moveY}px)
    `;

    el.style.filter = `
      hue-rotate(${(x + 0.5) * 60}deg)
      brightness(${1.1 + (y + 0.5) * 0.3})
      drop-shadow(${-moveX}px ${-moveY}px 15px #F0E7FF)
    `;
  };

  const handleLeave = () => {
    const el = imgRef.current;
    if (!el) return;

    el.style.transform = "scale(1.2) translate(0, 0)";
    el.style.filter = "none";
  };

  return (
    <div
      style={{
        width: "600px",
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
    >
      <img
        ref={imgRef}
        src="/CAPA/LogoQWABranca.png"
        alt="tornado"
        style={{
          width: "800px",
          height: "auto",
          pointerEvents: "none",
          transition: "transform 0.2s ease, filter 0.2s ease",
          cursor: "pointer",
        }}
      />
    </div>
  );
}