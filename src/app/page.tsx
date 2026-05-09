import { AppBar } from '@/components/AppBar';
import { AppSidebar } from '@/components/AppSidebar';
import { Footer } from '@/components/Footer';
import { CtaSection } from '@/components/sections/CtaSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { GallerySection } from '@/components/sections/gallery/GallerySection';
import { HeroSection } from '@/components/sections/HeroSection';
import { MeetFounderSection } from '@/components/sections/MeetFounderSection';
import { ProductionFacilitySection } from '@/components/sections/ProductionFacilitySection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WorkFlowSection } from '@/components/sections/WorkFlowSection';
import { Separator } from '@/components/ui/separator';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function Home() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <div className='flex min-w-0 flex-1 flex-col'>
        <AppBar />

        <main>
          <HeroSection />
          <Separator />
          <ServicesSection className='bg-background' />
          <Separator />
          <GallerySection className='bg-muted' />
          <Separator />
          <ProductionFacilitySection className='bg-background' />
          <Separator />
          <MeetFounderSection className='bg-muted' />
          <Separator />
          <FaqSection className='bg-background' />
          <Separator />
          <WorkFlowSection className='bg-muted' />
          <Separator />
          <CtaSection className='bg-background' />
        </main>

        <Footer />
      </div>
    </SidebarProvider>
  );
}
