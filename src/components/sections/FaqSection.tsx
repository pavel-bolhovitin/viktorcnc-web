'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { SECTION_IDS } from '@/constants/sections';
import { cn } from '@/lib/utils';
import { env } from '@/utils/env';

export function FaqSection({ className }: { className?: string }) {
  const { t } = useTranslation('common');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
    { q: t('faq.q7'), a: t('faq.a7', { email: env.email, phone: env.phone }) },
    { q: t('faq.q8'), a: t('faq.a8') },
  ];

  return (
    <section id={SECTION_IDS.faq} className={cn('py-20', className)}>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-12 max-w-3xl border-l-2 border-primary pl-6'>
          <p className='mb-2 font-mono text-xs uppercase tracking-wider text-primary'>
            {t('faq.eyebrow')}
          </p>
          <h2 className='mb-4 text-3xl font-semibold leading-tight tracking-tight'>
            {t('faq.heading')}
          </h2>
          <p className='text-base leading-relaxed text-muted-foreground'>
            {t('faq.description')}
          </p>
        </div>

        <div className='divide-y divide-border border-y border-border'>
          {faqs.map((faq, i) => (
            <Collapsible
              key={faq.q}
              open={openIndex === i}
              onOpenChange={(open) => setOpenIndex(open ? i : null)}
            >
              <CollapsibleTrigger className='group flex w-full items-center justify-between gap-4 py-5 text-left'>
                <h3 className='text-base font-semibold leading-snug'>
                  {faq.q}
                </h3>
                <ChevronDown className='size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180' />
              </CollapsibleTrigger>
              <CollapsibleContent
                forceMount
                className='data-[state=closed]:hidden'
              >
                <p className='pb-5 text-sm leading-relaxed text-muted-foreground'>
                  {faq.a}
                </p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}
