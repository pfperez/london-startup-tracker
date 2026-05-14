"use client";

import { cn } from "@/lib/utils";
import type { Sector, Stage } from "@/types/startup";

// Stage gets a very subtle weight change so the grid is still scannable,
// but no colour — differentiation comes from text only.
const STAGE_WEIGHT: Record<Stage, string> = {
  "Pre-seed": "text-neutral-400",
  Seed: "text-neutral-500",
  "Series A": "text-neutral-600",
  "Series B": "text-neutral-700",
  "Series C+": "text-neutral-800",
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
  sector: _sector,
  stage,
  className,
}: BadgeProps) {
  const base =
    "inline-flex items-center border px-1.5 py-px font-mono-numbers text-xs leading-none tracking-wide";

  if (variant === "stage" && stage) {
    return (
      <span
        className={cn(
          base,
          "border-neutral-200",
          STAGE_WEIGHT[stage],
          className
        )}
      >
        {children}
      </span>
    );
  }

  if (variant === "yc") {
    return (
      <span
        className={cn(base, "border-emerald-700 text-emerald-700", className)}
      >
        {children}
      </span>
    );
  }

  // sector and tag: identical style — text only differentiates
  return (
    <span
      className={cn(base, "border-neutral-200 text-neutral-500", className)}
    >
      {children}
    </span>
  );
}
