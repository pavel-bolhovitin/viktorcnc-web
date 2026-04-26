import { HeroSection } from '@/components/sections/hero';

const sections = [
  { label: 'Services', bg: 'bg-gray-100' },
  { label: 'Materials', bg: 'bg-white' },
  { label: 'Proof — Work Showcase', bg: 'bg-gray-100' },
  { label: 'Trust — Production / Expert', bg: 'bg-white' },
  { label: 'Process', bg: 'bg-gray-100' },
  { label: 'FAQ', bg: 'bg-white' },
  { label: 'CTA', bg: 'bg-gray-900 text-white' },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 flex h-16 items-center border-b bg-white px-8">
        App Bar
      </header>

      <main>
        <HeroSection />
        {sections.map(({ label, bg }) => (
          <section key={label} className={`${bg} flex min-h-96 items-center justify-center`}>
            <span className="text-2xl font-semibold opacity-40">{label}</span>
          </section>
        ))}
      </main>

      <footer className="flex h-24 items-center justify-center bg-gray-900 text-white">
        Footer
      </footer>
    </>
  );
}
