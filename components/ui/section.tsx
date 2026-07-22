import { cn } from "@/lib/utils";
import { BlueprintGrid } from "@/components/motion/blueprint-grid";

type Tone = "paper" | "ink" | "deep";

const toneStyles: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  ink: "bg-ink text-paper",
  deep: "bg-deep text-paper",
};

export function Section({
  children,
  className,
  tone = "paper",
  grid = false,
  compact = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: Tone;
  grid?: boolean;
  compact?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        toneStyles[tone],
        compact ? "py-section-sm" : "py-section-sm md:py-section",
        className,
      )}
    >
      {grid ? (
        <BlueprintGrid dark={tone === "ink" || tone === "deep"} />
      ) : null}
      <div className="relative">{children}</div>
    </section>
  );
}
