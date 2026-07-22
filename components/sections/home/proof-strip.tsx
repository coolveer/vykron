import { siteConfig } from "@/lib/site.config";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

// Iconify icon id for each stack entry. Rendered as monochrome silhouettes via
// Iconify's on-demand SVG API, tinted to the site's slate token (#5a6b85).
// Entries without a standalone brand logo fall back to a text label.
const LOGO_ID: Record<string, string> = {
  React: "simple-icons/react",
  "Next.js": "simple-icons/nextdotjs",
  "Node.js": "simple-icons/nodedotjs",
  NestJS: "simple-icons/nestjs",
  TypeScript: "simple-icons/typescript",
  OpenAI: "ri/openai-fill",
  Anthropic: "simple-icons/anthropic",
  Solidity: "simple-icons/solidity",
  PostgreSQL: "simple-icons/postgresql",
  MongoDB: "simple-icons/mongodb",
  Kafka: "simple-icons/apachekafka",
  gRPC: "devicon-plain/grpc",
  AWS: "cib/amazon-aws",
};

const LOGO_TINT = "%235a6b85"; // url-encoded #5a6b85 (--color-slate)

function logoSrc(id: string) {
  return `https://api.iconify.design/${id}.svg?color=${LOGO_TINT}`;
}

export function ProofStrip() {
  const items = [...siteConfig.techStack, ...siteConfig.techStack];

  return (
    <div className="border-y border-ink/8 bg-paper py-12">
      <Container>
        <Reveal>
          <Eyebrow tone="slate" className="mb-8">
            Trusted stack, shipped in production
          </Eyebrow>
        </Reveal>
      </Container>
      <div
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused]">
          {items.map((name, i) => {
            const id = LOGO_ID[name];
            const key = `${name}-${i}`;

            if (!id) {
              return (
                <span
                  key={key}
                  className="whitespace-nowrap font-mono text-xl text-slate/60 transition-opacity duration-300 hover:opacity-100 opacity-60"
                >
                  {name}
                </span>
              );
            }

            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={key}
                src={logoSrc(id)}
                alt={name}
                loading="lazy"
                className="h-8 w-auto shrink-0 opacity-60 transition-opacity duration-300 hover:opacity-100"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
