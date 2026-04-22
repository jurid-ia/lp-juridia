import { generateEventId } from "./meta-capi";
import type { ClientLeadData } from "@/types/meta";

type TrackEventInput = Omit<ClientLeadData, "eventId"> & {
  pixelCustomData?: Record<string, unknown>;
};

// Dispara o MESMO evento no Pixel (cliente) e na CAPI (servidor) com o
// mesmo event_id. A Meta deduplica automaticamente dentro de 48h.
export async function trackEvent(input: TrackEventInput): Promise<void> {
  const eventId = generateEventId(input.eventName);

  // 1) Pixel (cliente) — imediato
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    const pixelParams: Record<string, unknown> = {
      ...(input.value !== undefined ? { value: input.value } : {}),
      ...(input.currency ? { currency: input.currency } : { currency: "BRL" }),
      ...(input.contentName ? { content_name: input.contentName } : {}),
      ...(input.contentCategory ? { content_category: input.contentCategory } : {}),
      ...input.pixelCustomData,
    };
    window.fbq("track", input.eventName, pixelParams, { eventID: eventId });
  }

  // 2) CAPI (servidor) — usa keepalive para sobreviver a navegação/redirect.
  try {
    await fetch("/api/meta/conversion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...input, eventId }),
      keepalive: true,
    });
  } catch (error) {
    console.error("[trackEvent] CAPI falhou:", error);
  }
}
