"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { startups } from "@/data/startups";
import { FilterBar, type Filters } from "@/components/FilterBar";
import { StartupCard } from "@/components/StartupCard";
import { StartupSheet } from "@/components/StartupSheet";
import { PiasPick } from "@/components/PiasPick";
import type { Startup } from "@/types/startup";

const DEFAULT_FILTERS: Filters = {
  search: "",
  sectors: [],
  stages: [],
  teamSizeMax: 500,
  ycOnly: false,
};

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="font-mono-numbers text-xs text-neutral-500 hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA] transition-colors"
    >
      {isDark ? "light" : "dark"}
    </button>
  );
}

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
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A]">
      {/* ── Sticky header ── */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-4">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-semibold tracking-tight text-[#0A0A0A] dark:text-[#FAFAFA]">
                London Startup Tracker
              </span>
              <span className="text-emerald-500 text-xs leading-none select-none">
                ▪
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono-numbers text-xs text-neutral-500 hidden sm:inline">
                v0.1 &middot;{" "}{startups.length}{" "}companies &middot; 14 May 2026
              </span>
              <ThemeToggle />
              <Link
                href="/about"
                className="font-mono-numbers text-xs text-neutral-500 hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA] transition-colors"
              >
                about
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── Intro ── */}
      <section className="mx-auto max-w-[1200px] px-6 py-6 sm:px-4">
        <p className="font-mono-numbers text-xs uppercase tracking-wider text-neutral-500 mb-3">
          A working list of early-stage London startups I&apos;m watching
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
          I&apos;m Pia — 2nd-year International Business at Rotterdam UAS.
          I&apos;m researching where I want to intern in 2027 and building this
          in public as I go. Curated by hand, not scraped. Companies added when
          I&apos;d genuinely consider working there.
        </p>
      </section>

      {/* ── Pia's Pick ── */}
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <PiasPick onSelect={setSelected} />
      </div>

      {/* ── Filter bar ── */}
      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <FilterBar filters={filters} onChange={setFilters} />
      </div>

      {/* ── Card grid ── */}
      <main className="mx-auto w-full max-w-[1200px] px-6 py-6 sm:px-4">
        <p className="mb-4 font-mono-numbers text-xs text-neutral-500">
          {filtered.length < startups.length
            ? `${filtered.length} of ${startups.length} companies`
            : `${startups.length} companies`}
        </p>

        {filtered.length === 0 ? (
          <div className="py-16">
            <p className="font-mono-numbers text-xs text-neutral-500">
              No companies match your filters.
            </p>
            <button
              type="button"
              onClick={() => setFilters(DEFAULT_FILTERS)}
              className="mt-2 font-mono-numbers text-xs text-neutral-500 underline hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA] transition-colors"
            >
              clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      <div className="border-t border-neutral-200 dark:border-neutral-800" />
      <footer className="mx-auto w-full max-w-[1200px] px-6 py-4 sm:px-4">
        <p className="font-mono-numbers text-xs text-neutral-500">
          built by pia &middot; cursor + claude code &middot;{" "}
          <a
            href="https://github.com/pfperez/london-startup-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA] transition-colors"
          >
            github
          </a>
          {" "}&middot;{" "}
          <a
            href="#"
            className="underline hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA] transition-colors"
          >
            x
          </a>
        </p>
      </footer>

      {/* ── Detail sheet ── */}
      <StartupSheet startup={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
