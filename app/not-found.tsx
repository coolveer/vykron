import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { BlueprintGrid } from "@/components/motion/blueprint-grid";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-paper pb-24 pt-40 md:pb-32 md:pt-48">
      <BlueprintGrid />
      <Container className="relative">
        <div className="max-w-xl">
          <Eyebrow className="mb-6">404</Eyebrow>
          <h1 className="text-display-lg font-medium text-ink">
            This route never shipped.
          </h1>
          <p className="mt-6 text-body-lg text-slate">
            The page you are looking for does not exist, or moved. Here is
            where you probably meant to go.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="/">Back to home</Button>
            <Button href="/services" variant="secondary" arrow="none">
              Services
            </Button>
            <Button href="/work" variant="ghost" arrow="up-right">
              See our work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
