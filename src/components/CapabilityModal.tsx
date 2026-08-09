import { useEffect } from "react";
import { X, ArrowUpRight, Info } from "lucide-react";
import { getIcon } from "../lib/icons";
import { type Capability, categories } from "../data/capabilities";
import { approvalMeta } from "../lib/approval";

interface Props {
  capability: Capability | null;
  onClose: () => void;
}

export default function CapabilityModal({ capability, onClose }: Props) {
  useEffect(() => {
    if (!capability) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [capability, onClose]);

  if (!capability) return null;

  const Icon = getIcon(capability.icon);
  const categoryName = categories.find((c) => c.id === capability.category)?.name ?? "";
  const badge = approvalMeta[capability.approval];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={capability.title}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="thin-scroll glass max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-t-3xl sm:rounded-3xl"
        style={{ background: "linear-gradient(180deg, #131829, #0c101c)" }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink-border bg-ink-800/90 px-5 py-4 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-700 text-violet-300">
              <Icon size={16} />
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wide text-mist-600">{categoryName}</p>
              <h2 className="font-display text-base font-semibold text-mist-100">{capability.title}</h2>
            </div>
          </div>
          <button onClick={onClose} className="focus-ring flex h-8 w-8 items-center justify-center rounded-lg text-mist-500 hover:bg-ink-700 hover:text-mist-100" aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="space-y-6 px-5 py-6">
          <div>
            <h3 className="mb-1.5 text-xs font-medium uppercase tracking-wide text-mist-600">What it means</h3>
            <p className="text-[15px] leading-relaxed text-mist-300">{capability.description}</p>
          </div>

          {capability.example && capability.example.length > 0 && (
            <div>
              <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-mist-600">You could say</h3>
              <div className="space-y-2">
                {capability.example.map((ex) => (
                  <p key={ex} className="rounded-xl border border-ink-border bg-ink-950/50 px-3.5 py-2.5 font-mono text-sm text-teal-300/90">
                    "{ex}"
                  </p>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-mist-600">How it works</h3>
            <ol className="space-y-2.5">
              {capability.howItWorks.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-mist-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-700 font-mono text-[10px] text-mist-400">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-mist-600">Approval & automation</h3>
            <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${badge.color}`}>
              {badge.label}
            </span>
            <p className="mt-2 text-xs leading-relaxed text-mist-600">
              Exact behavior depends on your PayBox setup and the permissions you've granted.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wide text-mist-600">Related concepts</h3>
            <div className="flex flex-wrap gap-1.5">
              {capability.tags.map((t) => (
                <span key={t} className="rounded-full border border-ink-border px-2.5 py-1 text-xs text-mist-400">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {capability.note && (
            <div className="flex gap-2.5 rounded-xl border border-ink-border bg-ink-900/60 p-3.5">
              <Info size={15} className="mt-0.5 shrink-0 text-mist-600" />
              <p className="text-xs leading-relaxed text-mist-500">{capability.note}</p>
            </div>
          )}

          <a
            href={capability.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center justify-center gap-1.5 rounded-xl border border-violet-500/30 bg-violet-500/10 py-3 text-sm font-medium text-violet-300 transition-colors hover:bg-violet-500/20"
          >
            Learn more on PayBox
            <ArrowUpRight size={14} />
          </a>

          <p className="text-center text-[11px] leading-relaxed text-mist-700">
            Availability, supported assets, networks, and payment methods may change. Check PayBox for current support.
          </p>
        </div>
      </div>
    </div>
  );
}
