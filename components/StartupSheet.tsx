"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Startup } from "@/types/startup";

interface StartupSheetProps {
  startup: Startup | null;
  onClose: () => void;
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-neutral-100 dark:border-neutral-800 pt-5 pb-1">
      <p className="font-mono-numbers text-xs text-neutral-400 mb-3">{label}</p>
      {children}
    </div>
  );
}

export function StartupSheet({ startup, onClose }: StartupSheetProps) {
  return (
    <Dialog.Root
      open={startup !== null}
      onOpenChange={(open) => !open && onClose()}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/20 dark:bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <Dialog.Content className="fixed right-0 top-0 z-50 flex h-full w-full max-w-lg flex-col bg-white dark:bg-neutral-950 outline-none border-l border-neutral-200 dark:border-neutral-800 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300">
          {startup && (
            <>
              {/* Header */}
              <div className="flex items-start justify-between border-b border-neutral-100 dark:border-neutral-800 p-6">
                <div className="flex flex-col gap-2.5 pr-4">
                  <Dialog.Title className="text-2xl font-semibold leading-tight text-[#0A0A0A] dark:text-[#FAFAFA]">
                    {startup.name}
                  </Dialog.Title>
                  <div className="flex flex-wrap gap-1.5">
                    {startup.ycBatch && (
                      <Badge variant="yc">YC {startup.ycBatch}</Badge>
                    )}
                    <Badge variant="stage">{startup.stage}</Badge>
                    <Badge variant="sector">{startup.sector}</Badge>
                  </div>
                </div>
                <Dialog.Close
                  onClick={onClose}
                  className="shrink-0 rounded p-1.5 text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-600 dark:hover:text-neutral-300 focus:outline-none transition-colors"
                >
                  <X size={16} />
                  <span className="sr-only">Close</span>
                </Dialog.Close>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 space-y-0">
                <Section label="about">
                  <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {startup.whyInteresting}
                  </p>
                </Section>

                <Section label="funding">
                  <p className="font-mono-numbers text-xs text-neutral-600 dark:text-neutral-400">
                    {startup.lastRaiseAmount} · {startup.lastRaiseDate} · {startup.stage}
                  </p>
                </Section>

                <Section label="team">
                  <p className="font-mono-numbers text-xs text-neutral-600 dark:text-neutral-400 mb-1">
                    ~{startup.teamSize} people
                  </p>
                  {startup.founders.length > 0 && (
                    <p className="font-mono-numbers text-xs text-neutral-500">
                      {startup.founders.join(", ")}
                    </p>
                  )}
                </Section>

                {(startup.website || startup.linkedinUrl) && (
                  <Section label="links">
                    <div className="flex flex-col gap-1.5">
                      {startup.website && (
                        <a
                          href={startup.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono-numbers text-xs text-neutral-600 dark:text-neutral-400 underline hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                          {startup.website.replace(/^https?:\/\//, "")}
                        </a>
                      )}
                      {startup.linkedinUrl && (
                        <a
                          href={startup.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono-numbers text-xs text-neutral-600 dark:text-neutral-400 underline hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                          linkedin
                        </a>
                      )}
                    </div>
                  </Section>
                )}
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
