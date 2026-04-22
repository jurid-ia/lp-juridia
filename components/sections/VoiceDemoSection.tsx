"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CadastroCTA } from "@/components/ui/CadastroCTA";

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
          <video
            className="h-full w-full object-cover"
            src="/videos/jurid-site.mp4"
            controls
            playsInline
            preload="metadata"
            aria-label="Demo do Jurid IA Voice em uso"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-3 text-center"
        >
          <CadastroCTA source="demo" size="lg">
            Comece grátis
            <ArrowRight size={18} aria-hidden />
          </CadastroCTA>
          <p className="text-sm text-text-muted">
            Crie sua conta em 30 segundos — nome, e-mail e telefone. Depois é só definir a senha.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
}
