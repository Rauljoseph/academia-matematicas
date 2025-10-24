export default function Footer() {
  return (
    <footer className="bg-[#181512] text-gray-300 pt-12 pb-4 text-center">
      {/* Sección de contacto */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-[#f5b942] mb-2">Contáctanos</h2>
        <p className="text-sm mb-4">¿Tienes dudas o deseas inscribirte? Escríbenos directamente:</p>
        <a
          href="mailto:contacto@academiadematematicas.cl"
          className="text-[#f5b942] hover:underline font-medium"
        >
          contacto@academiadematematicas.cl
        </a>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-[#0f0d0b] w-3/4 mx-auto mb-4"></div>

      {/* Copyright */}
      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} Academia Integral de Matemáticas — Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
