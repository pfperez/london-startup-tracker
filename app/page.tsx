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
      <header className="mx-auto w-full max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-baseline justify-between">
            <h1 className="font-serif text-5xl leading-none tracking-tight text-neutral-900 sm:text-6xl">
              London Startup Tracker
            </h1>
            <Link
              href="/about"
              className="font-mono-numbers text-xs text-neutral-400 hover:text-neutral-700 transition-colors ml-6 shrink-0"
            >
              About
            </Link>
          </div>

          <p className="mt-6 text-base leading-7 text-neutral-600">
            I&apos;m Pia, a 2nd-year International Business student at Rotterdam
            University of Applied Sciences. I&apos;m tracking London startups I
            find interesting as I research where I want to intern in 2027.
            Everything here is hand-curated — I add companies as I come across
            ones I&apos;d genuinely consider working at.
          </p>

          <p className="mt-3 font-mono-numbers text-xs text-neutral-400">
            Last updated: 14 May 2026 &middot; {startups.length} companies
          </p>
        </div>
      </header>

      <div className="border-t border-neutral-200" />

      {/* ── Filter bar ── */}
      <FilterBar filters={filters} onChange={setFilters} />

      <div className="border-t border-neutral-200" />

      {/* ── Grid ── */}
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="mb-5 font-mono-numbers text-xs tabular-nums text-neutral-400">
          Showing{" "}
          <span className="text-neutral-600">{filtered.length}</span>
          {" "}of{" "}
          <span className="text-neutral-600">{startups.length}</span>
          {" "}startups
        </p>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            <p className="font-mono-numbers text-sm text-neutral-400">
              No startups match your filters.
            </p>
            <button
              type="button"
              onClick={() => setFilters(DEFAULT_FILTERS)}
              className="mt-2 font-mono-numbers text-xs text-neutral-400 underline hover:text-neutral-700 transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 border border-neutral-200">
            {filtered.map((startup) => (
              <StartupCard
                key={startup.id}
                startup={startup}
                onClick={() => setSelected(startup)}
              />
            ))}
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <div className="border-t border-neutral-200" />
      <footer className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <p className="font-mono-numbers text-xs text-neutral-400">
          Built by Pia &middot; Cursor + Claude Code &middot;{" "}
          {/* Replace # with your GitHub repo URL after pushing */}
          <a
            href="https://github.com/pfperez/london-startup-tracker"
            className="hover:text-neutral-700 transition-colors underline"
          >
            GitHub
          </a>
        </p>
      </footer>

      {/* ── Detail sheet ── */}
      <StartupSheet startup={selected} onClose={() => setSelected(null)} />
    </>
  );
}
