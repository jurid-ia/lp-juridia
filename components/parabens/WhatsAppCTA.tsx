"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5541963475328";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Acabei de criar minha conta no Jurid IA Voice e quero receber os links de acesso por aqui.",
);

export function WhatsAppCTA() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto mt-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-[#25D366]/40 bg-gradient-to-br from-[#0c1f14] via-[#0e1a12] to-[#0e0a05] p-6 shadow-[0_20px_60px_-20px_rgba(37,211,102,0.35)] md:p-8"
    >
      {/* Glow decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-[#25D366]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 h-44 w-44 rounded-full bg-[#1ebe5d]/15 blur-3xl"
      />

      <div className="relative flex flex-col items-center gap-5 text-center md:flex-row md:items-center md:gap-6 md:text-left">
        <motion.div
          initial={{ scale: 0.8, rotate: -8 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.1 }}
          className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-[0_14px_30px_-10px_rgba(37,211,102,0.6)] md:h-20 md:w-20"
        >
          <MessageCircle size={28} className="md:h-9 md:w-9" aria-hidden />
          <span
            aria-hidden
            className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#1ebe5d] text-[9px] font-bold text-white animate-pulse-gold"
          >
            •
          </span>
        </motion.div>

        <div className="flex-1">
          <span className="inline-flex items-center gap-1.5 rounded-pill border border-[#25D366]/40 bg-[#25D366]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7ee2a6]">
            Atendimento direto
          </span>
          <h2 className="mt-3 font-display text-xl font-bold text-text md:text-2xl">
            Prefere receber os links pelo WhatsApp?
          </h2>
          <p className="mt-1.5 text-sm text-text-muted md:text-base">
            A gente te manda iOS, Android e Web por lá — e você tira dúvidas com um humano no mesmo
            chat.
          </p>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-pill bg-[#25D366] px-7 text-base font-bold text-white shadow-[0_14px_30px_-10px_rgba(37,211,102,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5d] hover:shadow-[0_18px_40px_-10px_rgba(37,211,102,0.75)] active:translate-y-0 md:w-auto md:shrink-0"
        >
          <MessageCircle size={20} aria-hidden />
          Falar no WhatsApp
          <ArrowRight size={18} aria-hidden className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.div>
  );
}
