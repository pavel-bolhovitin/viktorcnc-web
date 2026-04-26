'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

export function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    toast.success(label ? `${label} copied` : 'Copied to clipboard');
  }

  return (
    <Button
      variant='ghost'
      size='icon-xs'
      onClick={handleCopy}
      aria-label='Copy to clipboard'
      className='hover:bg-transparent hover:text-primary'
    >
      {copied ? <Check className='text-green-500' /> : <Copy />}
    </Button>
  );
}
