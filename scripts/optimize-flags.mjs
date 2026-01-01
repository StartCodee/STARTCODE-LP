import sharp from "sharp";
import { glob } from "glob";
import fs from "fs/promises";
import path from "path";

const inputDir = "public/assets/flags";
const outDir = "public/assets/flags/optimized";
await fs.mkdir(outDir, { recursive: true });

const files = await glob(path.join(inputDir, "*.{png,jpg,jpeg,webp}"), { nodir: true });

// 30px UI -> sediakan 30 dan 60 (2x)
const sizes = [30, 60];

for (const file of files) {
  const base = path.parse(file).name;

  for (const s of sizes) {
    const outPath = path.join(outDir, `${base}-${s}.png`);

    await sharp(file)
      .resize(s, s, { fit: "cover", position: "centre" }) // jadi kotak beneran
      .png({ compressionLevel: 9 })
      .toFile(outPath);

    console.log("wrote", outPath);
  }
}
