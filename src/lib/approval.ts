import type { ApprovalMode } from "../data/capabilities";

export const approvalMeta: Record<ApprovalMode, { label: string; color: string; dot: string }> = {
  approval: { label: "User-approved", color: "text-violet-300 bg-violet-500/10 border-violet-500/25", dot: "bg-violet-400" },
  autonomous: { label: "Policy-controlled", color: "text-teal-300 bg-teal-500/10 border-teal-500/25", dot: "bg-teal-400" },
  both: { label: "Approved or policy-controlled", color: "text-amber-400 bg-amber-400/10 border-amber-400/25", dot: "bg-amber-400" },
  control: { label: "Agent control", color: "text-mist-300 bg-ink-700/60 border-ink-border", dot: "bg-mist-500" },
};
