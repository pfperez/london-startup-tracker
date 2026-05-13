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
      {/* Header */}
      <header className="border-b border-zinc-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
                London Startup Tracker
              </h1>
              <p className="mt-1 text-sm text-zinc-500">
                An evolving map of early-stage London startups I&apos;m tracking.
              </p>
            </div>
            <Link
              href="/about"
              className="text-sm text-zinc-400 hover:text-emerald-600 transition-colors"
            >
              About
            </Link>
          </div>

          {/* Intro */}
          <div className="mt-5 max-w-2xl rounded-md border border-zinc-100 bg-zinc-50 px-4 py-3">
            <p className="text-sm leading-relaxed text-zinc-600">
              {/* {{ABOUT_ME}} — replace this block with 2 sentences about who you are and why you built this */}
              I&apos;m{" "}
              <span className="font-medium text-zinc-800">
                {"{{ABOUT_ME}}"}
              </span>
              , and I built this to keep track of London startups I find interesting
              while exploring the ecosystem. Everything here is manually curated
              — data marked{" "}
              <code className="rounded bg-zinc-200 px-1 py-0.5 text-xs">
                TODO: verify
              </code>{" "}
              in the source is my best estimate.
            </p>
          </div>
        </div>
      </header>

      {/* Sticky filter bar */}
      <FilterBar filters={filters} onChange={setFilters} />

      {/* Grid */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Count */}
        <p className="mb-4 font-mono-numbers text-sm tabular-nums text-zinc-400">
          Showing{" "}
          <span className="font-semibold text-zinc-700">{filtered.length}</span>{" "}
          of{" "}
          <span className="font-semibold text-zinc-700">{startups.length}</span>{" "}
          startups
        </p>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-sm font-medium text-zinc-400">
              No startups match your filters.
            </p>
            <button
              type="button"
              onClick={() => setFilters(DEFAULT_FILTERS)}
              className="mt-2 text-sm text-emerald-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Footer */}
      <footer className="border-t border-zinc-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="font-mono-numbers text-xs text-zinc-400">
            {startups.length} startups tracked · Data may be out of date ·{" "}
            <Link href="/about" className="hover:text-emerald-600 transition-colors">
              About this project
            </Link>
          </p>
        </div>
      </footer>

      {/* Detail sheet */}
      <StartupSheet startup={selected} onClose={() => setSelected(null)} />
    </>
  );
}
