"use client";

import { Users, TrendingUp } from "lucide-react";
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
      className="group w-full rounded-lg border border-zinc-200 bg-white p-5 text-left transition-all hover:border-emerald-300 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
    >
      {/* Top row */}
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-semibold text-zinc-900 group-hover:text-emerald-700 transition-colors">
              {startup.name}
            </h3>
            {startup.ycBatch && (
              <Badge variant="yc">YC {startup.ycBatch}</Badge>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="stage" stage={startup.stage}>
              {startup.stage}
            </Badge>
            <Badge variant="sector" sector={startup.sector}>
              {startup.sector}
            </Badge>
          </div>
        </div>
      </div>

      {/* One-liner */}
      <p className="mb-4 text-sm leading-relaxed text-zinc-500 line-clamp-2">
        {startup.oneLiner}
      </p>

      {/* Footer meta */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-zinc-100 pt-3">
        <span className="flex items-center gap-1.5 font-mono-numbers text-xs tabular-nums text-zinc-500">
          <TrendingUp size={12} className="text-emerald-600" />
          {startup.lastRaiseAmount}
          <span className="text-zinc-400">·</span>
          {startup.lastRaiseDate}
        </span>

        <span className="flex items-center gap-1.5 font-mono-numbers text-xs tabular-nums text-zinc-500">
          <Users size={12} className="text-zinc-400" />
          {startup.teamSize} people
        </span>

        <span className="font-mono-numbers text-xs text-zinc-400 truncate max-w-xs">
          {startup.founders.join(", ")}
        </span>
      </div>
    </button>
  );
}
