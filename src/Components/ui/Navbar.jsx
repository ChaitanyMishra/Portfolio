import { cn } from "../lib/utils";
import { Button } from "./Button";

export function Navbar({ links = [], className }) {
  return (
    <nav
      className={cn(
        "w-full flex items-center justify-between py-4 px-8 bg-white/10 dark:bg-zinc-900/60 shadow-lg backdrop-blur-lg border-b border-white/20 dark:border-zinc-800/40 fixed top-0 left-0 z-50",
        className
      )}
    >
      <div className="font-bold text-xl text-indigo-500">Chaitanya Mishra</div>
      <div className="flex gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-white/80 hover:text-indigo-400 font-medium transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </div>
      <Button className="ml-4">Contact</Button>
    </nav>
  );
}
