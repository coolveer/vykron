import { ImageResponse } from "next/og";
import { getMarkDataUri } from "@/lib/brand-mark";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Vykron Technologies";
  const eyebrow =
    searchParams.get("eyebrow") ?? "PRODUCT ENGINEERING . AI . SAAS . WEB3";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a1628",
          backgroundImage:
            "linear-gradient(#16294a 1px, transparent 1px), linear-gradient(90deg, #16294a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          padding: "76px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#39d9a5",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 3,
              color: "#8695ae",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 40 ? 58 : 72,
            lineHeight: 1.12,
            color: "#f7f8fa",
            fontWeight: 600,
            maxWidth: 1000,
            letterSpacing: -2,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 28,
              fontWeight: 600,
              color: "#f7f8fa",
              letterSpacing: 1,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={getMarkDataUri()} width={30} height={24} alt="" />
            VYKRON
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#5a6b85" }}>
            vykron.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
