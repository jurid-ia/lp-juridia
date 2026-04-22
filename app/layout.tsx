import type { Metadata, Viewport } from "next";
import { Inter, Karla } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { MetaPixel } from "@/components/MetaPixel";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-karla",
  display: "swap",
});

const SITE_URL = "https://voice.juridia.com.br";
const TITLE = "Jurid IA Voice — Atendimentos jurídicos com contexto preservado";
const DESCRIPTION =
  "Grave atendimentos e reuniões jurídicas com simplicidade. Receba a conversa estruturada — quem falou o quê, resumo e próximos passos — para retomar o caso com clareza.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Jurid IA Voice",
  authors: [{ name: "Jurídia" }],
  keywords: [
    "Jurídia",
    "Voice",
    "transcrição jurídica",
    "advocacia",
    "atendimento",
    "registro de reunião",
    "IA jurídica",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Jurid IA Voice",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e0a05",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${karla.variable}`}>
      <body>
        <MetaPixel />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
