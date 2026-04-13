import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { weddingData } from "@/data/wedding-data";
import { BackgroundMusic } from "@/components/BackgroundMusic";
import { Providers } from "@/components/Providers";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "A love story in motion — Wedding celebration",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {weddingData.heroImages.map((src) => (
          <link key={src} rel="preload" as="image" href={src} />
        ))}
      </head>
      <body
        className={`${cormorant.variable} ${sourceSans.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
        <BackgroundMusic />
      </body>
    </html>
  );
}
