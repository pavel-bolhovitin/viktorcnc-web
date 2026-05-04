'use client';

import Fade from 'embla-carousel-fade';
import { ChevronLeft, ChevronRight, Shapes, X } from 'lucide-react';
import Image from 'next-export-optimize-images/image';
import { useEffect, useState } from 'react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import type { PhotoSet } from './photoSets';

export function GalleryDialog({
  set,
  open,
  onOpenChange,
}: {
  set: PhotoSet | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setActive(api.selectedScrollSnap());
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  if (!set) return null;

  const count = set.photos.length;
  const materialLabel = set.material
    .map((m) => m.charAt(0).toUpperCase() + m.slice(1))
    .join(', ');

  const [aw, ah] = set.aspect.split('/').map(Number);
  const ratio = aw / ah;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className='p-0 overflow-hidden bg-black ring-0 rounded-xl gap-0 sm:max-w-none'
        style={{
          // fill whichever dimension binds first (width or height), maintain aspect ratio
          width: `min(calc(100vw - 2rem), calc((100vh - 2rem) * ${ratio}))`,
          aspectRatio: set.aspect,
        }}
      >
        <DialogTitle className='sr-only'>CNC part — {materialLabel}</DialogTitle>

        <Carousel
          key={set.id}
          setApi={setApi}
          opts={{ loop: true, duration: 0 }}
          plugins={[Fade()]}
          className="relative w-full h-full *:data-[slot='carousel-content']:h-full"
        >
          <div className='absolute top-3 left-3 z-20 flex flex-col gap-1'>
            <div className='rounded-sm bg-black/50 px-2 py-0.5 font-mono text-xs uppercase text-white backdrop-blur-sm'>
              {materialLabel}
            </div>
            {set.isMultiPart && (
              <div className='flex items-center gap-1 rounded-sm bg-black/50 px-2 py-0.5 font-mono text-xs uppercase text-white backdrop-blur-sm'>
                <Shapes className='h-3 w-3' />
                Multi-part
              </div>
            )}
          </div>

          <button
            type='button'
            onClick={() => onOpenChange(false)}
            className='absolute top-3 right-3 z-20 bg-black/50 p-1.5 text-white backdrop-blur-sm rounded-sm transition-colors hover:bg-black/70'
          >
            <X className='h-4 w-4' />
            <span className='sr-only'>Close</span>
          </button>

          <CarouselContent className='ml-0 h-full'>
            {set.photos.map((photo) => (
              <CarouselItem key={photo.src.src} className='pl-0 h-full'>
                <div className='relative w-full h-full'>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    placeholder='blur'
                    sizes='(max-width: 1024px) 100vw, 896px'
                    className='object-contain'
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {count > 1 && (
            <>
              <div className='absolute bottom-3 left-0 right-0 flex justify-center z-10'>
                <div className='flex gap-1 bg-black/40 px-2 py-1.5 backdrop-blur-sm'>
                  {set.photos.map((p, i) => (
                    <button
                      key={p.src.src}
                      type='button'
                      onClick={() => api?.scrollTo(i)}
                      className={`h-1.25 transition-all duration-200 ${i === active ? 'w-3 bg-white' : 'w-1.25 bg-white/60'}`}
                    />
                  ))}
                </div>
              </div>
              <button
                type='button'
                onClick={() => api?.scrollPrev()}
                className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 p-3 text-white backdrop-blur-sm hover:bg-black/60 transition-colors'
              >
                <ChevronLeft className='h-6 w-6' />
              </button>
              <button
                type='button'
                onClick={() => api?.scrollNext()}
                className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 p-3 text-white backdrop-blur-sm hover:bg-black/60 transition-colors'
              >
                <ChevronRight className='h-6 w-6' />
              </button>
            </>
          )}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
