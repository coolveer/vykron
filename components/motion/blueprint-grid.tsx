"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const NODES = [
  { top: "16%", left: "8%" },
  { top: "78%", left: "13%" },
  { top: "26%", left: "91%" },
  { top: "88%", left: "86%" },
];

export function BlueprintGrid({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
    >
      <div
        className={cn("absolute inset-0", dark ? "bg-blueprint-dark" : "bg-blueprint")}
      />
      {NODES.map((node, i) => (
        <span
          key={i}
          className="absolute size-4 -translate-x-1/2 -translate-y-1/2"
          style={{ top: node.top, left: node.left }}
        >
          <Crosshair dark={dark} />
          {!prefersReducedMotion ? (
            <span
              className={cn(
                "absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 animate-pulse-node rounded-full",
                dark ? "bg-signal-bright" : "bg-signal",
              )}
              style={{ animationDelay: `${i * 0.7}s` }}
            />
          ) : null}
        </span>
      ))}
    </div>
  );
}

function Crosshair({ dark }: { dark: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={dark ? "text-paper/20" : "text-slate/30"}
    >
      <line x1="8" y1="1" x2="8" y2="15" stroke="currentColor" strokeWidth="1" />
      <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
