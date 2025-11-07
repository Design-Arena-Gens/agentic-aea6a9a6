export type Platform =
  | "Amazon"
  | "Flipkart"
  | "Meesho"
  | "Shopify"
  | "Myntra"
  | "Ajio"
  | "YouTube"
  | "Instagram"
  | "Facebook"
  | "Pinterest"
  | "Quora"
  | "Fiverr"
  | "Upwork"
  | "Kindle"
  | "Gumroad"
  | "Notion";

export interface AutomationNode {
  id: string;
  label: string;
  description: string;
  category: "Input" | "Process" | "AI Engine" | "Output" | "Monitor";
}

export const growthTargets = [
  {
    label: "Dropshipping GMV",
    target: "₹1.2 Cr / month",
    timeline: "120 days",
    automation: "Hybrid AI logistics + supplier intelligence"
  },
  {
    label: "Affiliate Revenue",
    target: "₹15L / month",
    timeline: "90 days",
    automation: "Auto content generation + AI video syndication"
  },
  {
    label: "Freelance Retainers",
    target: "₹8L / month",
    timeline: "75 days",
    automation: "AI proposal engine + delivery automations"
  },
  {
    label: "Info Products",
    target: "₹6L / month",
    timeline: "60 days",
    automation: "Research > Draft > Publish > Launch autopilot"
  }
];

export const automationNodes: AutomationNode[] = [
  {
    id: "market-intel",
    label: "AI Market Intel",
    description:
      "Scrape demand, pricing, and trend data across Indian marketplaces & social signals every 4h.",
    category: "Input"
  },
  {
    id: "product-curation",
    label: "Product Curation",
    description:
      "LLM filters for high-margin SKUs, bundles offers, and negotiates supplier margin via templated outreach.",
    category: "Process"
  },
  {
    id: "brand-factory",
    label: "Brand Asset Factory",
    description:
      "Generative pipeline crafting storefront copy, ads, creatives, and localized hooks per channel.",
    category: "AI Engine"
  },
  {
    id: "omni-launcher",
    label: "Omni-Channel Launcher",
    description:
      "N8N-compatible playbooks pushing listings, ads, and influencer tasks to every marketplace + social channel.",
    category: "Output"
  },
  {
    id: "performance-ops",
    label: "Performance Ops",
    description:
      "Revenue radar with AI alerting, blended CAC watch, and automated reinvestment rules via Razorpay & Stripe exports.",
    category: "Monitor"
  }
];

export const quickActions = [
  {
    title: "Launch 100 Winning SKUs",
    steps: [
      "Identify 20 micro-niches using Google Trends + Amazon data APIs.",
      "Auto-generate supplier outreach cadences via AI email agent.",
      "Deploy Shopify + Meesho storefront bundles with synchronized inventory.",
      "Spin TikTok/Reel scripts + voiceovers using clone pipeline and schedule via Metricool."
    ],
    tools: ["Browse.ai", "Notion API", "Zapier alternative: Activepieces", "Metricool API"],
    impact: "₹25L monthly net with 35% margin within 45 days."
  },
  {
    title: "Affiliate Engine",
    steps: [
      "AI selects trending products; drafts evergreen scripts and posts.",
      "Auto records faceless video via D-ID API and schedules to YouTube + Shorts.",
      "Distribute summaries to Quora, LinkedIn, Pinterest via queue automations."
    ],
    tools: ["PyTube", "Pictory/D-ID", "N8N", "Repurpose.io alt: Crosspostly"],
    impact: "₹8L monthly commissions with compounding audience growth."
  },
  {
    title: "Freelance Ghost Agency",
    steps: [
      "AI qualifies leads scraped from AngelList, AppSumo Launches, and Product Hunt.",
      "Proposal engine merges case studies + ROI models; sends via cold outreach sequences.",
      "Delivery pods auto-generate reports, dashboards, and Loom breakdowns."
    ],
    tools: ["Phantombuster", "Smartlead alt: Instantly", "Hexowatch", "Canva bulk editor"],
    impact: "₹5L monthly retainers/client across 4 active clients."
  }
];

