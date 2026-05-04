import type { StaticImageData } from 'next/image';
import imgSet1Ex1 from '$/public/images/cnc-part-set-1-example-1.webp';
import imgSet1Ex2 from '$/public/images/cnc-part-set-1-example-2.webp';
import imgSet1Ex3 from '$/public/images/cnc-part-set-1-example-3.webp';
import imgSet2Ex1 from '$/public/images/cnc-part-set-2-example-1.webp';
import imgSet2Ex2 from '$/public/images/cnc-part-set-2-example-2.webp';
import imgSet3Ex1 from '$/public/images/cnc-part-set-3-example-1.webp';
import imgSet3Ex2 from '$/public/images/cnc-part-set-3-example-2.webp';
import imgSet3Ex3 from '$/public/images/cnc-part-set-3-example-3.webp';
import imgSet3Ex4 from '$/public/images/cnc-part-set-3-example-4.webp';
import imgSet3Ex5 from '$/public/images/cnc-part-set-3-example-5.webp';
import imgSet3Ex6 from '$/public/images/cnc-part-set-3-example-6.webp';
import imgSet4Ex1 from '$/public/images/cnc-part-set-4-example-1.webp';
import imgSet4Ex2 from '$/public/images/cnc-part-set-4-example-2.webp';
import imgSet5Ex1 from '$/public/images/cnc-part-set-5-example-1.webp';
import imgSet6Ex1 from '$/public/images/cnc-part-set-6-example-1.webp';
import imgSet7Ex1 from '$/public/images/cnc-part-set-7-example-1.webp';
import imgSet7Ex2 from '$/public/images/cnc-part-set-7-example-2.webp';
import imgSet8Ex1 from '$/public/images/cnc-part-set-8-example-1.webp';
import imgSet9Ex1 from '$/public/images/cnc-part-set-9-example-1.webp';
import imgSet9Ex2 from '$/public/images/cnc-part-set-9-example-2.webp';
import imgSet10Ex1 from '$/public/images/cnc-part-set-10-example-1.webp';
import imgSet10Ex2 from '$/public/images/cnc-part-set-10-example-2.webp';
import imgSet11Ex1 from '$/public/images/cnc-part-set-11-example-1.webp';
import imgSet11Ex2 from '$/public/images/cnc-part-set-11-example-2.webp';
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
  parts: number;
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
  parts: number = 1,
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
    parts,
  };
}

export const photoSets: PhotoSet[] = [
  makeSet('cnc-part-set-1', 0, ['aluminum'], [imgSet1Ex1, imgSet1Ex2, imgSet1Ex3]),
  makeSet('cnc-part-set-2', 1, ['steel'], [imgSet2Ex1, imgSet2Ex2]),
  makeSet('cnc-part-set-3', 2, ['aluminum'], [imgSet3Ex1, imgSet3Ex2, imgSet3Ex3, imgSet3Ex4, imgSet3Ex5, imgSet3Ex6], 3),
  makeSet('cnc-part-set-4', 3, ['aluminum'], [imgSet4Ex1, imgSet4Ex2]),
  makeSet('cnc-part-set-5', 4, ['aluminum'], [imgSet5Ex1]),
  makeSet('cnc-part-set-6', 5, ['aluminum'], [imgSet6Ex1]),
  makeSet('cnc-part-set-7', 6, ['plastic'], [imgSet7Ex1, imgSet7Ex2]),
  makeSet('cnc-part-set-8', 7, ['aluminum'], [imgSet8Ex1]),
  makeSet('cnc-part-set-9', 8, ['aluminum'], [imgSet9Ex1, imgSet9Ex2]),
  makeSet('cnc-part-set-10', 9, ['aluminum'], [imgSet10Ex1, imgSet10Ex2]),
  makeSet('cnc-part-set-11', 10, ['aluminum'], [imgSet11Ex1, imgSet11Ex2]),
  makeSet('cnc-part-set-12', 11, ['brass'], [imgSet12Ex1]),
];
