import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { glossary } from "../data/capabilities";

export default function OneMinuteGuide() {
  const [openId, setOpenId] = useState<string | null>(glossary[0]?.id ?? null);

  return (
    <section id="about" className="mx-auto max-w-3xl px-5 pb-16 sm:pb-24">
      <div className="mx-auto mb-8 max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-teal-400">The basics</p>
        <h2 className="font-display mt-2 text-2xl font-semibold text-mist-100 sm:text-3xl">
          PayBox in one minute
        </h2>
      </div>

      <div className="glass divide-y divide-ink-border overflow-hidden rounded-2xl">
        {glossary.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id}>
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="focus-ring flex w-full items-center justify-between px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-sm font-medium text-mist-100 sm:text-[15px]">{item.term}</span>
                <ChevronDown size={16} className={`shrink-0 text-mist-600 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <p className="px-5 pb-4 text-sm leading-relaxed text-mist-500">{item.definition}</p>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-center text-xs text-mist-600">
        Want the full picture?{" "}
        <a href="https://paybox.sh" target="_blank" rel="noopener noreferrer" className="focus-ring text-violet-400 underline underline-offset-2 hover:text-violet-300">
          Learn more on PayBox
        </a>
      </p>
    </section>
  );
}
