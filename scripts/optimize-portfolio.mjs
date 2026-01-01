import sharp from "sharp";
import fs from "fs/promises";

await fs.mkdir("public/images/optimized", { recursive: true });

// sesuaikan input path: public/images/bkad.webp (atau tempat kamu simpan)
const input = "public/images/bkad.webp";

const targets = [
  { w: 640, q: 70 },
  { w: 960, q: 70 },
  { w: 1280, q: 70 },
];

for (const t of targets) {
  await sharp(input)
    .resize({ width: t.w, withoutEnlargement: true })
    .webp({ quality: t.q })
    .toFile(`public/images/optimized/bkad-${t.w}.webp`);

  console.log("wrote", `public/images/optimized/bkad-${t.w}.webp`);
}
