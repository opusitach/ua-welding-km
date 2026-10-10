// Generates optimized images from design/assets into public/images (WebP + JPG/PNG fallback),
// plus OG image and favicons. Runs automatically before `next build` (see package.json "prebuild").
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "design/assets";
const OUT = "public/images";
await mkdir(OUT, { recursive: true });

// Hero photo: 1122x1402 portrait source. Widths for srcset.
for (const w of [640, 960, 1122]) {
  const img = sharp(`${SRC}/hero-welder.webp`).resize({ width: w });
  await img.clone().webp({ quality: 78 }).toFile(`${OUT}/welder-${w}.webp`);
  await img.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(`${OUT}/welder-${w}.jpg`);
}

// Logo source has a baked-in near-black background. Key it out: alpha from brightness
// (black -> transparent), colors un-premultiplied so white/yellow stay crisp on any backdrop.
const { data, info } = await sharp(`${SRC}/logo.png`).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const rgba = Buffer.alloc(info.width * info.height * 4);
for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
  const max = Math.max(data[i], data[i + 1], data[i + 2]);
  const a = Math.min(1, Math.max(0, (max - 40) / (200 - 40))); // <=40 fully transparent, >=200 opaque
  for (let c = 0; c < 3; c++) rgba[j + c] = a > 0 ? Math.min(255, Math.round(data[i + c] / Math.max(a, max / 255))) : 0;
  rgba[j + 3] = Math.round(a * 255);
}
const logoAlpha = await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();

// Logo: 1364x430 source, displayed at 52px (header) / 72px (footer) height -> render 1x/2x/3x.
for (const h of [104, 156, 216]) {
  const img = sharp(logoAlpha).resize({ height: h });
  await img.clone().webp({ quality: 90 }).toFile(`${OUT}/logo-${h}.webp`);
  await img.clone().png({ compressionLevel: 9 }).toFile(`${OUT}/logo-${h}.png`);
}

// "UA" mark (top-left part of the logo) -> favicons via Next file conventions.
const mark = sharp(`${SRC}/logo.png`)
  .extract({ left: 0, top: 0, width: 560, height: 270 })
  .resize(512, 512, { fit: "contain", background: "#0d0f0e" })
  .flatten({ background: "#0d0f0e" });
await mark.clone().png().toFile("src/app/icon.png");
await mark.clone().resize(180, 180).png().toFile("src/app/apple-icon.png");

// Open Graph image 1200x630: hero photo + logo.
const logoOg = await sharp(`${SRC}/logo.png`).resize({ width: 520 }).toBuffer();
await sharp(`${SRC}/hero-welder.webp`)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .modulate({ brightness: 0.55 })
  .composite([{ input: logoOg, left: 60, top: 60 }])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(`${OUT}/og.jpg`);

console.log("images optimized");
