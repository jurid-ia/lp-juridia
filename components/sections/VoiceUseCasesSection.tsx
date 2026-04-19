"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  HeartHandshake,
  History,
  ScrollText,
  Users2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const CASES = [
  {
    icon: HeartHandshake,
    title: "Atendimento inicial com cliente",
    body: "Capture os fatos da primeira conversa sem precisar dividir atenção entre escutar e anotar.",
  },
  {
    icon: ScrollText,
    title: "Reunião de alinhamento de caso",
    body: "Mantenha sócios, equipe e cliente na mesma versão dos fatos. Decisões registradas, contexto preservado.",
  },
  {
    icon: Users2,
    title: "Conversa estratégica com equipe",
    body: "Nem toda decisão vira ata. O Voice transforma reuniões internas em material consultável depois.",
  },
  {
    icon: Briefcase,
    title: "Reunião consultiva",
    body: "Recomendações e ressalvas registradas com clareza — proteção para você e para o cliente.",
  },
  {
    icon: History,
    title: "Histórico de tratativas",
    body: "Reconstrua a linha do tempo de um caso sem garimpar e-mails, áudios soltos e prints de WhatsApp.",
  },
  {
    icon: Building2,
    title: "Jurídico interno",
    body: "Padronize o registro de demandas vindas das áreas de negócio. Menos retrabalho, mais rastreabilidade.",
  },
];

export function VoiceUseCasesSection() {
  return (
    <Section id="casos" className="bg-bg-soft">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Casos de uso jurídicos</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-4xl">
            Pensado para a rotina real do advogado.
          </h2>
          <p className="mt-4 text-text-muted">
            Reconheça seu cenário. Quando o produto encaixa na prática, a decisão fica simples.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((useCase, idx) => (
            <motion.article
              key={useCase.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="rounded-xl border border-line bg-bg-card p-6 transition-colors hover:border-line-strong"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-soft text-gold-light">
                <useCase.icon size={20} aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-text">{useCase.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{useCase.body}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
