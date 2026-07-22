import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";

export function PressMention() {
  return (
    <div className="border-t border-ink/8 bg-paper py-10">
      <Container>
        <Reveal>
          {/* Placeholder press link: swap href for the live article URL. */}
          <a
            href="https://theentrepreneurstories.com/from-unpaid-intern-to-cto-how-veer-pratap-singh-is-fixing-the-broken-promises-of-software-development/"
            className="group flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4"
          >
            <span className="shrink-0 font-mono text-mono-xs uppercase text-slate/60">
              Featured in theentrepreneurstories
            </span>
            <span className="flex items-center gap-1.5 text-body text-ink transition-colors group-hover:text-signal">
              Outcome-Driven Engineering, how Vykron is rebuilding trust in
              software development
              <ArrowUpRight
                strokeWidth={1.5}
                className="size-4 shrink-0 transition-transform duration-200 ease-quint group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </Reveal>
      </Container>
    </div>
  );
}
