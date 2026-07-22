export interface ServiceProcessStep {
  step: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  navTitle: string;
  shortSummary: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroSubline: string;
  angle: string;
  whatWeBuild: string[];
  process: ServiceProcessStep[];
  techStack: string[];
  proof: {
    label: string;
    description: string;
  };
  faq: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: "ai-development",
    navTitle: "AI & LLM Integration",
    shortSummary:
      "Production AI features with OpenAI, Anthropic, and Amazon Bedrock: assistants, RAG pipelines, and automation that earn their place in the product.",
    seoTitle: "AI Development Company",
    metaDescription:
      "Vykron builds production AI features with OpenAI, Anthropic, and Amazon Bedrock: LLM workflows, RAG pipelines, and AI automation designed for measurable business value.",
    h1: "AI development built for production, not demos.",
    heroSubline:
      "We build LLM-powered features with OpenAI, Anthropic, and Amazon Bedrock: chatbots, RAG pipelines, and automation that hold up under real usage and real cost constraints.",
    angle:
      "We embed AI where it drives measurable business value, not where it demos well.",
    whatWeBuild: [
      "LLM-powered workflows and internal tools",
      "Chatbots and product assistants",
      "RAG pipelines over private and proprietary data",
      "AI automation for operations and support",
      "Prompt design and evaluation frameworks",
      "Cost and latency optimization for models already in production",
    ],
    process: [
      {
        step: "Use-case audit",
        description:
          "We map where AI actually moves a business metric versus where it just looks impressive in a demo.",
      },
      {
        step: "Model and architecture selection",
        description:
          "We pick the model, retrieval strategy, and hosting setup for your latency, cost, and data constraints.",
      },
      {
        step: "Prompt and eval design",
        description:
          "We build a test set before we build the feature, so quality is measured, not guessed at.",
      },
      {
        step: "Build and integrate",
        description:
          "We ship the feature inside your existing product, with logging and fallbacks for when a model call fails.",
      },
      {
        step: "Monitor and tune",
        description:
          "We track cost, latency, and accuracy in production and keep tuning after launch.",
      },
    ],
    techStack: [
      "OpenAI",
      "Anthropic",
      "Amazon Bedrock",
      "TypeScript",
      "Python",
      "pgvector",
      "Redis",
    ],
    proof: {
      label: "Shipped in production on Slay",
      description:
        "We built AI companion and auto-caption features into Slay's engagement economy platform, and our engineers have judged 200+ AI solutions at Google's GenAI Hackathon.",
    },
    faq: [
      {
        question: "How do you decide whether a feature actually needs AI?",
        answer:
          "We start from the business metric you want to move, then work backward. If a rules-based system or a simpler UI gets you there faster and cheaper, we say so. AI earns its place in the stack, it does not get added by default.",
      },
      {
        question: "Which models do you build with, and how do you choose?",
        answer:
          "Mostly OpenAI, Anthropic, and Amazon Bedrock, chosen per use case on accuracy, latency, and cost, not brand preference. For most products this means a smaller, cheaper model for high-volume tasks and a stronger model reserved for the calls that need it.",
      },
      {
        question: "How do you keep AI costs predictable at scale?",
        answer:
          "We design for token efficiency from the start: caching, prompt compression, model tiering, and usage caps where they make sense. We also instrument cost per request so you see the number before it surprises you in a bill.",
      },
      {
        question: "Can you add AI features to an existing codebase?",
        answer:
          "Yes. Most of our AI work is integration into a product that already exists, not greenfield builds. We audit your current architecture first so the AI layer fits how your system already handles auth, data, and jobs.",
      },
      {
        question: "How do you handle data privacy with third-party model providers?",
        answer:
          "We review what data actually needs to reach a model provider, apply redaction or scoping where it doesn't, and configure provider settings (retention, training opt-out) to match your compliance requirements before anything ships.",
      },
    ],
  },
  {
    slug: "saas-development",
    navTitle: "Custom SaaS Development",
    shortSummary:
      "Full-cycle SaaS engineering: multi-tenant architecture, auth, billing, and admin tooling built to scale past the MVP without a rewrite.",
    seoTitle: "Custom SaaS Development Company",
    metaDescription:
      "Vykron builds custom SaaS platforms end to end: multi-tenant architecture, auth, billing, and admin dashboards, from MVP in weeks to enterprise scale.",
    h1: "Custom SaaS development, from first user to enterprise scale.",
    heroSubline:
      "We build cloud-native SaaS platforms with the auth, billing, and multi-tenant architecture your product needs on day one, not bolted on after a rewrite.",
    angle: "MVP to scale, without the rewrite in between.",
    whatWeBuild: [
      "Multi-tenant SaaS architecture",
      "Authentication and role-based access control",
      "Billing and subscription systems",
      "Admin dashboards and internal tooling",
      "Usage analytics and metering",
      "Onboarding flows that convert trials into accounts",
    ],
    process: [
      {
        step: "Discovery and scope",
        description:
          "We define the core workflow your SaaS has to nail before anything else gets built.",
      },
      {
        step: "Architecture",
        description:
          "We design the data model and tenancy strategy for your actual growth curve, not a hypothetical one.",
      },
      {
        step: "Build in weekly increments",
        description:
          "You see working software every week, not a status update every month.",
      },
      {
        step: "Billing and auth hardening",
        description:
          "We wire up Stripe, roles, and permissions before launch, not as a fire drill after your first enterprise customer asks for SSO.",
      },
      {
        step: "Launch and scale support",
        description:
          "We stay on to monitor, fix, and extend the platform once real users are on it.",
      },
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Stripe", "Redis", "AWS", "Docker"],
    proof: {
      label: "8+ years of combined production shipping",
      description:
        "Our team has taken SaaS and platform products from first architecture decision to paying customers, across founder-led builds and client engagements.",
    },
    faq: [
      {
        question: "How fast can you get an MVP live?",
        answer:
          "Most SaaS MVPs with a clear core workflow ship in 6 to 10 weeks. Timelines depend on integration complexity, particularly billing, SSO, and third-party data sources, which we scope honestly before committing to a date.",
      },
      {
        question: "Should we build multi-tenant from day one?",
        answer:
          "Usually yes, if you already know you are selling to multiple organizations. Retrofitting tenancy into a single-tenant data model later is one of the more expensive rewrites in SaaS, so we design for it early even when the MVP only has one customer.",
      },
      {
        question: "Do you handle billing and subscription logic?",
        answer:
          "Yes, typically on Stripe: plans, metered usage, upgrades and downgrades, dunning, and invoicing. We also handle the account-state logic around billing, like what a user can and cannot do mid-cycle or past due.",
      },
      {
        question: "Who owns the codebase after launch?",
        answer:
          "You do, fully. We hand over a clean repository, documentation, and infrastructure access. There is no vendor lock-in and no dependency on us to keep operating your own product.",
      },
      {
        question: "Do you support the product after it launches?",
        answer:
          "Most clients keep us on in some capacity for monitoring, iteration, and new features, but it is never a requirement. We scope post-launch support separately from the build so you are not paying for a retainer you did not ask for.",
      },
    ],
  },
  {
    slug: "web-development",
    navTitle: "Full-Stack Web Development",
    shortSummary:
      "React, Next.js, Node.js, and TypeScript. Fast, SEO-ready, maintainable web applications with performance treated as a default, not a phase.",
    seoTitle: "Full-Stack Web Development Company",
    metaDescription:
      "Vykron builds fast, SEO-ready web applications with React, Next.js, Node.js, and TypeScript, with Core Web Vitals treated as a default, not an afterthought.",
    h1: "Full-stack web development that scores as well as it sells.",
    heroSubline:
      "React, Next.js, Node.js, and TypeScript, built for Core Web Vitals and search from the first commit, not patched in before launch.",
    angle: "Performance and code quality as defaults, not a pre-launch scramble.",
    whatWeBuild: [
      "Marketing sites and web applications",
      "E-commerce and content platforms",
      "Design system implementation",
      "API integration and data-driven interfaces",
      "Technical SEO foundations",
      "Performance optimization and Core Web Vitals tuning",
    ],
    process: [
      {
        step: "Discovery and sitemap",
        description:
          "We map the pages, content model, and conversion paths before any component gets built.",
      },
      {
        step: "Design system and architecture",
        description:
          "We build a token-based component system so the site stays consistent as it grows.",
      },
      {
        step: "Build and content integration",
        description:
          "We wire up the CMS or data source and build against real content, not lorem ipsum.",
      },
      {
        step: "Performance and SEO pass",
        description:
          "We audit Core Web Vitals, metadata, and structured data before launch, not after a client complains.",
      },
      {
        step: "Launch and monitor",
        description:
          "We deploy, watch real-user metrics, and fix regressions before they cost you rankings.",
      },
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Vercel", "AWS"],
    proof: {
      label: "95+ Lighthouse performance as a baseline",
      description:
        "Our BioDry build shipped as a fully SEO-optimized, conversion-focused lead generation site for a physical product in a competitive market, not just a portfolio piece.",
    },
    faq: [
      {
        question: "Why Next.js instead of another framework?",
        answer:
          "For most marketing sites and web apps, Next.js gives us server rendering, image optimization, and routing in one framework without extra infrastructure. Where a client already runs something else successfully, we work in that stack rather than force a migration for its own sake.",
      },
      {
        question: "Can you migrate an existing site without losing search rankings?",
        answer:
          "Yes. We preserve URL structure, set up redirects for anything that has to change, and validate structured data and metadata before cutover. Ranking dips on a well-planned migration are usually avoidable, not inevitable.",
      },
      {
        question: "Do you handle SEO, or just the technical foundation?",
        answer:
          "We own the technical foundation: metadata, semantic HTML, structured data, sitemaps, and Core Web Vitals. Content strategy and link building are usually better served by a specialist, and we will say so rather than oversell it.",
      },
      {
        question: "How long does a typical web build take?",
        answer:
          "A focused marketing site is usually 3 to 5 weeks. A web application with custom data and interactions runs 8 to 14 weeks depending on scope. We give you a real number after discovery, not a placeholder range.",
      },
      {
        question: "What happens after launch?",
        answer:
          "You get a maintainable codebase and documentation regardless of whether you continue with us. Most clients keep us on for a lighter-touch retainer to handle updates and monitor performance, but the site works without one.",
      },
    ],
  },
  {
    slug: "backend-engineering",
    navTitle: "Backend, APIs & Microservices",
    shortSummary:
      "Node.js and NestJS services, REST and gRPC APIs, event streaming, and data modelling built for the load your product sees after it works.",
    seoTitle: "Backend Development Company",
    metaDescription:
      "Vykron builds backend systems that scale: Node.js and NestJS services, REST and gRPC APIs, Kafka event streaming, and PostgreSQL or MongoDB data design on AWS.",
    h1: "Backend engineering for the traffic you don't have yet.",
    heroSubline:
      "Node.js and NestJS services, REST and gRPC APIs, and event-driven architecture designed for the load your product will see after it works, not just while it's small.",
    angle: "The unglamorous layer that decides whether your product survives success.",
    whatWeBuild: [
      "REST and gRPC APIs",
      "Event streaming with Kafka and Redpanda",
      "PostgreSQL and MongoDB data modelling",
      "Service-to-service auth and rate limiting",
      "Third-party and internal system integrations",
      "AWS deployment and infrastructure",
    ],
    process: [
      {
        step: "Architecture audit",
        description:
          "We review what exists, or design service boundaries from scratch if there is nothing yet.",
      },
      {
        step: "Data modelling",
        description:
          "We design schemas and service boundaries around how your data actually gets read and written.",
      },
      {
        step: "Build and test",
        description:
          "We write services with automated tests around the logic that is expensive to get wrong.",
      },
      {
        step: "Load testing",
        description:
          "We test against realistic traffic patterns before your users do it for us in production.",
      },
      {
        step: "Deploy and observe",
        description:
          "We ship with logging, tracing, and alerting in place, not added after the first incident.",
      },
    ],
    techStack: ["Node.js", "NestJS", "PostgreSQL", "MongoDB", "Kafka", "gRPC", "Redis", "AWS"],
    proof: {
      label: "Built for supply chain scale on BitNautic",
      description:
        "We engineered the data and integration backbone connecting producers, retailers, shippers, and carriers on BitNautic's global logistics platform.",
    },
    faq: [
      {
        question: "Should we start with microservices or a monolith?",
        answer:
          "For most early-stage products, a well-structured monolith is faster to build and easier to reason about than microservices you do not need yet. We design internal boundaries so it can split later, and only recommend microservices when a real scaling or team-ownership problem calls for it.",
      },
      {
        question: "Can you take over and improve a legacy backend?",
        answer:
          "Yes, this is a common engagement. We start with an architecture audit to find where the risk actually lives, then prioritize fixes by what threatens uptime or velocity first, rather than rewriting everything at once.",
      },
      {
        question: "When do you use gRPC instead of REST?",
        answer:
          "gRPC for internal service-to-service calls where performance and strict contracts matter, REST for anything public-facing or consumed by a browser. Most systems end up using both, and we design the boundary deliberately rather than picking one dogmatically.",
      },
      {
        question: "How do you decide between PostgreSQL and MongoDB?",
        answer:
          "PostgreSQL by default for anything relational or transactional, MongoDB where the data is genuinely document-shaped or the access pattern benefits from it. We will tell you when a document database is being used to avoid schema design rather than because it fits.",
      },
      {
        question: "Do you provide ongoing on-call or uptime support?",
        answer:
          "We can, scoped explicitly as part of the engagement rather than assumed. For clients who want it, we set up monitoring and alerting and take a defined on-call rotation for production incidents.",
      },
    ],
  },
  {
    slug: "web3-development",
    navTitle: "Web3 & Smart Contract Engineering",
    shortSummary:
      "Solidity smart contracts on EVM-compatible chains, dApps, and token economy design, built by engineers who have shipped tokenized products.",
    seoTitle: "Smart Contract Development Services",
    metaDescription:
      "Vykron builds Solidity smart contracts, dApps, and token economy systems on EVM-compatible chains, engineered for security, audit readiness, and scale.",
    h1: "Smart contract engineering built to survive an audit and a bull market.",
    heroSubline:
      "Solidity contracts, dApps, and token economy design on EVM-compatible chains, built by engineers who have shipped tokenized products, not just testnets.",
    angle: "Secure, audited, and built for scale, not a weekend deploy.",
    whatWeBuild: [
      "Solidity smart contracts on EVM-compatible chains",
      "dApp front-ends",
      "Tokenization platforms",
      "Token economy and incentive design",
      "Wallet and on-chain identity integration",
      "Contract testing and audit preparation",
    ],
    process: [
      {
        step: "Token economy and contract spec",
        description:
          "We define incentive mechanics and contract behavior on paper before writing a line of Solidity.",
      },
      {
        step: "Contract development",
        description:
          "We build against the spec with security patterns applied from the first commit, not retrofitted.",
      },
      {
        step: "Testing",
        description:
          "Unit tests, fuzz testing, and testnet deployment before anything touches real value.",
      },
      {
        step: "Audit preparation",
        description:
          "We document assumptions and remediate findings ahead of and alongside third-party audit.",
      },
      {
        step: "Mainnet deployment",
        description:
          "We deploy with a monitoring and incident plan in place, not just a transaction hash and hope.",
      },
    ],
    techStack: ["Solidity", "Hardhat", "Foundry", "EVM Chains", "ethers.js", "IPFS"],
    proof: {
      label: "Token economy design on Slay, logistics on BitNautic",
      description:
        "We designed Slay's token-based engagement economy end to end and built BitNautic's blockchain-based freight documentation, with team experience at one of India's top blockchain development companies.",
    },
    faq: [
      {
        question: "Which chain should we build on?",
        answer:
          "It depends on your users' existing wallets, your gas cost tolerance, and whether you need EVM tooling compatibility. We compare options against your actual requirements rather than defaulting to whichever chain is trending.",
      },
      {
        question: "Do you handle smart contract audits?",
        answer:
          "We prepare contracts for audit and remediate findings, but we recommend an independent third-party auditor for the audit itself. A contract auditing its own code is a conflict of interest we won't put you in.",
      },
      {
        question: "How do you approach gas optimization?",
        answer:
          "We profile contract calls during testing and optimize storage layout, batch operations, and function visibility before deployment, since gas costs compound at scale in ways that are expensive to fix after launch.",
      },
      {
        question: "Can you help design our token economics, not just the contract?",
        answer:
          "Yes, this is part of the engagement, not a separate consulting track. We model incentive mechanics, supply, and distribution alongside the technical implementation, since a well-coded contract cannot fix a broken incentive design.",
      },
      {
        question: "Do you maintain contracts after mainnet deployment?",
        answer:
          "Immutable contracts cannot be patched after deployment, so we design upgrade paths where appropriate before launch and remain available for monitoring, incident response, and any new contract versions your product needs.",
      },
    ],
  },
  {
    slug: "solution-architecture",
    navTitle: "Solution Architecture & Technical Consulting",
    shortSummary:
      "System design reviews, stack selection, and scalability audits from engineers who have owned products end to end.",
    seoTitle: "Solution Architecture & Technical Consulting",
    metaDescription:
      "Vykron provides solution architecture reviews, stack selection, scalability audits, and technical due diligence for founders and non-technical teams.",
    h1: "Solution architecture for founders who need a second opinion.",
    heroSubline:
      "System design reviews, stack selection, and scalability audits from engineers who have owned products end to end, not consultants who hand off a slide deck.",
    angle: "Rent the judgment of engineers who have owned products end to end.",
    whatWeBuild: [
      "System design and architecture reviews",
      "Stack selection for new products",
      "Scalability and performance audits",
      "Technical due diligence for investors and acquirers",
      "Fractional technical leadership",
      "Engineering process audits",
    ],
    process: [
      {
        step: "Discovery workshop",
        description:
          "We sit with your team to understand the product, constraints, and the decision you actually need help with.",
      },
      {
        step: "Current-state assessment",
        description:
          "We review the codebase, architecture, or vendor landscape against your stated goals.",
      },
      {
        step: "Recommendations and roadmap",
        description:
          "We deliver a prioritized set of decisions and trade-offs, not a 40-page report nobody reads.",
      },
      {
        step: "Optional embedded execution",
        description:
          "If you want us to implement the recommendations, we can, with the same team that wrote them.",
      },
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Kafka", "AWS", "Solidity"],
    proof: {
      label: "Judgment earned by shipping, not just advising",
      description:
        "Our engineers have owned founder-led products end to end and judged 200+ AI solutions at Google's GenAI Hackathon, evaluating exactly the kind of architecture decisions we get hired to review.",
    },
    faq: [
      {
        question: "How is this different from hiring a general consultant?",
        answer:
          "Every recommendation comes from engineers who have built and operated production systems, not from a framework applied without context. We can also implement what we recommend, which keeps the advice grounded in what is actually achievable.",
      },
      {
        question: "What does a technical due diligence engagement look like?",
        answer:
          "We review the codebase, architecture, and engineering practices of a target company against the claims being made about it, then deliver a clear risk assessment for the investor or acquirer, typically within one to two weeks.",
      },
      {
        question: "Do you offer fractional technical leadership on an ongoing basis?",
        answer:
          "Yes, for founders who need senior technical judgment on tap without a full-time hire. This typically covers architecture decisions, code review, hiring input, and vendor evaluation on a set number of hours per week.",
      },
      {
        question: "We are non-technical. Can you explain findings without jargon?",
        answer:
          "That is most of the job. Our reviews are written for the decision-maker, not for other engineers, with technical detail available in an appendix for anyone on your team who wants it.",
      },
      {
        question: "How long does a scalability or architecture audit take?",
        answer:
          "Most audits take one to three weeks depending on codebase size and how much documentation already exists. We scope this precisely after an initial discovery call, not with a generic estimate.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
