import { MATERIALS } from '@/libs/metodologia/constants';
import MaterialCard from '@/libs/metodologia/components/material-card';

export default function Methodology() {
  return (
    <section className="w-screen bg-[#fff8e9] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#1a1a1a] mb-4">Nuestra Metodología</h1>

        <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
          En la <strong>Academia Integral de Matemáticas</strong> fomentamos el{' '}
          <strong>aprendizaje significativo</strong>, donde los estudiantes comprenden los
          fundamentos detrás de cada concepto, desarrollan pensamiento lógico y fortalecen la
          confianza en sí mismos. Aquí podrás descargar materiales que usamos en nuestras clases o
          guías de apoyo para que no tengas que solicitarlos por correo.
        </p>

        {/* Grid con materiales */}
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-12">
          {MATERIALS.map((mat, i) => (
            <MaterialCard key={i} {...mat} />
          ))}
        </div>
      </div>
    </section>
  );
}
