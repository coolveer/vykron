"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site.config";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { StatusDot } from "@/components/ui/status-dot";
import { LogoMark } from "@/components/layout/logo-mark";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    if (!menuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        animate={{ paddingTop: scrolled ? 14 : 22, paddingBottom: scrolled ? 14 : 22 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "border-b transition-colors duration-300",
          scrolled
            ? "border-ink/10 bg-paper/90 backdrop-blur-md"
            : "border-transparent bg-paper/0",
        )}
      >
        <Container className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-lg font-medium tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-signal"
            onClick={() => setMenuOpen(false)}
          >
            <LogoMark />
            VYKRON
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative font-mono text-mono-xs uppercase tracking-wide text-ink/70 transition-colors hover:text-ink",
                    active && "text-ink",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-signal transition-transform duration-300 ease-quint group-hover:scale-x-100",
                      active && "scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-6 md:flex">
            <StatusDot label={siteConfig.bookingStatus} />
            <Button href="/contact" variant="primary" arrow="right" className="text-mono-xs">
              Start a project
            </Button>
          </div>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex items-center justify-center rounded-sm p-2 text-ink md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            {menuOpen ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
          </button>
        </Container>
      </motion.div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-ink/10 bg-paper md:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-ink/5 py-4 font-display text-display-sm text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-6">
                <StatusDot label={siteConfig.bookingStatus} />
                <Button href="/contact" variant="primary" arrow="right" onClick={() => setMenuOpen(false)}>
                  Start a project
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
