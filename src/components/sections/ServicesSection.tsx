import { ArrowRight, CheckCircle, Package } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { env } from '@/utils/env';

const services = [
  {
    id: 'milling',
    title: 'Precision 3-Axis CNC Milling',
    image: '/milling.png',
    alt: 'CNC milling machine cutting a metal part',
    specs: [
      { label: 'Working Area', value: '760 × 500 × 500 mm' },
      { label: 'Tolerances', value: 'up to ±0.01 mm' },
    ],
    description:
      'CNC milling of complex parts, housings, brackets, and custom components for mechanical applications. Suitable for prototypes and small batch production.',
    materials: ['Aluminum', 'Steel', 'Plastics'],
  },
  {
    id: 'turning',
    title: 'High-Accuracy Lathe Turning',
    image: '/turning.png',
    alt: 'Lathe machine turning a cylindrical metal part',
    specs: [
      { label: 'Max Diameter', value: '250 mm' },
      { label: 'Max Length', value: '800 mm' },
      { label: 'Tolerances', value: 'up to ±0.03 mm' },
    ],
    description:
      'Precision turning of cylindrical parts such as shafts, bushings, and mechanical components with high surface quality and tight tolerances.',
    materials: ['Steel', 'Aluminum', 'Brass'],
  },
  {
    id: 'reverse-engineering',
    title: 'Reverse Engineering & CAD Modeling',
    image: '/cad.png',
    alt: 'CAD model of a mechanical part for reverse engineering',
    specs: [{ label: 'File Formats', value: 'STEP, IGES, STL, DXF' }],
    description:
      'Recreating accurate CAD models from physical samples, broken parts, or sketches to manufacture fully functional replacements.',
    materials: ['Metal Parts', 'Plastic Parts'],
  },
];

const materials = [
  { name: 'Aluminum', grades: '6061, 7075' },
  { name: 'Steel & Stainless', grades: '304, 316L' },
  { name: 'Engineering Plastics', grades: 'POM, PTFE, Nylon, ABS' },
];

export function ServicesSection() {
  return (
    <section className='bg-white py-20'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-12 max-w-3xl border-l-2 border-primary pl-6'>
          <p className='mb-2 font-mono text-xs uppercase tracking-wider text-primary'>
            Services & Materials
          </p>
          <h2 className='mb-4 text-3xl font-semibold leading-tight tracking-tight'>
            CNC Machining Services for Custom Parts
          </h2>
          <p className='text-base leading-relaxed text-muted-foreground'>
            Manufacturing custom parts from drawings, CAD models, or physical
            samples using metals and engineering plastics.
          </p>
        </div>

        <div className='mb-12 grid grid-cols-1 gap-6 md:grid-cols-3'>
          {services.map((service) => (
            <div
              key={service.id}
              className='flex flex-col border border-gray-200 bg-white transition-colors hover:border-primary/30'
            >
              <div className='relative aspect-video overflow-hidden'>
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes='(max-width: 768px) 100vw, 33vw'
                  className='object-cover grayscale transition-all duration-500 hover:grayscale-0'
                />
              </div>

              <div className='flex flex-grow flex-col p-6'>
                <h3 className='mb-4 text-base font-semibold leading-snug'>
                  {service.title}
                </h3>

                <div className='mb-4 border border-gray-100 bg-gray-50 p-3'>
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

                <p className='mb-6 flex-grow text-sm leading-relaxed text-muted-foreground'>
                  {service.description}
                </p>

                <div className='flex flex-wrap gap-1.5'>
                  {service.materials.map((material) => (
                    <span
                      key={material}
                      className='border border-gray-200 bg-gray-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-600'
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mb-8 overflow-hidden border border-gray-200'>
          <div className='grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-4 lg:divide-x lg:divide-y-0'>
            <div className='bg-gray-50 p-6'>
              <h3 className='mb-1 text-sm font-semibold'>
                Supported Materials
              </h3>
              <p className='text-xs text-muted-foreground'>
                Core materials used in most projects.
              </p>
            </div>
            {materials.map(({ name, grades }) => (
              <div key={name} className='flex flex-col gap-1 p-6'>
                <span className='font-mono text-xs font-semibold uppercase tracking-wider text-primary'>
                  {name}
                </span>
                <span className='font-mono text-xs text-muted-foreground'>
                  {grades}
                </span>
              </div>
            ))}
          </div>

          <div className='flex flex-col items-start justify-between gap-3 border-t border-gray-200 bg-gray-50 px-6 py-4 md:flex-row md:items-center'>
            <p className='max-w-xl text-sm italic text-muted-foreground'>
              If you&apos;re unsure which material fits your part, I can
              recommend the best option based on load, environment, and
              application.
            </p>
            <div className='flex shrink-0 flex-col gap-3 sm:flex-row sm:gap-4'>
              <div className='flex items-center gap-1.5'>
                <CheckCircle className='size-3.5 shrink-0 text-primary' />
                <span className='font-mono text-xs uppercase tracking-wider text-muted-foreground'>
                  ISO 2768
                </span>
              </div>
              <div className='flex items-center gap-1.5'>
                <Package className='size-3.5 shrink-0 text-primary' />
                <span className='font-mono text-xs uppercase tracking-wider text-muted-foreground'>
                  Material Sourcing Available
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-start gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center'>
          <Button asChild size='lg' className='group px-6'>
            <a href={`mailto:${env.email}`}>
              Send your drawing — get a production quote
              <ArrowRight className='transition-transform duration-200 group-hover:translate-x-0.5' />
            </a>
          </Button>
          <p className='font-mono text-xs text-muted-foreground'>
            Machining according to ISO · Tolerances up to 0.01 mm
          </p>
        </div>
      </div>
    </section>
  );
}
