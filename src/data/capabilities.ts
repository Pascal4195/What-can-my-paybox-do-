// All entries below are paraphrased summaries of publicly available PayBox
// (by MoonPay) materials — paybox.sh and press coverage of its July 29, 2026
// launch — not verbatim reproductions. Nothing here is invented: specific
// merchants, chains, or partners are only named where a public source names
// them. Anything uncertain is hedged ("PayBox describes...", "may vary").
// Sources: paybox.sh, theblock.co, finovate.com, moonpay.com/newsroom,
// unite.ai, kucoin.com, finextra.com (all accessed Aug 2026).

export type ApprovalMode = "approval" | "autonomous" | "both" | "control";
export type Status = "documented" | "expanding";

export interface Capability {
  id: string;
  title: string;
  category: string;
  icon: string; // lucide-react icon name
  description: string;
  example?: string[];
  howItWorks: string[];
  approval: ApprovalMode;
  tags: string[];
  officialUrl: string;
  status: Status;
  note?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  blurb: string;
}

export const categories: Category[] = [
  { id: "travel", name: "Travel", icon: "Plane", blurb: "Agent-assisted booking as travel services come online." },
  { id: "dining", name: "Dining", icon: "UtensilsCrossed", blurb: "Find a table, hold it, pay for it." },
  { id: "shopping", name: "Shopping", icon: "ShoppingBag", blurb: "Purchases through scoped, single-use virtual cards." },
  { id: "ai-apis", name: "AI & APIs", icon: "Cpu", blurb: "Pay-per-use services over the x402 standard." },
  { id: "crypto", name: "Crypto", icon: "Coins", blurb: "Buy, swap, and move supported assets." },
  { id: "automation", name: "Automation", icon: "Repeat", blurb: "Recurring and scheduled actions inside limits you set." },
  { id: "defi", name: "DeFi", icon: "Landmark", blurb: "Selected lending, staking, and market actions." },
  { id: "agent-controls", name: "Agent Controls", icon: "SlidersHorizontal", blurb: "Limits, approvals, and revocation." },
  { id: "security", name: "Security", icon: "ShieldCheck", blurb: "How PayBox describes protecting your funds." },
];

