"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X, ExternalLink, Link2, Users, TrendingUp, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Startup } from "@/types/startup";

interface StartupSheetProps {
  startup: Startup | null;
  onClose: () => void;
}

export function StartupSheet({ startup, onClose }: StartupSheetProps) {
  return (
    <Dialog.Root open={startup !== null} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Sheet panel */}
        <Dialog.Content
          className="fixed right-0 top-0 z-50 flex h-full w-full max-w-lg flex-col bg-white shadow-xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300"
        >
          {startup && (
            <>
              {/* Header */}
              <div className="flex items-start justify-between border-b border-zinc-100 p-6">
                <div className="flex flex-col gap-2 pr-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Dialog.Title className="text-lg font-semibold text-zinc-900">
                      {startup.name}
                    </Dialog.Title>
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
                <Dialog.Close
                  onClick={onClose}
                  className="shrink-0 rounded-md p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-colors"
                >
                  <X size={18} />
                  <span className="sr-only">Close</span>
                </Dialog.Close>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* One-liner */}
                <p className="mb-6 text-sm leading-relaxed text-zinc-600">
                  {startup.oneLiner}
                </p>

                {/* Why interesting */}
                <div className="mb-6 rounded-md border border-emerald-100 bg-emerald-50 p-4">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-emerald-700">
                    Why I find this interesting
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-700">
                    {startup.whyInteresting}
                  </p>
                </div>

                {/* Stats */}
                <div className="mb-6 grid grid-cols-2 gap-3">
                  <Stat
                    icon={<TrendingUp size={14} className="text-emerald-600" />}
                    label="Last raise"
                    value={`${startup.lastRaiseAmount}`}
                    sub={startup.lastRaiseDate}
                  />
                  <Stat
                    icon={<Users size={14} className="text-zinc-400" />}
                    label="Team size"
                    value={`~${startup.teamSize}`}
                    sub="people"
                  />
                  <Stat
                    icon={<Calendar size={14} className="text-zinc-400" />}
                    label="Founders"
                    value={startup.founders.join(", ")}
                    sub=""
                  />
                  {startup.ycBatch && (
                    <Stat
                      icon={
                        <span className="text-orange-600 font-bold text-xs">YC</span>
                      }
                      label="YC Batch"
                      value={startup.ycBatch}
                      sub=""
                    />
                  )}
                </div>

                {/* Tags */}
                {startup.tags.length > 0 && (
                  <div className="mb-6">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-zinc-400">
                      Tags
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {startup.tags.map((tag) => (
                        <Badge key={tag} variant="tag">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex flex-col gap-2">
                  <a
                    href={startup.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-700 hover:border-emerald-300 hover:text-emerald-700 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Visit website
                  </a>
                  <a
                    href={startup.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
                  >
                    <Link2 size={14} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Stat({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-md border border-zinc-100 bg-zinc-50 p-3">
      <div className="mb-1 flex items-center gap-1.5 text-xs text-zinc-400">
        {icon}
        {label}
      </div>
      <p className="font-mono-numbers text-sm font-medium text-zinc-800 leading-tight">
        {value}
      </p>
      {sub && (
        <p className="font-mono-numbers text-xs text-zinc-400 mt-0.5">{sub}</p>
      )}
    </div>
  );
}
