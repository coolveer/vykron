import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { BlueprintGrid } from "@/components/motion/blueprint-grid";
import { Reveal } from "@/components/motion/reveal";

export function PageHero({
  eyebrow,
  heading,
  subline,
  children,
  wide = false,
  topPadded = true,
}: {
  eyebrow: string;
  heading: string;
  subline?: string;
  children?: React.ReactNode;
  wide?: boolean;
  /** Set false when a Breadcrumb already clears the fixed nav above this. */
  topPadded?: boolean;
}) {
  return (
    <section
      className={
        topPadded
          ? "relative overflow-hidden bg-paper pb-16 pt-36 md:pb-20 md:pt-44"
          : "relative overflow-hidden bg-paper pb-16 pt-12 md:pb-20 md:pt-16"
      }
    >
      <BlueprintGrid />
      <Container className="relative">
        <Reveal className={wide ? "max-w-4xl" : "max-w-3xl"}>
          <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
          <h1 className="text-balance text-display-lg font-medium text-ink">
            {heading}
          </h1>
          {subline ? (
            <p className="mt-6 max-w-2xl text-balance text-body-lg text-slate">
              {subline}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </Container>
    </section>
  );
}
