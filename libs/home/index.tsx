"use client";
import MethodologyCard from '@/libs/home/components/cards';
import {
  HERO_SECTION,
  LEVELS,
  LEVELS_HEADER,
  MEETING_HEADER,
  METHODOLOGY,
  METHODOLOGY_HEADER,
} from '@/libs/home/constants';
import ReactMarkdown from 'react-markdown';
import { useRouter } from "next/navigation";


function MethologySection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 text-center">
      <h2 className="text-3xl font-bold mb-6 text-[#1a1a1a]">{METHODOLOGY_HEADER.title}</h2>
      <p className="max-w-3xl mx-auto text-gray-700 mb-12">
        <ReactMarkdown>{METHODOLOGY_HEADER.description}</ReactMarkdown>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {METHODOLOGY.map((item, index) => (
          <MethodologyCard key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
}

function LevelSection() {
  return (
    <section className="w-screen bg-[#fff8e9] py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#1a1a1a]">{LEVELS_HEADER.title}</h2>

        <div className="max-w-3xl mx-auto text-gray-700 mb-12 prose prose-neutral text-center">
          <ReactMarkdown>{LEVELS_HEADER.description}</ReactMarkdown>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {LEVELS.map((level) => (
            <div
              key={level.title}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-[#b87322] font-semibold text-lg mb-3">{level.title}</h3>
              <p className="text-gray-700">{level.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroSection() {
  const router = useRouter();
  return (
    <section className="mb-24">
      <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">{HERO_SECTION.title}</h1>

      <div className="max-w-2xl text-gray-700 mb-8 text-lg prose prose-neutral text-center">
        <ReactMarkdown>{HERO_SECTION.description}</ReactMarkdown>
      </div>

      <button   onClick={() => router.push("/agendar-reunion")}
                className="bg-[#d68a2e] hover:bg-[#b87322] text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300">

        {HERO_SECTION.buttonText}
      </button>
    </section>
  );
}

function MeetingSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 text-center">
      <div className="max-w-5xl mx-auto px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">{MEETING_HEADER.title}</h2>

        <div className="max-w-2xl mx-auto text-gray-700 mb-10 prose prose-neutral text-center">
          <ReactMarkdown>{MEETING_HEADER.description}</ReactMarkdown>
        </div>

        {/* Calendario embebido */}
        <div className="flex justify-center">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=tu_correo_o_id_de_calendar&ctz=America%2FSantiago"
            style={{
              border: 0,
              width: '100%',
              height: '600px',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff8e9] to-[#f5f5f5] flex flex-col items-center text-center px-4 py-16">
      <HeroSection />
      <MethologySection />
      <LevelSection />
      <MeetingSection />
    </main>
  );
}
