import Navbar from '@/libs/header/components/navbar';

export default function Header() {
  return (
    <header className="bg-black text-white flex justify-between items-center px-6 py-4 w-full">
      <h1 className="text-lg font-semibold tracking-wide">Academia de Matemáticas</h1>

      <Navbar />
    </header>
  );
}
