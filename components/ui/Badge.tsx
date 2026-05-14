"use client";

import { cn } from "@/lib/utils";
import type { Stage } from "@/types/startup";

const STAGE_TEXT: Record<Stage, string> = {
  "Pre-seed": "text-neutral-400",
  Seed: "text-neutral-500",
  "Series A": "text-neutral-600",
  "Series B": "text-neutral-700",
  "Series C+": "text-neutral-800",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: "sector" | "stage" | "tag" | "yc";
  stage?: Stage;
  className?: string;
}

export function Badge({
  children,
  variant = "tag",
  stage,
  className,
}: BadgeProps) {
  const base =
    "inline-flex items-center border px-1.5 py-px font-mono-numbers text-[10px] uppercase leading-none tracking-widest";

  if (variant === "stage" && stage) {
    return (
      <span
        className={cn(base, "border-neutral-200", STAGE_TEXT[stage], className)}
      >
        {children}
      </span>
    );
  }

  if (variant === "yc") {
    return (
      <span className={cn(base, "border-sage text-sage", className)}>
        {children}
      </span>
    );
  }

  // sector and tag: sage border, neutral text
  return (
    <span className={cn(base, "border-sage text-neutral-600", className)}>
      {children}
    </span>
  );
}
