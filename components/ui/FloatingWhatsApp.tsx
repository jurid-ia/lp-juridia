"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/track-event";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5541963475328";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pela landing page do Jurid IA Voice e quero entender melhor como funciona.",
);

export function FloatingWhatsApp() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  function handleClick() {
    trackEvent({
      eventName: "Contact",
      contentName: "whatsapp_floating",
      contentCategory: "whatsapp_click",
    });
  }

  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.6 }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.94 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-8 right-8 z-40 hidden items-center gap-3 rounded-pill bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_-10px_rgba(37,211,102,0.7)] transition-colors duration-200 hover:bg-[#1ebe5d] md:inline-flex"
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
