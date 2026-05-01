'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export type PhotoEntry = { src: string; alt: string };
export type PhotoSet = { id: string; height: number; photos: PhotoEntry[] };

const TWEEN_FACTOR_BASE = 0.15;

export function GalleryCard({ set }: { set: PhotoSet }) {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);
  const count = set.photos.length;
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: NonNullable<CarouselApi>) => {
    tweenNodes.current = emblaApi
      .slideNodes()
      .map((node) => node.querySelector('.parallax-layer') as HTMLElement);
  }, []);

  const setTweenFactor = useCallback((emblaApi: NonNullable<CarouselApi>) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenParallax = useCallback((emblaApi: NonNullable<CarouselApi>) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    emblaApi.scrollSnapList().forEach((scrollSnap: number, index: number) => {
      let diffToTarget = scrollSnap - scrollProgress;
      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
      const node = tweenNodes.current[index];
      if (node) node.style.transform = `translateX(${translate}%)`;
    });
  }, []);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setActive(api.selectedScrollSnap());
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    setTweenNodes(api);
    setTweenFactor(api);
    tweenParallax(api);
    api.on('reInit', setTweenNodes);
    api.on('reInit', setTweenFactor);
    api.on('reInit', tweenParallax);
    api.on('scroll', tweenParallax);
    return () => {
      api.off('reInit', setTweenNodes);
      api.off('reInit', setTweenFactor);
      api.off('reInit', tweenParallax);
      api.off('scroll', tweenParallax);
    };
  }, [api, setTweenNodes, setTweenFactor, tweenParallax]);

  return (
    <Carousel setApi={setApi} opts={{ loop: true }} className='group overflow-hidden'>
      <CarouselContent className='ml-0'>
        {set.photos.map((photo) => (
          <CarouselItem key={photo.src} className='pl-0'>
            <div className='w-full overflow-hidden' style={{ height: set.height }}>
              <div
                className='parallax-layer relative h-full'
                style={{ width: 'calc(100% + 3rem)', marginLeft: '-1.5rem' }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  className='object-cover'
                />
              </div>
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
