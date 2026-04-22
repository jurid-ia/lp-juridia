"use client";

import { useEffect, useState } from "react";
import { Home, Sparkles, HelpCircle, UserPlus } from "lucide-react";
import { cn } from "@/lib/cn";
import { trackEvent } from "@/lib/track-event";

type NavItem = {
  href: string;
  label: string;
  icon: typeof Home;
  sectionId: string;
};

const ITEMS: NavItem[] = [
  { href: "#topo", label: "Início", icon: Home, sectionId: "topo" },
  { href: "#como-funciona", label: "Recursos", icon: Sparkles, sectionId: "como-funciona" },
  { href: "#faq", label: "FAQ", icon: HelpCircle, sectionId: "faq" },
];

// Nav inferior estilo app — só mobile. Centro elevado = CTA principal (Criar conta)
// para manter o foco de conversão sempre ao alcance do polegar.
export function MobileBottomNav() {
  const [activeId, setActiveId] = useState<string>("topo");

  useEffect(() => {
    const ids = ITEMS.map((i) => i.sectionId).concat("cadastro");
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleCadastroClick() {
    trackEvent({
      eventName: "ViewContent",
      contentName: "cta_cadastro_mobile_bottom_nav",
      contentCategory: "cta_scroll_form",
    });
  }

  return (
    <>
      {/* spacer para evitar que a nav cubra o final da página */}
      <div
        aria-hidden
        className="h-[calc(72px+env(safe-area-inset-bottom,0px))] md:hidden"
      />

      <nav
        aria-label="Navegação rápida"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg/95 backdrop-blur-xl md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="relative mx-auto flex h-[72px] max-w-md items-stretch justify-between px-2">
          {/* primeiros 2 itens */}
          {ITEMS.slice(0, 2).map((item) => (
            <NavLink key={item.href} item={item} active={activeId === item.sectionId} />
          ))}

          {/* CTA elevado no centro */}
          <div className="relative flex w-20 items-start justify-center">
            <a
              href="#cadastro"
              onClick={handleCadastroClick}
              aria-label="Criar conta"
              className="absolute -top-6 flex h-16 w-16 flex-col items-center justify-center gap-0.5 rounded-full bg-gradient-to-br from-gold-light to-gold-deep text-bg shadow-gold-lg transition-transform active:scale-95"
            >
              <UserPlus size={22} aria-hidden />
              <span className="text-[9px] font-bold uppercase tracking-wide">Criar</span>
            </a>
          </div>

          {/* últimos itens */}
          {ITEMS.slice(2).map((item) => (
            <NavLink key={item.href} item={item} active={activeId === item.sectionId} />
          ))}

          {/* WhatsApp como item fixo à direita */}
          <WhatsAppNavLink />
        </div>
      </nav>
    </>
  );
}

function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  const Icon = item.icon;
  return (
    <a
      href={item.href}
      aria-label={item.label}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex flex-1 flex-col items-center justify-center gap-1 px-2 py-2 text-[10px] font-semibold uppercase tracking-wide transition-colors",
        active ? "text-gold-light" : "text-text-soft hover:text-text-muted",
      )}
    >
      <Icon size={20} aria-hidden />
      <span>{item.label}</span>
    </a>
  );
}

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5541963475328";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pela landing page do Jurid IA Voice e quero entender melhor como funciona.",
);

function WhatsAppNavLink() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  function handleClick() {
    trackEvent({
      eventName: "Contact",
      contentName: "whatsapp_mobile_bottom_nav",
      contentCategory: "whatsapp_click",
    });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Falar no WhatsApp"
      className="flex flex-1 flex-col items-center justify-center gap-1 px-2 py-2 text-[10px] font-semibold uppercase tracking-wide text-[#25D366] transition-colors hover:text-[#1ebe5d]"
    >
      <WhatsAppIcon />
      <span>WhatsApp</span>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
