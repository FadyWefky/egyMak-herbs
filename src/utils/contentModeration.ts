const URL_PATTERN = /https?:\/\//gi;

const LATIN_BLOCKLIST = [
  "viagra",
  "cialis",
  "casino",
  "lottery",
  "crypto airdrop",
  "click here now",
  "weight loss pill",
];

const ARABIC_BLOCKLIST = [
  "ربح سريع",
  "اضغط هنا",
  "جائزة كبرى",
  "تحويل فوري",
  "كسب المال",
];

function normalizeArabic(s: string): string {
  return s
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function hasExcessiveRepeatedChar(text: string): boolean {
  return /(.)\1{9,}/u.test(text);
}

function tooManyUrls(text: string): boolean {
  const m = text.match(URL_PATTERN);
  return (m?.length ?? 0) > 3;
}

function mostlyShouting(text: string): boolean {
  const letters = text.replace(/[^a-zA-Z\u0600-\u06FF]/g, "");
  if (letters.length < 24) return false;
  const upper = text.replace(/[^A-Z]/g, "").length;
  const latin = text.replace(/[^a-zA-Z]/g, "").length;
  return latin > 0 && upper / latin > 0.55;
}

export type ModerationResult = { ok: true } | { ok: false; reason: "spam" | "inappropriate" };

export function moderateContactText(text: string, maxLen = 4000): ModerationResult {
  const t = text.trim();
  if (t.length > maxLen) return { ok: false, reason: "spam" };
  if (hasExcessiveRepeatedChar(t)) return { ok: false, reason: "spam" };
  if (tooManyUrls(t)) return { ok: false, reason: "spam" };
  if (mostlyShouting(t)) return { ok: false, reason: "spam" };

  const lower = t.toLowerCase();
  for (const w of LATIN_BLOCKLIST) {
    if (lower.includes(w)) return { ok: false, reason: "inappropriate" };
  }

  const ar = normalizeArabic(t);
  for (const w of ARABIC_BLOCKLIST) {
    if (ar.includes(w)) return { ok: false, reason: "inappropriate" };
  }

  return { ok: true };
}