export const capabilities: Capability[] = [
  {
    id: "travel-booking",
    title: "Book Travel",
    category: "travel",
    icon: "Plane",
    description: "Your agent can search and book supported travel services on your behalf and handle the payment.",
    example: ["Book the 9am flight from SFO to JFK in my name.", "Find me a flight from Abuja to London under $800."],
    howItWorks: [
      "You describe the trip you want in plain language.",
      "The agent works with a supported travel service to find and hold the booking.",
      "Payment routes through the x402 standard from your own wallet.",
      "You confirm with a passkey, unless the action fits a policy you've already approved.",
    ],
    approval: "approval",
    tags: ["Travel", "x402", "Agentic payments"],
    officialUrl: "https://paybox.sh",
    status: "documented",
    note: "PayBox describes travel as paid over x402 \"as services come online, with new services every week\" — coverage of an early integration named BRIJ.fi. Check PayBox for current airlines and routes.",
  },
  {
    id: "dining-reservations",
    title: "Restaurant Reservations",
    category: "dining",
    icon: "UtensilsCrossed",
    description: "Your agent can find a table at a supported restaurant, hold it, and pay for it.",
    example: ["Book a table for four at [restaurant], Friday 8pm."],
    howItWorks: [
      "You tell the agent the restaurant, party size, and time.",
      "The agent finds and holds the reservation through a supported dining service.",
      "Payment settles from your wallet over x402.",
      "One passkey tap confirms it.",
    ],
    approval: "approval",
    tags: ["Dining", "x402"],
    officialUrl: "https://paybox.sh",
    status: "documented",
    note: "Press coverage names an early dining integration, AgentRes.dev. Availability varies by restaurant and region.",
  },
  {
    id: "shopping-purchases",
    title: "Online Shopping & Reorders",
    category: "shopping",
    icon: "ShoppingBag",
    description: "Your agent can buy from supported online retailers, including repeat orders, using a card scoped to that purchase.",
    example: ["Reorder the shoes I bought in March, half a size up.", "Keep the pantry stocked with our staples, under $150 a week."],
    howItWorks: [
      "You describe the purchase or the standing rule (e.g. a weekly cap).",
      "PayBox issues a one-time virtual card scoped to the merchant and amount.",
      "The agent completes checkout with that card.",
      "One-off purchases need your approval; recurring reorders can run on their own inside a cap you've set.",
    ],
    approval: "both",
    tags: ["Shopping", "Cards"],
    officialUrl: "https://paybox.sh",
    status: "documented",
    note: "Press coverage names an early shopping integration, Purch.xyz. Supported retailers vary — check PayBox for current coverage.",
  },
  {
    id: "one-time-cards",
    title: "One-Time Virtual Cards",
    category: "shopping",
    icon: "CreditCard",
    description: "PayBox's core purchase primitive: a virtual card generated for one merchant and one amount, and never reused elsewhere.",
    howItWorks: [
      "You or your agent set the merchant and the spending cap.",
      "PayBox issues a single-use virtual card scoped to exactly that.",
      "The real card number is never exposed to the merchant or the agent.",
    ],
    approval: "approval",
    tags: ["Cards", "Security"],
    officialUrl: "https://paybox.sh",
    status: "documented",
  },
  {
    id: "pay-per-use-apis",
    title: "Pay-Per-Use APIs & Services",
    category: "ai-apis",
    icon: "Server",
    description: "Your agent can pay for API calls or data services on the fly, using the x402 standard, without you ever handing over an API key.",
    example: ["Research competitors for me — spend up to $5 on search and scraping tools."],
    howItWorks: [
      "A service requests payment for a call using the web's HTTP 402 \"payment required\" response.",
      "PayBox pays that quote in stablecoins straight from your wallet.",
      "The agent gets the result and keeps working.",
      "Spending stays inside a per-task or per-session cap you set — no API key ever sits in the agent's hands.",
    ],
    approval: "autonomous",
    tags: ["x402", "APIs", "Automation"],
    officialUrl: "https://paybox.sh",
    status: "documented",
  },
  {
    id: "buy-crypto",
    title: "Buy Crypto",
    category: "crypto",
    icon: "Coins",
    description: "Your agent can help you purchase supported crypto assets through MoonPay's ramp.",
    example: ["Buy my first $100 of USDC."],
    howItWorks: [
      "You tell the agent what to buy and how much.",
      "Identity verification happens once, through MoonPay's licensed on-ramp.",
      "You confirm the purchase with a passkey.",
    ],
    approval: "approval",
    tags: ["Crypto", "Onramp"],
    officialUrl: "https://paybox.sh",
    status: "documented",
  },
  {
    id: "token-swaps",
    title: "Token Swaps",
    category: "crypto",
    icon: "Repeat",
    description: "Your agent can convert one supported asset into another.",
    example: ["Convert $1,000 of my USDC to ETH."],
    howItWorks: [
      "You describe the swap you want.",
      "The agent prepares the transaction.",
      "It's signed through PayBox's MPC setup — the private key itself never leaves it.",
      "You approve, or it runs inside a swap policy you've already set.",
    ],
    approval: "both",
    tags: ["Crypto", "Trading"],
    officialUrl: "https://paybox.sh",
    status: "documented",
  },
  {
    id: "bridging",
    title: "Bridging Assets",
    category: "crypto",
    icon: "ArrowLeftRight",
    description: "Your agent can move assets between supported blockchain networks without you bridging manually.",
    example: ["Move my USDC from Ethereum to Base."],
    howItWorks: [
      "You name the asset and the destination chain.",
      "The agent routes the transfer across supported networks.",
      "You approve, or it runs within a policy you've set.",
    ],
    approval: "both",
    tags: ["Crypto", "Multi-chain"],
    officialUrl: "https://paybox.sh",
    status: "documented",
    note: "Sources differ slightly on the exact chain list at any given time — check PayBox for current network support.",
  },
  {
    id: "gas-management",
    title: "Gas Management",
    category: "automation",
    icon: "Fuel",
    description: "Your agent can keep gas topped up across the chains you use so other transactions don't fail.",
    example: ["Keep my gas topped up on every chain I use."],
    howItWorks: [
      "You turn this on once, with a cap.",
      "The agent tops up gas automatically as needed, inside that cap.",
      "You can revoke this at any time.",
    ],
    approval: "autonomous",
    tags: ["Automation", "Crypto"],
    officialUrl: "https://paybox.sh",
    status: "documented",
  },
  {
    id: "dca",
    title: "Dollar-Cost Averaging (DCA)",
    category: "automation",
    icon: "TrendingUp",
    description: "Your agent can buy a fixed amount of an asset on a recurring schedule.",
    example: ["DCA $20 a day into ETH for the next 30 days."],
    howItWorks: [
      "You set the asset, amount, and schedule.",
      "PayBox grants a time-boxed, per-period spending allowance.",
      "The agent executes each purchase inside that allowance, without asking each time.",
    ],
    approval: "autonomous",
    tags: ["Automation", "Crypto", "DCA"],
    officialUrl: "https://paybox.sh",
    status: "documented",
  },
  {
    id: "recurring-payments",
    title: "Recurring Payments",
    category: "automation",
    icon: "CalendarClock",
    description: "Your agent can repeat the same purchase on a schedule, like reordering household staples.",
    example: ["Reorder our staples every week, under $150."],
    howItWorks: [
      "You describe the standing order and its cap.",
      "Each cycle, PayBox issues a scoped one-time virtual card for that purchase.",
      "The agent completes it automatically, inside your cap.",
    ],
    approval: "autonomous",
    tags: ["Automation", "Shopping", "Cards"],
    officialUrl: "https://paybox.sh",
    status: "documented",
  },
  {
    id: "rebalancing",
    title: "Portfolio Rebalancing",
    category: "automation",
    icon: "PieChart",
    description: "Your agent can bring your holdings back to a target allocation on a schedule.",
    example: ["Rebalance me to 60/40 every Sunday."],
    howItWorks: [
      "You set the target split and the schedule.",
      "PayBox grants a standing allowance with caps.",
      "The agent rebalances on schedule, and every action is kept in an audit trail you can review.",
    ],
    approval: "autonomous",
    tags: ["Automation", "Crypto", "DeFi"],
    officialUrl: "https://paybox.sh",
    status: "documented",
  },
  {
    id: "defi-earn",
    title: "Lending & Staking",
    category: "defi",
    icon: "Landmark",
    description: "Your agent can put idle stablecoins to work by comparing and using selected lending or staking options.",
    example: ["Put my idle USDC to work."],
    howItWorks: [
      "You tell the agent to look for yield on an idle balance.",
      "It compares options among supported protocols.",
      "It executes the one you approve, or one that fits a policy you've set.",
    ],
    approval: "both",
    tags: ["DeFi", "Yield"],
    officialUrl: "https://paybox.sh",
    status: "documented",
    note: "PayBox's own ecosystem materials name Aave specifically. This does not mean every DeFi protocol is supported — check PayBox for the current list.",
  },
  {
    id: "defi-advanced",
    title: "Perpetuals & Liquidity Management",
    category: "defi",
    icon: "LineChart",
    description: "MoonPay has said it is expanding PayBox to let agents route swaps, trade perpetual futures, and manage liquidity positions, under the same approval rules as everything else.",
    howItWorks: [
      "Same approval model as other DeFi actions: your call, or a policy you've set.",
    ],
    approval: "both",
    tags: ["DeFi", "Trading"],
    officialUrl: "https://paybox.sh",
    status: "expanding",
    note: "This is described by MoonPay as an expansion in progress, not a confirmed-live feature at time of writing. Check PayBox for current availability.",
  },
  {
    id: "spending-limits",
    title: "Spending Limits & Policies",
    category: "agent-controls",
    icon: "SlidersHorizontal",
    description: "You define the caps — per transaction, per merchant, or over time — that bound what your agent can do without asking you first.",
    howItWorks: [
      "You set a limit in the PayBox app (e.g. a weekly shopping cap).",
      "The agent can't exceed it, automated or not.",
      "Changing a limit requires a fresh passkey approval from you.",
    ],
    approval: "control",
    tags: ["Agent Controls", "Security"],
    officialUrl: "https://paybox.sh",
    status: "documented",
  },
  {
    id: "approval-modes",
    title: "Always Ask vs. Autonomous",
    category: "agent-controls",
    icon: "ToggleLeft",
    description: "Every credential sits under one of two modes you choose: Always Ask, where each transaction needs a fresh passkey tap, or Autonomous, where the agent acts inside limits you've set.",
    howItWorks: [
      "You pick the mode per credential or per capability.",
      "Always Ask: nothing moves without your passkey, every time.",
      "Autonomous: the agent acts on its own, but only inside the exact limits you configured.",
    ],
    approval: "control",
    tags: ["Agent Controls"],
    officialUrl: "https://paybox.sh",
    status: "documented",
  },
  {
    id: "revoke-access",
    title: "Revoke Access",
    category: "agent-controls",
    icon: "Ban",
    description: "You can revoke a connected app's or agent's access at any time, immediately ending its scoped permissions.",
    howItWorks: [
      "Open your PayBox controls.",
      "Revoke the connector or specific permission.",
      "Access ends immediately — no further action can be taken under it.",
    ],
    approval: "control",
    tags: ["Agent Controls", "Security"],
    officialUrl: "https://paybox.sh",
    status: "documented",
  },
  {
    id: "non-custodial",
    title: "Non-Custodial by Design",
    category: "security",
    icon: "Vault",
    description: "PayBox describes itself as non-custodial: you hold the keys, and PayBox — including your connected agent — never takes custody of your funds.",
    howItWorks: [
      "Your wallet and cards live in your own vault.",
      "Connected agents get scoped permission to act, not ownership of your funds.",
    ],
    approval: "control",
    tags: ["Security"],
    officialUrl: "https://paybox.sh",
    status: "documented",
  },
  {
    id: "mpc-security",
    title: "MPC & Key Protection",
    category: "security",
    icon: "KeyRound",
    description: "PayBox describes keys as sharded across multiple parties using multi-party computation (MPC) and secure hardware, so no single party — including the agent — ever holds a complete key.",
    howItWorks: [
      "A key is split into shards at setup.",
      "Signing a transaction combines shards without ever reassembling the full key in one place.",
    ],
    approval: "control",
    tags: ["Security"],
    officialUrl: "https://paybox.sh",
    status: "documented",
    note: "PayBox does not publish this as a guarantee of invulnerability — treat it as a described architecture, not a security promise.",
  },
  {
    id: "scoped-access",
    title: "Scoped, Revocable Access",
    category: "security",
    icon: "ShieldCheck",
    description: "PayBox describes connected apps and agents as receiving only the specific, limited permissions you grant — nothing more — and says that access can be revoked at any time.",
    howItWorks: [
      "You grant a permission (a spending cap, a category, a merchant).",
      "The agent can only act inside that scope.",
      "You can narrow or revoke it whenever you choose.",
    ],
    approval: "control",
    tags: ["Security", "Agent Controls"],
    officialUrl: "https://paybox.sh",
    status: "documented",
  },
];

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
}

