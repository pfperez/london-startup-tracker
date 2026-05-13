import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · London Startup Tracker",
  description: "About the London Startup Tracker project.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="border-b border-zinc-100">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
          <Link
            href="/"
            className="text-sm text-zinc-400 hover:text-emerald-600 transition-colors"
          >
            ← Back to tracker
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900">
          About this project
        </h1>
        <p className="mb-8 text-sm text-zinc-400 font-mono-numbers">
          Last updated: May 2026
        </p>

        {/*
          {{ABOUT_PAGE}}
          Replace the section below with your own content.
          Suggested structure:
            1. Who you are (2–3 sentences)
            2. Why you built this (what gap it fills for you)
            3. How data is gathered / how often it's updated
            4. Caveats (some fields are estimates)
            5. How to suggest a startup / get in touch
        */}

        <div className="prose prose-zinc prose-sm max-w-none space-y-4 text-zinc-600 leading-relaxed">
          <p>
            <strong className="text-zinc-900">{"{{ABOUT_PAGE}}"}</strong> — replace
            this placeholder with your about page content.
          </p>

          <p>
            Suggested sections: who you are, why you built this, how data is
            sourced and how often it&apos;s updated, what the{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs">
              TODO: verify
            </code>{" "}
            comments in the source mean, and how people can suggest a startup to
            add.
          </p>

          <h2 className="mt-8 text-base font-semibold text-zinc-900">
            Data & accuracy
          </h2>
          <p>
            All data is manually researched. Fields tagged{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5 text-xs">
              TODO: verify
            </code>{" "}
            in the source code are plausible estimates based on publicly
            available information, not confirmed figures. Raise amounts and team
            sizes change — treat everything here as indicative.
          </p>

          <h2 className="mt-8 text-base font-semibold text-zinc-900">
            Suggest a startup
          </h2>
          <p>
            If you know of a London startup that should be on here, reach out at{" "}
            {/* Add your contact email or link here */}
            <span className="text-zinc-400 italic">{"{{CONTACT}}"}</span>.
          </p>

          <h2 className="mt-8 text-base font-semibold text-zinc-900">
            Built with
          </h2>
          <p>
            Next.js, Tailwind CSS, Radix UI, deployed on Vercel. Source is a
            single TypeScript file — no database.
          </p>
        </div>
      </main>
    </div>
  );
}
