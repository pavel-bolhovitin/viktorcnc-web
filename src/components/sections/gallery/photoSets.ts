import type { StaticImageData } from 'next/image';
import imgSet1Ex1 from '$/public/images/cnc-part-set-1-example-1.webp';
import imgSet1Ex2 from '$/public/images/cnc-part-set-1-example-2.webp';
import imgSet1Ex3 from '$/public/images/cnc-part-set-1-example-3.webp';
import imgSet2Ex1 from '$/public/images/cnc-part-set-2-example-1.webp';
import imgSet2Ex2 from '$/public/images/cnc-part-set-2-example-2.webp';
import imgSet7Ex1 from '$/public/images/cnc-part-set-7-example-1.webp';
import imgSet7Ex2 from '$/public/images/cnc-part-set-7-example-2.webp';
import imgSet10Ex1 from '$/public/images/cnc-part-set-10-example-1.webp';
import imgSet10Ex2 from '$/public/images/cnc-part-set-10-example-2.webp';
import imgSet12Ex1 from '$/public/images/cnc-part-set-12-example-1.webp';
import cncPartsMeta from '$/public/images/cnc-parts-meta.json';

type ImageMeta = { filename: string; width: number; height: number };

export type CncPartSetId = keyof typeof cncPartsMeta;

export type Material = 'aluminum' | 'steel' | 'plastic' | 'brass';

export type PhotoEntry = { src: StaticImageData; alt: string };

export type PhotoSet = {
  id: CncPartSetId;
  aspect: string;
  photos: PhotoEntry[];
  order: number;
  material: Material[];
};

const imageMap: Record<string, StaticImageData> = {
  'cnc-part-set-1-example-1.webp': imgSet1Ex1,
  'cnc-part-set-1-example-2.webp': imgSet1Ex2,
  'cnc-part-set-1-example-3.webp': imgSet1Ex3,
  'cnc-part-set-10-example-1.webp': imgSet10Ex1,
  'cnc-part-set-10-example-2.webp': imgSet10Ex2,
  'cnc-part-set-12-example-1.webp': imgSet12Ex1,
  'cnc-part-set-2-example-1.webp': imgSet2Ex1,
  'cnc-part-set-2-example-2.webp': imgSet2Ex2,
  'cnc-part-set-7-example-1.webp': imgSet7Ex1,
  'cnc-part-set-7-example-2.webp': imgSet7Ex2,
};

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function toAspect(w: number, h: number): string {
  const rw = Math.round(w);
  const rh = Math.round(h);
  const d = gcd(rw, rh);
  return `${rw / d}/${rh / d}`;
}

function aspectMean(images: ImageMeta[]): string {
  const avgW = images.reduce((s, i) => s + i.width, 0) / images.length;
  const avgH = images.reduce((s, i) => s + i.height, 0) / images.length;
  return toAspect(avgW, avgH);
}

function makeSet(
  id: CncPartSetId,
  order: number,
  material: Material[],
): PhotoSet {
  const meta = cncPartsMeta[id];
  return {
    id,
    aspect: aspectMean(meta.images),
    photos: meta.images.flatMap((img) => {
      const src = imageMap[img.filename];
      if (!src) return [];
      return [{ src, alt: `CNC machined part, set ${meta.number}` }];
    }),
    order,
    material,
  };
}

const photoSetMap: Partial<Record<CncPartSetId, PhotoSet>> = {
  'cnc-part-set-1': makeSet('cnc-part-set-1', 0, ['aluminum']),
  'cnc-part-set-2': makeSet('cnc-part-set-2', 1, ['steel']),
  'cnc-part-set-7': makeSet('cnc-part-set-7', 2, ['plastic']),
  'cnc-part-set-10': makeSet('cnc-part-set-10', 3, ['aluminum']),
  'cnc-part-set-12': makeSet('cnc-part-set-12', 4, ['brass']),
};

export const photoSets = Object.values(photoSetMap).sort(
  (a, b) => a.order - b.order,
);
