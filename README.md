# Jurid IA Voice — Landing Page

Landing page do **Jurid IA Voice**, construída em **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, mobile-first, com identidade visual escura/dourada herdada do institucional Jurídia.

Captura `nome + email + telefone` no hero e no CTA final, depois redireciona o usuário para `https://voice.juridia.com.br/register` para a etapa de senha (com os campos pré-preenchidos via query string).

---

## Stack

- **Next.js 14.2** (App Router, Route Handlers, file-based icon/OG)
- **React 18 + TypeScript 5** (strict)
- **Tailwind CSS 3.4** com tokens custom (`bg`, `gold`, `text`, `line`)
- **Framer Motion** para animações
- **Lucide React** para ícones
- **Zod** para validação compartilhada cliente/servidor
- **Inter + Karla** via `next/font/google`

---

## Como rodar

```bash
cd lp-voice-joaostel
npm install
cp .env.example .env.local      # opcional para o MVP
npm run dev                     # http://localhost:3000
```

Scripts disponíveis:

| Script              | O que faz                                     |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Dev server com hot reload em `localhost:3000` |
| `npm run build`     | Build de produção                             |
| `npm run start`     | Serve o build de produção                     |
| `npm run lint`      | ESLint via `next lint`                        |
| `npm run typecheck` | `tsc --noEmit` para checagem estrita de tipos |

---

## Estrutura

```
app/
├── layout.tsx              # Fonts, metadata, OG
├── page.tsx                # Compõe todas as seções
├── globals.css             # Tailwind + utilitários (.glass, .hero-glow, etc.)
├── icon.png                # Favicon (file-based)
├── opengraph-image.tsx     # OG dinâmico 1200×630
└── api/leads/route.ts      # POST /api/leads (stub — ver backlog)

components/
├── forms/LeadForm.tsx      # Form de captura (variant: hero | cta)
├── sections/Voice*.tsx     # 12 componentes de seção
└── ui/                     # Button, Input, Container, Section, Eyebrow, GoldGradientText

lib/
├── cn.ts                   # clsx + tailwind-merge
├── masks.ts                # maskPhone, onlyDigits
├── validators.ts           # LeadSchema (zod, compartilhado)
└── analytics.ts            # track() — empurra para window.dataLayer

public/images/logo/         # logo.png e logo-white.png
legacy/index.html           # Protótipo HTML original (referência)
```

### Seções renderizadas (em ordem)

1. `VoiceNavbar` — sticky glass com hamburger no mobile
2. `VoiceHeroSection` — proposição + `LeadForm variant="hero"`
3. `VoiceProblemSection` — 4 cards de dor silenciosa
4. `VoiceDemoSection` — slot de vídeo demo (placeholder)
5. `VoiceHowItWorksSection` — 4 passos
6. `VoiceFeaturesSection` — 6 entregas pós-conversa
7. `VoiceUseCasesSection` — 6 cenários da rotina jurídica
8. `VoiceTrustSection` — LGPD, criptografia, cloud, discrição
9. `VoicePlansSection` — 3 planos (preços a definir)
10. `VoiceFAQSection` — 7 perguntas em `<details>`
11. `VoiceCTASection` — `LeadForm variant="cta"` + `id="cadastro"` (na verdade o anchor `#cadastro` está no hero)
12. `VoiceFooter` — logo + links

---

## Form de captura

Arquivo: [`components/forms/LeadForm.tsx`](components/forms/LeadForm.tsx).

Campos: **nome**, **email**, **telefone** (máscara BR `(99) 99999-9999`).

Fluxo:

1. Validação com `LeadSchema` (zod).
2. `POST /api/leads` (best-effort — não bloqueia o redirect se falhar).
3. `track("lead_submit")` para analytics.
4. `window.location.assign('https://voice.juridia.com.br/register?nome=...&email=...&telefone=...')`.

