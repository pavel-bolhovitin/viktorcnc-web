import { AppBar } from '@/components/AppBar';
import { HeroSection } from '@/components/sections/HeroSection';
import { MeetFounderSection } from '@/components/sections/MeetFounderSection';

const placeholderSections = [
  { label: 'Services', bg: 'bg-gray-100' },
  { label: 'Materials', bg: 'bg-white' },
  { label: 'Proof — Work Showcase', bg: 'bg-gray-100' },
  { label: 'Process', bg: 'bg-gray-100' },
  { label: 'FAQ', bg: 'bg-white' },
  { label: 'CTA', bg: 'bg-gray-900 text-white' },
];

export default function Home() {
  return (
    <>
      <AppBar />

      <main>
        <HeroSection />
        {placeholderSections.slice(0, 3).map(({ label, bg }) => (
          <section
            key={label}
            className={`${bg} flex min-h-96 items-center justify-center`}
          >
            <span className='text-2xl font-semibold opacity-40'>{label}</span>
          </section>
        ))}
        <MeetFounderSection />
        {placeholderSections.slice(3).map(({ label, bg }) => (
          <section
            key={label}
            className={`${bg} flex min-h-96 items-center justify-center`}
          >
            <span className='text-2xl font-semibold opacity-40'>{label}</span>
          </section>
        ))}
      </main>

      <footer className='flex h-24 items-center justify-center bg-gray-900 text-white'>
        Footer
      </footer>
    </>
  );
}
