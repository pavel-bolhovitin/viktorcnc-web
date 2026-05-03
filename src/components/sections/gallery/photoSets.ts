import cncPartsMeta from '../../../../public/images/cnc-parts-meta.json';
import type { PhotoSet } from './GalleryCard';

type ImageMeta = { filename: string; width: number; height: number };

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

function aspectMedian(images: ImageMeta[]): string {
  const ratios = images.map((i) => i.width / i.height).sort((a, b) => a - b);
  const mid = Math.floor(ratios.length / 2);
  const ratio =
    ratios.length % 2 === 1 ? ratios[mid] : (ratios[mid - 1] + ratios[mid]) / 2;
  return toAspect(Math.round(ratio * 1000), 1000);
}

export const photoSets: PhotoSet[] = cncPartsMeta.map((set) => ({
  id: set.id,
  aspect: aspectMean(set.images),
  photos: set.images.map((img) => ({
    src: `/images/${img.filename}`,
    alt: `CNC machined part, set ${set.number}`,
  })),
}));
