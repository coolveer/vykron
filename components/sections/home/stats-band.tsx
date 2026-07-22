import { siteConfig } from "@/lib/site.config";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Stat } from "@/components/ui/stat";
import { Reveal } from "@/components/motion/reveal";

export function StatsBand() {
  return (
    <Section tone="ink" grid compact>
      <Container>
        <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <Stat
                index={stat.index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                qualifier={stat.qualifier}
                tone="dark"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
