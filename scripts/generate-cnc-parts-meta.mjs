import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { imageSize } from 'image-size';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = join(__dirname, '..', 'public', 'images');
const OUTPUT_FILE = join(IMAGES_DIR, 'cnc-parts-meta.json');

const SET_PATTERN = /^(cnc-part-set-(\d+))-/;

const files = readdirSync(IMAGES_DIR)
  .filter(f => SET_PATTERN.test(f) && /\.webp$/i.test(f))
  .sort();

const setsMap = new Map();
for (const filename of files) {
  const match = filename.match(SET_PATTERN);
  const setId = match[1];
  const buffer = readFileSync(join(IMAGES_DIR, filename));
  const { width, height } = imageSize(buffer);

  if (!setsMap.has(setId)) setsMap.set(setId, { number: Number(match[2]), images: [] });
  setsMap.get(setId).images.push({ filename, width, height });
}

const result = Array.from(setsMap.entries()).map(([id, { number, images }]) => ({
  id,
  number,
  images,
}));

writeFileSync(OUTPUT_FILE, JSON.stringify(result, null, 2));
