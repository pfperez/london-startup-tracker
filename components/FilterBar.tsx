"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
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
    onChange(
      selected.includes(option)
        ? selected.filter((s) => s !== option)
        : [...selected, option]
    );
  }

  const label =
    selected.length === 0
      ? placeholder
      : selected.length === 1
      ? selected[0]
      : `${placeholder} (${selected.length})`;

  const active = selected.length > 0;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex h-8 items-center gap-1 font-mono-numbers text-xs outline-none transition-colors",
          active
            ? "text-[#0A0A0A] dark:text-[#FAFAFA]"
            : "text-neutral-500 hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA]"
        )}
      >
        {label}
        <ChevronDown
          size={10}
          className={cn("shrink-0 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 min-w-44 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-1 shadow-lg shadow-black/5 dark:shadow-black/30">
          {options.map((option) => {
            const checked = selected.includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggle(option)}
                className={cn(
                  "flex w-full items-center gap-2 px-3 py-1.5 text-left font-mono-numbers text-xs hover:bg-neutral-50 dark:hover:bg-neutral-900",
                  checked
                    ? "text-[#0A0A0A] dark:text-[#FAFAFA]"
                    : "text-neutral-500"
                )}
              >
                <span
                  className={cn(
                    "flex h-3 w-3 shrink-0 items-center justify-center rounded-sm border text-[9px] leading-none",
                    checked
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "border-neutral-300 dark:border-neutral-700"
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
              <div className="my-1 h-px bg-neutral-100 dark:bg-neutral-800" />
              <button
                type="button"
                onClick={() => onChange([])}
                className="w-full px-3 py-1 text-left font-mono-numbers text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
              >
                clear
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

  return (
    <div className="sticky top-14 z-40 bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-4">
        <div className="flex flex-wrap items-center gap-y-2 py-2">
          {/* Search */}
          <div className="flex items-center h-8 pr-4 mr-4 border-r border-neutral-200 dark:border-neutral-800">
            <input
              type="text"
              placeholder="Search…"
              value={filters.search}
              onChange={(e) => onChange({ ...filters, search: e.target.value })}
              className="w-44 bg-transparent font-mono-numbers text-xs text-[#0A0A0A] dark:text-[#FAFAFA] placeholder:text-neutral-400 outline-none border-b border-transparent focus:border-emerald-500 transition-colors py-1"
            />
          </div>

          {/* Sector */}
          <div className="flex items-center h-8 pr-4 mr-4 border-r border-neutral-200 dark:border-neutral-800">
            <MultiSelect<Sector>
              options={SECTORS}
              selected={filters.sectors}
              onChange={(v) => onChange({ ...filters, sectors: v })}
              placeholder="sector"
            />
          </div>

          {/* Stage */}
          <div className="flex items-center h-8 pr-4 mr-4 border-r border-neutral-200 dark:border-neutral-800">
            <MultiSelect<Stage>
              options={STAGES}
              selected={filters.stages}
              onChange={(v) => onChange({ ...filters, stages: v })}
              placeholder="stage"
            />
          </div>

          {/* Team size */}
          <div className="flex items-center gap-2 h-8 pr-4 mr-4 border-r border-neutral-200 dark:border-neutral-800">
            <span className="font-mono-numbers text-xs text-neutral-500">
              team ≤{" "}
              <span className="text-[#0A0A0A] dark:text-[#FAFAFA]">
                {filters.teamSizeMax === 500 ? "any" : filters.teamSizeMax}
              </span>
            </span>
            <input
              type="range"
              min={1}
              max={500}
              step={5}
              value={filters.teamSizeMax}
              onChange={(e) =>
                onChange({ ...filters, teamSizeMax: Number(e.target.value) })
              }
              className="w-20 cursor-pointer accent-emerald-500"
            />
          </div>

          {/* YC toggle */}
          <div className="flex items-center h-8 pr-4 mr-4 border-r border-neutral-200 dark:border-neutral-800">
            <button
              type="button"
              onClick={() => onChange({ ...filters, ycOnly: !filters.ycOnly })}
              className={cn(
                "flex items-center gap-1.5 font-mono-numbers text-xs transition-colors",
                filters.ycOnly
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-neutral-500 hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA]"
              )}
            >
              <span
                className={cn(
                  "flex h-3 w-3 shrink-0 items-center justify-center rounded-sm border text-[9px] leading-none",
                  filters.ycOnly
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-neutral-300 dark:border-neutral-700"
                )}
              >
                {filters.ycOnly && "✓"}
              </span>
              YC only
            </button>
          </div>

          {/* Clear */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={() =>
                onChange({
                  search: "",
                  sectors: [],
                  stages: [],
                  teamSizeMax: 500,
                  ycOnly: false,
                })
              }
              className="flex items-center h-8 font-mono-numbers text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            >
              clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
