import { ArrowUpRight } from "lucide-react";

function LogoMark() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
      <g transform="translate(12,12)">
        <path d="M0,0 C-2,-3 -2,-7 0,-10 C2,-7 2,-3 0,0 Z" />
        <path d="M0,0 C-2,-3 -2,-7 0,-10 C2,-7 2,-3 0,0 Z" transform="rotate(120)" />
        <path d="M0,0 C-2,-3 -2,-7 0,-10 C2,-7 2,-3 0,0 Z" transform="rotate(240)" />
      </g>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="disclaimer" className="border-t border-ink-border px-5 py-14">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-teal-500">
          <LogoMark />
        </span>
        <h3 className="font-display mt-3 text-sm font-semibold text-mist-100">What Can My PayBox Agent Do?</h3>
        <p className="mt-2 text-xs text-mist-600">An unofficial community-made guide to PayBox and agentic payments.</p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs">
          <a
            href="https://paybox.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex items-center gap-1 text-mist-400 hover:text-violet-300"
          >
            Official PayBox <ArrowUpRight size={12} />
          </a>
          <a href="#disclaimer" className="focus-ring text-mist-400 hover:text-violet-300">
            Privacy
          </a>
          <a href="#disclaimer" className="focus-ring text-mist-400 hover:text-violet-300">
            Disclaimer
          </a>
        </div>

        <p className="mt-6 max-w-md text-[11px] leading-relaxed text-mist-700">
          This project is independent of MoonPay and PayBox. Information is provided for educational purposes and may
          become outdated. Always verify current capabilities, availability, fees, and requirements with official
          PayBox sources.
        </p>

        <p className="mt-6 text-[11px] text-mist-700">
          Made by{" "}
          <a
            href="https://x.com/zerodollar_Anon"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring font-mono text-violet-300/90 hover:text-violet-300 hover:underline underline-offset-2"
          >
            @zerodollar_Anon
          </a>
        </p>
      </div>
    </footer>
  );
}