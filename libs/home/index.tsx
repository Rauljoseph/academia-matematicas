"use client";
import Link from "next/link";

export default function HomeView() {
  return (
    <section className="p-10">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-2xl font-bold">Academia de Matemáticas</h1>
        <nav className="flex gap-6 text-sm">
          <Link href="/como-funciona">Cómo funciona</Link>
          <Link href="/niveles">Niveles</Link>
          <Link href="/agendar-reunion">Agendar reunión</Link>
          <Link href="/acceso-alumnos">Acceso alumnos</Link>
        </nav>
      </header>

      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">
          Matemáticas con grupos pequeños y enfoque en tus necesidades
        </h2>
        <p className="mb-6">
          Clases presenciales en grupos de hasta 6 alumnos. Apoyo para básica,
          media, PAES y universidad. Especial foco en cubrir lagunas y
          acompañar a estudiantes con TDA/TEA.
        </p>

        <div className="flex gap-4">
          <Link
            href="/agendar-reunion"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md"
          >
            Agendar reunión inicial
          </Link>
          <Link
            href="/acceso-alumnos"
            className="px-4 py-2 border border-gray-400 rounded-md"
          >
            Acceso alumnos (Classroom)
          </Link>
        </div>
      </div>
    </section>
  );
}
