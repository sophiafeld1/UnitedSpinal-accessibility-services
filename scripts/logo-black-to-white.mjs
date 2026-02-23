/**
 * Generates a dark-background version of the logo by replacing black pixels with white.
 * Usage: node scripts/logo-black-to-white.mjs
 * Input: public/images/United-Spinal-Logo-Black.png
 * Output: public/images/United-Spinal-Logo-White.png (for use on dark header)
 */

import sharp from "sharp";
import { readFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const inputPath = join(root, "public/images/United-Spinal-Logo-Black.png");
const outputPath = join(root, "public/images/United-Spinal-Logo-White.png");

const BLACK_THRESHOLD = 45; // pixels with r,g,b all below this become white

async function main() {
  if (!existsSync(inputPath)) {
    console.error("Input not found:", inputPath);
    process.exit(1);
  }

  const input = readFileSync(inputPath);
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const pixels = new Uint8ClampedArray(data.buffer);

  for (let i = 0; i < pixels.length; i += channels) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = channels === 4 ? pixels[i + 3] : 255;
    if (
      r <= BLACK_THRESHOLD &&
      g <= BLACK_THRESHOLD &&
      b <= BLACK_THRESHOLD &&
      a > 0
    ) {
      pixels[i] = 255;
      pixels[i + 1] = 255;
      pixels[i + 2] = 255;
    }
  }

  await sharp(pixels, { raw: { width, height, channels } })
    .png()
    .toFile(outputPath);

  console.log("Written:", outputPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
