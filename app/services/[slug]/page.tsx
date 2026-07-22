import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { services, getServiceBySlug } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Tag } from "@/components/ui/tag";
import { Faq } from "@/components/ui/faq";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/motion/reveal";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    eyebrow: service.navTitle,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: service.navTitle,
          description: service.metaDescription,
          slug: service.slug,
        })}
      />
      <JsonLd data={buildFaqSchema(service.faq)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.navTitle, path: `/services/${service.slug}` },
        ])}
      />

      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.navTitle },
        ]}
      />

      <PageHero eyebrow={service.navTitle} heading={service.h1} subline={service.heroSubline} topPadded={false}>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button href="/contact" variant="primary">
            Start a project
          </Button>
          <p className="font-mono text-mono-xs text-slate">{service.angle}</p>
        </div>
      </PageHero>

      <Section tone="ink" grid>
        <Container>
          <SectionHeading
            eyebrow="How it typically works"
            heading="A process built for this discipline."
            tone="dark"
          />
          <div className="mt-16">
            <ProcessSteps steps={service.process} />
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <SectionHeading eyebrow="What we build" heading="What you get when we take this on." />
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
            {service.whatWeBuild.map((item, i) => (
              <Reveal key={item} delay={Math.min(i * 0.05, 0.3)}>
                <div className="flex items-start gap-3 border-t border-ink/10 pt-4">
                  <Check strokeWidth={1.5} className="mt-1 size-4 shrink-0 text-mint" />
                  <p className="text-body-lg text-ink">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ink" compact>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <span className="font-mono text-mono-xs uppercase text-paper/40">
                Tech we reach for
              </span>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {service.techStack.map((tech) => (
                  <Tag key={tech} tone="dark">
                    {tech}
                  </Tag>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="border-l-2 border-signal pl-6">
                <p className="font-mono text-mono-xs uppercase text-signal-bright">
                  {service.proof.label}
                </p>
                <p className="mt-3 max-w-xl text-body-lg text-paper/80">
                  {service.proof.description}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <SectionHeading eyebrow="FAQ" heading="Common questions about this work." />
          <div className="mt-12">
            <Faq items={service.faq} />
          </div>
        </Container>
      </Section>

      <CtaSection />
    </>
  );
}
