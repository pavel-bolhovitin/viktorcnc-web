'use client';

import {
  DraftingCompass,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FOUNDED_YEAR, YEARS_EXPERIENCE } from '@/constants/founder';
import { NAV_LINKS, SERVICE_LINKS } from '@/constants/sections';
import { env } from '@/utils/env';

export function Footer() {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-muted text-foreground'>
      <div className='mx-auto max-w-7xl px-6 py-16'>
        <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='sm:col-span-2'>
            <div className='mb-3 flex items-center gap-2'>
              <DraftingCompass
                className='size-5 rotate-180 text-primary'
                strokeWidth={1.75}
              />
              <span className='text-lg font-bold tracking-tight'>
                {env.appName}
              </span>
            </div>
            <p className='mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground'>
              {t('footer.description', { years: YEARS_EXPERIENCE })}
            </p>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-center gap-2'>
                <MapPin className='size-3.5 shrink-0 text-muted-foreground/50' />
                <span>{t('footer.location')}</span>
              </li>
              <li className='flex items-center gap-2'>
                <Mail className='size-3.5 shrink-0 text-muted-foreground/50' />
                <a
                  href={`mailto:${env.email}`}
                  className='transition-colors hover:text-foreground'
                >
                  {env.email}
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <Phone className='size-3.5 shrink-0 text-muted-foreground/50' />
                <a
                  href={env.phoneHref}
                  className='transition-colors hover:text-foreground'
                >
                  {env.phone}
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <MessageCircle className='size-3.5 shrink-0 text-muted-foreground/50' />
                <a
                  href={env.whatsappHref}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-colors hover:text-foreground'
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className='mb-4 text-xs font-semibold tracking-widest text-muted-foreground/60 uppercase'>
              {t('footer.navigation')}
            </p>
            <ul className='space-y-2.5'>
              {NAV_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                  >
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className='mb-4 text-xs font-semibold tracking-widest text-muted-foreground/60 uppercase'>
              {t('footer.services')}
            </p>
            <ul className='space-y-2.5'>
              {SERVICE_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    className='text-sm text-muted-foreground transition-colors hover:text-foreground'
                  >
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-border'>
        <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-6 py-5 text-xs text-muted-foreground/60'>
          <span>{t('footer.copyright', { year: currentYear, appName: env.appName })}</span>
          <span>{t('footer.tagline', { founded: FOUNDED_YEAR })}</span>
        </div>
      </div>
    </footer>
  );
}
