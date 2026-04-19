"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function VoiceDemoSection() {
  return (
    <Section id="demo">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Veja em movimento</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-4xl">
            Da gravação ao registro estruturado, em segundos.
          </h2>
          <p className="mt-4 text-text-muted">
            Um único toque para gravar. Tudo o que importa volta organizado, com falas identificadas,
            resumo e desdobramentos prontos para serem anexados ao caso.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto mt-12 aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-line bg-bg-card shadow-card"
        >
          {/* Placeholder do vídeo demo. Substituir por <video> ou <iframe> quando o material estiver pronto. */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(201,165,124,0.18),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(176,144,96,0.12),transparent_60%)]"
          />
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-line bg-bg-elev text-gold-light shadow-gold animate-pulse-gold">
              <PlayCircle size={40} aria-hidden />
            </div>
            <p className="font-display text-lg font-semibold text-text">
              Demo do Jurídia Voice em uso
            </p>
            <p className="max-w-md text-sm text-text-muted">
              Vídeo de 45–70 segundos: gravação real → resultado estruturado aparecendo. Slot reservado;
              será ligado quando o material for produzido.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
