'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next-export-optimize-images/image';
import { useTranslation } from 'react-i18next';
import cadImg from '@/assets/cad.webp';
import millingImg from '@/assets/milling.webp';
import turningImg from '@/assets/turning.webp';
import { Button } from '@/components/ui/button';
import { SECTION_IDS } from '@/constants/sections';
import { cn } from '@/lib/utils';

export function ServicesSection({ className }: { className?: string }) {
  const { t } = useTranslation('common');

  const services = [
    {
      id: 'milling',
      title: t('services.milling.title'),
      image: millingImg,
      alt: t('services.milling.alt'),
      specs: [
        { label: t('services.milling.specWorkingArea'), value: '760 × 500 × 500 mm' },
        { label: t('services.milling.specTolerances'), value: 'up to ±0.01 mm' },
      ],
      description: t('services.milling.description'),
      materials: [t('services.milling.mat1'), t('services.milling.mat2'), t('services.milling.mat3')],
    },
    {
      id: 'turning',
      title: t('services.turning.title'),
      image: turningImg,
      alt: t('services.turning.alt'),
      specs: [
        { label: t('services.turning.specMaxDiameter'), value: '250 mm' },
        { label: t('services.turning.specMaxLength'), value: '800 mm' },
        { label: t('services.turning.specTolerances'), value: 'up to ±0.03 mm' },
      ],
      description: t('services.turning.description'),
      materials: [t('services.turning.mat1'), t('services.turning.mat2'), t('services.turning.mat3')],
    },
    {
      id: 'reverse-engineering',
      title: t('services.reverseEngineering.title'),
      image: cadImg,
      alt: t('services.reverseEngineering.alt'),
      specs: [],
      description: t('services.reverseEngineering.description'),
      materials: [t('services.reverseEngineering.mat1'), t('services.reverseEngineering.mat2')],
    },
  ];

  const materialGroups = [
    {
      name: t('services.aluminum.name'),
      grades: t('services.aluminum.grades'),
      note: t('services.aluminum.note'),
    },
    {
      name: t('services.steel.name'),
      grades: t('services.steel.grades'),
      note: t('services.steel.note'),
    },
    {
      name: t('services.plastics.name'),
      grades: t('services.plastics.grades'),
      note: t('services.plastics.note'),
    },
  ];

  return (
    <section id={SECTION_IDS.services} className={cn('py-20', className)}>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-12 max-w-3xl border-l-2 border-primary pl-6'>
          <p className='mb-2 font-mono text-xs uppercase tracking-wider text-primary'>
            {t('services.eyebrow')}
          </p>
          <h2 className='mb-4 text-3xl font-semibold leading-tight tracking-tight'>
            {t('services.heading')}
          </h2>
          <p className='text-base leading-relaxed text-muted-foreground'>
            {t('services.description')}
          </p>
        </div>

        <div className='mb-12 grid grid-cols-1 gap-6 md:grid-cols-3'>
          {services.map((service) => (
            <div
              key={service.id}
              className='group flex flex-col border border-border bg-card transition-colors hover:border-primary/30'
            >
              <div className='relative aspect-video overflow-hidden'>
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  placeholder='blur'
                  sizes='(max-width: 768px) 100vw, 33vw'
                  className='object-cover grayscale transition-all duration-500 group-hover:grayscale-0 select-none'
                />
              </div>

              <div className='flex grow flex-col p-6'>
                <h3 className='mb-4 text-base font-semibold leading-snug'>
                  {service.title}
                </h3>

                {service.specs.length > 0 && (
                  <div className='mb-4 border border-border bg-muted p-3'>
                    {service.specs.map((spec) => (
                      <p
                        key={spec.label}
                        className='font-mono text-xs leading-relaxed text-muted-foreground'
                      >
                        <span className='text-foreground'>{spec.label}:</span>{' '}
                        {spec.value}
                      </p>
                    ))}
                  </div>
                )}

                <p className='mb-6 grow text-sm leading-relaxed text-muted-foreground'>
                  {service.description}
                </p>

                <div className='flex flex-wrap gap-1.5'>
                  {service.materials.map((material) => (
                    <span
                      key={material}
                      className='border border-border bg-muted px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground'
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mb-8 bg-muted px-8 py-6'>
          <p className='mb-5 font-mono text-xs uppercase tracking-wider text-muted-foreground'>
            {t('services.materialsHeading')}
          </p>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
            {materialGroups.map(({ name, grades, note }) => (
              <div key={name}>
                <p className='mb-0.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary'>
                  {name}
                </p>
                <p className='mb-1.5 font-mono text-xs text-muted-foreground'>
                  {grades}
                </p>
                <p className='text-xs leading-relaxed text-muted-foreground'>
                  {note}
                </p>
              </div>
            ))}
          </div>
          <div className='mt-6 border-t border-border pt-4'>
            <p className='text-xs text-muted-foreground'>
              {t('services.materialsNote')}{' '}
              <strong className='text-foreground'>
                {t('services.materialsNoteQuestion')}
              </strong>{' '}
              {t('services.materialsNoteCta')}
            </p>
          </div>
        </div>

        <div className='flex flex-col items-start gap-4 border-t border-border pt-8 sm:flex-row sm:items-center'>
          <Button asChild size='lg' className='group px-6'>
            <a
              href={`#${SECTION_IDS.contact}`}
              className='flex items-center gap-2'
            >
              {t('services.contact')}
              <ArrowRight className='shrink-0 transition-transform duration-200 group-hover:translate-x-0.5' />
            </a>
          </Button>
          <p className='font-mono text-xs text-muted-foreground'>
            {t('services.isoNote')}
          </p>
        </div>
      </div>
    </section>
  );
}
