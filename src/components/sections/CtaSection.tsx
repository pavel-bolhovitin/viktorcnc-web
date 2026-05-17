'use client';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SECTION_IDS } from '@/constants/sections';
import { cn } from '@/lib/utils';
import { env } from '@/utils/env';

export type CtaSectionProps = {
  className?: string;
};

export function CtaSection({ className }: CtaSectionProps) {
  const { t } = useTranslation('common');

  return (
    <section
      id={SECTION_IDS.contact}
      className={cn('py-20 text-center', className)}
    >
      <div className='mx-auto max-w-7xl px-6'>
        <h2 className='mb-6 text-4xl font-semibold tracking-tight lg:text-5xl'>
          {t('cta.heading')}
        </h2>
        <p className='mx-auto mb-12 max-w-xl text-base text-muted-foreground'>
          {t('cta.description')}
        </p>
        <div className='grid gap-6 md:grid-cols-3'>
          <div className='border border-border p-6 transition-colors hover:border-foreground/40'>
            <a href={env.phoneHref} className='block'>
              <Phone className='mx-auto mb-4 size-8 text-primary' />
              <p className='mb-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase'>
                {t('cta.callLabel')}
              </p>
            </a>
            <p className='cursor-text select-all text-base font-bold sm:text-xl'>
              {env.phone}
            </p>
          </div>
          <div className='border border-border p-6 transition-colors hover:border-foreground/40'>
            <a href={`mailto:${env.email}`} className='block'>
              <Mail className='mx-auto mb-4 size-8 text-primary' />
              <p className='mb-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase'>
                {t('cta.emailLabel')}
              </p>
            </a>
            <p className='cursor-text select-all text-base font-bold sm:text-xl'>
              {env.email}
            </p>
          </div>
          <div className='border border-border p-6 transition-colors hover:border-foreground/40'>
            <a
              href={env.whatsappHref}
              target='_blank'
              rel='noopener noreferrer'
              className='block'
            >
              <MessageCircle className='mx-auto mb-4 size-8 text-primary' />
              <p className='mb-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase'>
                {t('cta.whatsappLabel')}
              </p>
            </a>
            <p className='cursor-text select-all text-base font-bold sm:text-xl'>
              {env.phone}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
