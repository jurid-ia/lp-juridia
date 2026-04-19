import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "subtle";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-gold-light to-gold-deep text-bg shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5",
  ghost:
    "border border-line-strong text-text hover:bg-gold-soft hover:border-gold/60",
  subtle: "text-text-muted hover:text-text",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type AsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type AsAnchor = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

export type ButtonProps = AsButton | AsAnchor;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({ variant = "primary", size = "md", className, children, ...rest }, ref) {
    const classes = cn(base, variants[variant], sizes[size], className);

    if (rest.as === "a") {
      const { as: _as, ...anchorProps } = rest;
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={classes} {...anchorProps}>
          {children}
        </a>
      );
    }

    const { as: _as, ...buttonProps } = rest as AsButton;
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...buttonProps}>
        {children}
      </button>
    );
  },
);
