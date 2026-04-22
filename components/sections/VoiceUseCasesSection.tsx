"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CadastroCTA } from "@/components/ui/CadastroCTA";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

const CASES = [
  { title: "Atendimento inicial", body: "Capture os fatos sem dividir atenção." },
  { title: "Alinhamento de caso", body: "Sócios e cliente na mesma versão." },
  { title: "Conversa estratégica", body: "Reuniões internas viram material consultável." },
  { title: "Reunião consultiva", body: "Recomendações e ressalvas registradas." },
  { title: "Histórico de tratativas", body: "Linha do tempo reconstruída sem esforço." },
  { title: "Jurídico interno", body: "Padronize o registro vindo das áreas." },
];

const PHOTOS = [
  { src: "/images/showcase/21.png", alt: "" },
  { src: "/images/showcase/25.png", alt: "" },
  { src: "/images/showcase/29.png", alt: "" },
  { src: "/images/showcase/33.png", alt: "" },
];

export function VoiceUseCasesSection() {
  return (
    <Section id="casos" className="bg-bg-soft">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          {/* Coluna esquerda — texto editorial */}
          <div className="flex flex-col">
            <Eyebrow size="sm">Casos de uso</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-light leading-[1.15] tracking-tight text-text md:text-[2.5rem]">
              Pensado para a <em className="not-italic font-semibold text-gold-light">rotina real</em> do advogado.
            </h2>
            <p className="mt-5 max-w-md text-base text-text-muted">
              Reconheça seu cenário. Quando o produto encaixa na prática, a decisão fica simples.
            </p>

            <ol className="mt-12 flex flex-col">
              {CASES.map((useCase, idx) => (
                <motion.li
                  key={useCase.title}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="grid grid-cols-[auto_auto_1fr] items-baseline gap-x-5 border-t border-line py-4 last:border-b"
                >
                  <span className="font-display text-sm font-medium tabular-nums text-gold-light">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="whitespace-nowrap font-display text-base font-medium text-text md:text-lg">
                    {useCase.title}
                  </h3>
                  <p className="truncate text-sm text-text-muted">{useCase.body}</p>
                </motion.li>
              ))}
            </ol>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <CadastroCTA source="use_cases" size="md">
                Comece grátis
                <ArrowRight size={16} aria-hidden />
              </CadastroCTA>
              <span className="text-sm text-text-soft">
                Sem cartão. Em 30 segundos você está dentro.
              </span>
            </div>
          </div>

          {/* Coluna direita — colagem de fotos (4 slots) */}
          <div className="relative hidden lg:block">
            <div className="sticky top-28 grid h-[640px] grid-cols-2 grid-rows-3 gap-4">
              <div className="col-span-1 row-span-2">
                <PhotoSlot src={PHOTOS[0].src} alt={PHOTOS[0].alt} fillParent />
              </div>
              <div className="col-span-1 row-span-1">
                <PhotoSlot src={PHOTOS[1].src} alt={PHOTOS[1].alt} fillParent />
              </div>
              <div className="col-span-1 row-span-1">
                <PhotoSlot src={PHOTOS[2].src} alt={PHOTOS[2].alt} fillParent />
              </div>
              <div className="col-span-2 row-span-1">
                <PhotoSlot src={PHOTOS[3].src} alt={PHOTOS[3].alt} fillParent />
              </div>
            </div>
          </div>

          {/* Mobile: tira horizontal de slots de foto */}
          <div className="lg:hidden">
            <div className="grid grid-cols-2 gap-3">
              {PHOTOS.map((photo) => (
                <PhotoSlot key={photo.src} src={photo.src} alt={photo.alt} aspect="4/5" />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
