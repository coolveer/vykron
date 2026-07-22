import type { Metadata } from "next";
import { caseStudies } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Case studies from Vykron Technologies: Slay, BitNautic, and BioDry. Products we have taken from architecture to launch across AI, Web3, and web development.",
  path: "/work",
  eyebrow: "Work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        heading="Products we have taken from architecture to launch."
        subline="A small number of case studies, chosen because each one required a different kind of engineering: a token economy, a multi-party logistics platform, a lead-generation build that had to rank from day one."
      />

      <Section tone="paper" compact>
        <Container>
          <div className="grid grid-cols-1 gap-20">
            {caseStudies.map((caseStudy, i) => (
              <Reveal key={caseStudy.slug} delay={Math.min(i * 0.1, 0.2)}>
                <div className="mx-auto max-w-3xl">
                  <CaseStudyCard caseStudy={caseStudy} />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
