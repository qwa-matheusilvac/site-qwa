"use client";
import { useEffect, useState } from "react";

interface ContagemProps {
  end: string;
  duration?: number;
}

const Contagem = ({ end, duration = 2000 }: ContagemProps) => {
  const [count, setCount] = useState(0);
  const numericEnd = parseInt(end.replace(/\D/g, ""));
  const suffix = end.replace(/[0-9]/g, "");

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * numericEnd));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [numericEnd, duration]);

  return (

    <span>
    {suffix.endsWith("%") ? (
        <span>
          {suffix.startsWith("")}
          {count}
          {suffix.endsWith("") ? "%" : ""}
        </span>
      ) : 
      <span>
          {suffix.startsWith("+") ? "" : "+ "}
          {count}
          {suffix.endsWith("mil") ? " Mil" : ""}
        </span>
    }
    </span>
  );
};

export default Contagem;
