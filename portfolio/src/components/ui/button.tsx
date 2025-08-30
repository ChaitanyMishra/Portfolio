import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-md font-medium transition-transform active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40";
    const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
      default:
        "bg-gradient-to-b from-violet-500 to-violet-600 text-white shadow-lg hover:from-violet-400 hover:to-violet-600 hover:shadow-violet-500/30",
      secondary:
        "bg-slate-800 text-slate-100 border border-white/10 hover:bg-slate-700",
      ghost: "bg-transparent text-slate-200 hover:bg-white/5",
      outline:
        "bg-transparent text-slate-100 border border-slate-600 hover:bg-white/5",
    };
    const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
      sm: "h-9 px-3 text-sm",
      md: "h-11 px-5 text-base",
      lg: "h-12 px-6 text-base",
    };
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], "hover:scale-[1.03]", className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

