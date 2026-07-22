import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function Testimonial() {
  return (
    <Section tone="paper" compact>
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span aria-hidden className="text-hero font-medium leading-none text-signal/20">
              &ldquo;
            </span>
            <p className="mt-2 text-balance text-display font-medium text-ink">
              Vykron transformed our idea into a production ready AI platform
              in record time. Their technical depth and product thinking set
              them apart from every other agency we spoke to.
            </p>
            <p className="mt-8 font-mono text-mono text-slate">
              John, CEO, JDish
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
