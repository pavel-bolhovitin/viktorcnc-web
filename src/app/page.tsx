import { AppBar } from '@/components/AppBar';
import { FaqSection } from '@/components/sections/FaqSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { MeetFounderSection } from '@/components/sections/MeetFounderSection';
import { ProductionFacilitySection } from '@/components/sections/ProductionFacilitySection';
import { ServicesSection } from '@/components/sections/ServicesSection';

const placeholderSections = [
  { label: 'Proof — Work Showcase', bg: 'bg-gray-100' },
  { label: 'Process', bg: 'bg-gray-100' },
  { label: 'CTA', bg: 'bg-gray-900 text-white' },
];

export default function Home() {
  return (
    <>
      <AppBar />

      <main>
        <HeroSection />
        <ServicesSection />
        <ProductionFacilitySection />
        <MeetFounderSection />
        <FaqSection />
        {placeholderSections.map(({ label, bg }) => (
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
