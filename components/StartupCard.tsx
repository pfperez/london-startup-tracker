"use client";

import { Badge } from "@/components/ui/Badge";
import type { Startup } from "@/types/startup";

interface StartupCardProps {
  startup: Startup;
  onClick: () => void;
}

export function StartupCard({ startup, onClick }: StartupCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 text-left transition-colors duration-150 hover:border-neutral-900 hover:bg-neutral-50 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
    >
      {/* Row 1: name + YC badge */}
      <div className="mb-2 flex items-start justify-between gap-2">
        <span className="text-lg font-semibold leading-tight text-[#0A0A0A] dark:text-[#FAFAFA]">
          {startup.name}
        </span>
        {startup.ycBatch && (
          <Badge variant="yc" className="shrink-0 mt-0.5">
            YC {startup.ycBatch}
          </Badge>
        )}
      </div>

      {/* Row 2: one-liner */}
      <p className="mb-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-400 line-clamp-2">
        {startup.oneLiner}
      </p>

      {/* Row 3: stage + sector tags */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        <Badge variant="stage">{startup.stage}</Badge>
        <Badge variant="sector">{startup.sector}</Badge>
      </div>

      {/* Row 4: metadata */}
      <div className="font-mono-numbers text-xs text-neutral-500 space-y-0.5">
        <p>
          {startup.lastRaiseAmount} · {startup.lastRaiseDate} · team ~{startup.teamSize}
        </p>
        {startup.founders.length > 0 && (
          <p>{startup.founders.join(", ")}</p>
        )}
      </div>
    </button>
  );
}
