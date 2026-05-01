'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { env } from '@/utils/env';

const faqs = [
  {
    q: 'What can I order from you?',
    a: 'You can order custom CNC machined parts based on your drawing, 3D model, or even a sample. I manufacture one-off prototypes as well as small and medium production batches for various industries.',
  },
  {
    q: 'Can you make a part from a sample or sketch?',
    a: "Yes. I can manufacture parts from a physical sample, a broken component, or even a hand-drawn sketch. I'll create a precise 3D model before production.",
  },
  {
    q: "What if I don't know the material or technical details?",
    a: "If you're not sure about the material or technical details — no problem. Just send what you have, and I'll help you find the best solution.",
  },
  {
    q: 'What is the minimum order?',
    a: 'There is no minimum order. You can order a single prototype or a small batch — I work with both individual and business clients.',
  },
  {
    q: 'Which materials can you use?',
    a: "I mainly work with aluminum, steel, and plastics, which cover most custom part orders. I can also machine other materials on request — just send your project details, and I'll confirm the best option.",
  },
  {
    q: 'How fast can you make my part?',
    a: 'Production time depends on current workload, part complexity, and order volume. For accurate timelines, please contact me directly with your project details.',
  },
  {
    q: 'How do I get a quote?',
    a: `To get a quote, simply send your drawing, 3D file, or even a photo of the part. I'll review it and provide pricing and production details. Pricing is negotiable depending on order volume and complexity. You can reach me by email at ${env.email} or via WhatsApp/Phone at ${env.phone}.`,
  },
  {
    q: 'Do you work with clients outside Latvia?',
    a: 'Yes, I work with clients across Europe and worldwide. I handle secure packaging and shipping for all orders.',
  },
];

export function FaqSection({ className }: { className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={cn('py-20', className)}>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-12 max-w-3xl border-l-2 border-primary pl-6'>
          <p className='mb-2 font-mono text-xs uppercase tracking-wider text-primary'>
            FAQ
          </p>
          <h2 className='mb-4 text-3xl font-semibold leading-tight tracking-tight'>
            Frequently Asked Questions
          </h2>
          <p className='text-base leading-relaxed text-muted-foreground'>
            Common questions about ordering custom CNC parts, materials, and
            delivery.
          </p>
        </div>

        <div className='divide-y divide-gray-200 border-y border-gray-200'>
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
