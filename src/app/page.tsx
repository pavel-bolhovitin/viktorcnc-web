import { AppBar } from '@/components/AppBar';
import { Footer } from '@/components/Footer';
import { CtaSection } from '@/components/sections/CtaSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { GallerySection } from '@/components/sections/gallery/GallerySection';
import { HeroSection } from '@/components/sections/HeroSection';
import { MeetFounderSection } from '@/components/sections/MeetFounderSection';
import { ProductionFacilitySection } from '@/components/sections/ProductionFacilitySection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WorkFlowSection } from '@/components/sections/WorkFlowSection';

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
        <CtaSection className='bg-white border-y border-b-gray-100' />
      </main>

      <Footer />
    </>
  );
}
