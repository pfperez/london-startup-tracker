"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X, ExternalLink, Link2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Startup } from "@/types/startup";

interface StartupSheetProps {
  startup: Startup | null;
  onClose: () => void;
}

export function StartupSheet({ startup, onClose }: StartupSheetProps) {
  return (
    <Dialog.Root
      open={startup !== null}
      onOpenChange={(open) => !open && onClose()}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <Dialog.Content className="fixed right-0 top-0 z-50 flex h-full w-full max-w-lg flex-col bg-white outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300 border-l border-neutral-200">
          {startup && (
            <>
              {/* Header */}
              <div className="flex items-start justify-between border-b border-neutral-100 p-6">
                <div className="flex flex-col gap-2 pr-4">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <Dialog.Title className="font-serif text-2xl leading-tight text-neutral-900">
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
                    <Badge variant="sector">{startup.sector}</Badge>
                  </div>
                </div>
                <Dialog.Close
                  onClick={onClose}
                  className="shrink-0 rounded p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 focus:outline-none transition-colors"
                >
                  <X size={16} />
                  <span className="sr-only">Close</span>
                </Dialog.Close>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* One-liner */}
                <p className="mb-6 text-sm leading-relaxed text-neutral-600">
                  {startup.oneLiner}
                </p>

                {/* Why interesting */}
                <div className="mb-6 border-l-2 border-emerald-700 pl-4">
                  <p className="mb-1 font-mono-numbers text-xs text-emerald-700 uppercase tracking-widest">
                    why I find this interesting
                  </p>
                  <p className="text-sm leading-relaxed text-neutral-700">
                    {startup.whyInteresting}
                  </p>
                </div>

                {/* Stats grid */}
                <div className="mb-6 space-y-2">
                  {[
                    { label: "RAISE", value: `${startup.lastRaiseAmount} · ${startup.lastRaiseDate}` },
                    { label: "TEAM", value: `~${startup.teamSize} people` },
                    { label: "FOUNDERS", value: startup.founders.join(", ") },
                    ...(startup.ycBatch ? [{ label: "YC BATCH", value: startup.ycBatch }] : []),
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-baseline gap-4">
                      <span className="font-mono-numbers text-xs text-neutral-400 w-20 shrink-0">
                        {label}
                      </span>
                      <span className="font-mono-numbers text-sm text-neutral-700">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                {startup.tags.length > 0 && (
                  <div className="mb-6">
                    <p className="mb-2 font-mono-numbers text-xs text-neutral-400 uppercase tracking-widest">
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

                {/* Links — only render when URL is non-empty */}
                {(startup.website || startup.linkedinUrl) && (
                  <div className="flex flex-col gap-2">
                    {startup.website && (
                      <a
                        href={startup.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-neutral-200 px-4 py-2.5 font-mono-numbers text-xs text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
                      >
                        <ExternalLink size={12} />
                        {startup.website.replace(/^https?:\/\//, "")}
                      </a>
                    )}
                    {startup.linkedinUrl && (
                      <a
                        href={startup.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-neutral-200 px-4 py-2.5 font-mono-numbers text-xs text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
                      >
                        <Link2 size={12} />
                        LinkedIn
                      </a>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
