import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { imageSize } from 'image-size';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = join(__dirname, '..', 'public', 'images');
const OUTPUT_FILE = join(IMAGES_DIR, 'cnc-parts-meta.json');

const SET_PATTERN = /^(cnc-part-set-(\d+))-/;

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function toAspect(width, height) {
  const d = gcd(Math.round(width), Math.round(height));
  return `${Math.round(width) / d}:${Math.round(height) / d}`;
}

const files = readdirSync(IMAGES_DIR)
  .filter(f => SET_PATTERN.test(f) && /\.webp$/i.test(f))
  .sort();

// Group by set
const setsMap = new Map();
for (const filename of files) {
  const match = filename.match(SET_PATTERN);
  const setId = match[1];
  const buffer = readFileSync(join(IMAGES_DIR, filename));
  const { width, height } = imageSize(buffer);
  const aspect = toAspect(width, height);

  if (!setsMap.has(setId)) setsMap.set(setId, []);
  setsMap.get(setId).push({ filename, width, height, aspect });
}

function aspectMean(images) {
  const avgW = images.reduce((s, i) => s + i.width, 0) / images.length;
  const avgH = images.reduce((s, i) => s + i.height, 0) / images.length;
  return toAspect(avgW, avgH);
}

function aspectMedian(images) {
  const ratios = images.map(i => i.width / i.height).sort((a, b) => a - b);
  const mid = Math.floor(ratios.length / 2);
  const ratio = ratios.length % 2 === 1
    ? ratios[mid]
    : (ratios[mid - 1] + ratios[mid]) / 2;
  // Convert float ratio to fraction via reference height 1000
  return toAspect(Math.round(ratio * 1000), 1000);
}

function aspectDominant(images) {
  const freq = new Map();
  for (const img of images) {
    freq.set(img.aspect, (freq.get(img.aspect) ?? 0) + 1);
  }
  return [...freq.entries()].sort((a, b) => b[1] - a[1])[0][0];
}

const result = Array.from(setsMap.entries()).map(([id, images]) => {
  return {
    id,
    aspectMean: aspectMean(images),
    aspectMedian: aspectMedian(images),
    aspectDominant: aspectDominant(images),
    images,
  };
});

writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));

console.log(`Processed ${files.length} images in ${result.length} sets → public/images/cnc-parts-meta.json`);
for (const set of result) {
  console.log(`  ${set.id}  mean=${set.aspectMean}  median=${set.aspectMedian}  dominant=${set.aspectDominant}`);
  for (const img of set.images) {
    console.log(`    ${img.filename}: ${img.width}×${img.height} (${img.aspect})`);
  }
}
