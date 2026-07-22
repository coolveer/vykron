import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { cn } from "@/lib/utils";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { CtaSection } from "@/components/sections/cta-section";

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) return {};

  return buildMetadata({
    title: `${caseStudy.name} Case Study`,
    description: caseStudy.oneLiner,
    path: `/work/${caseStudy.slug}`,
    eyebrow: caseStudy.scope,
  });
}

function Shot({
  src,
  alt,
  className,
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md border border-ink/10 bg-deep",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover object-top"
      />
    </div>
  );
}

const NARRATIVE_ORDER = ["challenge", "approach", "outcome"] as const;

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  const currentIndex = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  const narrative: Record<(typeof NARRATIVE_ORDER)[number], string> = {
    challenge: caseStudy.challenge,
    approach: caseStudy.approach,
    outcome: caseStudy.result,
  };

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: caseStudy.name, path: `/work/${caseStudy.slug}` },
        ])}
      />

      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Work", href: "/work" },
          { name: caseStudy.name },
        ]}
      />

      <PageHero eyebrow={caseStudy.scope} heading={caseStudy.name} subline={caseStudy.oneLiner} topPadded={false}>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-mono-xs uppercase text-slate">
          <span>{caseStudy.year}</span>
          <span className="text-ink/20">/</span>
          <span>{caseStudy.stack.join(" / ")}</span>
          <span className="text-ink/20">/</span>
          <a
            href={caseStudy.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-signal transition-colors hover:text-ink"
          >
            {caseStudy.domain}
            <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
          </a>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </PageHero>

      <Section tone="paper" compact>
        <Container>
          <Reveal>
            <Shot
              src={caseStudy.shots.hero.src}
              alt={caseStudy.shots.hero.alt}
              className="aspect-video"
              sizes="(min-width: 1024px) 960px, 100vw"
              priority
            />
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Reveal delay={0.08}>
              <Shot
                src={caseStudy.shots.detailA.src}
                alt={caseStudy.shots.detailA.alt}
                className="aspect-[4/3]"
                sizes="(min-width: 640px) 480px, 100vw"
              />
            </Reveal>
            <Reveal delay={0.14}>
              <Shot
                src={caseStudy.shots.detailB.src}
                alt={caseStudy.shots.detailB.alt}
                className="aspect-[4/3]"
                sizes="(min-width: 640px) 480px, 100vw"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="ink" grid>
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {NARRATIVE_ORDER.map((key, i) => (
              <Reveal key={key} delay={i * 0.1}>
                <span className="font-mono text-mono text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-display-sm font-medium capitalize text-paper">
                  {key}
                </h2>
                <p className="mt-4 text-body-lg text-paper/70">{narrative[key]}</p>
                {key === "approach" ? (
                  <ul className="mt-6 flex flex-col gap-3">
                    {caseStudy.approachPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-body text-paper/70">
                        <Check strokeWidth={1.5} className="mt-1 size-4 shrink-0 text-mint" />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper" compact>
        <Container>
          <Reveal className="flex flex-col items-start justify-between gap-6 border-t border-ink/10 pt-10 sm:flex-row sm:items-center">
            <div>
              <span className="font-mono text-mono-xs uppercase text-slate/60">
                Next project
              </span>
              <h2 className="mt-2 text-display-sm font-medium text-ink">{next.name}</h2>
            </div>
            <Button href={`/work/${next.slug}`} variant="secondary">
              View case
            </Button>
          </Reveal>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
