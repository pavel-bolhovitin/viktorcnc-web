'use client';

import { DraftingCompass, Menu } from 'lucide-react';
import { NAV_LINKS, SECTION_IDS } from '@/constants/sections';
import { env } from '@/utils/env';
import { Button } from './ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from './ui/sidebar';

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
  const close = () => setOpenMobile(false);

  return (
    <Sidebar side='left' collapsible='offcanvas'>
      <SidebarHeader className='border-b border-sidebar-border'>
        <div className='flex items-center gap-2 px-2 py-1'>
          <DraftingCompass
            className='h-5 w-5 rotate-180 text-primary'
            strokeWidth={1.75}
          />
          <span className='text-base font-bold tracking-tight'>
            {env.appName}
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {NAV_LINKS.map(({ label, href }) => (
            <SidebarMenuItem key={label}>
              <SidebarMenuButton asChild onClick={close}>
                <a href={href}>{label}</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Button asChild size='lg' className='w-full' onClick={close}>
          <a href={`#${SECTION_IDS.contact}`}>Contact me</a>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
