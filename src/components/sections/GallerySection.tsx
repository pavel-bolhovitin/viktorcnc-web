'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

type PhotoEntry = { src: string; alt: string };
type PhotoSet = { id: string; photos: PhotoEntry[] };

const photoSets: PhotoSet[] = [
  {
    id: 'a',
    photos: [
      { src: '/founder.jpg', alt: 'Workshop founder' },
      { src: '/turning-center.jpg', alt: 'CNC turning center' },
    ],
  },
  {
    id: 'b',
    photos: [{ src: '/milling-center-1.jpg', alt: 'CNC milling center 1' }],
  },
  {
    id: 'c',
    photos: [
      { src: '/milling-center-2.jpg', alt: 'CNC milling center 2' },
      { src: '/hero-bg.jpg', alt: 'Machine shop workshop' },
      { src: '/milling.png', alt: 'Milling operation' },
    ],
  },
  {
    id: 'd',
    photos: [
      { src: '/turning.png', alt: 'Turning operation' },
      { src: '/cad.png', alt: 'CAD model' },
    ],
  },
  {
    id: 'e',
    photos: [{ src: '/hero-bg.jpg', alt: 'Machine shop workshop' }],
  },
  {
    id: 'f',
    photos: [
      { src: '/cad.png', alt: 'CAD model' },
      { src: '/founder.jpg', alt: 'Workshop founder' },
    ],
  },
  {
    id: 'g',
    photos: [
      { src: '/milling.png', alt: 'Milling operation' },
      { src: '/milling-center-1.jpg', alt: 'CNC milling center 1' },
      { src: '/turning-center.jpg', alt: 'CNC turning center' },
    ],
  },
  {
    id: 'h',
    photos: [{ src: '/turning-center.jpg', alt: 'CNC turning center' }],
  },
  {
    id: 'i',
    photos: [
      { src: '/milling-center-2.jpg', alt: 'CNC milling center 2' },
      { src: '/turning.png', alt: 'Turning operation' },
    ],
  },
];

function GalleryCard({
  set,
  className,
  mode = 'fill',
}: {
  set: PhotoSet;
  className?: string;
  mode?: 'fill' | 'auto';
}) {
  const [active, setActive] = useState(0);
  const photo = set.photos[active];
  const count = set.photos.length;

  const prev = () => setActive((active - 1 + count) % count);
  const next = () => setActive((active + 1) % count);

  const dots = count > 1 && (
    <div className='absolute bottom-3 left-0 right-0 flex justify-center'>
      <div className='flex gap-1.5 rounded-lg bg-black/15 px-2.5 py-1.5 backdrop-blur-sm'>
        {set.photos.map((p, i) => (
          <button
            key={p.src}
            type='button'
            onClick={() => setActive(i)}
            className={`h-1.25 rounded-xs transition-all duration-200 ${i === active ? 'w-3 bg-white' : 'w-1.25 bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );

  const arrows = count > 1 && (
    <>
      <button
        type='button'
        onClick={prev}
        className='absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100'
      >
        <ChevronLeft className='h-5 w-5' />
      </button>
      <button
        type='button'
        onClick={next}
        className='absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100'
      >
        <ChevronRight className='h-5 w-5' />
      </button>
    </>
  );

  if (mode === 'auto') {
    return (
      <div className='group relative overflow-hidden rounded-sm'>
        <Image
          src={photo.src}
          alt={photo.alt}
          width={0}
          height={0}
          sizes='33vw'
          className='h-auto w-full transition-transform duration-350 group-hover:scale-105'
        />
        {dots}
        {arrows}
      </div>
    );
  }

  return (
    <div className={className}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes='33vw'
        className='object-cover'
      />
      {dots}
    </div>
  );
}

export function GallerySection() {
  return (
    <section className='bg-white py-20'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-12 max-w-3xl border-l-2 border-primary pl-6'>
          <p className='mb-2 font-mono text-xs uppercase tracking-wider text-primary'>
            Work Gallery
          </p>
          <h2 className='mb-4 text-3xl font-semibold leading-tight tracking-tight'>
            Our Work
          </h2>
        </div>
        <div className='columns-3 gap-4'>
          {photoSets.map((set) => (
            <div key={set.id} className='mb-4 break-inside-avoid'>
              <GalleryCard set={set} mode='auto' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
