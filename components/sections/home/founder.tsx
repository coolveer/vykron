import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Tag } from "@/components/ui/tag";
import { Reveal } from "@/components/motion/reveal";

export function Founder() {
  return (
    <Section tone="ink" grid>
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto aspect-square w-64 sm:w-80 lg:w-full lg:max-w-md">
              <div className="absolute inset-0 rounded-full bg-signal/10 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-full ring-1 ring-paper/15">
                <Image
                  src="/ben.png"
                  alt="Benjamin Johnson, founder and CEO of Vykron Technologies"
                  width={1024}
                  height={1024}
                  sizes="(min-width: 1024px) 420px, 320px"
                  className="h-full w-full object-cover"
                  priority={false}
                />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow tone="paper" className="mb-5">
                Leadership
              </Eyebrow>
              <h2 className="text-balance text-display-lg font-medium text-paper">
                Meet Ben, our founder &amp; CEO.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-3 font-mono text-mono text-signal-bright">
                Benjamin Johnson
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-6 flex flex-col gap-4 text-body-lg text-paper/70">
                <p>
                  Ben started Vykron Technologies on a simple conviction: the
                  best products come from people who genuinely care how they are
                  built. He is a serial founder and operator who has spent his
                  career turning ideas into real, working businesses &mdash;
                  most recently Londr, a mobile-first platform (with its own
                  token, LondrCoin) built to make an everyday service faster and
                  fairer for everyone involved.
                </p>
                <p>
                  Before tech, he spent two decades building ventures across
                  real estate and wellness and serving his community in public
                  service. That blend of grit, accountability, and generosity
                  toward the people doing the work is exactly what he brings to
                  every product Vykron ships.
                </p>
                <p className="text-paper/85">
                  Straight-talking, endlessly curious, and happiest when he is
                  building something meant to last.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-2">
                <Tag tone="dark">Serial Founder</Tag>
                <Tag tone="dark">Operator</Tag>
                <Tag tone="dark">Boise, Idaho</Tag>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
