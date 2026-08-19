"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#projects", label: "Proyectos" },
  { href: "#about", label: "Sobre mí" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full border-b-3 border-line bg-paper/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8"
        aria-label="Navegación principal"
      >
        <a
          href="#top"
          className="border-3 border-line bg-ink px-3 py-1.5 font-mono text-sm text-paper shadow-window-sm"
        >
          jcp.exe
        </a>

        <ul className="hidden items-center gap-1 sm:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-4 py-2 font-mono text-sm uppercase tracking-wide text-ink hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="border-3 border-line bg-panel px-3 py-1.5 font-mono text-sm shadow-window-sm sm:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? "Cerrar" : "Menú"}
        </button>
      </nav>

      {isMenuOpen && (
        <ul
          id="mobile-menu"
          className="flex flex-col border-t-3 border-line bg-paper sm:hidden"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="border-b border-line/20">
              <a
                href={link.href}
                className="block px-6 py-3 font-mono text-sm uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