A URL de destino é controlada por `NEXT_PUBLIC_REGISTER_URL` (ver `.env.example`).

---

## API `/api/leads` — atual e futuro

Hoje a route handler ([`app/api/leads/route.ts`](app/api/leads/route.ts)) **valida com zod** e **loga no console** (`[leads:stub]`). Sempre retorna `200` quando os dados são válidos. É um stub intencional, pronto para receber a integração com backend.

**Backlog (decisão de backend pendente — usuário pediu para retomar depois):**

1. **Supabase** (mesma stack do `juridia-web-v2`). Adicionar `@supabase/supabase-js`, criar tabela `leads`, definir `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`.
2. **POST `/lawyer/register`** (mesmo endpoint do `institucional-juridia/lib/lawyer-register.ts`) — criar conta de fato e usar o `accessToken` na URL de redirect.
3. **Manter só o redirect** — descartar a route handler.

---

## Identidade visual

Tokens em [`tailwind.config.ts`](tailwind.config.ts):

- **Background:** `bg.DEFAULT` `#0e0a05`, `bg.soft` `#15100a`, `bg.card` `#1c1610`, `bg.elev` `#221a11`
- **Gold:** `gold.DEFAULT` `#b09060`, `gold.light` `#c9a57c`, `gold.deep` `#8a7050`
- **Texto:** `text.DEFAULT` `#ffffff`, `text.muted` `#b8a890`, `text.soft` `#8a7e6c`
- **Linhas/borders:** `line.DEFAULT` e `line.strong` (transparências do dourado)

Utilitários custom em [`app/globals.css`](app/globals.css):

- `.glass` — fundo translúcido + blur (cards do form e cards de seção)
- `.gradient-gold-text` — gradiente dourado para `<GoldGradientText />`
- `.hero-glow::before` — brilhos radiais do hero

Logos em [`public/images/logo/`](public/images/logo/).

---

## Mobile & acessibilidade

- Mobile-first — testado em 360, 390, 768, 1280
- Navbar vira hamburger `<md`
- Tap targets ≥ 44×44px
- `inputMode="tel"`/`autoComplete="tel"` no telefone
- `:focus-visible` consistente com outline dourado
- `aria-invalid`, `aria-describedby` e `role="alert"` no form

---

## Verificação manual

```bash
# 1. Smoke test do form (sem backend, sem secrets):
curl -X POST http://localhost:3000/api/leads \
  -H 'content-type: application/json' \
  -d '{"nome":"Teste","email":"a@b.com","telefone":"(11) 91234-5678","source":"hero"}'
# Esperado: {"ok":true} + log [leads:stub] no terminal do dev server.

# 2. Browser:
#  - Preencher form do hero -> submit -> deve redirecionar para
#    https://voice.juridia.com.br/register?nome=...&email=...&telefone=...
#  - Repetir no CTA final.
#  - Validações: nome curto, email inválido, telefone com menos de 10 dígitos.

# 3. Build:
npm run typecheck
npm run lint
npm run build && npm start
```

---

## Referências aos projetos irmãos

- `../institucional-juridia/` — paleta dourada de origem, `lib/masks.ts`, padrão de form de cadastro (`TrialForm.tsx`).
- `../juridia-web-v2/` — fontes Inter + Karla, padrões de Voice LP existentes em `app/lp-voice/components/`, animações Framer Motion + blur backgrounds.

Esta LP **não importa código** dos outros projetos — copia apenas padrões e tokens, mantendo-se standalone.

---

## Fora de escopo (MVP)

- Backend real do form (Supabase / `/lawyer/register`) — adiado por decisão do usuário.
- CMS / MDX para a copy.
- A/B testing.
- i18n (pt-BR apenas).
- Auth, dashboard, fluxo pós-register (`voice.juridia.com.br/register` cobre).
- Rate limiting da Route Handler — adicionar antes do go-live público.
- WhatsApp flutuante.
# lp-juridia
