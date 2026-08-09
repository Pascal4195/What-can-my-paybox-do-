import { SearchX } from "lucide-react";

export default function EmptyState({ query }: { query: string }) {
  return (
    <div className="glass mx-auto flex max-w-md flex-col items-center rounded-2xl px-6 py-12 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-700 text-mist-600">
        <SearchX size={20} />
      </span>
      <h3 className="font-display mt-4 text-base font-semibold text-mist-100">Nothing matched "{query}"</h3>
      <p className="mt-2 text-sm text-mist-500">
        Try a broader term like "crypto," "travel," or "x402" — or a phrase like "recurring payments."
      </p>
    </div>
  );
}
