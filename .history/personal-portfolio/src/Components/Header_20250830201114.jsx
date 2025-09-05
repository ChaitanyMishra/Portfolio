"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react" // icons
import { motion } from "framer-motion"
import DarkModeToggle from './ui/DarkModeToggle'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ["Home", "About", "Education", "Projects", "Contacts"]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-auto px-6 flex items-center py-4 justify-between bg-black/20 backdrop-blur-md shadow-lg rounded-b-2xl border-b border-white/10">
      
      {/* Name / Logo */}
      <motion.a
        href="#"
        className="group relative inline-block text-violet-200 text-2xl sm:text-4xl font-bold overflow-hidden"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="bg-gradient-to-r from-white via-violet-600 to-white bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-shine transition-all duration-1000">
          Chaitany Mishra
        </span>
        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-violet-100 group-hover:w-full transition-all duration-700"></span>
      </motion.a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex text-violet-200 text-lg gap-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href="#"
              className="group relative inline-block font-medium overflow-hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-white via-violet-500 to-white bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-shine transition-all duration-700">
                {item}
              </span>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-violet-300 group-hover:w-full transition-all duration-700"></span>
            </motion.a>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="hidden md:block mr-4">
        <DarkModeToggle />
      </div>
      <motion.button
        className="md:hidden text-violet-200 z-50"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </motion.button>

      {/* Mobile Dropdown */}
      <motion.div
        className={`fixed md:hidden top-0 right-0 h-screen w-64 bg-black/90 backdrop-blur-md p-8 shadow-2xl transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="pt-10">
          <ul className="flex flex-col text-violet-200 text-lg gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="group relative inline-block font-medium overflow-hidden"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
              >
                <span className="bg-gradient-to-r from-white via-violet-500 to-white bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-shine transition-all duration-700">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-violet-300 group-hover:w-full transition-all duration-700"></span>
              </motion.a>
            ))}
          </ul>
        </div>
      </motion.div>
    </header>
  )
}
