import {
  ArrowRight,
  RefreshCw,
  Settings2,
  ShieldCheck,
  UserCheck,
  Zap,
} from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { env } from '@/utils/env';

const machines = [
  {
    id: 'milling-02',
    unitId: 'UNIT_01',
    icon: Zap,
    label: 'High-Speed Milling',
    title: 'Precision CNC Milling — High Speed',
    description:
      'CNC milling of aluminum and plastic parts at 24,000 RPM spindle speed — fine surface finish with tight dimensional tolerances.',
    image: '/milling-center-2.jpg',
    alt: 'High-speed CNC milling center cutting aluminum parts at 24000 RPM',
    specs: [
      { label: 'Target Materials', value: 'Aluminum, Steel & Plastics' },
      { label: 'Spindle Speed', value: '24,000 RPM' },
      { label: 'Configuration', value: '3-Axis High-Speed' },
    ],
  },
  {
    id: 'milling-01',
    unitId: 'UNIT_02',
    icon: Settings2,
    label: 'Primary Milling Unit',
    title: 'Precision 3-Axis CNC Milling',
    description:
      'CNC milling of complex parts, housings, brackets, and custom components for mechanical applications. Suitable for prototypes and small batch production.',
    image: '/milling-center-1.jpg',
    alt: 'Precision 3-axis CNC milling machine center for custom metal parts',
    specs: [
      { label: 'Working Area', value: '760 × 500 × 500 mm' },
      { label: 'Tolerances', value: 'up to ±0.01 mm' },
      { label: 'Configuration', value: '3-Axis' },
    ],
  },
  {
    id: 'lathe',
    unitId: 'UNIT_03',
    icon: RefreshCw,
    label: 'Turning Department',
    title: 'High-Accuracy Lathe Turning',
    description:
      'Precision turning of cylindrical parts such as shafts, bushings, and mechanical components with high surface quality and tight tolerances.',
    image: '/turning-center.jpg',
    alt: 'Precision CNC lathe turning cylindrical metal shafts and bushings',
    specs: [
      { label: 'Max Diameter', value: '250 mm' },
      { label: 'Max Length', value: '800 mm' },
      { label: 'Tolerances', value: 'up to ±0.03 mm' },
    ],
  },
];


export function ProductionFacilitySection() {
  return (
    <section className='border-y border-gray-200 bg-white py-20'>
      <div className='mx-auto max-w-7xl px-6'>
        {/* Header */}
        <div className='mb-12 max-w-3xl border-l-2 border-primary pl-6'>
          <p className='mb-2 font-mono text-xs uppercase tracking-wider text-primary'>
            Production Facility
          </p>
          <h2 className='mb-4 text-3xl font-semibold leading-tight tracking-tight'>
            Production Facility — Precision You Can Rely On
          </h2>
          <p className='text-base leading-relaxed text-muted-foreground'>
            Located in Latvia, my workshop is optimized for high-precision
            custom orders. I combine industry-standard CNC machinery with
            specialized metrology tools to ensure every micron matches your
            blueprint.
          </p>
        </div>

        {/* Machine cards */}
        <div className='mb-16 space-y-6'>
          {machines.map((machine, index) => {
            const flip = index % 2 === 1;
            const Icon = machine.icon;
            return (
              <div
                key={machine.id}
                className={`group flex flex-col md:flex-row ${flip ? 'md:flex-row-reverse' : ''} gap-0`}
              >
                {/* Image — 3/5 */}
                <div className='relative h-96 overflow-hidden border border-gray-200 md:h-120 md:w-3/5'>
                  <Image
                    src={machine.image}
                    alt={machine.alt}
                    fill
                    sizes='(max-width: 768px) 100vw, 60vw'
                    className='object-cover transition-all duration-500'
                  />
                </div>

                {/* Text — 2/5 */}
                <div className='flex flex-col justify-between border border-gray-200 bg-white p-8 md:w-2/5'>
                  <div>
                    <div className='mb-8 flex items-start justify-between'>
                      <span className='bg-gray-100 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-gray-600'>
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

                  <div className='space-y-2.5 border-t border-gray-100 pt-5'>
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

        {/* Quality Control + Personally Operated */}
        <div className='mb-16 grid grid-cols-1 gap-12 border-t border-gray-200 pt-12 md:grid-cols-2'>
          {/* Quality Control */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <ShieldCheck className='h-5 w-5 shrink-0 text-primary' />
              <h3 className='text-xl font-semibold uppercase tracking-tight'>
                Quality Control & Measurement
              </h3>
            </div>
            <p className='text-sm leading-relaxed text-muted-foreground'>
              Every part is checked using precision measuring tools to ensure
              it matches your drawing exactly.
            </p>
            <div className='space-y-1.5'>
              {['Digital calipers', 'Micrometers', 'Surface measurement tools'].map((tool) => (
                <div key={tool} className='flex items-center gap-2'>
                  <span className='h-1.5 w-1.5 shrink-0 bg-primary' />
                  <span className='font-mono text-xs text-muted-foreground'>{tool}</span>
                </div>
              ))}
            </div>
            <p className='text-sm leading-relaxed text-muted-foreground'>
              Parts are verified before delivery — no guesswork, only measured
              results.
            </p>
          </div>

          {/* Personally Operated */}
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <UserCheck className='h-5 w-5 shrink-0 text-primary' />
              <h3 className='text-xl font-semibold uppercase tracking-tight'>
                Personally Operated & Maintained
              </h3>
            </div>
            <p className='text-sm leading-relaxed text-muted-foreground'>
              All machines are set up, operated, and maintained by me
              personally. This ensures consistent quality and full control at
              every stage.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className='flex flex-col items-start gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center'>
          <Button asChild size='lg' className='group px-6'>
            <a href={`mailto:${env.email}`}>
              Send your drawing — get a quote
              <ArrowRight className='transition-transform duration-200 group-hover:translate-x-0.5' />
            </a>
          </Button>
          <p className='font-mono text-xs text-muted-foreground'>
            Ready to start? Send your drawing and get a quote within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
