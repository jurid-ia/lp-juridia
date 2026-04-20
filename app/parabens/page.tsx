import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ParabensHero } from "@/components/parabens/ParabensHero";
import { AccessOptions } from "@/components/parabens/AccessOptions";
import { WhatsAppCTA } from "@/components/parabens/WhatsAppCTA";
import { ParabensSlider } from "@/components/parabens/ParabensSlider";
import { WhatsAppFloating } from "@/components/parabens/WhatsAppFloating";

export const metadata: Metadata = {
  title: "Conta criada — Jurid IA Voice",
  description: "Sua conta foi criada. Escolha como quer começar a usar o Jurid IA Voice.",
  robots: { index: false, follow: false },
};

export default function ParabensPage() {
  return (
    <main className="hero-glow relative min-h-screen overflow-hidden py-10 md:py-16">
      {/* Brilhos decorativos extras — dão profundidade no mobile */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-gold-glow blur-3xl"
      />

      <Container className="relative z-10">
        <header className="flex justify-center">
          <a href="/" aria-label="Jurid IA Voice — voltar para o início" className="flex items-center gap-3">
            <Image
              src="/images/logo/logo-white.png"
              alt="Jurídia"
              width={120}
              height={32}
              className="h-7 w-auto md:h-8"
              priority
            />
            <span className="rounded-pill border border-line bg-gold-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-light">
              Voice
            </span>
          </a>
        </header>

        <ParabensHero />
        <AccessOptions />
        <WhatsAppCTA />
        <ParabensSlider />

        <footer className="mt-16 pb-24 text-center text-xs text-text-soft md:pb-16">
          © {new Date().getFullYear()} Jurídia. Todos os direitos reservados.
        </footer>
      </Container>

      <WhatsAppFloating />
    </main>
  );
}
