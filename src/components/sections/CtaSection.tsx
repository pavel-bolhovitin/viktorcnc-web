import { Mail, MessageCircle, Phone } from 'lucide-react';
import { SECTION_IDS } from '@/constants/sections';
import { cn } from '@/lib/utils';
import { env } from '@/utils/env';

export type CtaSectionProps = {
  className?: string;
};

export function CtaSection({ className }: CtaSectionProps) {
  return (
    <section
      id={SECTION_IDS.contact}
      className={cn('bg-slate-900 py-20 text-center text-white', className)}
    >
      <div className='mx-auto max-w-7xl px-6'>
        <h2 className='mb-6 text-4xl font-semibold tracking-tight lg:text-5xl'>
          Ready to start your custom project?
        </h2>
        <p className='mx-auto mb-12 max-w-xl text-base text-slate-400'>
          Get a technical consultation directly from the lead engineer. I
          personally review every drawing to ensure 100% manufacturability and
          precision. No managers, no delays - just professional CNC solutions.
        </p>
        <div className='grid gap-6 md:grid-cols-3'>
          <div className='border border-slate-800 p-6 transition-colors hover:border-slate-600'>
            <a href={env.phoneHref} className='block'>
              <Phone className='mx-auto mb-4 size-8 text-blue-500' />
              <p className='mb-2 text-xs font-semibold tracking-widest text-slate-500 uppercase'>
                Call us
              </p>
            </a>
            <p className='cursor-text select-all text-xl font-bold'>
              {env.phone}
            </p>
          </div>
          <div className='border border-slate-800 p-6 transition-colors hover:border-slate-600'>
            <a href={`mailto:${env.email}`} className='block'>
              <Mail className='mx-auto mb-4 size-8 text-blue-500' />
              <p className='mb-2 text-xs font-semibold tracking-widest text-slate-500 uppercase'>
                Email
              </p>
            </a>
            <p className='cursor-text select-all text-xl font-bold'>
              {env.email}
            </p>
          </div>
          <div className='border border-slate-800 p-6 transition-colors hover:border-slate-600'>
            <a
              href={env.whatsappHref}
              target='_blank'
              rel='noopener noreferrer'
              className='block'
            >
              <MessageCircle className='mx-auto mb-4 size-8 text-blue-500' />
              <p className='mb-2 text-xs font-semibold tracking-widest text-slate-500 uppercase'>
                WhatsApp
              </p>
            </a>
            <p className='cursor-text select-all text-xl font-bold'>
              {env.phone}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
