import { cn } from "@/lib/utils";

export function Tag({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2.5 py-1 font-mono text-mono-xs uppercase",
        tone === "dark"
          ? "border-paper/20 text-paper/70"
          : "border-slate/25 text-slate",
        className,
      )}
    >
      {children}
    </span>
  );
}
