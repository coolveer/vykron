"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function CircuitPath({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 55%"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
      >
        <motion.path
          d="M 40 90 L 400 90 L 400 300 L 780 300 L 780 510 L 1160 510"
          fill="none"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          className="stroke-signal"
          style={{ pathLength: prefersReducedMotion ? 1 : pathLength }}
        />
      </svg>
    </div>
  );
}
