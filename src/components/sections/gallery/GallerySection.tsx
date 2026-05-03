import { GalleryCard } from '@/components/sections/gallery/GalleryCard';
import { photoSets } from '@/components/sections/gallery/photoSets';
import { cn } from '@/lib/utils';

export function GallerySection({ className }: { className?: string }) {
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
