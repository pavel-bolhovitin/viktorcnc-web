import {
  ArrowRightIcon,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import Image from 'next/image';

import { CopyButton } from '@/components/buttons/CopyButton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { env } from '@/utils/env';

export function HeroSection() {
  return (
    <section className='relative flex min-h-[calc(100vh-4rem)] w-full items-center overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <Image
          src='/hero-bg.jpg'
          alt=''
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
            20+ Years CNC Machining Experience
          </Badge>

          <h1 className='mb-5 text-4xl font-semibold leading-tight tracking-tight lg:text-5xl'>
            Custom CNC Parts Manufacturing:{' '}
            <span className='text-primary'>From Sketch to Finished Detail</span>
          </h1>

          <p className='mb-4 max-w-xl text-base leading-relaxed text-muted-foreground'>
            I manufacture precision CNC parts from drawings, 3D models, or
            samples. From one-off prototypes to small batch production - fast,
            accurate, and reliable. Tight tolerances, complex geometries, and
            professional finishing.
          </p>

          <div className='mb-10 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground'>
            <span>Tolerance up to ±0.01 mm</span>
            <span className='h-3 w-px bg-border' />
            <span>Materials: Aluminum, Steel, Plastics</span>
            <span className='h-3 w-px bg-border' />
            <span>Based in Latvia</span>
            <span className='h-3 w-px bg-border' />
            <span>Worldwide Shipping</span>
          </div>

          <ContactBlockCurrent />
        </div>
      </div>
    </section>
  );
}

function ContactBlockCurrent() {
  return (
    <>
      <div className='mb-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center'>
        <Button asChild size='lg' className='group px-4'>
          <a href={`mailto:${env.email}`}>
            Get a Quote
            <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
          </a>
        </Button>

        <div className='flex gap-2'>
          <Button variant='outline' size='sm' asChild>
            <a href={`mailto:${env.email}`}>
              <Mail />
              Email
            </a>
          </Button>

          <Button variant='outline' size='sm' asChild>
            <a
              href={env.whatsappHref}
              target='_blank'
              rel='noopener noreferrer'
            >
              <MessageCircle />
              WhatsApp
            </a>
          </Button>

          <Button variant='outline' size='sm' asChild>
            <a href={env.phoneHref}>
              <Phone />
              Call
            </a>
          </Button>
        </div>
      </div>

      <div className='mb-3 grid grid-cols-[auto_1fr] items-center gap-x-4 text-xs'>
        <span className='text-muted-foreground'>Email</span>
        <div className='flex items-center gap-1'>
          <span className='font-mono font-medium'>{env.email}</span>
          <CopyButton text={env.email} label='Email' />
        </div>

        <span className='text-muted-foreground'>Phone / WhatsApp</span>
        <div className='flex items-center gap-1'>
          <span className='font-mono font-medium'>{env.phone}</span>
          <CopyButton text={env.phone} label='Phone' />
        </div>
      </div>

      <div className='text-xs text-muted-foreground'>
        <p>Send 3D models, drawings, sketches — or ask any questions.</p>
        <p>Direct communication with machinist.</p>
      </div>
    </>
  );
}
