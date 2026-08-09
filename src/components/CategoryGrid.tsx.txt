import { getIcon } from "../lib/icons";
import { categories, capabilities } from "../data/capabilities";

interface Props {
  onSelectCategory: (id: string) => void;
}

export default function CategoryGrid({ onSelectCategory }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
        {categories.map((cat) => {
          const Icon = getIcon(cat.icon);
          const count = capabilities.filter((c) => c.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="glass glass-hover focus-ring group flex flex-col items-start gap-3 rounded-2xl p-4 text-left sm:p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-700 text-violet-300 transition-colors group-hover:bg-violet-500/15 group-hover:text-violet-300">
                <Icon size={18} />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-sm font-semibold text-mist-100 sm:text-base">{cat.name}</h3>
                  <span className="rounded-full bg-ink-700 px-1.5 py-0.5 font-mono text-[10px] text-mist-500">{count}</span>
                </div>
                <p className="mt-1 text-xs text-mist-600 sm:text-sm">{cat.blurb}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
