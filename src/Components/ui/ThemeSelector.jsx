import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Check, Sun, Moon, Zap, Waves, Sunset, Leaf } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'

const themeIcons = {
  dark: Moon,
  cyberpunk: Zap,
  ocean: Waves,
  emerald: Leaf
}

const themeColors = {
  dark: 'from-slate-800 to-purple-900',
  cyberpunk: 'from-black via-purple-900 to-pink-900',
  ocean: 'from-slate-900 via-blue-900 to-cyan-900',
  emerald: 'from-emerald-600 to-teal-700'
}

export default function ThemeSelector() {
  // ensure linter recognizes 'motion' as used when JSX transforms can confuse some linters
  void motion
  const [isOpen, setIsOpen] = useState(false)
  const { currentTheme, themes, changeTheme } = useTheme()

  const handleThemeChange = (themeName) => {
    changeTheme(themeName)
    setIsOpen(false)
  }

  const CurrentIcon = themeIcons[currentTheme] || Sun
  return (
    <div className="relative ">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Theme selector"
        aria-expanded={isOpen}
      >
        <CurrentIcon size={18} />
        <span className="hidden sm:inline text-sm font-medium">{themes[currentTheme]?.name ?? 'Theme'}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              className="absolute right-0 top-14 w-72 bg-gradient-to-br from-white/1 to-white/30 
             backdrop-blur-xl 
             border border-white/10 
             rounded-2xl p-4 
             shadow-[0_8px_32px_rgba(0,0,0,0.25)] 
             z-50 bg-white/8 "
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white text-sm font-semibold flex items-center gap-2">
                  <Palette size={16} />
                  Choose Theme
                </h3>
                <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white p-1 rounded-md">Close</button>
              </div>

              <div className="space-y-2">
                {Object.entries(themes).map(([key, theme]) => {
                  const Icon = themeIcons[key] || Sun
                  const isSelected = currentTheme === key
                  
                  return (
                    <motion.button
                      key={key}
                      onClick={() => handleThemeChange(key)}
                      className={`w-full relative p-2 rounded-lg flex items-center gap-3 transition-all duration-200 text-left ${
                        isSelected ? 'bg-white/12 border border-white/20' : 'hover:bg-white/6'
                      }`}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className={`w-10 h-10 rounded-md bg-gradient-to-br ${themeColors[key] || 'from-slate-500 to-zinc-700'} flex items-center justify-center`}> 
                        <Icon size={16} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">{theme.name}</div>
                        <div className="text-white/60 text-xs truncate">
                          {key === 'dark' && 'Classic dark theme with purple accents'}
                          {key === 'light' && 'Clean light theme with blue tones'}
                          {key === 'cyberpunk' && 'Neon cyberpunk with electric vibes'}
                          {key === 'ocean' && 'Deep ocean blues and teals'}
                          {key === 'sunset' && 'Warm sunset oranges and pinks'}
                          {key === 'emerald' && 'Emerald teal with soft contrast'}
                        </div>
                      </div>
                      {isSelected && (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Check size={12} className="text-white" />
                        </div>
                      )}
                    </motion.button>
                  )
                })}
              </div>

              <div className="mt-3 pt-3 border-t border-white/10">
                <p className="text-white/60 text-xs text-center">Theme preferences are saved automatically</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
