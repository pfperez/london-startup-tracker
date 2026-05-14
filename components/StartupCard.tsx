"use client";

import { Badge } from "@/components/ui/Badge";
import type { Startup } from "@/types/startup";

interface StartupCardProps {
  startup: Startup;
  onClick: () => void;
}

export function StartupCard({ startup, onClick }: StartupCardProps) {
  const metaRow = [
    `Raise ${startup.lastRaiseAmount}`,
    startup.lastRaiseDate,
    `Team ~${startup.teamSize}`,
    `Founded by ${startup.founders.join(", ")}`,
  ].join(" · ");

  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full border-t border-neutral-200 bg-paper py-8 text-left transition-all duration-200 hover:border-neutral-900 hover:bg-neutral-50/50"
    >
      {/* Name + right badges */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 min-w-0">
          <h3 className="font-serif text-2xl leading-tight text-ink group-hover:text-sage transition-colors">
            {startup.name}
          </h3>
          {startup.ycBatch && (
            <Badge variant="yc">YC {startup.ycBatch}</Badge>
          )}
        </div>
        <div className="flex flex-wrap justify-end gap-1.5 shrink-0">
          <Badge variant="stage" stage={startup.stage}>
            {startup.stage}
          </Badge>
          <Badge variant="sector">{startup.sector}</Badge>
        </div>
      </div>

      {/* One-liner */}
      <p className="mb-4 text-sm leading-relaxed text-neutral-600">
        {startup.oneLiner}
      </p>

      {/* Metadata row */}
      <p className="font-mono-numbers text-xs uppercase tracking-wider text-neutral-400">
        {metaRow}
      </p>
    </button>
  );
}
