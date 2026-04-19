"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GoldGradientText } from "@/components/ui/GoldGradientText";
import { LeadForm } from "@/components/forms/LeadForm";

export function VoiceCTASection() {
  return (
    <Section className="overflow-hidden">
      <Container>
        <div
          className="relative overflow-hidden rounded-2xl border border-line-strong bg-bg-card p-8 md:p-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,165,124,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(176,144,96,0.12),transparent_55%)]"
          />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <Eyebrow>Comece agora</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-[2.5rem]">
                Crie sua conta e veja como é{" "}
                <GoldGradientText>retomar o caso com clareza</GoldGradientText>.
              </h2>
              <p className="mt-4 max-w-lg text-text-muted">
                Em menos de um minuto você cria sua conta no Jurídia Voice. Depois é só gravar a próxima
                conversa — o registro estruturado chega pronto.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <LeadForm variant="cta" />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
