export type Sector =
  | "AI Tooling"
  | "Fintech"
  | "Healthtech"
  | "Climate"
  | "Consumer"
  | "B2B SaaS"
  | "Vertical AI"
  | "Dev Tools"
  | "Marketplace"
  | "Productivity";

export type Stage =
  | "Pre-seed"
  | "Seed"
  | "Series A"
  | "Series B"
  | "Series C+";

export interface Startup {
  id: string;
  name: string;
  oneLiner: string;
  sector: Sector;
  stage: Stage;
  lastRaiseAmount: string;
  lastRaiseDate: string;
  teamSize: number;
  founders: string[];
  website: string;
  linkedinUrl: string;
  ycBatch?: string | null;
  tags: string[];
  whyInteresting: string;
}

export const SECTORS: Sector[] = [
  "AI Tooling",
  "Fintech",
  "Healthtech",
  "Climate",
  "Consumer",
  "B2B SaaS",
  "Vertical AI",
  "Dev Tools",
  "Marketplace",
  "Productivity",
];

export const STAGES: Stage[] = [
  "Pre-seed",
  "Seed",
  "Series A",
  "Series B",
  "Series C+",
];
