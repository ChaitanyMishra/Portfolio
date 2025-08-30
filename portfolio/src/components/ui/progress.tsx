import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0-100
}

export function Progress({ value, className, ...props }: ProgressProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div
      className={cn(
        "h-3 w-full rounded-full bg-slate-800/80 border border-white/10 overflow-hidden",
        className
      )}
      {...props}
    >
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 transition-all duration-700"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

