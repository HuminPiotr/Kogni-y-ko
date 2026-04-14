import type { Metadata } from "next";
import { VT323, Space_Mono } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  variable: "--font-retro",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeuroGame — Symulator Mózgu",
  description: "Gra edukacyjna o neuropsychologii",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${vt323.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="h-full bg-zinc-950 text-gray-200 font-sans overflow-hidden">
        {children}
      </body>
    </html>
  );
}
