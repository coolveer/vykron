import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { siteConfig } from "@/lib/site.config";
import { buildOrganizationSchema } from "@/lib/schema";
import { ogImageUrl } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll-provider";
import { PageTransition } from "@/components/motion/page-transition";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const defaultImage = ogImageUrl({
  title: siteConfig.name,
  eyebrow: "Product Engineering . AI . SaaS . Web3",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Product Engineering for AI, SaaS, and Web3`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: defaultImage, width: 1200, height: 630, alt: siteConfig.name }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [defaultImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={buildOrganizationSchema()} />
        <SmoothScrollProvider>
          <Nav />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
