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
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-4">
          <div className="flex h-14 items-center">
            <Link
              href="/"
              className="font-mono-numbers text-xs text-neutral-500 hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA] transition-colors"
            >
              ← back
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-[1200px] px-6 py-12 sm:px-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight text-[#0A0A0A] dark:text-[#FAFAFA]">
            About
          </h1>
          <p className="mt-2 font-mono-numbers text-xs text-neutral-500">
            v0.1 &middot; {startups.length} companies &middot; updated 14 May 2026
          </p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            <p>
              I&apos;m Pia, a 2nd-year International Business student at{" "}
              <strong className="font-medium text-[#0A0A0A] dark:text-[#FAFAFA]">
                Rotterdam University of Applied Sciences
              </strong>
              . I built this to keep track of London startups I find genuinely
              interesting as I research where I want to intern in 2027.
            </p>

            <p>
              The London tech scene moves fast and I found it hard to keep a
              coherent view of what was happening at the early stage. Most
              databases are either paywalled, out of date, or just lists of
              names without any point of view. I wanted something personal —
              companies I&apos;d actually consider applying to, with my own
              notes on why they stand out.
            </p>

            <p>
              Everything here is hand-curated. I add companies as I come across
              them — through newsletters, Twitter, YC batches, and Sifted. I
              try to keep the data current but this is a side project, not a
              database.
            </p>

            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
              <p className="font-mono-numbers text-xs text-neutral-400 uppercase tracking-wider mb-3">
                Data & accuracy
              </p>
              <p>
                Raise amounts and team sizes change — treat everything here as
                indicative, not authoritative.
              </p>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
              <p className="font-mono-numbers text-xs text-neutral-400 uppercase tracking-wider mb-3">
                Suggest a company
              </p>
              <p>
                If you know of a London startup I should have on here, reach
                out. I&apos;m especially interested in companies at Pre-seed
                through Series A where the founder story is interesting.{" "}
                <a
                  href="mailto:Piaperez1705@gmail.com"
                  className="font-mono-numbers text-neutral-500 underline hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Piaperez1705@gmail.com
                </a>
              </p>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
              <p className="font-mono-numbers text-xs text-neutral-400 uppercase tracking-wider mb-3">
                Built with
              </p>
              <p>
                Next.js, Tailwind CSS v4, Radix UI. Data lives in a single
                TypeScript file — no database, no CMS. Built using Cursor and
                Claude Code. Source on{" "}
                <a
                  href="https://github.com/pfperez/london-startup-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
