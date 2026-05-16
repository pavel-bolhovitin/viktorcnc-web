'use client';
import { X } from 'lucide-react';
import { Portal } from 'radix-ui';
import { Button } from '@/components/ui/button';

export type LangSwitchBannerProps = {
  children: React.ReactNode;
  switchLabel: string;
  onSwitch: () => void;
  onDismiss: () => void;
};

export function LangSwitchBanner({
  children,
  switchLabel,
  onSwitch,
  onDismiss,
}: LangSwitchBannerProps) {
  return (
    <Portal.Root>
      <div className='fixed top-18 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-lg border border-border bg-card px-4 py-2 text-sm text-card-foreground shadow-md'>
        <span>{children}</span>
        <Button
          size='sm'
          variant='outline'
          className='capitalize'
          onClick={onSwitch}
        >
          {switchLabel}
        </Button>
        <button
          type='button'
          onClick={onDismiss}
          className='text-muted-foreground hover:text-foreground'
        >
          <X size={14} />
        </button>
      </div>
    </Portal.Root>
  );
}
