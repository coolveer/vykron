import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { HowWeWork } from "@/components/sections/how-we-work";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Vykron Technologies is a partnership started by engineers, not agency operators. We build with outcome-driven engineering: working software, one owner per outcome, no missed deadlines.",
  path: "/about",
  eyebrow: "About",
});

const VALUES = [
  {
    title: "Working software over slide decks",
    description:
      "We would rather show you a working build in week two than a roadmap deck in week one. Software that runs is the only proof that actually matters.",
  },
  {
    title: "One owner per outcome",
    description:
      "Every deliverable has one engineer accountable for it, not a committee. When something breaks, you know exactly who is fixing it.",
  },
  {
    title: "Boring tech where it counts, new tech where it pays",
    description:
      "We reach for proven infrastructure for the parts of your product that cannot fail, and spend our appetite for new tech where it actually moves the outcome, not where it looks good on a slide.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        heading="Built by engineers, not agency operators."
        subline="Vykron is the company we wished existed when we were the ones hiring development shops and getting missed deadlines back."
      />

      <Section tone="paper">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-body-lg text-ink">
                Vykron started as a partnership between engineers, not agency
                operators. We were writing production code before we were
                writing proposals, and that order has not changed. The team
                behind Vykron has built freelance products for early
                founders, led engineering teams inside top-tier development
                firms, and shipped software we owned outright, from the
                first commit to the customers using it today.
              </p>
            </Reveal>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            <Reveal delay={0.08}>
              <p className="text-body text-slate">
                Most of the software industry runs on a broken promise: a
                deadline that slips without warning, a scope that quietly
                expands, a deliverable that looks finished in a demo and
                falls apart in production. We started Vykron because we were
                tired of watching that happen, both as the engineers cleaning
                up after it and, early in our careers, as the ones who
                occasionally caused it.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-body text-slate">
                Outcome-driven engineering is our answer. We ship working
                software early and often, we keep progress visible instead
                of hidden behind status meetings, and the people writing
                your code are the people you talk to, not a rotating cast of
                account managers translating between you and an engineering
                team you never meet.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="ink" grid compact>
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-display-lg font-medium text-signal-bright">
              <Counter value={200} />+
            </span>
            <p className="mt-4 text-body-lg text-paper/70">
              AI solutions judged by our engineers at Google&apos;s GenAI
              Hackathon, evaluating exactly the kind of architecture and
              product decisions we get hired to make.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="border-t border-ink/10 pt-6">
                  <h2 className="text-display-sm font-medium text-ink">
                    {value.title}
                  </h2>
                  <p className="mt-3 text-body text-slate">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <HowWeWork compact />

      <CtaSection />
    </>
  );
}
