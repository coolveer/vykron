import { cn } from "@/lib/utils";
import { Counter } from "@/components/motion/counter";

export function Stat({
  index,
  value,
  suffix = "",
  label,
  qualifier,
  tone = "dark",
  className,
}: {
  index: string;
  value: number;
  suffix?: string;
  label: string;
  qualifier?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 border-t py-6",
        tone === "dark" ? "border-paper/15" : "border-ink/10",
        className,
      )}
    >
      <span
        className={cn(
          "font-mono text-mono-xs",
          tone === "dark" ? "text-paper/40" : "text-slate/70",
        )}
      >
        {index}
      </span>
      <span
        className={cn(
          "font-display text-display-lg font-medium tabular-nums",
          tone === "dark" ? "text-paper" : "text-ink",
        )}
      >
        <Counter value={value} />
        {suffix}
      </span>
      <div>
        <p
          className={cn(
            "text-body-lg font-medium",
            tone === "dark" ? "text-paper" : "text-ink",
          )}
        >
          {label}
        </p>
        {qualifier ? (
          <p
            className={cn(
              "mt-1 text-small",
              tone === "dark" ? "text-paper/55" : "text-slate",
            )}
          >
            {qualifier}
          </p>
        ) : null}
      </div>
    </div>
  );
}
