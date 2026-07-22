"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function MaskRevealHeading({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.08,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <span className={className}>
        {lines.map((line, i) => (
          <span key={i} className={cn("block", lineClassName)}>
            {line}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={cn("block", lineClassName)}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.7,
              delay: delay + i * stagger,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
