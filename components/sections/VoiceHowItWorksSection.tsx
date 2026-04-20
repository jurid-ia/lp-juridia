"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

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
          <Eyebrow size="sm">Como funciona</Eyebrow>
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

        {/* Faixa de fotos + CTA */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <PhotoSlot src="/images/showcase/18.png" alt="" aspect="16/10" />
          <PhotoSlot src="/images/showcase/22.png" alt="" aspect="16/10" />
          <PhotoSlot src="/images/showcase/27.png" alt="" aspect="16/10" />
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <Button as="a" href="#cadastro" size="lg">
            Comece grátis
            <ArrowRight size={18} aria-hidden />
          </Button>
          <p className="text-sm text-text-soft">Sem instalação. Sem cartão. Cria conta em 30 segundos.</p>
        </div>
      </Container>
    </Section>
  );
}
