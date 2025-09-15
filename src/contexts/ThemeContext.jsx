import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const themes = {
  dark: {
    name: 'Dark',
    colors: {
      primary: 'from-slate-950 via-purple-950 to-slate-950',
      secondary: 'from-indigo-950 via-purple-900 to-fuchsia-900',
      accent: 'from-violet-600 to-purple-600',
      text: 'text-slate-100',
      textSecondary: 'text-slate-300',
      card: 'bg-slate-900/60 backdrop-blur sm:backdrop-blur-md md:backdrop-blur-xl border-slate-700/50 shadow-[0_10px_30px_rgba(0,0,0,0.35)]',
      cardText: 'text-slate-100',
      button: 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500',
      glass: 'bg-slate-900/30 backdrop-blur sm:backdrop-blur-md md:backdrop-blur-xl border-slate-700/40'
    }
  },
  
  cyberpunk: {
    name: 'Cyberpunk',
    colors: {
      primary: 'from-black via-purple-950 to-pink-950',
      secondary: 'from-cyan-950 via-purple-900 to-pink-900',
      accent: 'from-cyan-400 to-pink-500',
      text: 'text-cyan-100',
      textSecondary: 'text-pink-200',
      card: 'bg-black/60 backdrop-blur sm:backdrop-blur-md md:backdrop-blur-xl border-cyan-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.35)]',
      cardText: 'text-cyan-100',
      button: 'bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400',
      glass: 'bg-cyan-950/20 backdrop-blur sm:backdrop-blur-md md:backdrop-blur-xl border-cyan-500/30'
    }
  },
  ocean: {
    name: 'Ocean',
    colors: {
      primary: 'from-slate-950 via-blue-950 to-cyan-950',
      secondary: 'from-blue-900 via-cyan-900 to-teal-900',
      accent: 'from-blue-400 to-cyan-400',
      text: 'text-blue-100',
      textSecondary: 'text-cyan-200',
      card: 'bg-blue-950/50 backdrop-blur sm:backdrop-blur-md md:backdrop-blur-xl border-blue-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.35)]',
      cardText: 'text-blue-100',
      button: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400',
      glass: 'bg-blue-950/25 backdrop-blur sm:backdrop-blur-md md:backdrop-blur-xl border-blue-500/30'
    }
  },
  
  emerald: {
    name: 'Emerald',
    colors: {
      primary: 'from-emerald-900 via-teal-900 to-slate-900',
      secondary: 'from-emerald-800 via-teal-800 to-slate-800',
      accent: 'from-emerald-400 to-teal-400',
      text: 'text-emerald-100',
      textSecondary: 'text-teal-200',
      card: 'bg-emerald-950/40 backdrop-blur sm:backdrop-blur-md md:backdrop-blur-xl border-emerald-600/30 shadow-[0_10px_30px_rgba(0,0,0,0.35)]',
      cardText: 'text-emerald-100',
      button: 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400',
      glass: 'bg-emerald-900/20 backdrop-blur sm:backdrop-blur-md md:backdrop-blur-xl border-emerald-600/30'
    }
  }
}

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('portfolio-theme', currentTheme)
      document.documentElement.setAttribute('data-theme', currentTheme)
    }
  }, [currentTheme, mounted])

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName)
    }
  }

  const value = {
    currentTheme,
    themes,
    theme: themes[currentTheme],
    changeTheme,
    mounted
  }

  if (!mounted) {
    return <div className="min-h-screen bg-slate-900" />
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
