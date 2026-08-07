import type { Metadata } from "next";
import { Inter, Archivo_Black, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-archivo",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevTimmy | Full-Stack Developer",
  description: "Full-Stack Developer || Automation || Process Optimization || AI",
  icons: {
    icon: "/favicon2.PNG",
    shortcut: "/favicon2.PNG",
    apple: "/favicon2.PNG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivoBlack.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#E5E5E5] selection:bg-[#D4AF37] selection:text-[#0A0A0A]">
        {children}
      </body>
    </html>
  );
}

