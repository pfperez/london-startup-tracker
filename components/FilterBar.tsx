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
          "flex h-8 items-center gap-1 border-b bg-transparent font-mono-numbers text-xs outline-none transition-colors",
          active
            ? "border-neutral-900 text-neutral-900"
            : "border-neutral-300 text-neutral-400 hover:border-neutral-500 hover:text-neutral-600"
        )}
      >
        {label}
        <ChevronDown
          size={10}
          className={cn("shrink-0 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 min-w-44 border border-neutral-200 bg-white py-1 shadow-md">
          {options.map((option) => {
            const checked = selected.includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggle(option)}
                className={cn(
                  "flex w-full items-center gap-2 px-3 py-1.5 text-left font-mono-numbers text-xs hover:bg-neutral-50",
                  checked ? "text-neutral-900" : "text-neutral-500"
                )}
              >
                <span
                  className={cn(
                    "flex h-3 w-3 shrink-0 items-center justify-center border text-[9px] leading-none",
                    checked
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-300"
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
              <div className="my-1 h-px bg-neutral-100" />
              <button
                type="button"
                onClick={() => onChange([])}
                className="w-full px-3 py-1 text-left font-mono-numbers text-xs text-neutral-300 hover:text-neutral-500"
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
    <div className="sticky top-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-3">
          {/* Search */}
          <input
            type="text"
            placeholder="search"
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            className="h-8 w-40 min-w-0 border-b border-neutral-300 bg-transparent font-mono-numbers text-xs text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-neutral-900 sm:w-52"
          />

          {/* Sector */}
          <MultiSelect<Sector>
            options={SECTORS}
            selected={filters.sectors}
            onChange={(v) => onChange({ ...filters, sectors: v })}
            placeholder="sector"
          />

          {/* Stage */}
          <MultiSelect<Stage>
            options={STAGES}
            selected={filters.stages}
            onChange={(v) => onChange({ ...filters, stages: v })}
            placeholder="stage"
          />

          {/* Team size */}
          <div className="flex items-center gap-2">
            <span className="font-mono-numbers text-xs text-neutral-400">
              team ≤
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
              className="h-px w-20 cursor-pointer accent-neutral-900"
            />
            <span className="w-7 font-mono-numbers text-xs tabular-nums text-neutral-500 text-right">
              {filters.teamSizeMax === 500 ? "any" : filters.teamSizeMax}
            </span>
          </div>

          {/* YC toggle — text link style */}
          <button
            type="button"
            onClick={() => onChange({ ...filters, ycOnly: !filters.ycOnly })}
            className={cn(
              "font-mono-numbers text-xs transition-colors",
              filters.ycOnly
                ? "font-bold text-neutral-900"
                : "text-neutral-400 hover:text-neutral-600"
            )}
          >
            yc only
          </button>

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
              className="font-mono-numbers text-xs text-neutral-300 hover:text-neutral-500 transition-colors"
            >
              ✕ clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
