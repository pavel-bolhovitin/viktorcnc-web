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

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function aspectMean(images: { width: number; height: number }[]): string {
  const avgW = images.reduce((s, i) => s + i.width, 0) / images.length;
  const avgH = images.reduce((s, i) => s + i.height, 0) / images.length;
  const d = gcd(Math.round(avgW), Math.round(avgH));
  return `${Math.round(avgW) / d}/${Math.round(avgH) / d}`;
}

function makeSet(
  id: CncPartSetId,
  order: number,
  material: Material[],
  images: StaticImageData[],
): PhotoSet {
  const meta = cncPartsMeta[id];
  return {
    id,
    aspect: aspectMean(meta.images),
    photos: images.map((src) => ({
      src,
      alt: `CNC machined part, set ${meta.number}`,
    })),
    order,
    material,
  };
}

export const photoSets: PhotoSet[] = [
  makeSet(
    'cnc-part-set-1',
    0,
    ['aluminum'],
    [imgSet1Ex1, imgSet1Ex2, imgSet1Ex3],
  ),
  makeSet('cnc-part-set-2', 1, ['steel'], [imgSet2Ex1, imgSet2Ex2]),
  makeSet('cnc-part-set-7', 2, ['plastic'], [imgSet7Ex1, imgSet7Ex2]),
  makeSet('cnc-part-set-10', 3, ['aluminum'], [imgSet10Ex1, imgSet10Ex2]),
  makeSet('cnc-part-set-12', 4, ['brass'], [imgSet12Ex1]),
];
