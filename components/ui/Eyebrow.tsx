import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Size = "sm" | "md";

const SIZE_CLASS: Record<Size, string> = {
  sm: "gap-1.5 px-2.5 py-1 text-[10px] tracking-[0.18em]",
  md: "gap-2 px-3.5 py-1.5 text-[11px] tracking-[0.14em]",
};

const DOT_SIZE: Record<Size, string> = {
  sm: "h-1 w-1",
  md: "h-1.5 w-1.5",
};

type EyebrowProps = HTMLAttributes<HTMLSpanElement> & { size?: Size };

export function Eyebrow({ className, children, size = "md", ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border border-line bg-gold-soft font-semibold uppercase text-gold-light",
        SIZE_CLASS[size],
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className={cn(
          "rounded-full bg-gold shadow-[0_0_8px_theme(colors.gold.DEFAULT)]",
          DOT_SIZE[size],
        )}
      />
      {children}
    </span>
  );
}
