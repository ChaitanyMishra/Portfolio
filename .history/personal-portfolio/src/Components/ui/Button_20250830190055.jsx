import { cn } from "../../src/lib/utils";

export function Button({ className, children, ...props }) {
  return (
    <button
      className={cn(
        "px-6 py-2 rounded-xl font-semibold transition-all duration-200 shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400/50 backdrop-blur-md",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
