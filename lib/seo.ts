import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";

export function ogImageUrl({ title, eyebrow }: { title: string; eyebrow?: string }) {
  const params = new URLSearchParams({ title });
  if (eyebrow) params.set("eyebrow", eyebrow);
  return `/api/og?${params.toString()}`;
}

export function buildMetadata({
  title,
  description,
  path,
  eyebrow,
}: {
  title: string;
  description: string;
  path: string;
  eyebrow?: string;
}): Metadata {
  const image = ogImageUrl({ title, eyebrow });
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
