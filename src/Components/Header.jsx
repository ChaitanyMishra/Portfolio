"use client"

import { useState, useRef, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa" // icons
import { motion } from "framer-motion"
import { useTheme } from "../contexts/ThemeContext"
import ThemeSelector from "./ui/ThemeSelector"
void motion;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const { theme } = useTheme()

  // close on outside click or Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    function handleKey(e) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen])

  const navItems = ["Home", "About", "Education", "Projects", "Contact"]

  return (
  <header className={`fixed top-0 left-0 right-0 z-50 w-full h-auto px-6 flex items-center py-4 justify-between ${theme.colors.glass} border-b border-white/10`}>
      
      {/* Name / Logo */}
              <motion.a
        href="#"
        className={`group relative inline-block ${theme.colors.text} text-2xl sm:text-4xl font-bold overflow-hidden`}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="bg-gradient-to-r from-white via-cyan-400 to-white bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-shine transition-all duration-1000">
          Chaitany Mishra
        </span>
        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-700"></span>
      </motion.a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6">
        <ul className={`flex ${theme.colors.text} text-lg gap-6`}> 
          {navItems.map((item, index) => (
            <li key={item}>
              <motion.a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  const id = item.toLowerCase();
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`group relative inline-block font-medium overflow-hidden hover:opacity-90 rounded-md px-2 py-1 hover:bg-white/5 transition-colors`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-shine transition-all duration-700">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500 rounded"></span>
              </motion.a>
            </li>
          ))}
        </ul>
        <ThemeSelector />
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        <ThemeSelector />
        <motion.button
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          className={`${theme.colors.text} z-50 drop-shadow`}
          onClick={() => setIsOpen(!isOpen)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </motion.button>
      </div>
      {/* Mobile Dropdown + overlay */}
  {isOpen && <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-40" aria-hidden onClick={() => setIsOpen(false)} />}
      <motion.div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        className={`fixed md:hidden top-0 right-0 h-screen w-4/5 max-w-xs ${theme.colors.card} p-6 z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out border-l border-white/10`}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: isOpen ? 0 : "100%", opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.32, ease: "easeInOut" }}
      >
        <div className="pt-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className={`${theme.colors.text} text-lg font-semibold drop-shadow`}>Menu</span>
            </div>
            <motion.button
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-white hover:bg-white/5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTimes size={20} />
            </motion.button>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col text-white text-lg gap-4">
              {navItems.map((item, index) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    className="group block font-medium overflow-hidden py-3 px-2 rounded-md hover:bg-white/5"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(item.toLowerCase());
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setIsOpen(false);
                    }}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28, delay: index * 0.06 }}
                    whileHover={{ x: 6 }}
                  >
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-500">
                      {item}
                    </span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.div>
    </header>
  )
}
