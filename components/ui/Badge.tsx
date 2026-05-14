"use client";

import { cn } from "@/lib/utils";
import type { Stage } from "@/types/startup";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "sector" | "stage" | "tag" | "yc";
  stage?: Stage;
  className?: string;
}

export function Badge({
  children,
  variant = "tag",
  className,
}: BadgeProps) {
  if (variant === "yc") {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-sm border border-emerald-500 bg-emerald-500/10 px-2 py-0.5 font-mono-numbers text-xs uppercase tracking-wide text-emerald-600 dark:text-emerald-400 leading-none",
          className
        )}
      >
        {children}
      </span>
    );
  }

  // sector, stage, tag — same pill style
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 font-mono-numbers text-xs uppercase tracking-wide text-neutral-600 dark:text-neutral-400 leading-none",
        className
      )}
    >
      {children}
    </span>
  );
}
