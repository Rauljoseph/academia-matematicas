type MaterialCardProps = {
  title: string;
  description: string;
  fileUrl?: string; // cuando tengamos el archivo del cliente
};

export default function MaterialCard({ title, description, fileUrl }: MaterialCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-left transition-transform hover:scale-105 duration-300">
      <h3 className="text-lg font-semibold text-[#b87322] mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      {fileUrl ? (
        <a
          href={fileUrl}
          download
          className="inline-block bg-[#d68a2e] hover:bg-[#b87322] text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          Descargar material
        </a>
      ) : (
        <button
          disabled
          className="inline-block bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded-md cursor-not-allowed"
        >
          Material disponible próximamente
        </button>
      )}
    </div>
  );
}
