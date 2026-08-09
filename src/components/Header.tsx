import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

function LogoMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <g transform="translate(12,12)">
        <path d="M0,0 C-2,-3 -2,-7 0,-10 C2,-7 2,-3 0,0 Z" />
        <path d="M0,0 C-2,-3 -2,-7 0,-10 C2,-7 2,-3 0,0 Z" transform="rotate(120)" />
        <path d="M0,0 C-2,-3 -2,-7 0,-10 C2,-7 2,-3 0,0 Z" transform="rotate(240)" />
      </g>
    </svg>
  );
}

const LINKS = [
  { label: "Explore", href: "#explore" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Security", href: "#security" },
  { label: "About", href: "#about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-border/70 bg-ink-900/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2 focus-ring" aria-label="What Can My PayBox Agent Do? — home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-teal-500">
            <LogoMark />
          </span>
          <span className="font-display text-[13px] font-semibold tracking-tight text-mist-100 sm:text-[15px]">
            What Can My PayBox Agent Do?
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring text-sm text-mist-500 transition-colors hover:text-mist-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://paybox.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring hidden items-center gap-1.5 rounded-full border border-ink-border bg-ink-800 px-4 py-2 text-sm font-medium text-mist-100 transition-colors hover:border-violet-400/60 hover:text-violet-300 sm:flex"
          >
            Visit PayBox
            <ArrowUpRight size={14} />
          </a>
          <button
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg border border-ink-border text-mist-300 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink-border bg-ink-900 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-lg px-3 py-2.5 text-sm text-mist-300 hover:bg-ink-800 hover:text-mist-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://paybox.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-2 flex items-center justify-center gap-1.5 rounded-full border border-ink-border bg-ink-800 px-4 py-2.5 text-sm font-medium text-mist-100"
            >
              Visit PayBox
              <ArrowUpRight size={14} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}