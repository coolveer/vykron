import { ImageResponse } from "next/og";
import { getMarkDataUri } from "@/lib/brand-mark";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          width={42}
          height={33}
          alt=""
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    size,
  );
}
