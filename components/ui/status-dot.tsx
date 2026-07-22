import { cn } from "@/lib/utils";

export function StatusDot({
  label,
  tone = "light",
  className,
}: {
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-pulse-node rounded-full bg-mint" />
        <span className="relative inline-flex size-2 rounded-full bg-mint" />
      </span>
      <span
        className={cn(
          "font-mono text-mono-xs uppercase",
          tone === "dark" ? "text-paper/70" : "text-slate",
        )}
      >
        {label}
      </span>
    </div>
  );
}
