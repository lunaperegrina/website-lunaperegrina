import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactLenis, useLenis } from 'lenis/react'


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Luna Peregrina",
  description: "My personal website :3 meow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactLenis root options={{
          duration: 1.2,
          touchMultiplier: 2,
          infinite: false,
        }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
