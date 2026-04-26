import {
  FileText,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  UserRound,
} from 'lucide-react';
import Image from 'next/image';

import { CopyButton } from '@/components/copy-button';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const EMAIL = 'info@yourdomain.com';
const PHONE = '+371 XX XXX XXX';
const PHONE_HREF = 'tel:+371XXXXXXXX';
const WHATSAPP_HREF = 'https://wa.me/371XXXXXXXX';

export function HeroSection() {
  return (
    <section className='relative flex min-h-[calc(100vh-4rem)] w-full items-center overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <Image
          src='/hero-bg-2.png'
          alt='CNC machining center'
          fill
          sizes='100vw'
          className='object-cover filter-[grayscale(0.2)_contrast(1.1)]'
          priority
        />
        <div className='absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent' />
      </div>

      <div className='relative z-10 mx-auto w-full max-w-7xl px-6 py-16 grid grid-cols-12'>
        <div className='col-span-12 md:col-span-8 lg:col-span-6 rounded-lg border border-white/20 bg-white/40 p-6 backdrop-blur-xs md:p-10'>
          <Badge variant='outline' className='rounded-sm mb-5'>
            <ShieldCheck className='size-3.5 text-primary' />
            20+ Years of Engineering Excellence
          </Badge>

          <h1 className='mb-5 text-4xl font-semibold leading-tight tracking-tight lg:text-5xl'>
            Custom CNC Machining Services in Latvia:{' '}
            <span className='text-primary'>From Sketches to Production</span>
          </h1>

          <p className='mb-4 max-w-xl text-base leading-relaxed text-muted-foreground'>
            Expert manufacturing by a seasoned engineer in Latvia. Whether you
            have a professional 3D model or just a hand-drawn sketch, I provide
            high-accuracy turning, milling, and professional finishing for your
            unique projects.
          </p>

          <p className='mb-10 font-mono text-xs text-muted-foreground'>
            Typical tolerance: ±0.01&nbsp;mm&nbsp;&bull;&nbsp;Materials:
            Aluminum, Steel, Plastics&nbsp;&bull;&nbsp;Based in
            Latvia&nbsp;&bull;&nbsp;Worldwide Shipping
          </p>

          <div className='mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center'>
            <Button
              asChild
              className='h-12 w-full px-8 text-xs font-semibold uppercase tracking-wider sm:w-auto'
            >
              <a href={`mailto:${EMAIL}`}>
                <FileText />
                Get a Quote
              </a>
            </Button>
            <div className='flex gap-2'>
              <Button variant='outline' size='sm' asChild>
                <a href={`mailto:${EMAIL}`}>
                  <Mail />
                  Email
                </a>
              </Button>
              <Button variant='outline' size='sm' asChild>
                <a
                  href={WHATSAPP_HREF}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <MessageCircle />
                  WhatsApp
                </a>
              </Button>
              <Button variant='outline' size='sm' asChild>
                <a href={PHONE_HREF}>
                  <Phone />
                  Call
                </a>
              </Button>
            </div>
          </div>

          <p className='mb-6 text-sm italic text-muted-foreground'>
            Send 3D models, drawings, sketches — or ask any questions.
          </p>

          <div className='rounded border border-border/30 bg-muted/50 p-4'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
              <div>
                <p className='mb-1 text-[10px] font-semibold uppercase tracking-widest text-primary'>
                  Email
                </p>
                <div className='flex items-center gap-1'>
                  <a
                    href={`mailto:${EMAIL}`}
                    className='font-mono text-sm font-semibold transition-colors hover:text-primary'
                  >
                    {EMAIL}
                  </a>
                  <CopyButton text={EMAIL} />
                </div>
              </div>
              <div>
                <p className='mb-1 text-[10px] font-semibold uppercase tracking-widest text-primary'>
                  Phone / WhatsApp
                </p>
                <div className='flex items-center gap-1'>
                  <a
                    href={PHONE_HREF}
                    className='font-mono text-sm font-semibold transition-colors hover:text-primary'
                  >
                    {PHONE}
                  </a>
                  <CopyButton text={PHONE} />
                </div>
              </div>
            </div>
            <div className='mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground'>
              <UserRound className='size-3.5' />
              Direct communication with machinist
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-4 right-4 z-10 hidden select-none flex-col items-end gap-1 font-mono text-[10px] uppercase tracking-widest text-foreground/30 mix-blend-multiply lg:flex'>
        <span>Coordinates: 56.9469° N, 24.1050° E</span>
        <span>System Status: Active</span>
      </div>
    </section>
  );
}
