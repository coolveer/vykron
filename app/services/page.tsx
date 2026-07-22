import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Product engineering across AI, SaaS, Web3, full-stack web, backend systems, and technical consulting. Six disciplines, one team that owns the whole build.",
  path: "/services",
  eyebrow: "Services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        heading="Six disciplines. One team that owns the whole build."
        subline="We do not sell hours in a discipline and hand the rest off to another vendor. Every engagement runs end to end, architecture through launch, built by the same engineers who wrote the code."
      />

      <Section tone="paper" compact>
        <Container>
          <div className="divide-y divide-ink/10 border-t border-ink/10">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={Math.min(i * 0.06, 0.24)}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid grid-cols-1 gap-6 py-12 md:grid-cols-12 md:gap-8"
                >
                  <div className="md:col-span-4">
                    <span className="font-mono text-mono-xs text-slate/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-4 flex items-center gap-2 text-display-sm font-medium text-ink">
                      {service.navTitle}
                      <ArrowUpRight
                        strokeWidth={1.5}
                        className="size-5 shrink-0 text-ink/30 transition-transform duration-300 ease-quint group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                      />
                    </h2>
                  </div>
                  <div className="md:col-span-8">
                    <p className="max-w-xl text-body-lg text-slate">
                      {service.shortSummary}
                    </p>
                    <ul className="mt-6 flex flex-col gap-2.5">
                      {service.whatWeBuild.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-body text-ink/80"
                        >
                          <Check
                            strokeWidth={1.5}
                            className="mt-1 size-4 shrink-0 text-mint"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
