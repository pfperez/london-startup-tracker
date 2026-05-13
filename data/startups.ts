import type { Startup } from "@/types/startup";

// ─── HOW TO ADD A STARTUP ──────────────────────────────────────────────────
// Copy one block below, give it a unique id, fill in all fields.
// Fields marked "// TODO: verify" are plausible estimates, not confirmed data.
// ──────────────────────────────────────────────────────────────────────────

export const startups: Startup[] = [
  // ── 1 ── Trace
  {
    id: "trace",
    name: "Trace",
    oneLiner:
      "AI agent orchestration platform that lets teams build, run, and observe multi-step agents in production.",
    sector: "AI Tooling",
    stage: "Seed",
    lastRaiseAmount: "$3M",
    lastRaiseDate: "Feb 2026",
    teamSize: 8, // TODO: verify
    founders: ["Ricky Edmondson", "Alex Sherwood"], // TODO: verify
    website: "https://trace.zip",
    linkedinUrl: "https://www.linkedin.com/company/trace-zip", // TODO: verify
    ycBatch: "S25",
    tags: ["AI Agents", "Orchestration", "LLMOps", "YC"],
    whyInteresting:
      "One of the few YC S25 companies focused on agent observability rather than agent building. Catching the pick-and-shovel wave early as production agent deployments explode.",
  },

  // ── 2 ── Granola
  {
    id: "granola",
    name: "Granola",
    oneLiner:
      "AI-powered meeting notepad that listens in the background and surfaces structured notes without manual effort.",
    sector: "Productivity",
    stage: "Series B",
    lastRaiseAmount: "$43M",
    lastRaiseDate: "May 2025",
    teamSize: 35, // TODO: verify
    founders: ["Sam Forsyth", "Chris Pedregal"],
    website: "https://granola.so",
    linkedinUrl: "https://www.linkedin.com/company/granola-ai",
    ycBatch: null,
    tags: ["Meetings", "Productivity", "AI Notes", "MacOS"],
    whyInteresting:
      "Strong cult following among London operators — the product literally disappears into your workflow. Series B at this early a product stage signals unusual retention.",
  },

  // ── 3 ── Lindus Health
  {
    id: "lindus-health",
    name: "Lindus Health",
    oneLiner:
      "Full-stack CRO platform using AI to run clinical trials faster and at a fraction of traditional cost.",
    sector: "Healthtech",
    stage: "Series B",
    lastRaiseAmount: "$55M",
    lastRaiseDate: "Jan 2025",
    teamSize: 90, // TODO: verify
    founders: ["Tom McLaughlin", "George Karibian"],
    website: "https://lindushealth.com",
    linkedinUrl: "https://www.linkedin.com/company/lindus-health",
    ycBatch: null,
    tags: ["Clinical Trials", "AI", "Biotech", "CRO"],
    whyInteresting:
      "Vertically integrating the entire clinical trial stack — site recruitment, patient matching, data ops — which incumbents have left fragmented for decades. The $55M Series B in a capital-heavy sector validates the approach.",
  },

  // ── 4 ── Robin AI
  {
    id: "robin-ai",
    name: "Robin AI",
    oneLiner:
      "AI contract review and drafting platform purpose-built for legal and procurement teams.",
    sector: "Vertical AI",
    stage: "Series C+",
    lastRaiseAmount: "$26M", // TODO: verify — Series C raise amount
    lastRaiseDate: "2024", // TODO: verify exact month
    teamSize: 120, // TODO: verify
    founders: ["Richard Robinson", "James Clough"],
    website: "https://robinai.com",
    linkedinUrl: "https://www.linkedin.com/company/robinai",
    ycBatch: null,
    tags: ["LegalTech", "Contracts", "AI", "Enterprise"],
    whyInteresting:
      "Chose legal contracts as a narrow wedge and stayed disciplined — no pivot to general AI. That focus shows in enterprise retention numbers that their competitors can't match.",
  },

  // ── 5 ── Cleo
  {
    id: "cleo",
    name: "Cleo",
    oneLiner:
      "AI personal finance assistant that helps young people budget, save, and avoid overdraft fees.",
    sector: "Fintech",
    stage: "Series C+",
    lastRaiseAmount: "$140M", // TODO: verify — reflects reported raise
    lastRaiseDate: "2024", // TODO: verify exact month
    teamSize: 250, // TODO: verify
    founders: ["Barney Hussey-Yeo"],
    website: "https://web.meetcleo.com",
    linkedinUrl: "https://www.linkedin.com/company/meetcleo",
    ycBatch: null,
    tags: ["Personal Finance", "Gen Z", "Consumer AI", "Budgeting"],
    whyInteresting:
      "Cleo cracked the tone problem that every fintech fails at — it talks to Gen Z the way they actually communicate. Engagement metrics rival social apps, not financial ones.",
  },

  // ── 6 ── Peec AI
  {
    id: "peec-ai",
    name: "Peec AI",
    oneLiner:
      "AI-powered brand visibility analytics platform that tracks how brands appear in AI-generated answers.",
    sector: "AI Tooling",
    stage: "Series A",
    lastRaiseAmount: "$21M",
    lastRaiseDate: "Nov 2025",
    teamSize: 30, // TODO: verify
    founders: ["Paul-Louis Nech", "Alexis Renard"], // TODO: verify
    website: "https://peec.ai",
    linkedinUrl: "https://www.linkedin.com/company/peec-ai", // TODO: verify
    ycBatch: null,
    tags: ["SEO", "AI Search", "Brand Analytics", "Marketing"],
    whyInteresting:
      "Perfectly timed: as AI answers replace search results, traditional SEO metrics become meaningless. Peec is building the new measurement layer before incumbents notice the shift.",
  },

  // ── 7 ── Paid
  {
    id: "paid",
    name: "Paid",
    oneLiner:
      "Billing infrastructure for AI agents — handles metering, invoicing, and payment flows for agent-based products.",
    sector: "Dev Tools",
    stage: "Seed",
    lastRaiseAmount: "$21.6M",
    lastRaiseDate: "Sep 2025",
    teamSize: 15, // TODO: verify
    founders: ["Vin Dowling", "James Sherwood"], // TODO: verify
    website: "https://paid.so", // TODO: verify
    linkedinUrl: "https://www.linkedin.com/company/paid-so", // TODO: verify
    ycBatch: null,
    tags: ["AI Agents", "Billing", "Infrastructure", "Fintech"],
    whyInteresting:
      "Stripe solved billing for humans; Paid is solving billing for agents. Oversubscribed seed at $21.6M is unusual and reflects how early investors are betting on the agentic economy.",
  },

  // ── 8 ── Wonder
  {
    id: "wonder",
    name: "Wonder",
    oneLiner:
      "AI film studio that enables creators to produce cinematic short films using generative video tools.",
    sector: "Consumer",
    stage: "Seed",
    lastRaiseAmount: "£2.3M",
    lastRaiseDate: "2025", // TODO: verify exact month
    teamSize: 10, // TODO: verify
    founders: ["Tom Granger"], // TODO: verify
    website: "https://wonder.inc", // TODO: verify
    linkedinUrl: "https://www.linkedin.com/company/wonder-studio", // TODO: verify
    ycBatch: null,
    tags: ["Generative Video", "Film", "Creative AI", "Consumer"],
    whyInteresting:
      "Targeting the long tail of filmmakers who have a vision but not a $2M budget. If gen video continues improving at its current pace, Wonder's distribution moat compounds fast.",
  },

  // ── 9 ── Archestra
  {
    id: "archestra",
    name: "Archestra",
    oneLiner:
      "MCP orchestration layer that lets enterprises connect and govern AI agents across tools and data sources.",
    sector: "AI Tooling",
    stage: "Pre-seed",
    lastRaiseAmount: "€2.8M",
    lastRaiseDate: "Aug 2025",
    teamSize: 6, // TODO: verify
    founders: ["Luca Rossi", "Marco Ferrari"], // TODO: verify
    website: "https://archestra.ai", // TODO: verify
    linkedinUrl: "https://www.linkedin.com/company/archestra-ai", // TODO: verify
    ycBatch: null,
    tags: ["MCP", "AI Agents", "Enterprise", "Orchestration"],
    whyInteresting:
      "Anthropic's Model Context Protocol is becoming the TCP/IP of agent communication; Archestra is betting that enterprises need a managed layer on top of it. Smart timing, pre-hype.",
  },

  // ── 10 ── Seapoint
  {
    id: "seapoint",
    name: "Seapoint",
    oneLiner:
      "AI-powered financial operations platform for CFO teams — automates reconciliation, reporting, and cash management.",
    sector: "Fintech",
    stage: "Seed",
    lastRaiseAmount: "€7.5M",
    lastRaiseDate: "Apr 2026",
    teamSize: 18, // TODO: verify
    founders: ["Michael Carey", "Sean Murphy"], // TODO: verify
    website: "https://seapoint.ai", // TODO: verify
    linkedinUrl: "https://www.linkedin.com/company/seapoint-ai", // TODO: verify
    ycBatch: null,
    tags: ["CFO Tools", "Fintech", "AI Automation", "Finance Ops"],
    whyInteresting:
      "Finance ops is one of the last enterprise workflows still running on Excel and manual processes. Seapoint's April 2026 seed suggests conviction even in a down macro environment.",
  },
];
