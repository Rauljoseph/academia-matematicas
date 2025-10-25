'use client';
//TODO darle comportamiento a este formulario y conectar con api
export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado'); // conectar EmailJS o un endpoint
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
        />
      </div>

      <button
        type="submit"
        className="bg-[#d68a2e] hover:bg-[#b87322] text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300 w-full"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
