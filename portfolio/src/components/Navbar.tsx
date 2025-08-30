import React from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#timeline", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="font-semibold gradient-text">Chaitany Mishra</a>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          <span className="i">≡</span>
        </button>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a className="text-slate-300 hover:text-slate-100" href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <motion.ul
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="md:hidden overflow-hidden border-t border-white/10"
      >
        {links.map((l) => (
          <li key={l.href} className="px-6 py-3">
            <a className="block text-slate-300" href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navbar;

