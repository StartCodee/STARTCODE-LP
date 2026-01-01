import sharp from "sharp";
import { glob } from "glob";
import fs from "fs/promises";
import path from "path";

const inputDir = "public/clients";              // sesuaikan kalau beda
const outDir = "public/clients/optimized";
await fs.mkdir(outDir, { recursive: true });

const files = await glob(path.join(inputDir, "*.{png,jpg,jpeg,webp}"), { nodir: true });

const sizes = [96, 128]; // 1x & 2x untuk logo tampil ~84px

for (const file of files) {
  const base = path.parse(file).name;

  for (const s of sizes) {
    const outPath = path.join(outDir, `${base}-${s}.webp`);

    await sharp(file)
      .resize(s, s, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 70 }) // coba 60–80
      .toFile(outPath);

    console.log("wrote", outPath);
  }
}
