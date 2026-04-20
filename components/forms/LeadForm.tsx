"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2, Lock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { maskPhone, onlyDigits } from "@/lib/masks";
import { LeadSchema } from "@/lib/validators";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { useApiContext } from "@/context/ApiContext";

const REGISTER_URL = process.env.NEXT_PUBLIC_REGISTER_URL ?? "/parabens";
const PRE_REGISTER_ENDPOINT = "/auth/pre-register";

type PreRegisterErrorBody = { message?: string | string[] } | string | null | undefined;

function extractErrorMessage(body: PreRegisterErrorBody): string | null {
  if (!body) return null;
  if (typeof body === "string") return body;
  if (typeof body === "object" && "message" in body) {
    const msg = body.message;
    if (typeof msg === "string") return msg;
    if (Array.isArray(msg) && msg.length > 0) return String(msg[msg.length - 1]);
  }
  return null;
}

type Variant = "hero" | "cta";

type FormState = {
  nome: string;
  email: string;
  telefone: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

export function LeadForm({
  variant = "hero",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const { PostAPI } = useApiContext();

  const [values, setValues] = useState<FormState>({ nome: "", email: "", telefone: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);

    const parsed = LeadSchema.safeParse({ ...values, source: variant });
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState | undefined;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    const payload = parsed.data;
    setStatus("submitting");

    const response = await PostAPI<PreRegisterErrorBody>(
      PRE_REGISTER_ENDPOINT,
      {
        name: payload.nome,
        email: payload.email,
        mobilePhone: payload.telefone,
      },
      false,
    );

    const ok = response.status >= 200 && response.status < 300;

    if (!ok) {
      setStatus("error");
      setSubmitError(
        extractErrorMessage(response.body) ??
          "Não foi possível criar sua conta agora. Tente novamente em instantes.",
      );
      return;
    }

    track("lead_submit", { source: payload.source });

    const params = new URLSearchParams({
      nome: payload.nome,
      email: payload.email,
      telefone: payload.telefone,
      source: payload.source ?? variant,
    });

    setStatus("success");
    window.location.assign(`${REGISTER_URL}?${params.toString()}`);
  }

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";
  const buttonLabel = isSubmitting
    ? "Criando sua conta..."
    : isSuccess
    ? "Quase lá — redirecionando"
    : variant === "hero"
    ? "Criar conta gratuita"
    : "Quero criar minha conta";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
      className={cn(
        "glass relative flex flex-col gap-4 rounded-xl p-6 shadow-card md:p-7",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-light">
            Comece grátis
          </p>
          <h3 className="mt-1 font-display text-xl font-bold text-text">
            Crie sua conta em 30 segundos
          </h3>
          <p className="mt-1 text-sm text-text-muted">
            Nome, e-mail e telefone — depois é só definir a senha.
          </p>
        </div>
        <div
          aria-hidden
          className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-gold-soft text-gold-light sm:flex"
        >
          <Lock size={18} />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Input
          label="Nome completo"
          name="nome"
          autoComplete="name"
          inputMode="text"
          placeholder="Como você se chama?"
          value={values.nome}
          onChange={(e) => update("nome", e.target.value)}
          error={errors.nome}
          required
          maxLength={80}
        />
        <Input
          label="E-mail profissional"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="voce@escritorio.com.br"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
          required
        />
        <Input
          label="Telefone (WhatsApp)"
          name="telefone"
          autoComplete="tel"
          inputMode="tel"
          placeholder="(11) 99999-9999"
          value={values.telefone}
          onChange={(e) => update("telefone", maskPhone(e.target.value))}
          onBlur={(e) => update("telefone", maskPhone(e.target.value))}
          error={errors.telefone}
          hint={`${onlyDigits(values.telefone).length}/11`}
          required
        />
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting || isSuccess} className="mt-2 w-full">
        {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : null}
        <span>{buttonLabel}</span>
        {!isSubmitting && !isSuccess && <ArrowRight size={18} />}
      </Button>

      {submitError && (
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          className="text-sm text-red-300"
        >
          {submitError}
        </motion.p>
      )}

      <div className="mt-1 flex items-center gap-2 text-[11px] text-text-soft">
        <ShieldCheck size={14} className="shrink-0 text-gold-light" />
        <span>
          Conformidade LGPD. Usamos seus dados apenas para criar sua conta no Jurid IA Voice.
        </span>
      </div>
    </form>
  );
}
