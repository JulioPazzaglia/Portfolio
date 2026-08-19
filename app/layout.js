import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Julio Pazzaglia — Game Designer & Developer",
  description:
    "Portfolio de Julio Pazzaglia: game designer y developer especializado en diseño de sistemas de juego, y full stack developer con experiencia en React, Next.js, Node.js y PHP.",
  openGraph: {
    title: "Julio Pazzaglia — Game Designer & Developer",
    description:
      "Diseño y desarrollo de videojuegos, y el software que los sostiene.",
    url: "https://juliopazzaglia.vercel.app/",
    siteName: "Julio Pazzaglia",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:border-3 focus:border-line"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
