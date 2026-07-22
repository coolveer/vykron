import type { Metadata } from "next";
import { Check } from "lucide-react";
import { siteConfig } from "@/lib/site.config";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { BlueprintGrid } from "@/components/motion/blueprint-grid";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Start a project with Vykron Technologies. Share your goals, timeline, and budget. We reply within 12 hours.",
  path: "/contact",
  eyebrow: "Contact",
});

const INCLUDE_ITEMS = [
  "Project goals and the key use case",
  "Timeline and launch target",
  "Budget range",
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-paper pb-20 pt-36 md:pb-28 md:pt-44">
      <BlueprintGrid />
      <Container className="relative grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow className="mb-6">Contact</Eyebrow>
            <h1 className="text-balance text-display-lg font-medium text-ink">
              Let&apos;s build something intelligent.
            </h1>
            <p className="mt-6 text-body-lg text-slate">
              Send us a brief. The more specific it is, the faster we can
              tell you whether we are the right team.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {INCLUDE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-body text-ink/80">
                  <Check strokeWidth={1.5} className="mt-1 size-4 shrink-0 text-mint" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-2 border-t border-ink/10 pt-8">
              <p className="font-mono text-mono-xs uppercase text-slate/60">
                Average response time: {siteConfig.responseTime}
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-mono text-mono text-signal transition-colors hover:text-ink"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="mt-8 border-t border-ink/10 pt-8">
              <p className="font-mono text-mono-xs uppercase text-slate/60">
                Office
              </p>
              <p className="mt-3 text-body text-slate">
                {siteConfig.address.line1}
                <br />
                {siteConfig.address.line2}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
