import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const inventoryPath = resolve(__dirname, "../src/data/sitemap-inventory.json");
const publicDir = resolve(__dirname, "../public");

const data = JSON.parse(readFileSync(inventoryPath, "utf8")) as { all: string[] };
const basePath = (process.env.SITE_BASE_PATH || process.env.BASE_PATH || "/greenway/").replace(/\/$/, "");

function resolveOrigin(): string {
  if (process.env.SITE_ORIGIN) return process.env.SITE_ORIGIN.replace(/\/$/, "");
  const domains = process.env.REPLIT_DOMAINS;
  if (domains) {
    const first = domains.split(",")[0]?.trim();
    if (first) return `https://${first}`;
  }
  if (process.env.REPLIT_DEPLOYMENT === "1" || process.env.NODE_ENV === "production") {
    throw new Error("SITE_ORIGIN (or REPLIT_DOMAINS) must be set for production sitemap generation.");
  }
  if (process.env.REPLIT_DEV_DOMAIN) return `https://${process.env.REPLIT_DEV_DOMAIN}`;
  throw new Error("SITE_ORIGIN env var is required to generate the sitemap.");
}
const origin = resolveOrigin();
const lastmod = new Date().toISOString().slice(0, 10);

const urls = data.all
  .map((p) => `${basePath}${p === "/" ? "/" : p}`)
  .map((u) => `  <url><loc>${origin}${u}</loc><lastmod>${lastmod}</lastmod></url>`)
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${origin}${basePath}/sitemap.xml
`;

mkdirSync(publicDir, { recursive: true });
writeFileSync(resolve(publicDir, "sitemap.xml"), sitemap);
writeFileSync(resolve(publicDir, "robots.txt"), robots);
console.log(`Wrote ${data.all.length} URLs to sitemap.xml and robots.txt`);
