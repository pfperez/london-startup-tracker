import type { Startup } from "@/types/startup";

// ─── HOW TO ADD A STARTUP ──────────────────────────────────────────────────
// Copy one block below, give it a unique id, fill in all fields.
// Fields marked "// TODO: verify" are plausible estimates, not confirmed data.
// Set website / linkedinUrl to "" if the URL can't be confirmed — the UI
// hides the button when the field is an empty string.
// ──────────────────────────────────────────────────────────────────────────

export const startups: Startup[] = [
  // ── 1 ── Trace
  {
    id: "trace",
    name: "Trace",
    oneLiner:
      "Workflow automation platform that routes tasks to the right agent — human or AI — inside tools like Slack, Jira, and Notion.",
    sector: "AI Tooling",
    stage: "Seed",
    lastRaiseAmount: "$3M",
    lastRaiseDate: "Feb 2026",
    teamSize: 5, // TODO: verify
    founders: ["Tim Cherkasov", "Artur Romanov"],
    website: "https://trace.so",
    linkedinUrl: "https://www.linkedin.com/company/trace-so",
    ycBatch: "S25",
    tags: ["AI Agents", "Orchestration", "Workflow Automation", "YC"],
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
    stage: "Series C+",
    lastRaiseAmount: "$125M",
    lastRaiseDate: "2025",  // TODO: verify exact month for Series C
    teamSize: 35, // TODO: verify
    founders: ["Sam Forsyth", "Chris Pedregal"],
    website: "https://www.granola.ai",
    linkedinUrl: "https://www.linkedin.com/company/meetgranola",
    ycBatch: null,
    tags: ["Meetings", "Productivity", "AI Notes", "MacOS"],
    whyInteresting:
      "Strong cult following among London operators — the product literally disappears into your workflow. Raised to $1.5B valuation on unusually strong retention for a notes app.",
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
    website: "https://www.lindushealth.com",
    linkedinUrl: "https://www.linkedin.com/company/lindushealth",
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
    lastRaiseAmount: "$26M",
    lastRaiseDate: "Jan 2024",
    teamSize: 120, // TODO: verify
    founders: ["Richard Robinson", "James Clough"],
    website: "https://www.robinai.com",
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
      "AI personal finance assistant that helps young people budget, save, and avoid overdraft fees through an irreverent chat interface.",
    sector: "Fintech",
    stage: "Series C+",
    lastRaiseAmount: "$140M", // TODO: verify — reflects reported raise
    lastRaiseDate: "2024", // TODO: verify exact month
    teamSize: 250, // TODO: verify
    founders: ["Barney Hussey-Yeo"],
    website: "https://web.meetcleo.com",
    linkedinUrl: "https://www.linkedin.com/company/cleo-ai",
    ycBatch: null,
    tags: ["Personal Finance", "Gen Z", "Consumer AI", "Budgeting"],
    whyInteresting:
      "Cleo cracked the tone problem that every fintech fails at — it talks to Gen Z the way they actually communicate. Engagement metrics rival social apps, not financial ones.",
  },

  // ── 6 ── Peec AI
  // NOTE: Peec AI is headquartered in Berlin, not London.
  // Included because the product/thesis is highly relevant to London's AI ecosystem.
  {
    id: "peec-ai",
    name: "Peec AI",
    oneLiner:
      "AI search analytics platform that tracks how brands appear in ChatGPT, Perplexity, and other generative search engines.",
    sector: "AI Tooling",
    stage: "Series A",
    lastRaiseAmount: "$21M",
    lastRaiseDate: "Nov 2025",
    teamSize: 20, // TODO: verify
    founders: ["Paul-Louis Nech", "Alexis Renard"], // TODO: verify
    website: "https://peec.ai",
    linkedinUrl: "https://www.linkedin.com/company/peec-ai",
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
      "Results-based billing infrastructure for AI agents — lets agent builders charge customers based on value delivered, not seat licences.",
    sector: "Dev Tools",
    stage: "Seed",
    lastRaiseAmount: "$21.6M",
    lastRaiseDate: "Sep 2025",
    teamSize: 15, // TODO: verify
    founders: ["Manny Medina"],
    website: "https://paid.ai",
    linkedinUrl: "https://www.linkedin.com/company/paid-ai",
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
      "AI-native film studio producing commercials, music videos, and branded content using generative video at a fraction of traditional cost.",
    sector: "Consumer",
    stage: "Seed",
    lastRaiseAmount: "$12M",
    lastRaiseDate: "Oct 2025",
    teamSize: 15, // TODO: verify
    founders: ["Xavier Collins", "Justin Hackney"],
    website: "https://wonderstudios.com",
    linkedinUrl: "https://www.linkedin.com/company/wearewonderstudios",
    ycBatch: null,
    tags: ["Generative Video", "Film", "Creative AI", "Consumer"],
    whyInteresting:
      "Targeting the long tail of filmmakers who have a vision but not a $2M budget. Backed by OpenAI and DeepMind execs. If gen video continues improving at its current pace, Wonder's distribution moat compounds fast.",
  },

  // ── 9 ── Archestra
  {
    id: "archestra",
    name: "Archestra",
    oneLiner:
      "Enterprise MCP platform that adds security guardrails, access controls, and an internal registry for AI agents and MCP servers.",
    sector: "AI Tooling",
    stage: "Pre-seed",
    lastRaiseAmount: "$3.3M",
    lastRaiseDate: "Aug 2025",
    teamSize: 6, // TODO: verify
    founders: ["Matvey Kukuy", "Ildar Iskhakov"],
    website: "https://archestra.ai",
    linkedinUrl: "https://www.linkedin.com/company/archestra-ai",
    ycBatch: null,
    tags: ["MCP", "AI Agents", "Enterprise", "Security"],
    whyInteresting:
      "Anthropic's Model Context Protocol is becoming the TCP/IP of agent communication; Archestra is betting that enterprises need a managed security layer on top of it. Founders previously exited incident management startup Amixr to Grafana.",
  },

  // ── 10 ── Seapoint
  {
    id: "seapoint",
    name: "Seapoint",
    oneLiner:
      "AI-native financial operations platform for early-stage startups — connects banks, accounting tools, and payroll in one place.",
    sector: "Fintech",
    stage: "Seed",
    lastRaiseAmount: "€7.5M",
    lastRaiseDate: "Apr 2026",
    teamSize: 20, // TODO: verify
    founders: ["Sean Mullaney"],
    website: "https://www.seapoint.co",
    linkedinUrl: "", // LinkedIn company page not confidently identified
    ycBatch: null,
    tags: ["CFO Tools", "Fintech", "AI Automation", "Stripe Alumni"],
    whyInteresting:
      "Finance ops is one of the last enterprise workflows still running on Excel and manual processes. Led by Stripe's former European CIO — exactly the domain expertise this problem needs.",
  },
];
