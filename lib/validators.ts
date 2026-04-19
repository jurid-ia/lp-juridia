import { z } from "zod";
import { onlyDigits } from "./masks";

const NAME_REGEX = /^[\p{L}\s'.-]+$/u;

export const LeadSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo.")
    .max(80, "Nome muito longo.")
    .regex(NAME_REGEX, "Use apenas letras."),
  email: z.string().trim().toLowerCase().email("Informe um e-mail válido."),
  telefone: z
    .string()
    .transform((v) => onlyDigits(v))
    .refine((v) => v.length === 10 || v.length === 11, {
      message: "Telefone deve ter DDD + número (10 ou 11 dígitos).",
    }),
  source: z.enum(["hero", "cta"]).optional().default("hero"),
});

export type LeadInput = z.infer<typeof LeadSchema>;
