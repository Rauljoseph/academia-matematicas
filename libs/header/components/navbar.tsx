'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Botón hamburguesa (solo móvil) */}
      <button className="md:hidden flex flex-col space-y-1" onClick={() => setIsOpen(!isOpen)}>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Menú de navegación */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute md:static top-full right-0 bg-black md:bg-transparent md:flex md:gap-6 text-sm font-medium p-4 md:p-0`}
      >
        <Link
          href="/"
          className="block py-1 md:py-0 hover:text-orange-400 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Inicio
        </Link>
        <Link
          href="/metodologia"
          className="block py-1 md:py-0 hover:text-orange-400 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Metodología
        </Link>
        <Link
          href="/niveles"
          className="block py-1 md:py-0 hover:text-orange-400 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Niveles
        </Link>
        <Link
          href="/agendar-reunion"
          className="block py-1 md:py-0 hover:text-orange-400 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Agendar
        </Link>
        <Link
          href="/contacto"
          className="block py-1 md:py-0 hover:text-orange-400 transition-colors duration-300"
          onClick={() => setIsOpen(false)}
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}
