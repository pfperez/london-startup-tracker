"use client";

import { cn } from "@/lib/utils";
import type { Sector, Stage } from "@/types/startup";

const SECTOR_COLORS: Record<Sector, string> = {
  "AI Tooling": "bg-purple-50 text-purple-700 border-purple-200",
  Fintech: "bg-blue-50 text-blue-700 border-blue-200",
  Healthtech: "bg-rose-50 text-rose-700 border-rose-200",
  Climate: "bg-green-50 text-green-700 border-green-200",
  Consumer: "bg-orange-50 text-orange-700 border-orange-200",
  "B2B SaaS": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Vertical AI": "bg-violet-50 text-violet-700 border-violet-200",
  "Dev Tools": "bg-slate-50 text-slate-700 border-slate-200",
  Marketplace: "bg-amber-50 text-amber-700 border-amber-200",
  Productivity: "bg-teal-50 text-teal-700 border-teal-200",
};

const STAGE_COLORS: Record<Stage, string> = {
  "Pre-seed": "bg-zinc-50 text-zinc-600 border-zinc-200",
  Seed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Series A": "bg-emerald-100 text-emerald-800 border-emerald-300",
  "Series B": "bg-emerald-200 text-emerald-900 border-emerald-400",
  "Series C+": "bg-emerald-300 text-emerald-900 border-emerald-500",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: "sector" | "stage" | "tag" | "yc";
  sector?: Sector;
  stage?: Stage;
  className?: string;
}

export function Badge({
  children,
  variant = "tag",
  sector,
  stage,
  className,
}: BadgeProps) {
  const base =
    "inline-flex items-center rounded border px-2 py-0.5 text-xs font-medium leading-none font-mono-numbers";

  if (variant === "sector" && sector) {
    return (
      <span className={cn(base, SECTOR_COLORS[sector], className)}>
        {children}
      </span>
    );
  }

  if (variant === "stage" && stage) {
    return (
      <span className={cn(base, STAGE_COLORS[stage], className)}>
        {children}
      </span>
    );
  }

  if (variant === "yc") {
    return (
      <span
        className={cn(
          base,
          "bg-orange-50 text-orange-700 border-orange-200",
          className
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(base, "bg-zinc-50 text-zinc-500 border-zinc-200", className)}
    >
      {children}
    </span>
  );
}
