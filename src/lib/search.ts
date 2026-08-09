import { type Capability, categories } from "../data/capabilities";

// Common filler words that carry no search signal on their own — stripped
// before matching so a natural-language query like "does my agent need to
// approve this" doesn't fail just because "does" and "this" appear nowhere
// in the data.
const STOPWORDS = new Set([
  "a", "an", "the", "my", "can", "does", "do", "is", "it", "to", "for",
  "of", "in", "on", "at", "with", "and", "or", "this", "that", "i",
  "want", "need", "get", "use", "using", "how", "what", "when", "will",
  "agent", "agents", "please", "some",
]);

// Maps a word a person might reasonably type to the terms actually used in
// the data — covers typos, alternate phrasing, and near-synonyms so search
// doesn't depend on hitting the exact word used in a capability's copy.
const SYNONYMS: Record<string, string[]> = {
  reoccurring: ["recurring"],
  reccuring: ["recurring"],
  recuring: ["recurring"],
  subscription: ["recurring", "automation"],
  subscriptions: ["recurring", "automation"],
  flight: ["travel", "booking"],
  flights: ["travel", "booking"],
  airline: ["travel"],
  book: ["booking", "reservation"],
  booking: ["travel", "reservation"],
  restaurant: ["dining", "reservation"],
  reservation: ["dining", "booking"],
  buy: ["purchase", "purchases"],
  purchase: ["shopping", "buy"],
  purchases: ["shopping", "buy"],
  shop: ["shopping"],
  api: ["apis", "pay-per-use"],
  apis: ["api", "pay-per-use"],
  limit: ["policy", "policies", "cap"],
  limits: ["policy", "policies", "caps"],
  revoke: ["revocable", "access"],
  key: ["mpc", "security"],
  keys: ["mpc", "security"],
  swap: ["swaps", "trading"],
  swaps: ["swap", "trading"],
  dca: ["dollar-cost", "averaging"],
  rebalance: ["rebalancing", "portfolio"],
  gas: ["fuel", "maintenance"],
  lend: ["lending", "defi"],
  lending: ["defi", "yield"],
  stake: ["staking", "defi"],
  staking: ["defi", "yield"],
  yield: ["earn", "defi", "lending"],
  safe: ["security", "non-custodial"],
  custody: ["non-custodial"],
  approve: ["approval"],
  approved: ["approval"],
  auto: ["automation", "autonomous"],
  automatic: ["automation", "autonomous"],
  bridge: ["bridging"],
  card: ["cards"],
};

function buildHaystack(cap: Capability): string {
  const categoryName = categories.find((c) => c.id === cap.category)?.name ?? "";
  return [
    cap.title,
    categoryName,
    cap.description,
    cap.tags.join(" "),
    cap.example?.join(" ") ?? "",
    cap.howItWorks.join(" "),
    cap.note ?? "",
  ]
    .join(" ")
    .toLowerCase();
}

function meaningfulTerms(query: string): string[] {
  const words = query
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.replace(/[?.,!]/g, ""))
    .filter(Boolean);

  const filtered = words.filter((w) => !STOPWORDS.has(w));
  // If every word was a stopword, fall back to the raw words rather than
  // matching nothing.
  return filtered.length > 0 ? filtered : words;
}

function termVariants(term: string): string[] {
  const variants = [term, ...(SYNONYMS[term] ?? [])];
  // Basic stemming: also try the term without a trailing "s" or "ing".
  if (term.endsWith("s") && term.length > 3) variants.push(term.slice(0, -1));
  if (term.endsWith("ing") && term.length > 5) variants.push(term.slice(0, -3));
  return variants;
}

export function searchCapabilities(all: Capability[], rawQuery: string): Capability[] {
  const query = rawQuery.trim();
  if (!query) return all;

  const terms = meaningfulTerms(query);

  const scored = all
    .map((cap) => {
      const haystack = buildHaystack(cap);
      const matchedTerms = terms.filter((term) => termVariants(term).some((v) => haystack.includes(v)));
      return { cap, score: matchedTerms.length };
    })
    .filter((entry) => entry.score > 0);

  scored.sort((a, b) => b.score - a.score);
  return scored.map((entry) => entry.cap);
}