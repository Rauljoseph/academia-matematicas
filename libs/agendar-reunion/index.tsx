"use client";

import { useState } from "react";

export default function ScheduleMeetings() {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowCalendar(true);
  };

  return (
    <section className="w-screen bg-[#fff8e9] py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#1a1a1a] mb-6">
          Agenda tu reunión inicial
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg">
          Cuéntanos brevemente sobre el estudiante y su nivel. Luego podrás escoger
          la fecha y hora que más te acomoden para la reunión inicial con la profesora.
        </p>

        {/* Mini Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8 text-left space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold mb-2 text-[#1a1a1a]">
              Nombre del estudiante
            </label>
            <input
              type="text"
              required
              placeholder="Ej: Martina López"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#d68a2e] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-[#1a1a1a]">
              Nivel actual
            </label>
            <select
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#d68a2e] focus:outline-none"
            >
              <option value="">Selecciona una opción</option>
              <option>1° Medio</option>
              <option>2° Medio</option>
              <option>PAES</option>
              <option>1° Universidad</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-[#1a1a1a]">
              Objetivo de la reunión
            </label>
            <textarea
              required
              rows={3}
              placeholder="Ej: Evaluar si necesita preparación PAES, apoyo en álgebra, etc."
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#d68a2e] focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#d68a2e] hover:bg-[#b87322] text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 w-full"
          >
            Continuar para agendar hora
          </button>
        </form>

        {/* Google Calendar embebido */}
        {showCalendar && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">
              Selecciona la fecha y hora
            </h2>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=TU_CALENDAR_ID_AQUI&ctz=America%2FSantiago"
              style={{
                border: 0,
                width: "100%",
                height: "600px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
}
