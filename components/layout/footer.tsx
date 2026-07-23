import Link from "next/link";
import { siteConfig } from "@/lib/site.config";
import { services } from "@/content/services";
import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/layout/logo-mark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-lg font-medium tracking-tight text-paper"
            >
              <LogoMark />
              VYKRON
            </Link>
            <p className="mt-5 font-mono text-mono-xs text-paper/50">
              {siteConfig.address.line1}
              <br />
              {siteConfig.address.line2}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-block font-mono text-mono text-signal-bright hover:text-mint"
            >
              {siteConfig.email}
            </a>
          </div>

          <nav aria-label="Services" className="md:col-span-4">
            <h3 className="font-mono text-mono-xs uppercase text-paper/40">Services</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-body text-paper/70 transition-colors hover:text-paper"
                  >
                    {service.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="md:col-span-2">
            <h3 className="font-mono text-mono-xs uppercase text-paper/40">Company</h3>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <Link href="/about" className="text-body text-paper/70 transition-colors hover:text-paper">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-body text-paper/70 transition-colors hover:text-paper">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-body text-paper/70 transition-colors hover:text-paper">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-2">
            <h3 className="font-mono text-mono-xs uppercase text-paper/40">Follow</h3>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vykron Technologies on LinkedIn"
                className="flex size-9 items-center justify-center rounded-sm border border-paper/20 font-mono text-mono-xs text-paper/60 transition-colors hover:border-paper/50 hover:text-paper"
              >
                in
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-paper/10 pt-8 font-mono text-mono-xs text-paper/40 md:flex-row md:items-center md:justify-between">
          <p>© {year} Vykron Technologies. All rights reserved.</p>
          <p>Product engineering for AI, SaaS, and Web3.</p>
        </div>
      </Container>
    </footer>
  );
}
