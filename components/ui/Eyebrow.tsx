import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill border border-line bg-gold-soft px-3.5 py-1.5",
        "text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-light",
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_10px_theme(colors.gold.DEFAULT)]"
      />
      {children}
    </span>
  );
}
