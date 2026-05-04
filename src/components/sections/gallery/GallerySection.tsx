'use client';

import { useState } from 'react';
import { GreedyColumnLayout } from '@/components/layouts/GreedyColumnLayout';
import { GalleryCard } from '@/components/sections/gallery/GalleryCard';
import { GalleryDialog } from '@/components/sections/gallery/GalleryDialog';
import {
  type PhotoSet,
  photoSets,
} from '@/components/sections/gallery/photoSets';
import { Toggle } from '@/components/ui/toggle';
import { cn } from '@/lib/utils';

const PAGE_SIZE = 10;

const ALL = 'All Materials';

const MATERIALS = [
  ALL,
  ...Array.from(new Set(photoSets.flatMap((s) => s.material))).map(
    (m) => m.charAt(0).toUpperCase() + m.slice(1),
  ),
];

function parseAspect(aspect: string): [number, number] {
  const [w, h] = aspect.split('/').map(Number);
  return [w, h];
}

export function GallerySection({ className }: { className?: string }) {
  const [selected, setSelected] = useState<Set<string>>(new Set([ALL]));
  const [openSet, setOpenSet] = useState<PhotoSet | null>(null);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);

  const filteredSets = photoSets.filter(
    (set) =>
      selected.has(ALL) ||
      set.material.some((m) =>
        selected.has(m.charAt(0).toUpperCase() + m.slice(1)),
      ),
  );

  const remaining = filteredSets.length - pageSize;

  function toggle(material: string) {
    setPageSize(PAGE_SIZE);
    if (material === ALL) {
      setSelected(new Set([ALL]));
    } else {
      setSelected((prev) => {
        const next = new Set(prev);
        next.delete(ALL);
        if (next.has(material)) next.delete(material);
        else next.add(material);
        if (next.size === 0) next.add(ALL);
        return next;
      });
    }
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

        <GreedyColumnLayout
          data={filteredSets}
          keyExtractor={(set) => set.id}
          widthExtractor={(set) => parseAspect(set.aspect)[0]}
          heightExtractor={(set) => parseAspect(set.aspect)[1]}
          pageSize={pageSize}
          page={0}
          renderItem={(set) => (
            <GalleryCard set={set} onExpand={() => setOpenSet(set)} />
          )}
        />

        {remaining > 0 && (
          <div className='mt-8 text-center'>
            <button
              type='button'
              onClick={() => setPageSize((prev) => prev + PAGE_SIZE)}
              className='border border-primary/40 px-6 py-2 font-mono text-xs uppercase tracking-wider text-primary/60 hover:border-primary hover:text-primary transition-colors'
            >
              Show more ({Math.min(PAGE_SIZE, remaining)})
            </button>
          </div>
        )}
      </div>

      <GalleryDialog
        set={openSet}
        open={openSet !== null}
        onOpenChange={(open) => {
          if (!open) setOpenSet(null);
        }}
      />
    </section>
  );
}
