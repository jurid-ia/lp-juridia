"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CadastroCTA } from "@/components/ui/CadastroCTA";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#entrega", label: "O que entrega" },
  { href: "#casos", label: "Casos de uso" },
  { href: "#faq", label: "FAQ" },
];

export function VoiceNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <a href="#topo" className="flex items-center gap-3" aria-label="Jurid IA Voice — início">
          <Image
            src="/images/logo/logo-white.png"
            alt="Jurídia"
            width={120}
            height={32}
            priority
            className="h-7 w-auto md:h-8"
          />
          <span className="hidden rounded-pill border border-line bg-gold-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-light sm:inline-block">
            Voice
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <CadastroCTA source="navbar_desktop" size="sm">
            Criar conta
          </CadastroCTA>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-text md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-text-muted hover:bg-gold-soft hover:text-text"
              >
                {link.label}
              </a>
            ))}
            <CadastroCTA
              source="navbar_mobile"
              size="md"
              className="mt-3 w-full"
              onClick={() => setOpen(false)}
            >
              Criar conta
            </CadastroCTA>
          </Container>
        </div>
      )}
    </header>
  );
}
