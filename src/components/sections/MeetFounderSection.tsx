'use client';
import Image from 'next-export-optimize-images/image';
import { useTranslation } from 'react-i18next';
import { FOUNDER_FULL_NAME, YEARS_EXPERIENCE } from '@/constants/founder';
import { SECTION_IDS } from '@/constants/sections';
import { cn } from '@/lib/utils';
import { env } from '@/utils/env';

const founderImg = '/founder.webp';

function SectionHeading() {
  const { t } = useTranslation('common');
  return (
    <div>
      <h2 className='mb-2 text-3xl font-semibold leading-tight tracking-tight'>
        {t('founder.eyebrow')}
      </h2>
      <h3 className='mb-4 text-base font-medium text-muted-foreground'>
        {FOUNDER_FULL_NAME} — {t('founder.title', { appName: env.appName })}
      </h3>
      <div className='mb-6 h-1 w-16 bg-primary' />
    </div>
  );
}

export function MeetFounderSection({ className }: { className?: string }) {
  const { t } = useTranslation('common');

  const stats = [
    {
      value: t('founder.stat1Value', { years: YEARS_EXPERIENCE }),
      unit: t('founder.stat1Unit'),
      label: t('founder.stat1Label'),
      sub: t('founder.stat1Sub'),
    },
    {
      value: t('founder.stat2Value'),
      unit: t('founder.stat2Unit'),
      label: t('founder.stat2Label'),
      sub: t('founder.stat2Sub'),
    },
    {
      value: t('founder.stat3Value'),
      unit: '',
      label: t('founder.stat3Label'),
      sub: t('founder.stat3Sub'),
    },
    {
      value: t('founder.stat4Value'),
      unit: t('founder.stat4Unit'),
      label: t('founder.stat4Label'),
      sub: t('founder.stat4Sub'),
    },
  ];

  const skills = [
    t('founder.skill1'),
    t('founder.skill2'),
    t('founder.skill3'),
    t('founder.skill4'),
    t('founder.skill5'),
    t('founder.skill6'),
  ];

  return (
    <section id={SECTION_IDS.founder} className={cn('py-20', className)}>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='lg:hidden'>
          <SectionHeading />
        </div>
        <div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16'>
          <div className='relative'>
            <div className='relative aspect-4/5 max-h-150 overflow-hidden border border-border lg:max-h-none'>
              <Image
                src={founderImg}
                alt={t('founder.imgAlt')}
                fill
                sizes='(max-width: 1024px) 100vw, 50vw'
                className='object-cover select-none'
              />
              <div className='absolute bottom-0 left-0 max-w-50 border-r border-t border-border bg-card p-4'>
                <p className='font-mono text-xs uppercase tracking-wider text-muted-foreground'>
                  {t('founder.statusLabel')}
                </p>
                <p className='text-sm font-semibold text-primary'>
                  {t('founder.statusValue')}
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-6'>
            <div className='hidden lg:block'>
              <SectionHeading />
            </div>

            <div className='space-y-4 text-base leading-relaxed text-muted-foreground'>
              <p>{t('founder.bio1', { years: YEARS_EXPERIENCE })}</p>
              <p>{t('founder.bio2')}</p>
              <p>{t('founder.bio3')}</p>
            </div>

            <div className='grid grid-cols-2 gap-3 py-2'>
              {stats.map(({ value, unit, label, sub }) => (
                <div
                  key={label}
                  className='border border-border bg-card p-4'
                >
                  <div className='font-mono text-lg font-semibold text-foreground'>
                    {value}
                    {unit && <span className='text-primary'> {unit}</span>}
                  </div>
                  <p className='mt-1 text-xs font-medium leading-snug text-foreground'>
                    {label}
                  </p>
                  <p className='mt-1 text-xs leading-snug text-muted-foreground'>
                    {sub}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h3 className='mb-3 text-base font-semibold'>
                {t('founder.expertiseHeading')}
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className='border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className='border-t border-border pt-5'>
              <h3 className='mb-2 text-base font-semibold'>{t('founder.orderHeading')}</h3>
              <p className='text-sm text-muted-foreground'>
                {t('founder.orderText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
