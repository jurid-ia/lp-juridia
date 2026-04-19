"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const STEPS = [
  {
    number: "01",
    title: "Inicie a gravação",
    body: "Um toque. Sem configuração, sem fricção. Funciona no celular ou no desktop.",
  },
  {
    number: "02",
    title: "Conduza a conversa",
    body: "Faça o atendimento ou a reunião normalmente. O Voice cuida do registro em silêncio.",
  },
  {
    number: "03",
    title: "Receba a conversa estruturada",
    body: "Identificação de falas, transcrição, resumo dos pontos principais e próximos passos.",
  },
  {
    number: "04",
    title: "Retome o caso com clareza",
    body: "Quando voltar ao caso, o contexto está pronto. Sem reconstrução manual, sem detalhe perdido.",
  },
];

export function VoiceHowItWorksSection() {
  return (
    <Section id="como-funciona" className="bg-bg-soft">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-4xl">
            Quatro passos simples. Nenhum esforço técnico.
          </h2>
          <p className="mt-4 text-text-muted">
            Pensado para a rotina jurídica: método, não engenharia. Você foca na conversa, o Voice
            entrega o registro.
          </p>
        </div>

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, idx) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="relative rounded-xl border border-line bg-bg-card p-6"
            >
              <span className="font-display text-3xl font-bold text-gold-light">{step.number}</span>
              <h3 className="mt-4 font-display text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.body}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
