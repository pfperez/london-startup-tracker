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
    <div className="border-t border-neutral-100 pt-6 pb-2">
      <p className="font-mono-numbers text-xs uppercase tracking-widest text-neutral-400 mb-3">
        {label}
      </p>
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
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <Dialog.Content className="fixed right-0 top-0 z-50 flex h-full w-full max-w-lg flex-col bg-paper outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300 border-l border-neutral-200">
          {startup && (
            <>
              {/* Header */}
              <div className="flex items-start justify-between p-8 pb-6">
                <div className="flex flex-col gap-3 pr-4">
                  <Dialog.Title className="font-serif text-3xl leading-tight text-ink">
                    {startup.name}
                  </Dialog.Title>
                  <div className="flex flex-wrap gap-1.5">
                    {startup.ycBatch && (
                      <Badge variant="yc">YC {startup.ycBatch}</Badge>
                    )}
                    <Badge variant="stage" stage={startup.stage}>
                      {startup.stage}
                    </Badge>
                    <Badge variant="sector">{startup.sector}</Badge>
                  </div>
                </div>
                <Dialog.Close
                  onClick={onClose}
                  className="shrink-0 p-1.5 text-neutral-400 hover:text-neutral-700 transition-colors focus:outline-none"
                >
                  <X size={16} />
                  <span className="sr-only">Close</span>
                </Dialog.Close>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-8 pb-8">
                <Section label="About">
                  <p className="text-sm leading-[1.65] text-neutral-700 mb-4">
                    {startup.oneLiner}
                  </p>
                  <p className="text-sm leading-[1.65] text-neutral-600">
                    {startup.whyInteresting}
                  </p>
                </Section>

                <Section label="Funding">
                  <p className="font-mono-numbers text-xs uppercase tracking-wider text-neutral-600">
                    {startup.lastRaiseAmount} &mdash; {startup.lastRaiseDate}
                  </p>
                </Section>

                <Section label="Team">
                  <p className="font-mono-numbers text-xs uppercase tracking-wider text-neutral-600 mb-1">
                    ~{startup.teamSize} people
                  </p>
                  {startup.founders.length > 0 && (
                    <p className="font-mono-numbers text-xs text-neutral-500">
                      {startup.founders.join(", ")}
                    </p>
                  )}
                  {startup.ycBatch && (
                    <p className="font-mono-numbers text-xs text-neutral-400 mt-1">
                      YC {startup.ycBatch}
                    </p>
                  )}
                </Section>

                {(startup.website || startup.linkedinUrl) && (
                  <Section label="Links">
                    <div className="flex flex-col gap-2">
                      {startup.website && (
                        <a
                          href={startup.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono-numbers text-xs text-neutral-600 underline hover:text-sage transition-colors"
                        >
                          {startup.website.replace(/^https?:\/\//, "")}
                        </a>
                      )}
                      {startup.linkedinUrl && (
                        <a
                          href={startup.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono-numbers text-xs text-neutral-600 underline hover:text-sage transition-colors"
                        >
                          LinkedIn
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
