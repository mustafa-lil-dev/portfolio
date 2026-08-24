import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-mono tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "border-signal/25 bg-signal/[0.08] text-signal",
        violet: "border-violet/25 bg-violet/[0.08] text-violet",
        amber: "border-amber/25 bg-amber/[0.08] text-amber",
        outline: "border-white/[0.12] bg-white/[0.02] text-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
