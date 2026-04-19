"use client";

import { motion } from "framer-motion";
import { Brain, ClipboardList, FileSearch, Hourglass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const PAINS = [
  {
    icon: Brain,
    title: "Detalhes que escapam",
    body: "Conversas jurídicas têm densidade. Um nome, uma data, uma promessa — basta um esquecimento para o caso virar reconstrução.",
  },
  {
    icon: Hourglass,
    title: "Tempo refazendo a memória",
    body: "Depois do atendimento, sobra a tarefa silenciosa: relembrar quem disse o quê e tentar reconstruir o contexto manualmente.",
  },
  {
    icon: FileSearch,
    title: "Informação espalhada",
    body: "Anotação no caderno, mensagem no WhatsApp, e-mail solto. O caso vive em pedaços e o histórico nunca está num só lugar.",
  },
  {
    icon: ClipboardList,
    title: "Continuidade fragilizada",
    body: "Quando o caso volta semanas depois, você revisita o esforço inteiro. O contexto perdido custa decisão e custa cliente.",
  },
];

export function VoiceProblemSection() {
  return (
    <Section id="dor" className="bg-bg-soft">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>A dor silenciosa do jurídico</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-4xl">
            Quanta conversa importante se perde entre o atendimento e a próxima ação?
          </h2>
          <p className="mt-4 text-text-muted">
            O Jurídia Voice nasceu para responder uma pergunta antiga: por que o advogado ainda precisa
            reconstruir, à mão, aquilo que já foi dito?
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PAINS.map((pain, idx) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-soft text-gold-light">
                <pain.icon size={20} aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-text">{pain.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{pain.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
