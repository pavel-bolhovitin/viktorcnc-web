import { GalleryCard, type PhotoSet } from '@/components/sections/GalleryCard';
import { cn } from '@/lib/utils';

const photoSets: PhotoSet[] = [
  {
    id: 'a',
    height: 280,
    photos: [
      { src: '/founder.jpg', alt: 'Workshop founder' },
      { src: '/turning-center.jpg', alt: 'CNC turning center' },
    ],
  },
  {
    id: 'b',
    height: 360,
    photos: [{ src: '/milling-center-1.jpg', alt: 'CNC milling center 1' }],
  },
  {
    id: 'c',
    height: 220,
    photos: [
      { src: '/milling-center-2.jpg', alt: 'CNC milling center 2' },
      { src: '/hero-bg.jpg', alt: 'Machine shop workshop' },
      { src: '/milling.png', alt: 'Milling operation' },
    ],
  },
  {
    id: 'd',
    height: 320,
    photos: [
      { src: '/turning.png', alt: 'Turning operation' },
      { src: '/cad.png', alt: 'CAD model' },
    ],
  },
  {
    id: 'e',
    height: 240,
    photos: [{ src: '/hero-bg.jpg', alt: 'Machine shop workshop' }],
  },
  {
    id: 'f',
    height: 380,
    photos: [
      { src: '/cad.png', alt: 'CAD model' },
      { src: '/founder.jpg', alt: 'Workshop founder' },
    ],
  },
  {
    id: 'g',
    height: 260,
    photos: [
      { src: '/milling.png', alt: 'Milling operation' },
      { src: '/milling-center-1.jpg', alt: 'CNC milling center 1' },
      { src: '/turning-center.jpg', alt: 'CNC turning center' },
    ],
  },
  {
    id: 'h',
    height: 340,
    photos: [{ src: '/turning-center.jpg', alt: 'CNC turning center' }],
  },
  {
    id: 'i',
    height: 200,
    photos: [
      { src: '/milling-center-2.jpg', alt: 'CNC milling center 2' },
      { src: '/turning.png', alt: 'Turning operation' },
    ],
  },
];

export function GallerySection({ className }: { className?: string }) {
  return (
    <section className={cn('py-20', className)}>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='mb-12 max-w-3xl border-l-2 border-primary pl-6'>
          <p className='mb-2 font-mono text-xs uppercase tracking-wider text-primary'>
            Work Gallery
          </p>
          <h2 className='mb-4 text-3xl font-semibold leading-tight tracking-tight'>
            Our Work
          </h2>
        </div>
        <div className='columns-1 gap-4 sm:columns-2 lg:columns-3'>
          {photoSets.map((set) => (
            <div key={set.id} className='mb-4 break-inside-avoid'>
              <GalleryCard set={set} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
