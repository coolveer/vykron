import { siteConfig } from "@/lib/site.config";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function CtaSection({
  heading = "Let's build something that ships.",
  subline = "Tell us your goals, timeline, and budget. We will tell you honestly whether we are the right team and what it would take to get started.",
  buttonLabel = "Start a project",
  href = "/contact",
}: {
  heading?: string;
  subline?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <Section tone="ink" grid>
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-display-lg font-medium text-paper">
            {heading}
          </h2>
          <p className="mt-5 text-balance text-body-lg text-paper/70">
            {subline}
          </p>
          <div className="mt-10 flex justify-center">
            <Button href={href} variant="primary" tone="dark">
              {buttonLabel}
            </Button>
          </div>
          <p className="mt-6 font-mono text-mono-xs text-paper/40">
            Average response time: {siteConfig.responseTime}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
