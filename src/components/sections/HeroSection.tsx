'use client';
import {
  ArrowRightIcon,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import Image from 'next-export-optimize-images/image';
import { useTranslation } from 'react-i18next';
import { CopyButton } from '@/components/buttons/CopyButton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { YEARS_EXPERIENCE } from '@/constants/founder';
import HeroBg from '@/assets/hero-bg.webp';
import { env } from '@/utils/env';

export function HeroSection() {
  const { t } = useTranslation('common');

  return (
    <section className='relative flex min-h-[calc(100vh-4rem)] w-full items-center overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <Image
          src={HeroBg}
          alt=''
          fill
          placeholder='blur'
          sizes='100vw'
          className='object-cover filter-[grayscale(0.2)_contrast(1.1)] select-none'
        />
        <div className='absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent' />
      </div>

      <div className='relative z-10 mx-auto w-full max-w-7xl px-6 py-16 grid grid-cols-12'>
        <div className='col-span-12 md:col-span-8 lg:col-span-6 rounded-lg border border-border/20 bg-background/40 p-6 backdrop-blur-xs md:p-10'>
          <Badge
            variant='outline'
            className='rounded-sm mb-5 flex-wrap whitespace-normal'
          >
            <ShieldCheck className='size-3.5 text-primary' />
            {t('hero.badge', { years: YEARS_EXPERIENCE })}
          </Badge>

          <h1 className='mb-5 text-4xl font-semibold leading-tight tracking-tight lg:text-5xl break-all sm:break-normal'>
            {t('hero.headline')}{' '}
            <span className='text-primary'>{t('hero.headlineAccent')}</span>
          </h1>

          <p className='mb-4 max-w-xl text-base leading-relaxed text-muted-foreground'>
            {t('hero.description')}
          </p>

          <div className='mb-10 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground'>
            <span>{t('hero.tolerance')}</span>
            <span className='h-3 w-px bg-border' />
            <span>{t('hero.materials')}</span>
            <span className='h-3 w-px bg-border' />
            <span>{t('hero.location')}</span>
            <span className='h-3 w-px bg-border' />
            <span>{t('hero.shipping')}</span>
          </div>

          <ContactBlockCurrent />
        </div>
      </div>
    </section>
  );
}

function ContactBlockCurrent() {
  const { t } = useTranslation('common');

  return (
    <>
      <div className='mb-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center'>
        <Button asChild size='lg' className='group px-4'>
          <a href={`mailto:${env.email}`}>
            {t('hero.cta')}
            <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
          </a>
        </Button>

        <div className='flex flex-wrap gap-2'>
          <Button variant='outline' size='sm' asChild>
            <a href={`mailto:${env.email}`}>
              <Mail />
              {t('hero.email')}
            </a>
          </Button>

          <Button variant='outline' size='sm' asChild>
            <a
              href={env.whatsappHref}
              target='_blank'
              rel='noopener noreferrer'
            >
              <MessageCircle />
              {t('hero.whatsapp')}
            </a>
          </Button>

          <Button variant='outline' size='sm' asChild>
            <a href={env.phoneHref}>
              <Phone />
              {t('hero.call')}
            </a>
          </Button>
        </div>
      </div>

      <div className='mb-3 grid grid-cols-1 items-center gap-x-4 gap-y-0.5 text-xs sm:grid-cols-[auto_1fr]'>
        <span className='text-muted-foreground'>{t('hero.labelEmail')}</span>
        <div className='flex items-center gap-1'>
          <span className='cursor-text select-all font-mono font-medium'>
            {env.email}
          </span>
          <CopyButton text={env.email} label={t('hero.labelEmail')} />
        </div>

        <span className='text-muted-foreground'>{t('hero.labelPhone')}</span>
        <div className='flex items-center gap-1'>
          <span className='cursor-text select-all font-mono font-medium'>
            {env.phone}
          </span>
          <CopyButton text={env.phone} label={t('hero.labelPhone')} />
        </div>
      </div>

      <div className='text-xs text-muted-foreground'>
        <p>{t('hero.hint1')}</p>
        <p>{t('hero.hint2')}</p>
      </div>
    </>
  );
}
