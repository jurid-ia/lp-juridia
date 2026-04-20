import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Tone = "warm" | "cool" | "deep" | "soft";

const TONE_CLASS: Record<Tone, string> = {
  warm: "bg-[radial-gradient(circle_at_30%_30%,rgba(201,165,124,0.35),rgba(28,22,16,1)_70%)]",
  cool: "bg-[radial-gradient(circle_at_70%_30%,rgba(176,144,96,0.22),rgba(21,16,10,1)_70%)]",
  deep: "bg-[radial-gradient(circle_at_30%_70%,rgba(138,112,80,0.28),rgba(14,10,5,1)_70%)]",
  soft: "bg-[radial-gradient(circle_at_70%_70%,rgba(201,165,124,0.18),rgba(28,22,16,1)_75%)]",
};

export type PhotoSlotProps = {
  /** Caminho público da imagem (ex.: "/images/usecases/atendimento.jpg"). Quando ausente, mostra placeholder. */
  src?: string;
  alt: string;
  tone?: Tone;
  /** Aspect ratio CSS (ex.: "4/5", "16/9", "1/1"). Padrão "4/5". */
  aspect?: string;
  /** Use quando estiver dentro de um container com altura definida. */
  fillParent?: boolean;
  className?: string;
};

export function PhotoSlot({
  src,
  alt,
  tone = "warm",
  aspect = "4/5",
  fillParent = false,
  className,
}: PhotoSlotProps) {
  const wrapperClass = cn(
    "relative overflow-hidden rounded-2xl border border-line",
    fillParent ? "h-full w-full" : "w-full",
    className,
  );

  return (
    <figure className={wrapperClass} style={fillParent ? undefined : { aspectRatio: aspect }}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 30vw, 90vw"
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className={cn(
            "flex h-full w-full flex-col items-start justify-end gap-2 p-4",
            TONE_CLASS[tone],
          )}
        >
          <ImageIcon size={16} aria-hidden className="text-text-soft/60" />
          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-text-soft">
            {alt}
          </span>
        </div>
      )}
    </figure>
  );
}
