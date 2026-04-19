"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type Plan = {
  name: string;
  price: string;
  unit?: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Essencial",
    price: "Grátis",
    description: "Para experimentar o Voice em atendimentos pontuais.",
    features: [
      "Até 3 horas de gravação por mês",
      "Identificação de falas e resumo",
      "Acesso pelo navegador e celular",
    ],
    cta: "Começar grátis",
  },
  {
    name: "Profissional",
    price: "Em breve",
    unit: "/ mês",
    description: "Para o advogado que registra atendimentos toda semana.",
    features: [
      "Horas de gravação ampliadas",
      "Próximos passos extraídos automaticamente",
      "Busca por contexto no histórico",
      "Exportação para PDF e e-mail",
    ],
    cta: "Quero ser avisado",
    highlight: true,
  },
  {
    name: "Escritório",
    price: "Sob consulta",
    description: "Para times jurídicos que precisam de padrão e governança.",
    features: [
      "Membros e permissões por equipe",
      "Pastas e organização por caso",
      "Suporte prioritário e onboarding",
      "Controles de segurança avançados",
    ],
    cta: "Falar com vendas",
  },
];

export function VoicePlansSection() {
  return (
    <Section id="planos">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Planos</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-4xl">
            Comece sem fricção. Evolua quando fizer sentido.
          </h2>
          <p className="mt-4 text-text-muted">
            Escolha o plano que combina com seu volume de atendimento. Os preços oficiais entram aqui
            assim que forem definidos.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={cn(
                "relative flex flex-col rounded-xl border bg-bg-card p-7",
                plan.highlight ? "border-gold/60 shadow-gold" : "border-line",
              )}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-7 rounded-pill border border-gold bg-bg px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-light">
                  Mais escolhido
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-text">{plan.name}</h3>
              <p className="mt-1 text-sm text-text-muted">{plan.description}</p>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-3xl font-bold text-text">{plan.price}</span>
                {plan.unit && <span className="text-sm text-text-muted">{plan.unit}</span>}
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-text-muted">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check size={16} className="mt-0.5 shrink-0 text-gold-light" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                as="a"
                href="#cadastro"
                variant={plan.highlight ? "primary" : "ghost"}
                size="md"
                className="mt-7 w-full"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
