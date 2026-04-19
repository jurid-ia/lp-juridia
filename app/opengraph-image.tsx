import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jurídia Voice — atendimentos jurídicos com contexto preservado";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0e0a05",
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(201,165,124,0.22), transparent 55%), radial-gradient(circle at 88% 92%, rgba(176,144,96,0.18), transparent 55%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            gap: 14,
            padding: "10px 18px",
            border: "1px solid rgba(201,165,124,0.34)",
            borderRadius: 999,
            backgroundColor: "rgba(176,144,96,0.12)",
            color: "#c9a57c",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: "#b09060",
              boxShadow: "0 0 16px #b09060",
            }}
          />
          Jurídia Voice
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 1040,
              color: "#ffffff",
            }}
          >
            Atendimentos jurídicos com contexto preservado.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#b8a890",
              maxWidth: 980,
              lineHeight: 1.4,
            }}
          >
            Grave reuniões e atendimentos. Receba a conversa estruturada — quem falou o quê, resumo e próximos passos.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#8a7e6c",
            fontSize: 22,
          }}
        >
          <span>voice.juridia.com.br</span>
          <span>Comece grátis em 30 segundos</span>
        </div>
      </div>
    ),
    size,
  );
}
