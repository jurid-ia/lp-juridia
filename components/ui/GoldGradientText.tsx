import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function GoldGradientText({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("gradient-gold-text", className)} {...props}>
      {children}
    </span>
  );
}
