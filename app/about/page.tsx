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
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6">
          <Link
            href="/"
            className="font-mono-numbers text-xs text-neutral-400 hover:text-neutral-700 transition-colors"
          >
            ← back
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <h1 className="font-serif text-4xl leading-tight tracking-tight text-neutral-900 sm:text-5xl">
          About
        </h1>
        <p className="mt-3 font-mono-numbers text-xs text-neutral-400">
          Last updated: 14 May 2026 &middot; {startups.length} companies tracked
        </p>

        <div className="mt-8 border-t border-neutral-200 pt-8 space-y-6 text-sm leading-7 text-neutral-600">
          <p>
            I&apos;m Pia, a 2nd-year International Business student at{" "}
            <strong className="font-medium text-neutral-900">
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

          <div className="border-t border-neutral-200 pt-6">
            <h2 className="font-serif text-xl text-neutral-900 mb-3">
              Data & accuracy
            </h2>
            <p>
              Fields marked{" "}
              <code className="font-mono-numbers rounded bg-neutral-100 px-1 py-0.5 text-xs">
                TODO: verify
              </code>{" "}
              in the source are plausible estimates based on publicly available
              information, not confirmed figures. Raise amounts and team sizes
              change — treat everything as indicative, not authoritative.
            </p>
          </div>

          <div className="border-t border-neutral-200 pt-6">
            <h2 className="font-serif text-xl text-neutral-900 mb-3">
              Suggest a company
            </h2>
            <p>
              If you know of a London startup I should have on here, reach out.
              I&apos;m especially interested in companies at Pre-seed through
              Series A where the founder story is interesting.{" "}
              {/* Replace with your contact email */}
              <span className="font-mono-numbers text-neutral-400">
                {"{{CONTACT_EMAIL}}"}
              </span>
            </p>
          </div>

          <div className="border-t border-neutral-200 pt-6">
            <h2 className="font-serif text-xl text-neutral-900 mb-3">
              Built with
            </h2>
            <p>
              Next.js, Tailwind CSS v4, Radix UI. Data lives in a single
              TypeScript file — no database, no CMS. Built in an afternoon using
              Cursor and Claude Code. Source on{" "}
              {/* Replace # with your GitHub repo URL */}
              <a
                href="#"
                className="underline hover:text-neutral-900 transition-colors"
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
