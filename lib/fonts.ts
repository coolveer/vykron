import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";

// Display face: Bricolage Grotesque. Substituted for the brief's Fontshare
// pick (Cabinet Grotesk / Clash Display) because those require manually
// hosted license files next/font/local can't fetch at build time. Bricolage
// has a variable optical-size axis that flares at display sizes, which is
// what keeps it from reading as a neutral system grotesque like the body
// face. Swap to a local Fontshare file via next/font/local if the client
// acquires the license later (see README).
// Variable names carry a `-src` suffix so they stay distinct from the
// `--font-display` / `--font-body` / `--font-mono` theme tokens Tailwind
// generates in globals.css. Both would otherwise collide as same-specificity
// custom properties on <html>, with the winner decided by CSS source order
// rather than intent.
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display-src",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-src",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-src",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const fontVariables = `${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable}`;
