"use client";

import { useEffect, useState } from "react";

type Ad = {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  fileUrl: string | null;
  isActive: boolean;
  level: string;
};

export default function Levels() {
  const [ads, setAds] = useState<Ad[]>([]);
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/ads")
      .then((res) => res.json())
      .then((data: Ad[]) => {
        console.log("data",data);
        const activeAds = data.filter((ad) => ad.isActive);

        setAds(activeAds);

        if (activeAds.length > 0) {
          setActiveLevel(activeAds[0].level);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const levels = Array.from(new Set(ads.map((ad) => ad.level)));
  const selectedAd = ads.find((ad) => ad.level === activeLevel);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-600">
        Cargando programas...
      </div>
    );
  }

  if (levels.length === 0) {
    return (
      <div className="py-20 text-center text-gray-600">
        No hay programas disponibles por el momento.
      </div>
    );
  }

  return (
    <section className="w-screen bg-[#fff8e9] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#1a1a1a] mb-4">
          Programas Académicos
        </h1>

        <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
          Cada estudiante aprende a un ritmo diferente. Selecciona el nivel para ver
          los objetivos, contenidos y enfoque del programa académico.
        </p>

        {/* Tabs por nivel */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`py-2 px-4 rounded-md text-sm font-semibold transition
                ${
                activeLevel === level
                  ? "bg-[#d68a2e] text-white shadow-md"
                  : "bg-white text-[#1a1a1a] border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {level.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Contenido del curso */}
        {selectedAd && (
          <div className="bg-white shadow-md rounded-lg p-8 text-left max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#b87322] mb-4">
              {selectedAd.title}
            </h2>

            <p className="text-gray-700 mb-6">
              {selectedAd.description}
            </p>

            {/* Botón solo si hay archivo */}
            {selectedAd.fileUrl ? (
              <a
                href={`http://localhost:4000${selectedAd.fileUrl}`}
                // href={selectedAd.fileUrl}
                download
                className="inline-block bg-[#d68a2e] hover:bg-[#b87322] text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
              >
                Descargar folleto
              </a>
            ) : (
              <p className="text-sm text-gray-500 italic">
                Material descargable no disponible.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
