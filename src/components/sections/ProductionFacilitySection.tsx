'use client';
import {
  ArrowRight,
  RefreshCw,
  Settings2,
  ShieldCheck,
  UserCheck,
  Zap,
} from 'lucide-react';
import Image from 'next-export-optimize-images/image';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { SECTION_IDS } from '@/constants/sections';
import { cn } from '@/lib/utils';

const millingCenter1 = '/milling-center-1.webp';
const millingCenter2 = '/milling-center-2.webp';
const turningCenter = '/turning-center.webp';

export function ProductionFacilitySection({
  className,
}: {
  className?: string;
}) {
  const { t } = useTranslation('common');

  const machines = [
    {
      id: 'milling-02',
      unitId: 'UNIT_01',
      icon: Zap,
      title: t('facility.unit1.title'),
      description: t('facility.unit1.description'),
      image: millingCenter2,
      alt: t('facility.unit1.alt'),
      specs: [
        { label: t('facility.unit1.spec1Label'), value: t('facility.unit1.spec1Value') },
        { label: t('facility.unit1.spec2Label'), value: t('facility.unit1.spec2Value') },
        { label: t('facility.unit1.spec3Label'), value: t('facility.unit1.spec3Value') },
      ],
    },
    {
      id: 'milling-01',
      unitId: 'UNIT_02',
      icon: Settings2,
      title: t('facility.unit2.title'),
      description: t('facility.unit2.description'),
      image: millingCenter1,
      alt: t('facility.unit2.alt'),
      specs: [
        { label: t('facility.unit2.spec1Label'), value: t('facility.unit2.spec1Value') },
        { label: t('facility.unit2.spec2Label'), value: t('facility.unit2.spec2Value') },
        { label: t('facility.unit2.spec3Label'), value: t('facility.unit2.spec3Value') },
      ],
    },
    {
      id: 'lathe',
      unitId: 'UNIT_03',
      icon: RefreshCw,
      title: t('facility.unit3.title'),
      description: t('facility.unit3.description'),
      image: turningCenter,
      alt: t('facility.unit3.alt'),
      specs: [
        { label: t('facility.unit3.spec1Label'), value: t('facility.unit3.spec1Value') },
        { label: t('facility.unit3.spec2Label'), value: t('facility.unit3.spec2Value') },
        { label: t('facility.unit3.spec3Label'), value: t('facility.unit3.spec3Value') },
      ],
    },
  ];

  const qcTools = [
    t('facility.qcTool1'),
    t('facility.qcTool2'),
    t('facility.qcTool3'),
  ];

  return (
    <section id={SECTION_IDS.facility} className={cn('py-20', className)}>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-12 max-w-3xl border-l-2 border-primary pl-6'>
          <p className='mb-2 font-mono text-xs uppercase tracking-wider text-primary'>
            {t('facility.eyebrow')}
          </p>
          <h2 className='mb-4 text-3xl font-semibold leading-tight tracking-tight'>
            {t('facility.heading')}
          </h2>
          <p className='text-base leading-relaxed text-muted-foreground'>
            {t('facility.description')}
          </p>
        </div>

        <div className='mb-16 space-y-6'>
          {machines.map((machine, index) => {
            const flip = index % 2 === 1;
            const Icon = machine.icon;
            return (
              <div
                key={machine.id}
                className={`group flex flex-col md:flex-row ${flip ? 'md:flex-row-reverse' : ''} gap-0`}
              >
                <div className='relative h-96 overflow-hidden border border-border md:h-120 md:w-3/5'>
                  <Image
                    src={machine.image}
                    alt={machine.alt}
                    fill
                    sizes='(max-width: 768px) 100vw, 60vw'
                    className='object-cover transition-all duration-500 select-none'
                  />
                </div>

                <div className='flex flex-col justify-between border border-border bg-card p-8 md:w-2/5'>
                  <div>
                    <div className='mb-8 flex items-start justify-between'>
                      <span className='bg-muted px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground'>
                        {machine.unitId}
                      </span>
                      <Icon className='h-4 w-4 text-primary' />
                    </div>
                    <h3 className='mb-3 text-lg font-semibold leading-snug'>
                      {machine.title}
                    </h3>
                    <p className='text-sm leading-relaxed text-muted-foreground'>
                      {machine.description}
                    </p>
                  </div>

                  <div className='space-y-2.5 border-t border-border pt-5'>
                    {machine.specs.map((spec) => (
                      <div key={spec.label} className='flex justify-between'>
                        <span className='font-mono text-[10px] uppercase tracking-wider text-muted-foreground'>
                          {spec.label}
                        </span>
                        <span className='font-mono text-xs font-medium text-foreground'>
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className='mb-16 grid grid-cols-1 gap-12 border-t border-border pt-12 md:grid-cols-2'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <ShieldCheck className='h-5 w-5 shrink-0 text-primary' />
              <h3 className='text-xl font-semibold uppercase tracking-tight'>
                {t('facility.qcHeading')}
              </h3>
            </div>
            <p className='text-sm leading-relaxed text-muted-foreground'>
              {t('facility.qcDescription')}
            </p>
            <div className='space-y-1.5'>
              {qcTools.map((tool) => (
                <div key={tool} className='flex items-center gap-2'>
                  <span className='h-1.5 w-1.5 shrink-0 bg-primary' />
                  <span className='font-mono text-xs text-muted-foreground'>
                    {tool}
                  </span>
                </div>
              ))}
            </div>
            <p className='text-sm leading-relaxed text-muted-foreground'>
              {t('facility.qcNote')}
            </p>
          </div>

          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <UserCheck className='h-5 w-5 shrink-0 text-primary' />
              <h3 className='text-xl font-semibold uppercase tracking-tight'>
                {t('facility.operatedHeading')}
              </h3>
            </div>
            <p className='text-sm leading-relaxed text-muted-foreground'>
              {t('facility.operatedDescription')}
            </p>
          </div>
        </div>

        <div className='flex flex-col items-start gap-4 border-t border-border pt-8 sm:flex-row sm:items-center'>
          <Button asChild size='lg' className='group px-6'>
            <a
              href={`#${SECTION_IDS.contact}`}
              className='flex items-center gap-2'
            >
              {t('facility.contact')}
              <ArrowRight className='shrink-0 transition-transform duration-200 group-hover:translate-x-0.5' />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
