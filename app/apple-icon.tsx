import { ImageResponse } from "next/og";
import { getMarkDataUri } from "@/lib/brand-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a1628",
        }}
      >
        <img
          src={getMarkDataUri()}
          width={118}
          height={93}
          alt=""
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    size,
  );
}
