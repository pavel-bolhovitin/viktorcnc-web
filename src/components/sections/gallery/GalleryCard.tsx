'use client';

import Fade from 'embla-carousel-fade';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export type PhotoEntry = { src: string; alt: string };
export type PhotoSet = { id: string; height: number; photos: PhotoEntry[] };

export function GalleryCard({ set }: { set: PhotoSet }) {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);
  const count = set.photos.length;

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setActive(api.selectedScrollSnap());
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true, duration: 0 }}
      plugins={[Fade()]}
      className='group overflow-hidden'
      style={{ height: set.height }}
    >
      <CarouselContent className='ml-0 h-full'>
        {set.photos.map((photo) => (
          <CarouselItem key={photo.src} className='pl-0'>
            <div className='relative w-full' style={{ height: set.height }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                className='object-cover transition-transform duration-500 group-hover:scale-105'
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {count > 1 && (
        <>
          <div className='absolute bottom-0 left-0 right-0 flex justify-center'>
            <div className='flex gap-1.5 bg-black/15 px-2.5 py-1.5 backdrop-blur-sm'>
              {set.photos.map((p, i) => (
                <button
                  key={p.src}
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
            className='absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100'
          >
            <ChevronLeft className='h-5 w-5' />
          </button>
          <button
            type='button'
            onClick={() => api?.scrollNext()}
            className='absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100'
          >
            <ChevronRight className='h-5 w-5' />
          </button>
        </>
      )}
    </Carousel>
  );
}
