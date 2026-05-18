// Generate PNG icons from icon.svg using sharp
// Run: node scripts/generate-icons.mjs
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const svg = readFileSync(join(root, "icon.svg"));

const targets = [
  { size: 192, out: "icons/icon-192.png" },
  { size: 512, out: "icons/icon-512.png" },
  { size: 180, out: "icons/apple-touch-icon.png" },
  { size: 32,  out: "icons/favicon-32.png" },
];

for (const { size, out } of targets) {
  await sharp(svg).resize(size, size).png().toFile(join(root, out));
  console.log(`✓ ${out} (${size}x${size})`);
}
