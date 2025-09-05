import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const [dark, setDark] = useState(false)

  // initialize on client only
  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem('theme-dark')
      if (saved !== null) {
        setDark(saved === '1')
        document.documentElement.classList.toggle('dark', saved === '1')
      } else {
        const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        setDark(prefers)
        document.documentElement.classList.toggle('dark', prefers)
      }
    } catch (_) {
      // ignore
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    try {
      document.documentElement.classList.toggle('dark', dark)
      localStorage.setItem('theme-dark', dark ? '1' : '0')
    } catch (_) {
      // ignore
    }
  }, [dark, mounted])

  if (!mounted) return <button className="p-2 rounded-md bg-white/6 text-white opacity-0" aria-hidden />

  return (
    <button
      onClick={() => setDark(v => !v)}
      aria-pressed={dark}
      className="p-2 rounded-md bg-gradient-to-r from-indigo-600 to-cyan-400 hover:from-indigo-500 hover:to-cyan-300 text-white shadow-md"
      title="Toggle dark mode"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
