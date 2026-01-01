import sharp from "sharp";
import fs from "fs/promises";

await fs.mkdir("public/assets/optimized", { recursive: true });

await sharp("public/assets/scode.webp")
  .resize(64, 64, { fit: "cover" })
  .webp({ quality: 75 })
  .toFile("public/assets/optimized/scode-64.webp");

await sharp("public/assets/scode.webp")
  .resize(112, 112, { fit: "cover" })
  .webp({ quality: 75 })
  .toFile("public/assets/optimized/scode-112.webp");

console.log("done");
