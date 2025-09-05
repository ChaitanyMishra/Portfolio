import { cn } from "../../src/lib/utils";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 bg-white/10 dark:bg-zinc-900/60 shadow-xl backdrop-blur-lg border border-white/20 dark:border-zinc-800/40 transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
