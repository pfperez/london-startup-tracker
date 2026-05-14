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
      className="group w-full border border-neutral-200 bg-white p-5 text-left transition-all duration-150 hover:border-neutral-900 hover:-translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
    >
      {/* Name + YC */}
      <div className="mb-1 flex items-baseline gap-2">
        <h3 className="font-serif text-lg leading-tight text-neutral-900 group-hover:text-emerald-700 transition-colors">
          {startup.name}
        </h3>
        {startup.ycBatch && (
          <Badge variant="yc">YC {startup.ycBatch}</Badge>
        )}
      </div>

      {/* Stage + Sector badges */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        <Badge variant="stage" stage={startup.stage}>
          {startup.stage}
        </Badge>
        <Badge variant="sector">
          {startup.sector}
        </Badge>
      </div>

      {/* One-liner */}
      <p className="mb-4 text-sm leading-relaxed text-neutral-600 line-clamp-2">
        {startup.oneLiner}
      </p>

      {/* Metadata row */}
      <div className="space-y-1 border-t border-neutral-100 pt-3">
        <div className="flex items-baseline gap-3">
          <span className="font-mono-numbers text-xs text-neutral-400 w-10 shrink-0">
            RAISE
          </span>
          <span className="font-mono-numbers text-xs tabular-nums text-neutral-600">
            {startup.lastRaiseAmount}
            <span className="text-neutral-400"> · </span>
            {startup.lastRaiseDate}
          </span>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="font-mono-numbers text-xs text-neutral-400 w-10 shrink-0">
            TEAM
          </span>
          <span className="font-mono-numbers text-xs tabular-nums text-neutral-600">
            ~{startup.teamSize}
          </span>
        </div>
        {startup.founders.length > 0 && (
          <div className="flex items-baseline gap-3">
            <span className="font-mono-numbers text-xs text-neutral-400 w-10 shrink-0">
              BY
            </span>
            <span className="font-mono-numbers text-xs text-neutral-500 truncate">
              {startup.founders.join(", ")}
            </span>
          </div>
        )}
      </div>
    </button>
  );
}
