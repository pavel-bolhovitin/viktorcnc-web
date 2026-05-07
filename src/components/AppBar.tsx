import { DraftingCompass } from 'lucide-react';
import { NAV_LINKS, SECTION_IDS } from '@/constants/sections';
import { env } from '@/utils/env';
import { Button } from './ui/button';

export function AppBar() {
  return (
    <header className='sticky top-0 z-(--z-app-bar) flex h-16 items-center justify-between border-b border-b-gray-100 bg-white/60 px-8 backdrop-blur-md'>
      <div className='flex items-center gap-2'>
        <DraftingCompass
          className='h-6 w-6 rotate-180 text-primary'
          strokeWidth={1.75}
        />
        <span className='text-lg font-bold tracking-tight'>{env.appName}</span>
      </div>

      <nav className='hidden items-center gap-6 text-sm font-medium text-foreground/70 md:flex'>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className='transition-colors hover:text-foreground'
          >
            {label}
          </a>
        ))}
      </nav>

      <Button asChild size='lg' className='hidden px-4 sm:flex'>
        <a href={`#${SECTION_IDS.contact}`}>Contact me</a>
      </Button>
    </header>
  );
}
