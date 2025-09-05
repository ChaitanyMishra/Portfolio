import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <button onClick={() => setDark(v => !v)} className="p-2 rounded-md bg-white/6 hover:bg-white/10 text-white">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