export const glossary: GlossaryTerm[] = [
  {
    id: "paybox",
    term: "What is PayBox?",
    definition: "A non-custodial payment vault from MoonPay that connects to AI assistants like Claude and ChatGPT, letting your agent prepare and pay for things on your behalf.",
  },
  {
    id: "agent",
    term: "What is an AI agent?",
    definition: "An AI assistant acting on instructions you give it in conversation — here, specifically one that can prepare a payment for you to approve, or act inside limits you've set.",
  },
  {
    id: "x402",
    term: "What is x402?",
    definition: "An open payment standard, now hosted by the Linux Foundation, that lets a service request payment (reviving the web's old HTTP 402 \"Payment Required\" status) and get paid in stablecoins with no account or API key needed.",
  },
  {
    id: "non-custodial",
    term: "What does non-custodial mean?",
    definition: "PayBox describes itself this way to mean you keep control of your funds and keys — PayBox and your agent can act within permissions you grant, but don't take ownership.",
  },
  {
    id: "mpc",
    term: "What is MPC?",
    definition: "Multi-party computation — a cryptographic technique PayBox describes using to split a key into shards, so no single party ever holds the complete key.",
  },
  {
    id: "passkey",
    term: "What is a passkey approval?",
    definition: "A device-based sign-in (like Face ID or a fingerprint) PayBox uses to confirm an action instead of a typed password — required for one-off approvals and for changing your policies.",
  },
  {
    id: "one-time-card",
    term: "What is a one-time virtual card?",
    definition: "A virtual card PayBox generates for a single purchase, scoped to one merchant and one amount, so your real card details are never exposed.",
  },
  {
    id: "policy",
    term: "What's a spending policy?",
    definition: "A set of limits you configure — like a weekly cap or a per-transaction maximum — that defines what your agent can do autonomously, without asking you each time.",
  },
];
