export interface CaseStudyShot {
  src: string;
  alt: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  domain: string;
  href: string;
  oneLiner: string;
  outcome: string;
  year: string;
  scope: string;
  stack: string[];
  tags: string[];
  challenge: string;
  approach: string;
  approachPoints: string[];
  result: string;
  shots: {
    hero: CaseStudyShot;
    detailA: CaseStudyShot;
    detailB: CaseStudyShot;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "slay",
    name: "Slay",
    domain: "slayspace.io",
    href: "https://slayspace.io",
    oneLiner:
      "A next-generation engagement economy platform where user actions create measurable value and digital identity becomes a user-owned asset.",
    outcome: "Full-stack build, token economy, and AI features shipped end to end.",
    year: "2024",
    scope: "Full-Stack, Web3, AI",
    stack: ["Next.js", "Node.js", "Solidity", "OpenAI", "React Native"],
    tags: ["Web3", "Creator Economy", "AI Features", "Full-Stack"],
    challenge:
      "Slay set out to change what a social platform owes its users: every post, reaction, and follow was meant to create value the user actually keeps, not just engagement the platform monetizes. That meant designing a token economy from scratch, building AI features that felt native rather than bolted on, and shipping web and mobile apps in parallel, all before the market moved on.",
    approach:
      "We joined as the end-to-end engineering team, not a single-discipline vendor. On the product side, we built the web application and iOS/Android apps from one shared architecture to keep feature parity manageable. On the protocol side, we designed and implemented the token economy logic that turns user actions into measurable value. On the AI side, we shipped an AI companion feature and automatic caption generation, both integrated directly into the core posting flow rather than offered as a separate tool.",
    approachPoints: [
      "Full-stack web build on a component architecture shared with the mobile clients",
      "Token economy logic designed and implemented for real user actions, not a simulated testnet demo",
      "AI companion and auto-caption features built into the core posting flow",
      "iOS and Android apps shipped alongside web from a single product architecture",
    ],
    result:
      "Slay launched with its web, mobile, token economy, and AI features shipped together as one coherent product, not staggered releases bolted on after the fact. The engagement economy model works because every layer, web, protocol, and AI, was built by the same team with the same understanding of what the platform was trying to prove.",
    shots: {
      hero: {
        src: "/work/slay-hero.jpg",
        alt: "Slay landing page hero showing the mobile app and engagement economy stats",
      },
      detailA: {
        src: "/work/slay-detail-1.jpg",
        alt: "Slay creative suite section with post, discover, and earn flows",
      },
      detailB: {
        src: "/work/slay-detail-2.jpg",
        alt: "Slay feature grid showing how user actions convert into token value",
      },
    },
  },
  {
    slug: "bitnautic",
    name: "BitNautic",
    domain: "bitnautic.com",
    href: "https://bitnautic.com",
    oneLiner:
      "A digital transformation platform for global supply chain management, connecting producers, retailers, shippers, and carriers on one system.",
    outcome: "Blockchain-based documentation and freight booking, built for real logistics volume.",
    year: "2023",
    scope: "Platform Engineering, Web3",
    stack: ["Node.js", "PostgreSQL", "Solidity", "React", "AWS"],
    tags: ["Supply Chain", "dApp", "Smart Contracts"],
    challenge:
      "Global freight runs on paperwork: bills of lading, customs documentation, and booking confirmations pass through producers, retailers, shippers, and carriers who often don't trust each other's records. BitNautic needed a platform where that documentation and booking flow could move digitally, with a shared source of truth none of the parties could quietly alter after the fact.",
    approach:
      "We built the platform's core data and integration backbone to handle multi-party workflows where every actor has a different role and different trust boundary. Blockchain-based documentation gave the system tamper-evident records for freight bookings and shipping documents, while the application layer stayed focused on what logistics teams actually need: booking, tracking, and status visibility without asking users to think about the chain underneath it.",
    approachPoints: [
      "Multi-party platform architecture for producers, retailers, shippers, and carriers",
      "Blockchain-based documentation for tamper-evident freight records",
      "Smart contract logic for freight booking and status transitions",
      "Backend and data design built for real supply chain transaction volume",
    ],
    result:
      "BitNautic operates as a working digital transformation platform for supply chain partners who previously coordinated through disconnected paperwork, with blockchain-backed documentation giving every party the same trusted record.",
    shots: {
      hero: {
        src: "/work/bitnautic-hero.jpg",
        alt: "BitNautic homepage hero introducing its supply chain digital transformation platform",
      },
      detailA: {
        src: "/work/bitnautic-detail-1.jpg",
        alt: "BitNautic about section describing its blockchain logistics network",
      },
      detailB: {
        src: "/work/bitnautic-detail-2.jpg",
        alt: "BitNautic solution cards for BTNT Enterprise, Docs, and Transport",
      },
    },
  },
  {
    slug: "biodry",
    name: "BioDry",
    domain: "biodry.in",
    href: "https://biodry.in",
    oneLiner:
      "A lead-generation website for an ecological device that eliminates rising damp in walls, built for the Indian market.",
    outcome: "SEO-optimized, conversion-focused build for a physical product business.",
    year: "2023",
    scope: "Web Development, SEO",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    tags: ["Web Development", "Lead Gen", "SEO"],
    challenge:
      "BioDry sells a physical device solving a problem most homeowners don't know has a name, let alone a search term. The site had to educate an unfamiliar audience on what rising damp is and why it matters, rank for the searches people actually run when their walls are failing, and convert that traffic into qualified leads for a physical product business, not just page views.",
    approach:
      "We built a fully SEO-optimized site structured around how homeowners actually search: symptoms first, cause second, product third. Technical SEO foundations, page speed, and structured content were treated as launch requirements, not a follow-up phase, since organic search was the primary acquisition channel for the business rather than a supplementary one.",
    approachPoints: [
      "Content architecture built around symptom-first search intent",
      "Technical SEO foundations: structured data, sitemaps, and clean semantic markup",
      "Conversion-focused page design for a considered, physical-product purchase",
      "Performance-tuned build for a market with mixed connection quality",
    ],
    result:
      "BioDry's site now runs as the business's primary lead generation channel, built to rank for an audience that starts a search without knowing the name of the product they need yet.",
    shots: {
      hero: {
        src: "/work/biodry-hero.jpg",
        alt: "BioDry homepage hero presenting the ecological anti-damp device",
      },
      detailA: {
        src: "/work/biodry-detail-1.jpg",
        alt: "BioDry product explanation with trust badges and free quote call to action",
      },
      detailB: {
        src: "/work/biodry-detail-2.jpg",
        alt: "BioDry professional applying the device to treat rising damp on a wall",
      },
    },
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
