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
      primary: 'from-slate-900 via-purple-900 to-slate-900',
      secondary: 'from-indigo-900 via-purple-800 to-pink-900',
      accent: 'from-violet-600 to-purple-600',
      text: 'text-white',
      textSecondary: 'text-gray-300',
      card: 'bg-slate-800/50 backdrop-blur-sm border-slate-700/50',
      button: 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500',
      glass: 'bg-slate-800/20 backdrop-blur-md border-slate-700/30'
    }
  },
  light: {
    name: 'Light',
    colors: {
      primary: 'from-indigo-500 via-pink-200 to-purple-900',
      secondary: 'from-sky-100 via-blue-200 to-indigo-200',
      accent: 'from-purple-700 to-indigo-900',
      text: 'text-black',
      textSecondary: 'text-black',
      card: 'bg-white/100 backdrop-blur-xl text-black border-slate-300/10',
      button: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500',
      glass: 'bg-white/40 backdrop-blur-xl border-white/60'
    }
  },
  cyberpunk: {
    name: 'Cyberpunk',
    colors: {
      primary: 'from-black via-purple-900 to-pink-900',
      secondary: 'from-cyan-900 via-purple-800 to-pink-800',
      accent: 'from-cyan-400 to-pink-500',
      text: 'text-cyan-100',
      textSecondary: 'text-pink-200',
      card: 'bg-black/60 backdrop-blur-sm border-cyan-500/30',
      button: 'bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400',
      glass: 'bg-cyan-900/20 backdrop-blur-md border-cyan-500/30'
    }
  },
  ocean: {
    name: 'Ocean',
    colors: {
      primary: 'from-slate-900 via-blue-900 to-cyan-900',
      secondary: 'from-blue-800 via-cyan-800 to-teal-800',
      accent: 'from-blue-400 to-cyan-400',
      text: 'text-blue-100',
      textSecondary: 'text-cyan-200',
      card: 'bg-blue-900/50 backdrop-blur-sm border-blue-500/30',
      button: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400',
      glass: 'bg-blue-900/20 backdrop-blur-md border-blue-500/30'
    }
  },
  sunset: {
    name: 'Sunset',
    colors: {
      primary: 'from-orange-900 via-red-900 to-pink-900',
      secondary: 'from-yellow-800 via-orange-800 to-red-800',
      accent: 'from-orange-400 to-pink-500',
      text: 'text-orange-100',
      textSecondary: 'text-pink-200',
      card: 'bg-orange-900/50 backdrop-blur-sm border-orange-500/30',
      button: 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400',
      glass: 'bg-orange-900/20 backdrop-blur-md border-orange-500/30'
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
