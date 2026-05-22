export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

const SMALL_WORDS = new Set([
  "a", "an", "and", "as", "at", "but", "by", "for", "in", "of", "on", "or", "the", "to", "vs", "with", "your", "you",
]);

const ACRONYMS = new Set([
  "EHR", "RCM", "PM", "AI", "API", "ROI", "AWS", "MACRA", "MIPS", "APMs", "MGMA",
  "COVID", "FQHC", "RPM", "CCM", "CPT", "ONC", "HIPAA", "OB", "GYN", "EMR",
  "GRS", "KPIs", "PDMP", "UDS", "HHS", "ASCENT", "HIMSS", "MDR", "TEFCA",
  "ENGAGE", "CTIO", "CEO", "CMO", "CIO", "CTO", "CSO", "ISO", "KLAS",
]);

export function humanizeSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w, i) => {
      const upper = w.toUpperCase();
      if (ACRONYMS.has(upper)) return upper;
      if (i > 0 && SMALL_WORDS.has(w.toLowerCase())) return w.toLowerCase();
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    })
    .join(" ");
}

export function titleFromPath(path: string): string {
  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return "Greenway Health";
  const last = segments[segments.length - 1];
  return humanizeSlug(decodeURIComponent(last));
}
