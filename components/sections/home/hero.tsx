"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { BlueprintGrid } from "@/components/motion/blueprint-grid";
import { MaskRevealHeading } from "@/components/motion/mask-reveal-heading";
import { DeployTerminal } from "@/components/sections/home/deploy-terminal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pb-20 pt-36 md:pb-28 md:pt-44">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <BlueprintGrid />
      </motion.div>

      <Container className="relative grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.05, ease: EASE }}
          >
            <Eyebrow className="mb-6">
              PRODUCT ENGINEERING . AI . SAAS . WEB3
            </Eyebrow>
          </motion.div>

          <h1 className="text-hero font-medium text-ink">
            <MaskRevealHeading
              lines={["Software that", "ships. Products", "that last."]}
              delay={0.15}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
            className="mt-8 max-w-lg text-body-lg text-slate"
          >
            Vykron is a product engineering company. We design, build, and
            launch AI, SaaS, and Web3 products for startups that cannot
            afford a rewrite in six months.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <Button href="/contact" variant="primary">
              Start a project
            </Button>
            <Button href="/work" variant="ghost" arrow="up-right">
              See our work
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          className="lg:col-span-5"
        >
          <DeployTerminal />
        </motion.div>
      </Container>
    </section>
  );
}
