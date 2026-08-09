import { getIcon } from "../lib/icons";
import { type Capability } from "../data/capabilities";
import { approvalMeta } from "../lib/approval";

interface Props {
  capability: Capability;
  onOpen: (id: string) => void;
}

export default function CapabilityCard({ capability, onOpen }: Props) {
  const Icon = getIcon(capability.icon);
  const badge = approvalMeta[capability.approval];

  return (
    <button
      onClick={() => onOpen(capability.id)}
      className="glass glass-hover focus-ring group flex h-full flex-col items-start rounded-2xl p-5 text-left"
    >
      <div className="flex w-full items-start justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-700 text-violet-300">
          <Icon size={16} />
        </span>
        {capability.status === "expanding" && (
          <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium text-amber-400">
            Expanding
          </span>
        )}
      </div>

      <h3 className="font-display mt-3.5 text-base font-semibold text-mist-100">{capability.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-mist-500">{capability.description}</p>

      {capability.example?.[0] && (
        <p className="mt-3 rounded-lg border border-ink-border bg-ink-950/50 px-3 py-2 font-mono text-xs text-mist-300">
          "{capability.example[0]}"
        </p>
      )}

      <div className="mt-auto flex w-full flex-wrap items-center gap-1.5 pt-4">
        <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${badge.color}`}>{badge.label}</span>
        {capability.tags.slice(0, 2).map((t) => (
          <span key={t} className="rounded-full border border-ink-border px-2 py-0.5 text-[10px] text-mist-600">
            {t}
          </span>
        ))}
      </div>
    </button>
  );
}
