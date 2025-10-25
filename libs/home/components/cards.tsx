interface MethodologyCardProps {
  title: string;
  description: string;
}

export default function MethodologyCard({ title, description }: MethodologyCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-[#b87322] font-semibold text-xl mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
