import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

type Tone = "light" | "dark";

export function SectionHeading({
  eyebrow,
  heading,
  subline,
  tone = "light",
  layout = "stacked",
  headingClassName,
  className,
}: {
  eyebrow?: string;
  heading: React.ReactNode;
  subline?: React.ReactNode;
  tone?: Tone;
  layout?: "stacked" | "split";
  headingClassName?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        layout === "split"
          ? "grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-6"
          : "flex flex-col gap-6",
        className,
      )}
    >
      <div className={layout === "split" ? "lg:col-span-7" : undefined}>
        <Reveal>
          {eyebrow ? (
            <Eyebrow tone={tone === "dark" ? "paper" : "signal"} className="mb-5">
              {eyebrow}
            </Eyebrow>
          ) : null}
          <h2
            className={cn(
              "text-balance text-display-lg font-medium",
              tone === "dark" ? "text-paper" : "text-ink",
              headingClassName,
            )}
          >
            {heading}
          </h2>
        </Reveal>
      </div>
      {subline ? (
        <div className={layout === "split" ? "lg:col-span-5" : undefined}>
          <Reveal delay={0.08}>
            <p
              className={cn(
                "text-body-lg text-balance",
                tone === "dark" ? "text-paper/70" : "text-slate",
              )}
            >
              {subline}
            </p>
          </Reveal>
        </div>
      ) : null}
    </div>
  );
}
