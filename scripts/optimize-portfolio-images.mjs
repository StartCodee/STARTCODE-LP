import sharp from "sharp";
import { glob } from "glob";
import fs from "fs/promises";
import path from "path";

const inputDir = "public/images";
const outDir = "public/images/optimized";
await fs.mkdir(outDir, { recursive: true });

const files = await glob(path.join(inputDir, "*.{png,jpg,jpeg,webp}"), { nodir: true });

// ukuran responsif aman untuk card + modal
const widths = [480, 800, 1200];

for (const file of files) {
  const base = path.parse(file).name; // nama tanpa ext

  for (const w of widths) {
    const outPath = path.join(outDir, `${base}-${w}.webp`);
    await sharp(file)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 72 }) // boleh adjust 65–80
      .toFile(outPath);

    console.log("wrote", outPath);
  }
}
