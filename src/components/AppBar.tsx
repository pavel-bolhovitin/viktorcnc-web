import { DraftingCompass } from 'lucide-react';

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

      <a
        href='#contact'
        className='rounded-md bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90'
      >
        Get a Quote
      </a>
    </header>
  );
}
