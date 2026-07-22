import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProcessSteps } from "@/components/sections/process-steps";

const STEPS = [
  {
    step: "Discovery",
    description:
      "We dig into your vision, users, and market to define what actually needs to be built.",
  },
  {
    step: "Architecture",
    description:
      "We design the technical foundation and pick the stack that fits your scale, not our comfort zone.",
  },
  {
    step: "Build",
    description:
      "Agile sprints, transparent progress, working software early and often.",
  },
  {
    step: "Launch & Scale",
    description:
      "We deploy, monitor, and iterate until it holds up in the real world.",
  },
];

export function HowWeWork({ compact = false }: { compact?: boolean }) {
  return (
    <Section tone="paper" compact={compact}>
      <Container>
        <SectionHeading
          eyebrow="How we work"
          heading="The same four steps, every time."
          subline="Whether it's a six-week MVP or a year-long build, the sequence doesn't change. Only the scope does."
        />
        <div className="mt-16">
          <ProcessSteps steps={STEPS} />
        </div>
      </Container>
    </Section>
  );
}
