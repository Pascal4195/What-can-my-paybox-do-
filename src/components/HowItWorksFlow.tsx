import { User, Bot, ShieldCheck, Globe } from "lucide-react";

const STEPS = [
  {
    icon: User,
    title: "You",
    body: "You tell your AI assistant what you want, in plain language — no forms, no separate app.",
  },
  {
    icon: Bot,
    title: "AI Agent",
    body: "The agent works out what's needed and prepares the action using a connected PayBox capability.",
  },
  {
    icon: ShieldCheck,
    title: "PayBox",
    body: "PayBox checks the action against your permissions, then either asks you to approve it or runs it inside a policy you've already set.",
  },
  {
    icon: Globe,
    title: "Service / Merchant / Chain",
    body: "Payment settles with the destination — a merchant, a service over x402, or a blockchain — from your own funds.",
  },
];

export default function HowItWorksFlow() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <div className="mx-auto mb-12 max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-teal-400">How it works</p>
        <h2 className="font-display mt-2 text-2xl font-semibold text-mist-100 sm:text-3xl">
          One request, a short chain of trust
        </h2>
        <p className="mt-3 text-sm text-mist-500">
          This is the general shape of it — not every capability follows exactly the same path.
        </p>
      </div>

      <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-4 sm:gap-3">
        <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-ink-border to-transparent sm:block" />
        {STEPS.map((step, i) => (
          <div key={step.title} className="relative flex flex-col items-center text-center">
            <div className="glass relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-2xl">
              <step.icon size={24} className={i === 2 ? "text-teal-400" : "text-violet-300"} />
            </div>
            <h3 className="font-display mt-4 text-sm font-semibold text-mist-100">{step.title}</h3>
            <p className="mt-1.5 max-w-[220px] text-xs leading-relaxed text-mist-500">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
