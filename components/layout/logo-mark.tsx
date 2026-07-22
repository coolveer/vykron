import Image from "next/image";
import { cn } from "@/lib/utils";

// Intrinsic size of /public/brand/vykron-mark.png, extracted from the
// supplied logo artwork. Passed explicitly since the src below is a plain
// public/ URL rather than a bundled import, so Next can't infer it.
const MARK_WIDTH = 1225;
const MARK_HEIGHT = 969;

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/vykron-mark.png"
      alt=""
      width={MARK_WIDTH}
      height={MARK_HEIGHT}
      priority
      className={cn("h-4 w-auto md:h-5", className)}
    />
  );
}
