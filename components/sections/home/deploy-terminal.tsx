"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const LOG_LINES = [
  { text: "vykron deploy --env production", kind: "cmd" as const },
  { text: "build compiled", kind: "ok" as const },
  { text: "tests passed (128/128)", kind: "ok" as const },
  { text: "migrations applied", kind: "ok" as const },
  { text: "assets optimized", kind: "ok" as const },
  { text: "deployed to production", kind: "done" as const },
];

const HOLD_MS = 3200;
const STEP_MS = 480;
const RESTART_MS = 700;

export function DeployTerminal() {
  const prefersReducedMotion = useReducedMotion();
  const [animatedCount, setAnimatedCount] = useState(0);
  const visibleCount = prefersReducedMotion ? LOG_LINES.length : animatedCount;

  useEffect(() => {
    if (prefersReducedMotion) return;

    let cancelled = false;
    let timeout: ReturnType<typeof setTimeout>;

    const step = (i: number) => {
      if (cancelled) return;
      setAnimatedCount(i);
      if (i < LOG_LINES.length) {
        timeout = setTimeout(() => step(i + 1), STEP_MS);
      } else {
        timeout = setTimeout(() => {
          if (cancelled) return;
          setAnimatedCount(0);
          timeout = setTimeout(() => step(1), RESTART_MS);
        }, HOLD_MS);
      }
    };

    timeout = setTimeout(() => step(1), RESTART_MS);
    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [prefersReducedMotion]);

  const done = visibleCount >= LOG_LINES.length;

  return (
    <div className="w-full max-w-md rounded-lg border border-ink/10 bg-ink shadow-[0_24px_64px_-24px_rgba(10,22,40,0.45)]">
      <div className="flex items-center gap-2 border-b border-paper/10 px-5 py-3.5">
        <span className="size-2.5 rounded-full bg-paper/15" />
        <span className="size-2.5 rounded-full bg-paper/15" />
        <span className="size-2.5 rounded-full bg-paper/15" />
        <span className="ml-3 font-mono text-mono-xs text-paper/40">
          deploy.log
        </span>
      </div>
      <div className="flex min-h-56 flex-col gap-2.5 px-5 py-5 font-mono text-mono">
        <AnimatePresence initial={false}>
          {LOG_LINES.slice(0, visibleCount).map((line) => (
            <motion.div
              key={line.text}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-baseline gap-2.5"
            >
              {line.kind === "cmd" ? (
                <>
                  <span className="text-signal-bright">$</span>
                  <span className="text-paper/80">{line.text}</span>
                </>
              ) : (
                <>
                  <span className={line.kind === "done" ? "text-mint" : "text-mint/80"}>
                    ✓
                  </span>
                  <span className={line.kind === "done" ? "text-paper" : "text-paper/60"}>
                    {line.text}
                  </span>
                </>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        {done ? (
          <span
            aria-hidden
            className="mt-1 h-4 w-2 animate-blink bg-mint"
          />
        ) : null}
      </div>
    </div>
  );
}
