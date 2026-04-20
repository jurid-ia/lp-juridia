"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cloud, EyeOff, KeyRound, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Conformidade LGPD",
    body: "Tratamento de dados orientado pela lei brasileira, com base legal explícita e direitos do titular respeitados.",
  },
  {
    icon: KeyRound,
    title: "Criptografia em trânsito",
    body: "Conexões protegidas com TLS. Suas conversas trafegam sob criptografia entre o dispositivo e a infraestrutura.",
  },
  {
    icon: Cloud,
    title: "Infraestrutura na nuvem",
    body: "Cloud com isolamento por conta, backups e controles de acesso. Sem dependência do seu computador.",
  },
  {
    icon: EyeOff,
    title: "Discrição por padrão",
    body: "Visibilidade restrita à sua conta. O conteúdo das conversas não é usado para treinar modelos de terceiros.",
  },
];

export function VoiceTrustSection() {
  return (
    <Section id="seguranca">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow size="sm">Diferenciais & segurança</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-4xl">
            Sobriedade onde importa: precisão, confiança e discrição.
          </h2>
          <p className="mt-4 text-text-muted">
            O jurídico exige seriedade. O Jurid IA Voice foi construído para responder a esse patamar
            desde o primeiro toque na tela.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="rounded-xl border border-line bg-bg-card p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-soft text-gold-light">
                <pillar.icon size={20} aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-text">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{pillar.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Slots de foto em par — certificações, sala segura, infra, etc. */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          <PhotoSlot src="/images/showcase/20.png" alt="" aspect="16/9" />
          <PhotoSlot src="/images/showcase/26.png" alt="" aspect="16/9" />
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <Button as="a" href="#cadastro" size="lg">
            Começar com segurança
            <ArrowRight size={18} aria-hidden />
          </Button>
          <p className="text-sm text-text-soft">Conta gratuita. LGPD desde o primeiro atendimento.</p>
        </div>
      </Container>
    </Section>
  );
}
