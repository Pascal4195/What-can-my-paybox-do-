import { Search } from "lucide-react";

const EXAMPLES = [
  "Can my agent book a flight?",
  "Can my agent buy crypto?",
  "Can my agent pay for an API?",
  "Can my agent shop online?",
  "Can my agent make recurring payments?",
];

interface HeroProps {
  query: string;
  onQueryChange: (q: string) => void;
}

function goToResults() {
  document.getElementById("explore")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero({ query, onQueryChange }: HeroProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    goToResults();
  };

  const handleChipClick = (ex: string) => {
    onQueryChange(ex.replace(/^Can my agent |\?$/g, ""));
    goToResults();
  };

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 400px at 20% 0%, rgba(133,119,245,0.16), transparent 60%), radial-gradient(500px 380px at 85% 10%, rgba(69,207,174,0.12), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 pt-16 pb-14 text-center sm:pt-24 sm:pb-20">
        <span className="animate-rise glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-mist-500">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse-slow" />
          Unofficial community guide · not affiliated with MoonPay
        </span>

        <h1 className="animate-rise font-display text-4xl font-semibold leading-[1.08] tracking-tight text-mist-100 sm:text-6xl" style={{ animationDelay: "0.05s" }}>
          What Can My <span className="text-gradient">PayBox</span> Agent Do?
        </h1>

        <p className="animate-rise mx-auto mt-5 max-w-xl text-balance text-base text-mist-500 sm:text-lg" style={{ animationDelay: "0.1s" }}>
          Your AI can do more than answer questions. Explore the things an agent can pay for, buy, book, automate, and manage with PayBox.
        </p>

        <form onSubmit={handleSubmit} className="animate-rise mx-auto mt-9 max-w-xl" style={{ animationDelay: "0.15s" }}>
          <label htmlFor="capability-search" className="sr-only">
            What do you want your agent to do?
          </label>
          <div className="glass flex items-center gap-2 rounded-2xl py-1.5 pl-4 pr-1.5 shadow-xl shadow-black/20 transition-colors focus-within:border-violet-400/60">
            <input
              id="capability-search"
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="What do you want your agent to do?"
              className="w-full bg-transparent py-2 font-body text-[15px] text-mist-100 placeholder:text-mist-600 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="focus-ring flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-teal-500 text-ink-900 transition-transform hover:scale-105 active:scale-95"
            >
              <Search size={17} strokeWidth={2.5} />
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => handleChipClick(ex)}
                className="focus-ring rounded-full border border-ink-border bg-ink-800/60 px-3 py-1.5 text-xs text-mist-500 transition-colors hover:border-violet-400/50 hover:text-mist-100"
              >
                {ex}
              </button>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
}
