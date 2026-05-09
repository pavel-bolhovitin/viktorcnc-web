'use client';

import { useEffect, useState } from 'react';
import { DraftingCompass, Factory, HelpCircle, Images, Mail, Menu, User, Workflow, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FOUNDED_YEAR } from '@/constants/founder';
import { NAV_LINKS, SECTION_IDS } from '@/constants/sections';
import { env } from '@/utils/env';
import { Button } from './ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from './ui/sidebar';

const NAV_ICONS = {
  Services: Wrench,
  Gallery: Images,
  Workshop: Factory,
  About: User,
  Process: Workflow,
  FAQ: HelpCircle,
  Contact: Mail,
} as const;

export function AppSidebarTrigger({ className }: { className?: string }) {
  const { toggleSidebar } = useSidebar();
  return (
    <Button
      variant='ghost'
      size='icon'
      className={className}
      onClick={toggleSidebar}
      aria-label='Open menu'
    >
      <Menu className='h-5 w-5' />
    </Button>
  );
}

export function AppSidebar() {
  const { setOpenMobile } = useSidebar();
  const [activeHash, setActiveHash] = useState('');
  const close = () => setOpenMobile(false);

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash);
    setActiveHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <Sidebar side='left' collapsible='offcanvas'>
      <SidebarHeader className='border-b border-sidebar-border py-6 px-4'>
        <div className='flex items-center gap-2'>
          <DraftingCompass className='h-6 w-6 rotate-180 text-primary' strokeWidth={1.75} />
          <span className='text-lg font-bold tracking-tight'>{env.appName}</span>
        </div>
      </SidebarHeader>
      <SidebarContent className='flex flex-col py-4 px-2'>
        <SidebarMenu className='gap-0.5 flex-1'>
          {NAV_LINKS.map(({ label, href }) => {
            const Icon = NAV_ICONS[label as keyof typeof NAV_ICONS];
            const isActive = activeHash === href;
            return (
              <SidebarMenuItem key={label}>
                <SidebarMenuButton
                  asChild
                  onClick={close}
                  className={cn(
                    'rounded-none h-auto py-3 px-4 gap-4 transition-colors duration-75',
                    isActive
                      ? 'text-primary font-bold border-l-2 border-primary bg-accent'
                      : 'text-muted-foreground border-l-2 border-transparent hover:bg-accent hover:text-foreground',
                  )}
                >
                  <a href={href}>
                    {Icon && <Icon className='h-[18px] w-[18px] shrink-0' strokeWidth={1.5} />}
                    <span className='text-[11px] uppercase tracking-[0.05em] font-semibold'>
                      {label}
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
        <div className='border-t border-sidebar-border mt-auto pt-6 px-2 pb-2 flex flex-col gap-3'>
          <Button
            variant='outline'
            className='w-full rounded-none text-[11px] uppercase tracking-[0.05em] font-semibold gap-2 h-10'
            asChild
            onClick={close}
          >
            <a href={`#${SECTION_IDS.contact}`}>
              <Mail className='h-4 w-4' />
              Contact me
            </a>
          </Button>
          <div className='flex flex-col gap-1 opacity-60'>
            <p className='font-mono text-[10px] text-muted-foreground'>
              © {new Date().getFullYear()} {env.appName}. All rights reserved.
            </p>
            <p className='font-mono text-[10px] text-muted-foreground'>
              Precision CNC Machining · Latvia · Est. {FOUNDED_YEAR}
            </p>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
