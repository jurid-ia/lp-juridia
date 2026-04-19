import Image from "next/image";
import { Container } from "@/components/ui/Container";

const FOOTER_LINKS = [
  { href: "https://juridia.com.br", label: "Jurídia" },
  { href: "https://juridia.com.br/privacidade", label: "Privacidade" },
  { href: "https://juridia.com.br/termos", label: "Termos" },
  { href: "mailto:contato@juridia.com.br", label: "Contato" },
];

export function VoiceFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-bg-soft py-10">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo/logo-white.png"
            alt="Jurídia"
            width={110}
            height={28}
            className="h-7 w-auto"
          />
          <span className="rounded-pill border border-line bg-gold-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-light">
            Voice
          </span>
        </div>

        <nav aria-label="Rodapé" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-text-soft">© {year} Jurídia. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}
