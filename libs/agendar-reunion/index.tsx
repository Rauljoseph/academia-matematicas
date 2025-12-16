"use client";

import React, { useState } from "react";
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface MeetingContract {
  studentName: string;
  level: string;
  objective: string;
  date: string;
  startTime: string;
}

const API_URL = "http://localhost:4000/agenda";

export default function ScheduleMeetings() {
  const [formData, setFormData] = useState<MeetingContract>({
    studentName: '',
    level: '',
    objective: '',
    date: '',
    startTime: '',
  });

  const [step, setStep] = useState<'form' | 'calendar'>('form');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.studentName && formData.level && formData.objective) {
      setStep('calendar');
    } else {
      alert('Por favor, completa los campos de información del estudiante.');
    }
  };

  const handleSchedule = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.date || !formData.startTime) {
      alert('Por favor, selecciona una fecha y hora válidas.');
      return;
    }

    setStatus('loading');
    console.log("Contrato a enviar:", formData);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorDetail = await res.text();
        console.error("Error API:", errorDetail);
        throw new Error("Fallo al agendar la reunión.");
      }

      setStatus('success');
      console.log("Reunión agendada con éxito.");

    } catch (error) {
      setStatus('error');
      console.error("Error de red/servidor:", error);
    }
  };


  if (status === 'success') {
    return (
      <section className="w-screen bg-[#fff8e9] py-20 px-6 md:px-16 min-h-screen flex items-center justify-center">
        <div className="max-w-xl mx-auto text-center bg-white shadow-xl rounded-lg p-10 space-y-4 border-t-4 border-green-500">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto" />
          <h2 className="text-3xl font-bold text-[#1a1a1a]">¡Reunión Agendada Exitosamente!</h2>
          <p className="text-gray-700">Hemos recibido su solicitud y la reunión con Martina López ha sido agendada para el {formData.date} a las {formData.startTime}. Recibirás un correo de confirmación de Google Calendar.</p>
          <button
            onClick={() => window.location.reload()}
            className="text-[#d68a2e] font-semibold hover:underline"
          >
            Agendar otra reunión
          </button>
        </div>
      </section>
    );
  }

  if (status === 'error') {
    return (
      <section className="w-screen bg-[#fff8e9] py-20 px-6 md:px-16 min-h-screen flex items-center justify-center">
        <div className="max-w-xl mx-auto text-center bg-white shadow-xl rounded-lg p-10 space-y-4 border-t-4 border-red-500">
          <XCircleIcon className="w-16 h-16 text-red-500 mx-auto" />
          <h2 className="text-3xl font-bold text-[#1a1a1a]">Error al Agendar</h2>
          <p className="text-gray-700">Lo sentimos, hubo un problema al intentar agendar la reunión. Por favor, revisa tu conexión e inténtalo de nuevo.</p>
          <button
            onClick={() => setStatus('idle')}
            className="bg-[#d68a2e] hover:bg-[#b87322] text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 w-full"
          >
            Volver al formulario
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="w-screen bg-[#fff8e9] py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#1a1a1a] mb-6">
          Agenda tu reunión inicial
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg">
          Completa la información del estudiante y luego selecciona la fecha y hora.
        </p>

        {step === 'form' && (
          <form
            onSubmit={handleContinue}
            className="bg-white shadow-md rounded-lg p-8 text-left space-y-6"
          >
            <div>
              <label htmlFor="studentName" className="block text-sm font-semibold mb-2 text-[#1a1a1a]">
                Nombre del estudiante
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
                placeholder="Ej: Martina López"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#d68a2e] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="level" className="block text-sm font-semibold mb-2 text-[#1a1a1a]">
                Nivel actual
              </label>
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#d68a2e] focus:outline-none"
              >
                <option value="" disabled>Selecciona una opción</option>
                <option value="1° Medio">1° Medio</option>
                <option value="2° Medio">2° Medio</option>
                <option value="PAES">PAES</option>
                <option value="1° Universidad">1° Universidad</option>
              </select>
            </div>

            <div>
              <label htmlFor="objective" className="block text-sm font-semibold mb-2 text-[#1a1a1a]">
                Objetivo de la reunión
              </label>
              <textarea
                id="objective"
                name="objective"
                value={formData.objective}
                onChange={handleChange}
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
              Continuar para seleccionar fecha
            </button>
          </form>
        )}

        {step === 'calendar' && (
          <form onSubmit={handleSchedule} className="mt-16 bg-white shadow-md rounded-lg p-8 text-left space-y-6">
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6 text-center">
              Selecciona la fecha y hora
            </h2>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <label htmlFor="date" className="block text-sm font-semibold mb-2 text-[#1a1a1a]">
                  Fecha
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#d68a2e] focus:outline-none"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label htmlFor="startTime" className="block text-sm font-semibold mb-2 text-[#1a1a1a]">
                  Hora de inicio
                </label>
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#d68a2e] focus:outline-none"
                />
              </div>
            </div>

            <div className="text-center text-sm text-gray-500 pt-4">
              (Usa el calendario a continuación como referencia de disponibilidad, luego ingresa la hora arriba)
            </div>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=TU_CALENDAR_ID_AQUI&ctz=America%2FSantiago"
              style={{
                border: 0,
                width: "100%",
                height: "400px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
              allowFullScreen
            ></iframe>

            <button
              type="submit"
              className="bg-[#1a1a1a] hover:bg-[#333333] text-white font-semibold py-3 px-6 rounded-md shadow-lg transition duration-300 w-full flex items-center justify-center"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Agendando...' : 'Confirmar y Agendar Reunión'}
            </button>

            <button
              type="button"
              onClick={() => setStep('form')}
              className="w-full text-sm text-gray-500 hover:text-[#d68a2e] transition"
            >
              ← Volver
            </button>
          </form>
        )}
      </div>
    </section>
  );
}