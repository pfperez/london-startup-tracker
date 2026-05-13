"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Sector, Stage } from "@/types/startup";
import { SECTORS, STAGES } from "@/types/startup";

export interface Filters {
  search: string;
  sectors: Sector[];
  stages: Stage[];
  teamSizeMax: number;
  ycOnly: boolean;
}

interface FilterBarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

// Reusable multi-select dropdown
function MultiSelect<T extends string>({
  options,
  selected,
  onChange,
  placeholder,
}: {
  options: T[];
  selected: T[];
  onChange: (v: T[]) => void;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function toggle(option: T) {
    if (selected.includes(option)) {
      onChange(selected.filter((s) => s !== option));
    } else {
      onChange([...selected, option]);
    }
  }

  const label =
    selected.length === 0
      ? placeholder
      : selected.length === 1
      ? selected[0]
      : `${selected.length} selected`;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex h-9 min-w-36 items-center justify-between gap-2 rounded-md border border-zinc-200 bg-white px-3 text-sm text-zinc-700 hover:border-zinc-300 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-colors",
          selected.length > 0 && "border-emerald-600 text-emerald-700"
        )}
      >
        <span className="truncate">{label}</span>
        <ChevronDown
          size={14}
          className={cn("shrink-0 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 min-w-48 rounded-md border border-zinc-200 bg-white py-1 shadow-lg">
          {options.map((option) => {
            const checked = selected.includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggle(option)}
                className={cn(
                  "flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm hover:bg-zinc-50",
                  checked && "text-emerald-700"
                )}
              >
                <span
                  className={cn(
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[10px]",
                    checked
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : "border-zinc-300"
                  )}
                >
                  {checked && "✓"}
                </span>
                {option}
              </button>
            );
          })}
          {selected.length > 0 && (
            <>
              <div className="my-1 h-px bg-zinc-100" />
              <button
                type="button"
                onClick={() => onChange([])}
                className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-xs text-zinc-400 hover:bg-zinc-50"
              >
                Clear
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export function FilterBar({ filters, onChange }: FilterBarProps) {
  const hasActiveFilters =
    filters.search !== "" ||
    filters.sectors.length > 0 ||
    filters.stages.length > 0 ||
    filters.teamSizeMax < 500 ||
    filters.ycOnly;

  function reset() {
    onChange({
      search: "",
      sectors: [],
      stages: [],
      teamSizeMax: 500,
      ycOnly: false,
    });
  }

  return (
    <div className="sticky top-0 z-40 border-b border-zinc-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2">
          {/* Search */}
          <div className="relative min-w-52 flex-1">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
            />
            <input
              type="text"
              placeholder="Search name, description, tags…"
              value={filters.search}
              onChange={(e) =>
                onChange({ ...filters, search: e.target.value })
              }
              className="h-9 w-full rounded-md border border-zinc-200 bg-white pl-8 pr-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-colors"
            />
          </div>

          {/* Sector */}
          <MultiSelect<Sector>
            options={SECTORS}
            selected={filters.sectors}
            onChange={(v) => onChange({ ...filters, sectors: v })}
            placeholder="Sector"
          />

          {/* Stage */}
          <MultiSelect<Stage>
            options={STAGES}
            selected={filters.stages}
            onChange={(v) => onChange({ ...filters, stages: v })}
            placeholder="Stage"
          />

          {/* Team size */}
          <div className="flex items-center gap-2">
            <span className="shrink-0 text-xs text-zinc-500">Team ≤</span>
            <input
              type="range"
              min={1}
              max={500}
              step={5}
              value={filters.teamSizeMax}
              onChange={(e) =>
                onChange({
                  ...filters,
                  teamSizeMax: Number(e.target.value),
                })
              }
              className="h-1.5 w-24 cursor-pointer accent-emerald-600"
            />
            <span className="w-8 shrink-0 text-right font-mono-numbers text-xs tabular-nums text-zinc-600">
              {filters.teamSizeMax === 500 ? "Any" : filters.teamSizeMax}
            </span>
          </div>

          {/* YC toggle */}
          <button
            type="button"
            onClick={() => onChange({ ...filters, ycOnly: !filters.ycOnly })}
            className={cn(
              "flex h-9 items-center gap-1.5 rounded-md border px-3 text-sm transition-colors",
              filters.ycOnly
                ? "border-orange-300 bg-orange-50 text-orange-700"
                : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300"
            )}
          >
            <span className="text-xs font-semibold">YC</span>
            <span className="text-xs">only</span>
          </button>

          {/* Clear */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={reset}
              className="flex h-9 items-center gap-1 rounded-md px-2 text-xs text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <X size={13} />
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
