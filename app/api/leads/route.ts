import { NextResponse } from "next/server";
import { LeadSchema } from "@/lib/validators";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Body inválido." }, { status: 400 });
  }

  const parsed = LeadSchema.safeParse(body);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fields[key]) fields[key] = issue.message;
    }
    return NextResponse.json(
      { ok: false, error: "Dados inválidos.", fields },
      { status: 400 },
    );
  }

  const lead = {
    ...parsed.data,
    source: parsed.data.source ?? process.env.LEAD_SOURCE ?? "lp-voice-joaostel",
    user_agent: request.headers.get("user-agent") ?? null,
    received_at: new Date().toISOString(),
  };

  // TODO: ligar Supabase ou POST /lawyer/register quando o usuário decidir o backend.
  console.info("[leads:stub]", lead);

  return NextResponse.json({ ok: true });
}
