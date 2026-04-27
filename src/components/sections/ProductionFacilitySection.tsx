import {
  ArrowRight,
  Droplets,
  RefreshCw,
  Settings,
  Settings2,
  ShieldCheck,
  Thermometer,
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
    label: 'High-Speed Processing',
    title: 'CNC Milling Center — High Speed',
    description:
      'Optimized for aluminum and plastics — high spindle speeds with fine surface finish.',
    image: '/milling-center-2.jpg',
    alt: 'High-speed CNC spindle milling aluminum parts',
    specs: [
      { label: 'Target Materials', value: 'Aluminum & Plastics' },
      { label: 'Spindle Speed', value: '24,000 RPM' },
      { label: 'Configuration', value: '3-Axis High-Speed' },
    ],
  },
  {
    id: 'milling-01',
    unitId: 'UNIT_02',
    icon: Settings2,
    label: 'Primary Milling Unit',
    title: 'CNC Milling Center',
    description:
      '3-axis precision machining for complex geometries and tight dimensional tolerances.',
    image: '/milling-center-1.jpg',
    alt: 'High-precision 3-axis CNC milling machine center',
    specs: [
      { label: 'Configuration', value: '3-Axis' },
      { label: 'Travel (X/Y/Z)', value: '760 × 500 × 500 mm' },
      { label: 'Accuracy', value: '±0.005 mm' },
    ],
  },
  {
    id: 'lathe',
    unitId: 'UNIT_03',
    icon: RefreshCw,
    label: 'Turning Department',
    title: 'Precision CNC Lathe',
    description:
      'CNC turning for shafts, bushings, and threaded parts with consistent diameter accuracy.',
    image: '/turning-center.jpg',
    alt: 'Precision CNC lathe turning a cylindrical metal part',
    specs: [
      { label: 'Max Diameter', value: '250 mm' },
      { label: 'Max Length', value: '800 mm' },
      { label: 'Spindle Bore', value: '65 mm' },
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
