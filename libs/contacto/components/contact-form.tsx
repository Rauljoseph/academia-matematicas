'use client';
//TODO darle comportamiento a este formulario y conectar con api
import {useState} from "react";
import {API_URL} from "@/api/api";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    setLoading(false);

    if (res.ok) {
      setSuccessMessage('Se ha enviado su consulta');
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setErrorMessage('No se ha enviado su consulta');
    }
  };

  return (
    <form
      className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto text-left space-y-6"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-[#1a1a1a]">
          Nombre completo
        </label>
        <input
          id="name"
          type="text"
          placeholder="Tu nombre"
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#d68a2e] focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[#1a1a1a]">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          placeholder="tu@email.com"
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#d68a2e] focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-[#1a1a1a]">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Escribe tu mensaje aquí..."
          className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#d68a2e] focus:outline-none resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-[#d68a2e] hover:bg-[#b87322] text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 w-full"
      >
        Enviar mensaje
      </button>

      {successMessage && (
        <p className="mt-2 text-sm text-gray-500">{successMessage}</p>
      )}

      {errorMessage && (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
    </form>
  );
}
