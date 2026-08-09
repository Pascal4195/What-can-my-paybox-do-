import { Vault, KeyRound, ShieldCheck } from "lucide-react";

const ITEMS = [
  {
    icon: Vault,
    title: "Non-custodial",
    body: "PayBox describes itself as non-custodial — you hold the keys, and PayBox (including your connected agent) never takes custody of your funds.",
  },
  {
    icon: KeyRound,
    title: "MPC key protection",
    body: "PayBox describes keys as sharded across multiple parties using multi-party computation, so no single party ever holds a complete key.",
  },
  {
    icon: ShieldCheck,
    title: "Scoped, revocable access",
    body: "Connected agents get only the specific permissions you grant, and PayBox says that access can be revoked at any time.",
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
      <div className="mx-auto mb-10 max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-violet-400">Security</p>
        <h2 className="font-display mt-2 text-2xl font-semibold text-mist-100 sm:text-3xl">
          How PayBox describes protecting your funds
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {ITEMS.map((item) => (
          <div key={item.title} className="glass rounded-2xl p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-700 text-violet-300">
              <item.icon size={18} />
            </span>
            <h3 className="font-display mt-4 text-base font-semibold text-mist-100">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist-500">{item.body}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-xl text-center text-xs leading-relaxed text-mist-600">
        These are descriptions of PayBox's stated architecture, not a security guarantee. Always verify current details with official PayBox sources before relying on them.
      </p>
    </section>
  );
}
