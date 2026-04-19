"use client";

import { motion } from "framer-motion";
import {
  ArrowRightCircle,
  FileText,
  ListChecks,
  Quote,
  Search,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const FEATURES = [
  {
    icon: Users,
    title: "Identificação de falas",
    body: "Cada bloco da conversa é atribuído a um falante. Você sabe quem disse o quê — e em qual momento.",
  },
  {
    icon: FileText,
    title: "Transcrição organizada",
    body: "Texto limpo, com pontuação e parágrafos. Pronto para revisar, anotar ou anexar ao caso.",
  },
  {
    icon: Quote,
    title: "Resumo dos pontos principais",
    body: "O que foi acordado, o que ficou em aberto e o que merece atenção, em poucas linhas.",
  },
  {
    icon: ArrowRightCircle,
    title: "Próximos passos extraídos",
    body: "Compromissos, prazos e desdobramentos prontos para virar tarefa, follow-up ou e-mail.",
  },
  {
    icon: Search,
    title: "Busca por contexto",
    body: "Encontre uma frase, um cliente ou uma data em segundos. O histórico vira ferramenta, não arquivo.",
  },
  {
    icon: ListChecks,
    title: "Visão contextual da conversa",
    body: "O caso ganha continuidade: cada atendimento conecta com o anterior, sem reconstrução manual.",
  },
];

export function VoiceFeaturesSection() {
  return (
    <Section id="entrega">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>O que você recebe depois</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-4xl">
            A conversa volta organizada — e pronta para virar trabalho.
          </h2>
          <p className="mt-4 text-text-muted">
            Não é só transcrição. É o registro estruturado que o jurídico precisa para continuar o caso
            com clareza.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-soft text-gold-light">
                <feature.icon size={20} aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-text">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{feature.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
