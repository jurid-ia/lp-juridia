import { type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type SectionProps = HTMLAttributes<HTMLElement> & { id?: string };

export function Section({ className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-20 md:py-28", className)}
      {...props}
    />
  );
}
