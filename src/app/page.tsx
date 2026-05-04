import { AppBar } from '@/components/AppBar';
import { FaqSection } from '@/components/sections/FaqSection';
import { GallerySection } from '@/components/sections/gallery/GallerySection';
import { HeroSection } from '@/components/sections/HeroSection';
import { MeetFounderSection } from '@/components/sections/MeetFounderSection';
import { ProductionFacilitySection } from '@/components/sections/ProductionFacilitySection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WorkFlowSection } from '@/components/sections/WorkFlowSection';

const placeholderSections = [{ label: 'CTA', bg: 'bg-gray-900 text-white' }];

export default function Home() {
  return (
    <>
      <AppBar />

      <main>
        <HeroSection />
        <ServicesSection className='bg-white border-b border-b-gray-100' />
        <GallerySection className='bg-gray-50 border-b border-b-gray-100' />
        <ProductionFacilitySection className='bg-white border-b border-b-gray-100' />
        <MeetFounderSection className='bg-gray-50 border-b border-b-gray-100' />
        <FaqSection className='bg-white border-b border-b-gray-100' />
        <WorkFlowSection className='bg-gray-50 border-b border-b-gray-100' />
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
