import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { glob } from "glob";

const ogDir = path.resolve(process.cwd(), "public", "og");
const patterns = [`${ogDir}/*.png`];

const run = async () => {
  const files = (await Promise.all(patterns.map((p) => glob(p)))).flat();

  for (const file of files) {
    const base = path.basename(file, ".png");
    const buf = await fs.readFile(file);

    const pngOptim = await sharp(buf)
      .png({ quality: 80, compressionLevel: 9, palette: true })
      .toBuffer();

    await fs.writeFile(file, pngOptim);

    const webpOut = path.join(ogDir, `${base}.webp`);
    const webpBuf = await sharp(pngOptim).webp({ quality: 82 }).toBuffer();
    await fs.writeFile(webpOut, webpBuf);

    console.log(`✓ Optimized: ${path.basename(file)}  |  + ${path.basename(webpOut)}`);
  }
};

run().catch((e) => {
  console.error("optimize-og failed:", e);
  process.exit(1);
});
