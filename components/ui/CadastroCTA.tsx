"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/track-event";

type Size = "sm" | "md" | "lg";
type Variant = "primary" | "ghost" | "subtle";

// Botão âncora para #cadastro que dispara ViewContent (intenção de cadastro).
// Use `source` para identificar de qual seção veio — sobe a granularidade
// do Events Manager sem inflacionar conversão real (Lead fica reservado
// para o submit do formulário).
export function CadastroCTA({
  source,
  size = "md",
  variant = "primary",
  className,
  children,
  onClick,
}: {
  source: string;
  size?: Size;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  async function handleClick() {
    onClick?.();
    // Intenção: usuário sinalizou interesse em cadastrar. Não é Lead ainda
    // (Lead só após submit do formulário com dados válidos).
    trackEvent({
      eventName: "ViewContent",
      contentName: `cta_cadastro_${source}`,
      contentCategory: "cta_scroll_form",
    });
  }

  return (
    <Button
      as="a"
      href="#cadastro"
      size={size}
      variant={variant}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
