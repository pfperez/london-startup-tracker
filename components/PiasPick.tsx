"use client";

import { picks } from "@/data/picks";
import { startups } from "@/data/startups";
import { Badge } from "@/components/ui/Badge";
import type { Startup } from "@/types/startup";

interface PiasPickProps {
  onSelect: (startup: Startup) => void;
}

export function PiasPick({ onSelect }: PiasPickProps) {
  const pick = picks[picks.length - 1];
  const startup = startups.find((s) => s.id === pick.companyId);
  if (!startup) return null;

  return (
    <div className="mx-auto w-full max-w-[1200px] px-6 py-5 sm:px-4">
      <button
        type="button"
        onClick={() => onSelect(startup)}
        className="w-full text-left rounded-md border border-emerald-500/30 bg-white dark:bg-neutral-950 p-5 hover:border-emerald-500/60 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        <p className="font-mono-numbers text-xs text-emerald-600 dark:text-emerald-400 mb-3">
          ▪ pia&apos;s pick — week of {pick.weekOf}
        </p>

        <div className="mb-2 flex items-start justify-between gap-2">
          <span className="text-lg font-semibold leading-tight text-[#0A0A0A] dark:text-[#FAFAFA]">
            {startup.name}
          </span>
          <div className="flex gap-1.5 shrink-0">
            {startup.ycBatch && (
              <Badge variant="yc">YC {startup.ycBatch}</Badge>
            )}
            <Badge variant="stage">{startup.stage}</Badge>
          </div>
        </div>

        <p className="mb-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-400">
          {startup.oneLiner}
        </p>

        <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-500 italic">
          &ldquo;{pick.note}&rdquo;
        </p>
      </button>
    </div>
  );
}