export const executionSprints = [
  {
    phase: "Day 1-3",
    name: "Signal Lock",
    focus: "Market intelligence + niche prioritization across commerce, content, and services.",
    deliverables: [
      "15 niche briefs with TAM, margin, and competition data.",
      "Automation stack map + API keys secured.",
      "Master operating Notion + ClickUp dashboards."
    ]
  },
  {
    phase: "Day 4-7",
    name: "Product Firehose",
    focus: "Supplier acquisition + storefront scaffolding + payment rails.",
    deliverables: [
      "Supplier CRM with 50 verified contacts",
      "Shopify/GlowRoad/Meesho storefront templates live",
      "Automated price intelligence triggers"
    ]
  },
  {
    phase: "Day 8-11",
    name: "Content Havoc",
    focus: "AI pipeline for daily video, shorts, carousels, SEO articles across networks.",
    deliverables: [
      "100-script content vault segmented by platform",
      "Auto-video production assembly line",
      "Affiliate link cloaking + tracking stack"
    ]
  },
  {
    phase: "Day 12-15",
    name: "Revenue Orchestration",
    focus: "Paid amplification, influencer pods, upsell funnels, and real-time ops dashboard.",
    deliverables: [
      "Ad budgets auto-rebalanced via performance guardrails",
      "Influencer micro-campaign automations",
      "24/7 finance cockpit with cashflow forecasts"
    ]
  }
];

export const faq = [
  {
    question: "How is everything automated without hiring a team?",
    answer:
      "Every workflow runs through modular AI agents orchestrated inside a free N8N-compatible stack (Activepieces + Windmill). We chain research, creation, publishing, and optimization into hands-free loops. You control strategy; agents operate execution."
  },
  {
    question: "What about compliance, taxes, and GST?",
    answer:
      "The finance cockpit tracks GST filings, reconciles marketplace settlements, and alerts on compliance deadlines. We integrate ClearTax APIs + Google Sheets macros with AI summarization so filings become review-and-click instead of manual chaos."
  },
  {
    question: "Do I need coding skills to run this?",
    answer:
      "No. All automations are delivered as drag-and-drop workflows, templates, and documented prompts. You only toggle API keys and adjust growth levers that match your risk appetite."
  },
  {
    question: "How fast until cash flow?",
    answer:
      "Pilot campaigns go live within 10 days, with reinvestment loops configured by Day 15. Cash flow depends on inventory cycles, but dropshipping + affiliate funnels begin generating within the first month."
  }
];

export const resourceStack = [
  {
    category: "Automation Orchestrators",
    items: [
      {
        name: "Activepieces",
        description: "Open-source Zapier alt; excels at workflow automation with 100+ connectors.",
        link: "https://www.activepieces.com/"
      },
      {
        name: "Windmill",
        description: "Self-hostable automation platform ideal for Python-heavy AI workflows.",
        link: "https://www.windmill.dev/"
      },
      {
        name: "N8N",
        description: "Battle-tested automation flows; perfect for queueing long-running tasks.",
        link: "https://n8n.io/"
      }
    ]
  },
  {
    category: "AI Creation Stack",
    items: [
      {
        name: "Pika Labs",
        description: "Generate short-form video ads in seconds from script outlines.",
        link: "https://www.pika.art/"
      },
      {
        name: "ElevenLabs",
        description: "Multi-language voice cloning for ads, explainers, and support.",
        link: "https://elevenlabs.io/"
      },
      {
        name: "Gamma",
        description: "Autogenerate pitch decks, landing pages, and reports using AI frameworks.",
        link: "https://gamma.app/"
      }
    ]
  },
  {
    category: "Commerce + Finance",
    items: [
      {
        name: "Sumtracker",
        description: "Inventory sync across Amazon, Flipkart, Shopify, and Meesho to prevent overselling.",
        link: "https://sumtracker.com/"
      },
      {
        name: "ClearTax APIs",
        description: "GST e-invoicing, filings, reconciliation with AI-assisted summarization.",
        link: "https://cleartax.in/"
      },
      {
        name: "Razorpay Capital",
        description: "Working capital + automated credit lines with repayment guardrails.",
        link: "https://razorpay.com/capital/"
      }
    ]
  }
];
