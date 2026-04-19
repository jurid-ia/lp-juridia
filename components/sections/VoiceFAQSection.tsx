"use client";

import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";

const FAQ = [
  {
    q: "Como faço para gravar?",
    a: "Um único toque na tela inicia a gravação. Funciona no celular (Android e iOS, pelo navegador) e no desktop. Sem instalação de plugin, sem configuração inicial.",
  },
  {
    q: "Funciona em diferentes contextos jurídicos?",
    a: "Sim. Atendimento inicial, reunião com cliente, alinhamento interno, conversa estratégica, reunião consultiva — o Voice se adapta ao tipo da conversa e identifica o que precisa ser preservado.",
  },
  {
    q: "O que recebo depois da conversa?",
    a: "Transcrição organizada com identificação de falas, resumo dos pontos principais e próximos passos extraídos. Tudo conectado ao registro do caso.",
  },
  {
    q: "Ele mostra quem falou o quê?",
    a: "Sim. Cada bloco da conversa é atribuído a um falante. Você sabe quem disse o quê e em qual momento — útil para validar acordos e revisar tratativas.",
  },
  {
    q: "Posso usar no celular?",
    a: "Sim. A experiência foi desenhada mobile-first. Grave a partir do celular e acesse o resultado estruturado no desktop, ou vice-versa.",
  },
  {
    q: "É seguro?",
    a: "Conformidade LGPD, criptografia em trânsito (TLS), infraestrutura em nuvem com isolamento por conta. O conteúdo das suas conversas não é usado para treinar modelos de terceiros.",
  },
  {
    q: "Existe plano grátis?",
    a: "Sim. O plano Essencial permite testar o Voice sem fricção, com um limite mensal de gravação. Quando fizer sentido, você evolui para o Profissional ou Escritório.",
  },
];

export function VoiceFAQSection() {
  return (
    <Section id="faq" className="bg-bg-soft">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-text md:text-4xl">
            Tudo o que costumam perguntar antes de começar.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-line overflow-hidden rounded-xl border border-line bg-bg-card">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-bg-elev">
                <span className="font-display text-base font-semibold text-text md:text-lg">
                  {item.q}
                </span>
                <Plus
                  size={20}
                  className="shrink-0 text-gold-light transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <div className="px-5 pb-5 text-sm leading-relaxed text-text-muted">{item.a}</div>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
