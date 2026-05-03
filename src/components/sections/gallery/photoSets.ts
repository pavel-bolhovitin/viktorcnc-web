import cncPartsMeta from '../../../../public/images/cnc-parts-meta.json';

type ImageMeta = { filename: string; width: number; height: number };

export type CncPartSetId = keyof typeof cncPartsMeta;

export type Material = 'aluminum' | 'steel' | 'plastic' | 'brass';

export type PhotoEntry = { src: string; alt: string };

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

const photoSetMap: Partial<Record<CncPartSetId, PhotoSet>> = {
  'cnc-part-set-1': {
    id: cncPartsMeta['cnc-part-set-1'].id as CncPartSetId,
    aspect: aspectMean(cncPartsMeta['cnc-part-set-1'].images),
    photos: cncPartsMeta['cnc-part-set-1'].images.map((img) => ({
      src: `/images/${img.filename}`,
      alt: `CNC machined part, set ${cncPartsMeta['cnc-part-set-1'].number}`,
    })),
    order: 0,
    material: ['aluminum'],
  },
  // 'cnc-part-set-2': cncPartsMeta['cnc-part-set-2'],
  // 'cnc-part-set-7': {},
  // 'cnc-part-set-10': {},
  // 'cnc-part-set-12': {},
};

export const photoSets = Object.values(photoSetMap);
