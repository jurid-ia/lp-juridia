"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5541963475328";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Acabei de criar minha conta no Jurid IA Voice e quero receber os links de acesso por aqui.",
);

export function WhatsAppFloating() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.8 }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.96 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar conosco no WhatsApp"
      className="group fixed bottom-4 right-4 z-50 flex items-center gap-2.5 rounded-pill bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_-10px_rgba(37,211,102,0.7)] transition-colors duration-200 hover:bg-[#1ebe5d] md:bottom-8 md:right-8 md:gap-3"
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-pill bg-[#25D366] opacity-70 animate-ping"
      />
      <MessageCircle size={20} aria-hidden className="shrink-0" />
      <span>Falar no WhatsApp</span>
    </motion.a>
  );
}
