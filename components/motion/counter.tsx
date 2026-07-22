"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Counter({
  value,
  duration = 0.6,
}: {
  value: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;

    if (prefersReducedMotion) {
      ref.current.textContent = value.toLocaleString();
      return;
    }

    const controls = animate(motionValue, value, {
      duration,
      ease: EASE,
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = Math.round(latest).toLocaleString();
        }
      },
    });

    return () => controls.stop();
  }, [inView, value, duration, prefersReducedMotion, motionValue]);

  return (
    <span ref={ref} className="tabular-nums">
      0
    </span>
  );
}
