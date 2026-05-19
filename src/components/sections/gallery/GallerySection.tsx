'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GreedyColumnLayout } from '@/components/layouts/GreedyColumnLayout';
import { GalleryCard } from '@/components/sections/gallery/GalleryCard';
import { GalleryDialog } from '@/components/sections/gallery/GalleryDialog';
import {
  type PhotoSet,
  photoSets,
} from '@/components/sections/gallery/photoSets';
import { Toggle } from '@/components/ui/toggle';
import { SECTION_IDS } from '@/constants/sections';
import { cn } from '@/lib/utils';

const PAGE_SIZE = 10;

function parseAspect(aspect: string): [number, number] {
  const [w, h] = aspect.split('/').map(Number);
  return [w, h];
}

export function GallerySection({ className }: { className?: string }) {
  const { t } = useTranslation('common');
  const ALL = t('gallery.allMaterials');

  const MATERIALS = [
    ALL,
    ...Array.from(new Set(photoSets.flatMap((s) => s.material))).map(
      (m) => m.charAt(0).toUpperCase() + m.slice(1),
    ),
  ];

  const [selectedMaterials, setSelectedMaterials] = useState<Set<string>>(new Set());
  const [openSet, setOpenSet] = useState<PhotoSet | null>(null);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);

  const isAll = selectedMaterials.size === 0;

  const filteredSets = photoSets.filter(
    (set) =>
      isAll ||
      set.material.some((m) =>
        selectedMaterials.has(m.charAt(0).toUpperCase() + m.slice(1)),
      ),
  );

  const remaining = filteredSets.length - pageSize;

  function toggle(material: string) {
    setPageSize(PAGE_SIZE);
    if (material === ALL) {
      setSelectedMaterials(new Set());
    } else {
      setSelectedMaterials((prev) => {
        const next = new Set(prev);
        if (next.has(material)) next.delete(material);
        else next.add(material);
        return next;
      });
    }
  }

  return (
    <section id={SECTION_IDS.gallery} className={cn('py-20', className)}>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-12 max-w-3xl border-l-2 border-primary pl-6'>
          <p className='mb-2 font-mono text-xs uppercase tracking-wider text-primary'>
            {t('gallery.eyebrow')}
          </p>
          <h2 className='mb-4 text-3xl font-semibold leading-tight tracking-tight'>
            {t('gallery.heading')}
          </h2>
        </div>

        <div className='mb-8 flex flex-wrap gap-2'>
          {MATERIALS.map((material) => (
            <Toggle
              key={material}
              pressed={material === ALL ? isAll : selectedMaterials.has(material)}
              onPressedChange={() => toggle(material)}
              variant='outline'
              className='font-mono text-xs uppercase tracking-wider border-foreground/30 text-foreground/70 hover:bg-transparent hover:border-primary hover:text-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary'
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
              className='border border-primary px-6 py-2 font-mono text-xs uppercase tracking-wider text-primary hover:border-primary hover:text-primary transition-colors'
            >
              {t('gallery.showMore', { count: Math.min(PAGE_SIZE, remaining) })}
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
