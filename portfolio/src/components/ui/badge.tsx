import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default"
          ? "bg-white/10 text-slate-200 border border-white/10"
          : "bg-transparent border border-slate-600 text-slate-300",
        className
      )}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

