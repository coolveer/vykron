import { caseStudies } from "@/content/case-studies";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { CaseStudyCard } from "@/components/sections/case-study-card";

export function SelectedWork() {
  return (
    <Section tone="paper">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            heading="Products we have taken from architecture to launch."
            className="sm:max-w-2xl"
          />
          <Reveal delay={0.1} className="hidden sm:block">
            <Button href="/work" variant="secondary" arrow="right">
              All work
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-3">
          {caseStudies.map((caseStudy, i) => (
            <Reveal key={caseStudy.slug} delay={i * 0.1}>
              <CaseStudyCard caseStudy={caseStudy} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Button href="/work" variant="secondary" arrow="right">
            All work
          </Button>
        </div>
      </Container>
    </Section>
  );
}
