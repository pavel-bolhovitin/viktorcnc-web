import cncPartsMeta from '../../../../public/images/cnc-parts-meta.json';

export type CncPartSetId = keyof typeof cncPartsMeta;
export type Material = 'aluminum' | 'steel' | 'plastic' | 'brass';
export type PhotoEntry = { src: string; width: number; height: number; alt: string };

export type PhotoSet = {
  id: CncPartSetId;
  aspect: string;
  photos: PhotoEntry[];
  order: number;
  material: Material[];
  isMultiPart: boolean;
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
  exampleNums: number[],
  isMultiPart: boolean = false,
): PhotoSet {
  const meta = cncPartsMeta[id];
  const photos: PhotoEntry[] = exampleNums.map((n) => {
    const filename = `${id}-example-${n}.webp`;
    const imgMeta = meta.images.find((i) => i.filename === filename);
    if (!imgMeta) throw new Error(`Missing meta for ${filename}`);
    return {
      src: `/images/${filename}`,
      width: imgMeta.width,
      height: imgMeta.height,
      alt: `CNC machined part, set ${meta.number}`,
    };
  });
  return {
    id,
    aspect: aspectMean(meta.images),
    photos,
    order,
    material,
    isMultiPart,
  };
}

export const photoSets: PhotoSet[] = [
  makeSet('cnc-part-set-1', 1, ['aluminum'], [1, 2, 3]),
  makeSet('cnc-part-set-2', 2, ['steel'], [1, 2]),
  makeSet('cnc-part-set-3', 3, ['aluminum'], [1, 2, 3, 4, 5, 6], true),
  makeSet('cnc-part-set-4', 4, ['aluminum'], [1, 2]),
  makeSet('cnc-part-set-5', 5, ['aluminum'], [1]),
  makeSet('cnc-part-set-6', 6, ['aluminum'], [1]),
  makeSet('cnc-part-set-7', 7, ['plastic'], [1, 2]),
  makeSet('cnc-part-set-8', 8, ['aluminum'], [1], true),
  makeSet('cnc-part-set-9', 9, ['aluminum'], [1, 2]),
  makeSet('cnc-part-set-10', 10, ['aluminum'], [1, 2]),
  makeSet('cnc-part-set-11', 11, ['aluminum'], [1, 2]),
  makeSet('cnc-part-set-12', 12, ['brass'], [1]),
  makeSet('cnc-part-set-13', 13, ['brass', 'plastic', 'steel'], [1, 2, 3], true),
  makeSet('cnc-part-set-14', 14, ['aluminum'], [1], true),
  makeSet('cnc-part-set-15', 15, ['aluminum'], [1, 2]),
  makeSet('cnc-part-set-16', 16, ['steel'], [1], true),
  makeSet('cnc-part-set-17', 17, ['aluminum'], [1, 2], true),
  makeSet('cnc-part-set-18', 18, ['aluminum'], [1, 2], true),
  makeSet('cnc-part-set-20', 20, ['aluminum'], [1], true),
  makeSet('cnc-part-set-21', 21, ['aluminum'], [1, 2]),
  makeSet('cnc-part-set-23', 23, ['aluminum'], [1, 2]),
  makeSet('cnc-part-set-24', 24, ['plastic'], [1, 2], true),
  makeSet('cnc-part-set-25', 25, ['aluminum'], [1]),
  makeSet('cnc-part-set-26', 26, ['plastic'], [1, 2, 3], true),
  makeSet('cnc-part-set-29', 29, ['plastic'], [1], true),
  makeSet('cnc-part-set-30', 30, ['aluminum', 'steel'], [1], true),
  makeSet('cnc-part-set-33', 33, ['aluminum'], [1, 2], true),
  makeSet('cnc-part-set-34', 34, ['aluminum'], [1, 2]),
  makeSet('cnc-part-set-35', 35, ['plastic'], [1, 2, 3]),
  makeSet('cnc-part-set-36', 36, ['plastic'], [1]),
  makeSet('cnc-part-set-37', 37, ['plastic'], [1]),
  makeSet('cnc-part-set-38', 38, ['aluminum'], [1, 2]),
  makeSet('cnc-part-set-39', 39, ['aluminum'], [1]),
  makeSet('cnc-part-set-40', 40, ['aluminum'], [1, 2]),
  makeSet('cnc-part-set-41', 41, ['aluminum'], [1, 2]),
  makeSet('cnc-part-set-42', 42, ['aluminum'], [1, 2]),
  makeSet('cnc-part-set-43', 43, ['aluminum'], [1, 2, 3]),
];
