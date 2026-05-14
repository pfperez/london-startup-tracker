"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { startups } from "@/data/startups";
import { FilterBar, type Filters } from "@/components/FilterBar";
import { StartupCard } from "@/components/StartupCard";
import { StartupSheet } from "@/components/StartupSheet";
import type { Startup } from "@/types/startup";

const DEFAULT_FILTERS: Filters = {
  search: "",
  sectors: [],
  stages: [],
  teamSizeMax: 500,
  ycOnly: false,
};

export default function HomePage() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [selected, setSelected] = useState<Startup | null>(null);

  const filtered = useMemo(() => {
    const q = filters.search.toLowerCase().trim();
    return startups.filter((s) => {
      if (q) {
        const haystack = [s.name, s.oneLiner, ...s.tags]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (filters.sectors.length > 0 && !filters.sectors.includes(s.sector))
        return false;
      if (filters.stages.length > 0 && !filters.stages.includes(s.stage))
        return false;
      if (s.teamSize > filters.teamSizeMax) return false;
      if (filters.ycOnly && !s.ycBatch) return false;
      return true;
    });
  }, [filters]);

  return (
    <>
      {/* ── Header ── */}
      <header className="mx-auto w-full max-w-[1100px] px-8 pb-12 pt-16 sm:px-5">
        <div className="flex items-start justify-between gap-4">
          <h1 className="font-serif text-4xl leading-none text-ink title-breathe sm:text-6xl">
            London Startup Tracker
          </h1>
          <Link
            href="/about"
            className="font-mono-numbers text-xs uppercase tracking-widest text-neutral-400 hover:text-neutral-700 transition-colors shrink-0 mt-2"
          >
            About
          </Link>
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-[1.65] text-neutral-600">
          I&apos;m Pia, a 2nd-year International Business student at Rotterdam
          University of Applied Sciences. I&apos;m tracking London startups I
          find interesting as I research where I want to intern in 2027.
          Everything here is hand-curated — I add companies as I come across
          ones I&apos;d genuinely consider working at.
        </p>

        <p className="mt-4 font-mono-numbers text-xs uppercase tracking-widest text-neutral-400">
          Last updated 14 May 2026 &mdash; {startups.length} companies
        </p>
      </header>

      <div className="border-t border-neutral-200" />

      {/* ── Filter bar ── */}
      <FilterBar filters={filters} onChange={setFilters} />

      <div className="border-t border-neutral-200" />

      {/* ── Card list ── */}
      <main className="mx-auto w-full max-w-[1100px] px-8 py-10 sm:px-5">
        <p className="mb-2 font-mono-numbers text-xs uppercase tracking-widest text-neutral-400">
          All companies{" "}
          <span className="text-neutral-500">
            {filtered.length < startups.length
              ? `(${filtered.length} of ${startups.length})`
              : `— ${startups.length}`}
          </span>
        </p>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-start py-20">
            <p className="font-mono-numbers text-xs uppercase tracking-widest text-neutral-400">
              No companies match your filters.
            </p>
            <button
              type="button"
              onClick={() => setFilters(DEFAULT_FILTERS)}
              className="mt-3 font-mono-numbers text-xs uppercase tracking-widest text-neutral-400 underline hover:text-neutral-700 transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div>
            {filtered.map((startup) => (
              <StartupCard
                key={startup.id}
                startup={startup}
                onClick={() => setSelected(startup)}
              />
            ))}
            <div className="border-t border-neutral-200" />
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <div className="border-t border-neutral-200" />
      <footer className="mx-auto w-full max-w-[1100px] px-8 py-6 sm:px-5">
        <p className="font-mono-numbers text-xs uppercase tracking-widest text-neutral-400">
          Built by Pia &mdash; Cursor + Claude Code &mdash;{" "}
          <a
            href="https://github.com/pfperez/london-startup-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-700 transition-colors underline"
          >
            GitHub
          </a>
          {" "}&mdash;{" "}
          <a
            href="#"
            className="hover:text-neutral-700 transition-colors underline"
          >
            Twitter/X
          </a>
        </p>
      </footer>

      {/* ── Detail sheet ── */}
      <StartupSheet startup={selected} onClose={() => setSelected(null)} />
    </>
  );
}
