import { cn } from "@/lib/utils";

export function Button({ className, children, ...props }) {
  // prevent Framer Motion props (and other animation props) from being forwarded to the DOM button
  const {
    whileHover,
    whileTap,
    whileDrag,
    whileFocus,
    whileInView,
    initial,
    animate,
    exit,
    variants,
    transition,
    ...rest
  } = props;
  // mark these as intentionally unused to avoid lint warnings
  void whileHover; void whileTap; void whileDrag; void whileFocus; void whileInView; void initial; void animate; void exit; void variants; void transition;

  return (
    <button
      className={cn(
        "px-6 py-2 rounded-xl font-semibold transition-all duration-200 shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400/50 backdrop-blur-md",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
