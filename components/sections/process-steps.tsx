import { Reveal } from "@/components/motion/reveal";

export function ProcessSteps({
  steps,
}: {
  steps: { step: string; description: string }[];
}) {
  const columns = steps.length <= 4 ? "md:grid-cols-4" : "md:grid-cols-5";

  return (
    <div className={`grid grid-cols-1 ${columns}`}>
      {steps.map((item, i) => (
        <Reveal key={item.step} delay={i * 0.08}>
          <div className="border-t border-ink/10 py-8 pr-6 md:border-l md:border-t-0 md:pl-8 md:pt-0 md:first:border-l-0 md:first:pl-0">
            <span className="font-mono text-mono text-signal">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-display-sm font-medium text-ink">
              {item.step}
            </h3>
            <p className="mt-3 text-body text-slate">{item.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
