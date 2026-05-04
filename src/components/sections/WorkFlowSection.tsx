import {
  ClipboardCheck,
  Cpu,
  FileSearch,
  PackageCheck,
  PenTool,
} from 'lucide-react';
import { YEARS_EXPERIENCE } from '@/constants/founder';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: '01',
    icon: FileSearch,
    title: 'Technical Consultation & Analysis',
    description:
      'Send your files or sketch. I review the design to confirm the part can be produced efficiently and to spec.',
    keywords: ['CAD files', 'technical review'],
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Engineering & Modeling',
    description:
      'No drawing? I build a precise 3D model from your sample or sketch, then select the optimal toolpath and strategy for your material.',
    keywords: ['3D modeling', 'custom engineering', 'machining strategy'],
  },
  {
    number: '03',
    icon: Cpu,
    title: 'Precision Manufacturing',
    description: `Machined in my Latvia facility on 3-axis CNC centers. ${YEARS_EXPERIENCE}+ years of experience — I personally oversee every program to hold tolerances up to ±0.01 mm.`,
    keywords: ['CNC milling', '0.01 mm tolerances', 'precision manufacturing'],
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Finishing & Quality Control',
    description:
      'Deburring or engraving as required. Every part is measured and verified against your drawing before shipping.',
    keywords: ['quality control', 'industrial finishing', 'surface treatment'],
  },
  {
    number: '05',
    icon: PackageCheck,
    title: 'Secure Delivery',
    description:
      'Parts are packed to prevent transit damage and shipped locally or internationally — ready to use on arrival.',
    keywords: ['worldwide shipping', 'secure packaging'],
  },
];

export type WorkFlowSectionProps = {
  className?: string;
};

export function WorkFlowSection({ className }: WorkFlowSectionProps) {
  return (
    <section className={cn('py-20', className)}>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-12 max-w-3xl border-l-2 border-primary pl-6'>
          <p className='mb-2 font-mono text-xs uppercase tracking-wider text-primary'>
            Workflow
          </p>
          <h2 className='mb-4 text-3xl font-semibold leading-tight tracking-tight'>
            From Idea to Delivery
          </h2>
          <p className='text-base leading-relaxed text-muted-foreground'>
            A clear, repeatable process — from your first file to the finished
            part at your door.
          </p>
        </div>

        <div className='relative'>
          <div className='absolute left-6.75 top-0 hidden h-full w-px bg-gray-200 md:block' />

          <ol className='space-y-0'>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.number}
                  className='relative grid grid-cols-1 gap-6 md:grid-cols-[56px_1fr] md:gap-10'
                >
                  <div className='flex flex-col items-center md:items-start'>
                    <div className='relative z-10 flex h-14 w-14 items-center justify-center border border-gray-200 bg-white'>
                      <Icon
                        className='h-5 w-5 text-primary'
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
                        Step {step.number}
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
                          className='border border-gray-200 bg-gray-100 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-gray-500'
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
