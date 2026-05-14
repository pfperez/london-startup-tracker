import Link from "next/link";
import type { Metadata } from "next";
import { startups } from "@/data/startups";

export const metadata: Metadata = {
  title: "About · London Startup Tracker",
  description:
    "About the London Startup Tracker — a hand-curated list by Pia, IB student at Rotterdam University of Applied Sciences.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Nav */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-[1100px] px-8 py-5 sm:px-5">
          <Link
            href="/"
            className="font-mono-numbers text-xs uppercase tracking-widest text-neutral-400 hover:text-neutral-700 transition-colors"
          >
            ← back
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-[1100px] px-8 py-16 sm:px-5">
        <h1 className="font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
          About
        </h1>
        <p className="mt-4 font-mono-numbers text-xs uppercase tracking-widest text-neutral-400">
          Last updated 14 May 2026 &mdash; {startups.length} companies tracked
        </p>

        <div className="mt-12 max-w-2xl space-y-10 text-sm leading-[1.65] text-neutral-600">
          <p>
            I&apos;m Pia, a 2nd-year International Business student at{" "}
            <strong className="font-medium text-ink">
              Rotterdam University of Applied Sciences
            </strong>
            . I built this to keep track of London startups I find genuinely
            interesting as I research where I want to intern in 2027.
          </p>

          <p>
            The London tech scene moves fast and I found it hard to keep a
            coherent view of what was happening at the early stage. Most
            databases are either paywalled, out of date, or just lists of names
            without any point of view. I wanted something personal — companies
            I&apos;d actually consider applying to, with my own notes on why
            they stand out.
          </p>

          <p>
            Everything here is hand-curated. I add companies as I come across
            them — through newsletters, Twitter, YC batches, and Sifted. I try
            to keep the data current but this is a side project, not a database.
          </p>

          <div className="border-t border-neutral-200 pt-8">
            <p className="font-mono-numbers text-xs uppercase tracking-widest text-neutral-400 mb-4">
              Data & accuracy
            </p>
            <p>
              Raise amounts and team sizes change — treat everything here as
              indicative, not authoritative.
            </p>
          </div>

          <div className="border-t border-neutral-200 pt-8">
            <p className="font-mono-numbers text-xs uppercase tracking-widest text-neutral-400 mb-4">
              Suggest a company
            </p>
            <p>
              If you know of a London startup I should have on here, reach out.
              I&apos;m especially interested in companies at Pre-seed through
              Series A where the founder story is interesting.{" "}
              <a
                href="mailto:Piaperez1705@gmail.com"
                className="font-mono-numbers text-neutral-500 underline hover:text-sage transition-colors"
              >
                Piaperez1705@gmail.com
              </a>
            </p>
          </div>

          <div className="border-t border-neutral-200 pt-8">
            <p className="font-mono-numbers text-xs uppercase tracking-widest text-neutral-400 mb-4">
              Built with
            </p>
            <p>
              Next.js, Tailwind CSS v4, Radix UI. Data lives in a single
              TypeScript file — no database, no CMS. Built in an afternoon using
              Cursor and Claude Code. Source on{" "}
              <a
                href="https://github.com/pfperez/london-startup-tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-sage transition-colors"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
