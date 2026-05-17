'use client';
import {
  ClipboardCheck,
  Cpu,
  FileSearch,
  PackageCheck,
  PenTool,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { YEARS_EXPERIENCE } from '@/constants/founder';
import { SECTION_IDS } from '@/constants/sections';
import { cn } from '@/lib/utils';

export type WorkFlowSectionProps = {
  className?: string;
};

export function WorkFlowSection({ className }: WorkFlowSectionProps) {
  const { t } = useTranslation('common');

  const steps = [
    {
      number: '01',
      icon: FileSearch,
      title: t('workflow.step1.title'),
      description: t('workflow.step1.description'),
      keywords: [t('workflow.step1.kw1'), t('workflow.step1.kw2')],
    },
    {
      number: '02',
      icon: PenTool,
      title: t('workflow.step2.title'),
      description: t('workflow.step2.description'),
      keywords: [t('workflow.step2.kw1'), t('workflow.step2.kw2'), t('workflow.step2.kw3')],
    },
    {
      number: '03',
      icon: Cpu,
      title: t('workflow.step3.title'),
      description: t('workflow.step3.description', { years: YEARS_EXPERIENCE }),
      keywords: [t('workflow.step3.kw1'), t('workflow.step3.kw2'), t('workflow.step3.kw3')],
    },
    {
      number: '04',
      icon: ClipboardCheck,
      title: t('workflow.step4.title'),
      description: t('workflow.step4.description'),
      keywords: [t('workflow.step4.kw1'), t('workflow.step4.kw2'), t('workflow.step4.kw3')],
    },
    {
      number: '05',
      icon: PackageCheck,
      title: t('workflow.step5.title'),
      description: t('workflow.step5.description'),
      keywords: [t('workflow.step5.kw1'), t('workflow.step5.kw2')],
    },
  ];

  return (
    <section id={SECTION_IDS.process} className={cn('py-20', className)}>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-12 max-w-3xl border-l-2 border-primary pl-6'>
          <p className='mb-2 font-mono text-xs uppercase tracking-wider text-primary'>
            {t('workflow.eyebrow')}
          </p>
          <h2 className='mb-4 text-3xl font-semibold leading-tight tracking-tight'>
            {t('workflow.heading')}
          </h2>
          <p className='text-base leading-relaxed text-muted-foreground'>
            {t('workflow.description')}
          </p>
        </div>

        <div className='relative'>
          <div className='absolute left-5 top-0 h-full w-px bg-border md:left-6.75' />

          <ol className='space-y-0'>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.number}
                  className='relative grid grid-cols-[40px_1fr] gap-4 md:grid-cols-[56px_1fr] md:gap-10'
                >
                  <div className='flex flex-col items-center md:items-start'>
                    <div className='relative z-10 flex h-10 w-10 items-center justify-center border border-border bg-card md:h-14 md:w-14'>
                      <Icon
                        className='h-4 w-4 text-primary md:h-5 md:w-5'
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <div
                    className={cn(
                      'pb-10',
                      index === steps.length - 1 && 'pb-0',
                    )}
                  >
                    <div className='mb-1 flex items-center gap-3'>
                      <span className='font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground'>
                        {t('workflow.step')} {step.number}
                      </span>
                    </div>
                    <h3 className='mb-2 text-base font-semibold leading-snug'>
                      {step.title}
                    </h3>
                    <p className='mb-3 text-sm leading-relaxed text-muted-foreground'>
                      {step.description}
                    </p>
                    <div className='flex flex-wrap gap-1.5'>
                      {step.keywords.map((kw) => (
                        <span
                          key={kw}
                          className='border border-border bg-muted px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground'
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
