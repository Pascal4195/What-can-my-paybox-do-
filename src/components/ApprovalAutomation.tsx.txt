import { UserCheck, Bot } from "lucide-react";

export default function ApprovalAutomation() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:pb-24">
      <div className="mx-auto mb-10 max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-violet-400">Two modes</p>
        <h2 className="font-display mt-2 text-2xl font-semibold text-mist-100 sm:text-3xl">
          Approval vs. automation
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
            <UserCheck size={18} />
          </span>
          <h3 className="font-display mt-4 text-lg font-semibold text-mist-100">User-approved</h3>
          <p className="mt-1 font-mono text-xs text-violet-300/80">"Always Ask"</p>
          <p className="mt-3 text-sm leading-relaxed text-mist-500">
            The agent prepares an action and you approve it with a passkey before anything moves.
          </p>
        </div>

        <div className="glass rounded-2xl p-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/15 text-teal-300">
            <Bot size={18} />
          </span>
          <h3 className="font-display mt-4 text-lg font-semibold text-mist-100">Policy-controlled</h3>
          <p className="mt-1 font-mono text-xs text-teal-300/80">"Autonomous"</p>
          <p className="mt-3 text-sm leading-relaxed text-mist-500">
            The agent can act on its own for certain actions, but only inside limits you've already configured.
          </p>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-lg text-center text-xs leading-relaxed text-mist-600">
        Exact behavior depends on your PayBox setup and permissions — the two modes above describe the general model, not a guarantee for every capability.
      </p>
    </section>
  );
}
