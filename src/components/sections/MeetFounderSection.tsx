import Image from 'next/image';

import { FOUNDER_FULL_NAME, YEARS_EXPERIENCE } from '@/constants/founder';
import { cn } from '@/lib/utils';
import { env } from '@/utils/env';

const stats = [
  {
    value: `${YEARS_EXPERIENCE}+`,
    unit: 'Years',
    label: 'Field Experience in CNC Machining & Manufacturing',
    sub: 'Proven expertise in CNC milling, turning, and reverse engineering',
  },
  {
    value: 'Latvia',
    unit: '/ Worldwide',
    label: 'Manufacturing & International Delivery',
    sub: 'Fast communication with global clients',
  },
  {
    value: '0.01mm',
    unit: '',
    label: 'Precision Tolerance Standard for Critical Parts',
    sub: 'High-accuracy machining for prototypes and functional components',
  },
  {
    value: 'Custom',
    unit: 'Orders',
    label: 'From CAD, drawings, sketches, or physical samples',
    sub: 'One-off parts & small batch production available',
  },
];

const skills = [
  'CAD/CAM Modeling',
  '3-Axis CNC Milling',
  'Lathe Turning',
  'Prototype Manufacturing',
  'Technical Drawing Analysis',
  'Reverse Engineering',
];

export function MeetFounderSection({ className }: { className?: string }) {
  return (
    <section className={cn('py-20', className)}>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16'>
          <div className='relative'>
            <div className='relative aspect-4/5 overflow-hidden border border-gray-200'>
              <Image
                src='/founder.jpg'
                alt='Viktor — Senior CNC Engineer & Founder of Viktor CNC, in a professional workshop environment'
                fill
                sizes='(max-width: 1024px) 100vw, 50vw'
                className='object-cover'
              />
              <div className='absolute bottom-0 left-0 max-w-50 border-r border-t border-gray-200 bg-white p-4'>
                <p className='font-mono text-xs uppercase tracking-wider text-gray-400'>
                  Status
                </p>
                <p className='text-sm font-semibold text-primary'>
                  Ready for Production
                </p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-6'>
            <div>
              <h2 className='mb-2 text-3xl font-semibold leading-tight tracking-tight'>
                Meet Your CNC Engineer & Founder
              </h2>

              <h3 className='mb-4 text-base font-medium text-muted-foreground'>
                {FOUNDER_FULL_NAME} — Senior CNC Engineer & Founder of{' '}
                {env.appName}
              </h3>

              <div className='mb-6 h-1 w-16 bg-primary' />
            </div>

            <div className='space-y-4 text-base leading-relaxed text-muted-foreground'>
              <p>
                With over {YEARS_EXPERIENCE} years of experience in
                high-precision{' '}
                <strong className='text-foreground'>
                  CNC milling and turning
                </strong>
                , I provide professional CNC machining services in Latvia for
                clients worldwide. I specialize in manufacturing mechanical
                parts from CAD models, technical drawings, sketches, and
                physical samples.
              </p>
              <p>
                My work focuses on{' '}
                <strong className='text-foreground'>
                  3-axis CNC machining
                </strong>
                , <strong className='text-foreground'>precision turning</strong>
                , and{' '}
                <strong className='text-foreground'>reverse engineering</strong>{' '}
                for prototypes, one-off parts, and small batch production. I
                deliver fully finished components with tight tolerances up to
                0.01mm, suitable for industrial, mechanical, and engineering
                applications.
              </p>
              <p>
                Based in Latvia, I support international clients with reliable
                production, fast communication, and engineering-level accuracy
                from concept to finished part. Every order is handled personally
                to ensure consistent quality and precise execution of technical
                requirements.
              </p>
            </div>

            <div className='grid grid-cols-2 gap-3 py-2'>
              {stats.map(({ value, unit, label, sub }) => (
                <div
                  key={label}
                  className='border border-gray-200 bg-white p-4'
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
                Technical Expertise
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className='border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-700'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className='border-t border-gray-200 pt-5'>
              <h3 className='mb-2 text-base font-semibold'>How to Order</h3>
              <p className='text-sm text-muted-foreground'>
                Send your CAD file, drawing, or sample — I will review it and
                provide a production quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
