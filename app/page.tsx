import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/home/hero";
import { ProofStrip } from "@/components/sections/home/proof-strip";
import { StatsBand } from "@/components/sections/home/stats-band";
import { ServicesGrid } from "@/components/sections/home/services-grid";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Founder } from "@/components/sections/home/founder";
import { SelectedWork } from "@/components/sections/home/selected-work";
import { Testimonial } from "@/components/sections/home/testimonial";
import { PressMention } from "@/components/sections/home/press-mention";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = buildMetadata({
  title: "Vykron Technologies | Product Engineering for AI, SaaS, and Web3",
  description:
    "Vykron is a product engineering company. We design, build, and launch AI, SaaS, and Web3 products for startups that cannot afford a rewrite in six months.",
  path: "/",
  eyebrow: "Product Engineering . AI . SaaS . Web3",
});

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <StatsBand />
      <ServicesGrid />
      <HowWeWork />
      <Founder />
      <SelectedWork />
      <Testimonial />
      <PressMention />
      <CtaSection />
    </>
  );
}
