import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";


const font = Montserrat({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Loja",
  description: "um breve resumo de um site de vendas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
