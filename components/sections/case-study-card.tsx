"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";
import { Tag } from "@/components/ui/tag";

const EASE = [0.22, 1, 0.36, 1] as const;

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setCoords({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-ink/10 bg-deep">
        <motion.div
          animate={{ scale: hovered ? 1.035 : 1 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="absolute inset-0 overflow-hidden"
        >
          <Image
            src={caseStudy.shots.hero.src}
            alt={caseStudy.shots.hero.alt}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover object-top"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
            aria-hidden
          />
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="absolute bottom-4 left-4 rounded-sm bg-ink/85 px-3 py-1.5 font-mono text-mono-xs text-paper/80"
        >
          {caseStudy.year} / {caseStudy.stack.slice(0, 2).join(" / ")}
        </motion.div>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 hidden items-center gap-1.5 rounded-full bg-signal px-4 py-2 font-mono text-mono-xs text-white md:flex"
          animate={{
            opacity: hovered ? 1 : 0,
            x: coords.x - 46,
            y: coords.y - 18,
            scale: hovered ? 1 : 0.85,
          }}
          transition={{ duration: 0.15, ease: "linear" }}
        >
          View case
          <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-display-sm font-medium text-ink">{caseStudy.name}</h3>
          <p className="mt-2 max-w-md text-body text-slate">{caseStudy.outcome}</p>
        </div>
        <ArrowUpRight
          strokeWidth={1.5}
          className="mt-1 size-5 shrink-0 text-ink/40 transition-transform duration-300 ease-quint group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {caseStudy.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Link>
  );
}
