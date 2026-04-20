"use client";

import { motion } from "framer-motion";
import { Apple, ArrowRight, Globe, Smartphone, type LucideIcon } from "lucide-react";

type Option = {
  id: string;
  icon: LucideIcon;
  label: string;
  description: string;
  href: string;
};

const OPTIONS: Option[] = [
  {
    id: "ios",
    icon: Apple,
    label: "Baixar para iPhone",
    description: "App nativo na App Store.",
    href: "https://apps.apple.com/br/app/jurid-voice-ia-para-advogado/id6754660537",
  },
  {
    id: "android",
    icon: Smartphone,
    label: "Baixar para Android",
    description: "App nativo na Play Store.",
    href: "https://play.google.com/store/apps/details?id=com.executivos.juridiavoice",
  },
  {
    id: "web",
    icon: Globe,
    label: "Abrir no navegador",
    description: "Use direto pelo computador.",
    href: "https://voice.juridia.com.br",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 160, damping: 18 },
  },
};

export function AccessOptions() {
  return (
    <motion.section
      aria-label="Opções de acesso"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="mx-auto mt-12 grid w-full max-w-4xl gap-4 md:mt-14 md:grid-cols-3"
    >
      {OPTIONS.map((option) => {
        const external = option.href.startsWith("http");
        return (
          <motion.a
            key={option.id}
            variants={card}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            href={option.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-xl border border-line bg-bg-card p-6 transition-all duration-200 hover:border-gold/60 hover:shadow-gold"
          >
            {/* Halo que aparece no hover */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(200px 160px at 30% 20%, rgba(201,165,124,0.18), transparent 70%)",
              }}
            />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-gold-soft text-gold-light transition-transform duration-200 group-hover:scale-110">
              <option.icon size={22} aria-hidden />
            </div>
            <div className="relative flex flex-1 flex-col gap-1">
              <h2 className="font-display text-lg font-semibold text-text">{option.label}</h2>
              <p className="text-sm text-text-muted">{option.description}</p>
            </div>
            <span className="relative inline-flex items-center gap-1.5 text-sm font-semibold text-gold-light transition-transform duration-200 group-hover:translate-x-1">
              Acessar
              <ArrowRight size={16} aria-hidden />
            </span>
          </motion.a>
        );
      })}
    </motion.section>
  );
}
