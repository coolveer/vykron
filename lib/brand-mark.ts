import { readFileSync } from "node:fs";
import path from "node:path";

let cached: string | null = null;

export function getMarkDataUri() {
  if (cached) return cached;
  const filePath = path.join(process.cwd(), "public", "brand", "vykron-mark.png");
  const base64 = readFileSync(filePath).toString("base64");
  cached = `data:image/png;base64,${base64}`;
  return cached;
}
