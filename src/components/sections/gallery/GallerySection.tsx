'use client';

import { useState } from 'react';
import { GalleryCard } from '@/components/sections/gallery/GalleryCard';
import { photoSets } from '@/components/sections/gallery/photoSets';
import { Toggle } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';

const ALL = 'All Materials';

const MATERIALS = [
  ALL,
  ...Array.from(new Set(photoSets.flatMap((s) => s.material))).map(
    (m) => m.charAt(0).toUpperCase() + m.slice(1),
  ),
];

export function GallerySection({ className }: { className?: string }) {
  const [selected, setSelected] = useState<Set<string>>(new Set([ALL]));

  function toggle(material: string) {
    if (material === ALL) {
      setSelected(new Set([ALL]));
      return;
    }

    setSelected((prev) => {
      const next = new Set(prev);
      next.delete(ALL);

      if (next.has(material)) {
        next.delete(material);
      } else {
        next.add(material);
      }

      if (next.size === 0) next.add(ALL);
      return next;
    });
  }

  return (
    <section className={cn('py-20', className)}>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-12 max-w-3xl border-l-2 border-primary pl-6'>
          <p className='mb-2 font-mono text-xs uppercase tracking-wider text-primary'>
            Work Gallery
          </p>
          <h2 className='mb-4 text-3xl font-semibold leading-tight tracking-tight'>
            Custom CNC Parts — Examples
          </h2>
        </div>

        <div className='mb-8 flex flex-wrap gap-2'>
          {MATERIALS.map((material) => (
            <Toggle
              key={material}
              pressed={selected.has(material)}
              onPressedChange={() => toggle(material)}
              variant='outline'
              className='font-mono text-xs uppercase tracking-wider border-primary/40 text-primary/60 hover:bg-transparent hover:border-primary hover:text-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary'
            >
              {material}
            </Toggle>
          ))}
        </div>

        <div className='columns-1 gap-4 sm:columns-2 lg:columns-3'>
          {photoSets
            .filter(
              (set) =>
                selected.has(ALL) ||
                set.material.some((m) =>
                  selected.has(m.charAt(0).toUpperCase() + m.slice(1)),
                ),
            )
            .map((set) => (
              <div key={set.id} className='mb-4 break-inside-avoid'>
                <GalleryCard set={set} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
