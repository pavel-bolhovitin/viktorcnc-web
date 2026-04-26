const sections = [
  { label: 'Hero', bg: 'bg-white' },
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
      <header className="h-16 bg-white border-b flex items-center px-8 sticky top-0 z-10">
        App Bar
      </header>

      <main>
        {sections.map(({ label, bg }) => (
          <section key={label} className={`${bg} min-h-96 flex items-center justify-center`}>
            <span className="text-2xl font-semibold opacity-40">{label}</span>
          </section>
        ))}
      </main>

      <footer className="h-24 bg-gray-900 text-white flex items-center justify-center">
        Footer
      </footer>
    </>
  );
}
