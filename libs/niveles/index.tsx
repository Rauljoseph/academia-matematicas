"use client";

import { useState } from "react";

const LEVELS = [
  {
    id: "1medio",
    title: "1° Medio",
    objectives: [
      "Reforzar bases matemáticas esenciales.",
      "Desarrollar comprensión y no memorización.",
      "Formar pensamiento lógico paso a paso.",
    ],
    topics: [
      "Números y proporcionalidad",
      "Ecuaciones y expresiones algebraicas",
      "Funciones",
      "Geometría y trigonometría básica",
    ],
    pdf: null, // Ej: "/materiales/1-medio.pdf"
  },
  {
    id: "2medio",
    title: "2° Medio",
    objectives: [
      "Fortalecer álgebra y geometría.",
      "Resolver problemas de mayor complejidad.",
      "Desarrollar autonomía académica.",
    ],
    topics: [
      "Álgebra y ecuaciones cuadráticas",
      "Funciones y representaciones",
      "Geometría analítica",
      "Probabilidades y estadística",
    ],
    pdf: null,
  },
  {
    id: "paes",
    title: "PAES",
    objectives: [
      "Preparación estratégica con foco en comprensión.",
      "Entrenamiento con ensayos reales.",
      "Gestión del tiempo y técnicas de respuesta.",
    ],
    topics: [
      "Ejercicios tipo PAES",
      "Lectura crítica de enunciados",
      "Resolución rápida y razonada",
      "Simulacros y análisis de resultados",
    ],
    pdf: null,
  },
  {
    id: "1univ",
    title: "1° Universidad",
    objectives: [
      "Acompañamiento académico en matemáticas base de ingeniería.",
      "Reducir la brecha entre enseñanza escolar y universitaria.",
      "Construir bases sólidas desde el inicio.",
    ],
    topics: [
      "Cálculo diferencial",
      "Álgebra lineal",
      "Límites y derivadas",
      "Lógica y modelamiento matemático",
    ],
    pdf: null,
  },
];

export default function Levels() {
  const [active, setActive] = useState("1medio");
  const selected = LEVELS.find((lvl) => lvl.id === active)!;

  return (
    <section className="w-screen bg-[#fff8e9] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#1a1a1a] mb-4">
          Niveles y Programas
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
          Cada estudiante aprende a un ritmo diferente. Selecciona el nivel para ver
          los objetivos, contenidos y enfoque del programa académico.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {LEVELS.map((lvl) => (
            <button
              key={lvl.id}
              onClick={() => setActive(lvl.id)}
              className={`py-2 px-4 rounded-md text-sm font-semibold transition
              ${
                active === lvl.id
                  ? "bg-[#d68a2e] text-white shadow-md"
                  : "bg-white text-[#1a1a1a] border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {lvl.title}
            </button>
          ))}
        </div>

        {/* Contenido del nivel */}
        <div className="bg-white shadow-md rounded-lg p-8 text-left max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#b87322] mb-4">
            {selected.title}
          </h2>

          <h3 className="font-semibold text-lg mb-2">Objetivos del nivel</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
            {selected.objectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>

          <h3 className="font-semibold text-lg mb-2">Contenidos y enfoque</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
            {selected.topics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>

          {/* Botón descarga */}
          {selected.pdf ? (
            <a
              href={selected.pdf}
              download
              className="inline-block bg-[#d68a2e] hover:bg-[#b87322] text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
            >
              Descargar programa del nivel
            </a>
          ) : (
            <p className="text-sm text-gray-500 italic">
              El programa descargable estará disponible próximamente.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
