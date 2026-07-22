import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { CircuitPath } from "@/components/motion/circuit-path";

const DIAGRAM_BARS = [
  { label: "PERF", height: 92 },
  { label: "SEO", height: 100 },
  { label: "A11Y", height: 100 },
];

export function ServicesGrid() {
  return (
    <Section tone="ink" grid>
      <Container className="relative">
        <CircuitPath className="hidden lg:block" />

        <SectionHeading
          eyebrow="Services"
          heading="Six disciplines. One team that owns the whole build."
          subline="We do not hand your product between departments. The engineers who architect it are the same ones who ship it."
          tone="dark"
          layout="split"
        />

        <div className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col justify-between rounded-md border border-paper/10 bg-deep/60 p-7 transition-colors duration-300 hover:border-signal/40"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-display-sm font-medium text-paper">
                      {service.navTitle}
                    </h3>
                    <ArrowUpRight
                      strokeWidth={1.5}
                      className="mt-1 size-5 shrink-0 text-paper/30 transition-transform duration-300 ease-quint group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-bright"
                    />
                  </div>
                  <p className="mt-4 text-body text-paper/60">
                    {service.shortSummary}
                  </p>
                </div>

                {service.slug === "ai-development" ? (
                  <div className="mt-8 flex items-baseline gap-2 border-t border-paper/10 pt-6">
                    <span className="flex items-baseline font-mono text-display-sm text-signal-bright">
                      <Counter value={200} />+
                    </span>
                    <span className="font-mono text-mono-xs text-paper/50">
                      AI solutions judged at Google&apos;s GenAI Hackathon
                    </span>
                  </div>
                ) : null}

                {service.slug === "web-development" ? (
                  <div className="mt-8 flex items-end gap-3 border-t border-paper/10 pt-6">
                    {DIAGRAM_BARS.map((bar) => (
                      <div
                        key={bar.label}
                        className="flex flex-1 flex-col items-center gap-2"
                      >
                        <div className="flex h-12 w-full items-end rounded-sm bg-paper/5">
                          <div
                            className="w-full rounded-sm bg-signal-bright/80"
                            style={{ height: `${bar.height}%` }}
                          />
                        </div>
                        <span className="font-mono text-mono-xs text-paper/40">
                          {bar.label}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : null}

                {service.slug === "web3-development" ? (
                  <div className="mt-8 border-t border-paper/10 pt-6">
                    <p className="border-l-2 border-signal pl-4 font-mono text-mono-xs text-paper/55">
                      Token economy shipped on Slay. Freight documentation
                      shipped on BitNautic.
                    </p>
                  </div>
                ) : null}
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
