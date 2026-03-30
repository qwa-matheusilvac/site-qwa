import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";

const varelaRound = Varela_Round({
  weight: "400",
  variable: "--font-varela-round",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QWA - Simplifique suas ideias",
  description: "Tornamos ideias em Soluções reais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${varelaRound.variable} font-sans`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
