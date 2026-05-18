'use client';

import { DraftingCompass } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { NAV_LINKS, SECTION_IDS } from '@/constants/sections';
import { env } from '@/utils/env';
import { LanguageSelect } from './LanguageSelect';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { SidebarTrigger } from './ui/sidebar';

export function AppBar() {
  const { t } = useTranslation('common');

  return (
    <header className='sticky top-0 z-app-bar flex h-16 shrink-0 items-center border-b border-b-border bg-background/60 backdrop-blur-md'>
      <div className='flex w-full items-center gap-1 px-4 sm:justify-between md:gap-6 md:px-8'>
        <div className='flex flex-row'>
          <SidebarTrigger className='-ml-1 md:hidden hover:bg-transparent' />

          <Separator orientation='vertical' className='mx-2 md:hidden' />

          <div className='flex items-center gap-2'>
            <DraftingCompass
              className='h-6 w-6 rotate-180 text-primary'
              strokeWidth={1.75}
            />
            <span className='text-lg font-bold tracking-tight'>
              {env.appName}
            </span>
          </div>
        </div>

        <nav className='hidden items-center gap-6 text-sm font-medium text-foreground/70 lg:flex'>
          {NAV_LINKS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className='transition-colors hover:text-foreground'
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className='flex items-center gap-2'>
          <LanguageSelect className='hidden sm:flex' />
          <ThemeToggle className='hidden sm:flex' />
          <Button asChild size='lg' className='hidden px-4 sm:flex'>
            <a href={`#${SECTION_IDS.contact}`}>{t('nav.contactButton')}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
