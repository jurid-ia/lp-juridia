"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Mic } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GoldGradientText } from "@/components/ui/GoldGradientText";
import { LeadForm } from "@/components/forms/LeadForm";

const TRUST_POINTS = [
  "Identifica quem falou o quê",
  "Resumo + próximos passos prontos",
  "LGPD e criptografia em trânsito",
];

export function VoiceHeroSection() {
  return (
    <section
      id="topo"
      className="hero-glow relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36"
    >
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-start gap-6"
          >
            <Eyebrow>
              <Mic size={12} aria-hidden /> Jurídia Voice
            </Eyebrow>

            <h1 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[1.05] -tracking-[0.02em] text-text">
              Atendimentos jurídicos com{" "}
              <GoldGradientText>contexto preservado</GoldGradientText> do começo ao fim.
            </h1>

            <p className="max-w-xl text-lg text-text-muted">
              Grave reuniões e atendimentos com simplicidade. Receba a conversa estruturada — quem falou
              o quê, resumo e próximos passos — para retomar o caso com clareza.
            </p>

            <ul className="flex flex-col gap-2 pt-1 text-sm text-text-muted sm:flex-row sm:flex-wrap sm:gap-x-5">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="shrink-0 text-gold-light" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            id="cadastro"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-gold/15 via-transparent to-gold/5 blur-2xl"
            />
            <LeadForm variant="hero" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
