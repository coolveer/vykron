import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Breadcrumb({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <div className="border-b border-ink/8 bg-paper pt-36 md:pt-44">
      <Container>
        <nav aria-label="Breadcrumb" className="py-4">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-mono-xs uppercase text-slate/60">
            {items.map((item, i) => (
              <li key={item.name} className="flex items-center gap-2">
                {i > 0 ? <span aria-hidden>/</span> : null}
                {item.href ? (
                  <Link href={item.href} className="transition-colors hover:text-ink">
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-ink/70">{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </div>
  );
}
