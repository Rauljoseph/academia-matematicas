import ContactForm from './components/contact-form';

export default function Contact() {
  return (
    <section className="w-screen bg-[#fff8e9] py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#1a1a1a] mb-4">Contáctanos</h1>

        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          ¿Tienes dudas o deseas inscribirte? Escríbenos directamente o completa el formulario para
          agendar una reunión o solicitar más información.
        </p>

        <ContactForm />

        <div className="mt-16 text-gray-700">
          <p className="mb-2">
            📧 <strong>Email:</strong>{' '}
            <a
              href="mailto:contacto@academiadematematicas.cl"
              className="text-[#d68a2e] hover:underline"
            >
              contacto@academiadematematicas.cl
            </a>
          </p>
          <p className="mb-2">
            📞 <strong>Teléfono:</strong> +56 9 1234 5678
          </p>
          <p>
            📍 <strong>Ubicación:</strong> Santiago, Chile
          </p>
        </div>
      </div>
    </section>
  );
}
