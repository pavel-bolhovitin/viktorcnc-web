import { ArrowRightIcon, DraftingCompass } from 'lucide-react';
import { env } from '@/utils/env';
import { Button } from './ui/button';

export function AppBar() {
  return (
    <header className='sticky top-0 z-(--z-app-bar) flex h-16 items-center justify-between border-b border-b-gray-100 bg-white/80 px-8 backdrop-blur-md'>
      <div className='flex items-center gap-2'>
        <DraftingCompass
          className='h-6 w-6 rotate-180 text-primary'
          strokeWidth={1.75}
        />
        <span className='text-lg font-bold tracking-tight'>VictorCNC</span>
      </div>

      <nav className='hidden items-center gap-6 text-sm font-medium text-foreground/70 md:flex'>
        <a href='#services' className='transition-colors hover:text-foreground'>
          Services
        </a>

        <a
          href='#materials'
          className='transition-colors hover:text-foreground'
        >
          Materials
        </a>

        <a href='#work' className='transition-colors hover:text-foreground'>
          Work
        </a>

        <a href='#process' className='transition-colors hover:text-foreground'>
          Process
        </a>

        <a href='#faq' className='transition-colors hover:text-foreground'>
          FAQ
        </a>
      </nav>

      <Button asChild size='lg' className='group px-4'>
        <a href={`mailto:${env.email}`}>
          Get a Quote
          <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
        </a>
      </Button>
    </header>
  );
}
