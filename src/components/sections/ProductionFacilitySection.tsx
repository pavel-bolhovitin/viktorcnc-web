import {
  ArrowRight,
  Droplets,
  Settings,
  ShieldCheck,
  Thermometer,
  UserCheck,
} from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { env } from '@/utils/env';

const machines = [
  {
    id: 'milling-01',
    label: 'Primary Milling Unit',
    title: 'CNC Milling Center',
    image: '/milling-center-1.jpg',
    alt: 'High-precision 3-axis CNC milling machine center',
    specs: [
      { label: 'Configuration', value: '3-Axis' },
      { label: 'Travel (X/Y/Z)', value: '760 × 500 × 500 mm' },
      { label: 'Accuracy', value: '±0.005 mm' },
    ],
    features: [
      'Complex shape machining',
      'Tight tolerances',
      'Smooth surface finish',
    ],
  },
  {
    id: 'milling-02',
    label: 'High-Speed Processing',
    title: 'CNC Milling Center — High Speed',
    image: '/milling-center-2.jpg',
    alt: 'High-speed CNC spindle milling aluminum parts',
    specs: [
      { label: 'Target Materials', value: 'Aluminum & Plastics' },
      { label: 'Spindle Speed', value: '24,000 RPM' },
      { label: 'Configuration', value: '3-Axis High-Speed' },
    ],
    features: [
      'Fast cycle times',
      'Fine surface finish',
      'Light alloy specialist',
    ],
  },
  {
    id: 'lathe',
    label: 'Turning Department',
    title: 'Precision CNC Lathe',
    image: '/turning-center.jpg',
    alt: 'Precision CNC lathe turning a cylindrical metal part',
    specs: [
      { label: 'Max Diameter', value: '250 mm' },
      { label: 'Max Length', value: '800 mm' },
      { label: 'Spindle Bore', value: '65 mm' },
    ],
    features: [
      'Shafts, bushings, threaded parts',
      'Consistent diameter accuracy',
      'Clean surface finish',
    ],
  },
];

const measurementTools = [
  'Digital Micrometers (0.001 mm)',
  'Mitutoyo Height Gauges',
  'Surface Finish Profilometer',
  'Granite Surface Plate Grade 00',
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
            My workshop in Latvia is equipped for custom CNC part production —
            from single prototypes to batch orders. Every machine is calibrated
            and maintained to ensure consistent micron-level accuracy.
          </p>
        </div>

        {/* Machine cards */}
        <div className='mb-16 grid grid-cols-1 gap-6 md:grid-cols-3'>
          {machines.map((machine) => (
            <div
              key={machine.id}
              className='group flex flex-col border border-gray-200 bg-white transition-colors hover:border-primary/30'
            >
              <div className='relative aspect-video overflow-hidden'>
                <Image
                  src={machine.image}
                  alt={machine.alt}
                  fill
                  sizes='(max-width: 768px) 100vw, 33vw'
                  className='object-cover transition-all duration-500'
                />
              </div>

              <div className='flex grow flex-col p-6'>
                <p className='mb-1 font-mono text-[10px] uppercase tracking-wider text-primary'>
                  {machine.label}
                </p>
                <h3 className='mb-4 text-base font-semibold leading-snug'>
                  {machine.title}
                </h3>

                <div className='mb-4 border border-gray-100 bg-gray-50 p-3'>
                  {machine.specs.map((spec) => (
                    <p
                      key={spec.label}
                      className='font-mono text-xs leading-relaxed text-muted-foreground'
                    >
                      <span className='text-foreground'>{spec.label}:</span>{' '}
                      {spec.value}
                    </p>
                  ))}
                </div>

                <ul className='space-y-1'>
                  {machine.features.map((feature) => (
                    <li
                      key={feature}
                      className='flex items-center gap-2 text-xs text-muted-foreground'
                    >
                      <span className='h-1 w-1 shrink-0 bg-primary' />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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
              Accuracy is verified at every stage of production. Using
              calibrated micrometers, bore gauges, and surface roughness
              testers, I ensure that every dimension meets your specified
              tolerances. Measurement reports available upon request.
            </p>
            <div className='border border-gray-200 bg-gray-50 p-4'>
              <p className='mb-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground'>
                Measurement Inventory
              </p>
              <div className='grid grid-cols-2 gap-2'>
                {measurementTools.map((tool) => (
                  <div key={tool} className='flex items-center gap-2'>
                    <span className='h-1.5 w-1.5 shrink-0 bg-primary' />
                    <span className='font-mono text-xs text-muted-foreground'>
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
              By operating as a specialized independent facility, I eliminate
              the noise of large-scale manufacturing. Every toolpath is
              optimized and every machine is personally maintained — one-off
              prototypes receive the same attention as complex batch runs.
            </p>
            <div className='space-y-3'>
              {[
                {
                  icon: Droplets,
                  title: 'Lubrication Control',
                  desc: 'High-grade synthetic coolants for thermal stability.',
                },
                {
                  icon: Thermometer,
                  title: 'Climate Optimization',
                  desc: 'Laboratory-stable temperature for geometric repeatability.',
                },
                {
                  icon: Settings,
                  title: 'Toolpath Optimization',
                  desc: 'Every tool path reviewed and tested before production run.',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className='flex items-start gap-3'>
                  <Icon className='mt-0.5 h-4 w-4 shrink-0 text-muted-foreground' />
                  <div>
                    <p className='font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground'>
                      {title}
                    </p>
                    <p className='text-xs leading-relaxed text-muted-foreground'>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
