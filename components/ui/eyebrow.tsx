import { cn } from "@/lib/utils";

const toneStyles = {
  signal: "text-signal",
  slate: "text-slate",
  paper: "text-paper/60",
  mint: "text-mint",
};

export function Eyebrow({
  children,
  tone = "signal",
  className,
  as: Tag = "p",
}: {
  children: React.ReactNode;
  tone?: keyof typeof toneStyles;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        "flex items-center gap-2 font-mono text-mono-xs uppercase",
        toneStyles[tone],
        className,
      )}
    >
      <span aria-hidden className="text-current/70">
        {"//"}
      </span>
      {children}
    </Tag>
  );
}
