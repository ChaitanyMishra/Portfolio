"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react" // icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ["Home", "About", "Education", "Projects", "Contacts"]

  return (
    <header className="w-full h-auto pr-14 flex items-center p-6 justify-between bg-white/10 backdrop-blur-md shadow-md rounded-b-2xl border-b border-white/20">
      
      {/* Name / Logo */}
      <a
        href="#"
        className="group relative inline-block text-violet-200 text-2xl sm:text-4xl font-bold overflow-hidden"
      >
        <span className="bg-gradient-to-r from-white via-violet-600 to-white bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-shine transition-all duration-1000 ">
          Chaitany Mishra
        </span>
        <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-violet-100 group-hover:w-full transition-all duration-700"></span>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex text-violet-200 text-lg gap-6 pt-2">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="group relative inline-block font-medium overflow-hidden"
            >
              <span className="bg-gradient-to-r from-white via-violet-500 to-white bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-shine transition-all duration-700">
                {item}
              </span>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-violet-300 group-hover:w-full transition-all duration-700"></span>
            </a>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-violet-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 right-6 bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-4 border border-white/20 md:hidden">
          <ul className="flex flex-col text-violet-200 text-lg gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="group relative inline-block font-medium overflow-hidden"
                onClick={() => setIsOpen(false)} // closes menu on click
              >
                <span className="bg-gradient-to-r from-white via-violet-500 to-white bg-[length:200%_100%] bg-clip-text text-transparent group-hover:animate-shine transition-all duration-700">
                  {item}
                </span>
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-violet-300 group-hover:w-full transition-all duration-700"></span>
              </a>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
