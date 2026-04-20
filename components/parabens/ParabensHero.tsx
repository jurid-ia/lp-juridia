"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GoldGradientText } from "@/components/ui/GoldGradientText";

export function ParabensHero() {
  return (
    <section className="mx-auto mt-12 flex max-w-2xl flex-col items-center text-center md:mt-20">
      <motion.div
        initial={{ scale: 0.4, opacity: 0, rotate: -20 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.1 }}
        className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold-soft text-gold-light shadow-gold animate-pulse-gold"
      >
        <CheckCircle2 size={32} aria-hidden />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Eyebrow size="sm" className="mt-6">
          Conta criada com sucesso
        </Eyebrow>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.35 }}
        className="mt-5 font-display text-[clamp(2rem,6vw,3rem)] font-bold leading-[1.1] text-text"
      >
        Bem-vindo ao <GoldGradientText>Jurid IA Voice</GoldGradientText>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.45 }}
        className="mt-5 max-w-xl text-base text-text-muted md:text-lg"
      >
        Tudo pronto. Escolha por onde você prefere começar — ou peça para a gente enviar os links
        direto no seu WhatsApp.
      </motion.p>
    </section>
  );
}
