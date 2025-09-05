import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Check, Sun, Moon, Zap, Waves, Sunset } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'

const themeIcons = {
  dark: Moon,
  light: Sun,
  cyberpunk: Zap,
  ocean: Waves,
  sunset: Sunset
}

const themeColors = {
  dark: 'from-slate-800 to-purple-900',
  light: 'from-blue-50 to-indigo-100',
  cyberpunk: 'from-black via-purple-900 to-pink-900',
  ocean: 'from-slate-900 via-blue-900 to-cyan-900',
  sunset: 'from-orange-900 via-red-900 to-pink-900'
}

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentTheme, themes, changeTheme } = useTheme()

  const handleThemeChange = (themeName) => {
    changeTheme(themeName)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Theme selector"
      >
        <Palette size={20} />
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
            
            {/* Theme selector panel */}
            <motion.div
              className="absolute right-0 top-14 w-80 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl z-50"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                <Palette size={20} />
                Choose Theme
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(themes).map(([key, theme]) => {
                  const Icon = themeIcons[key]
                  const isSelected = currentTheme === key
                  
                  return (
                    <motion.button
                      key={key}
                      onClick={() => handleThemeChange(key)}
                      className={`relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                        isSelected 
                          ? 'border-white/50 bg-white/20' 
                          : 'border-white/20 bg-white/5 hover:bg-white/10'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${themeColors[key]} flex items-center justify-center`}>
                          <Icon size={20} className="text-white" />
                        </div>
                        
                        <div className="flex-1 text-left">
                          <div className="text-white font-medium">{theme.name}</div>
                          <div className="text-white/60 text-sm">
                            {key === 'dark' && 'Classic dark theme with purple accents'}
                            {key === 'light' && 'Clean light theme with blue tones'}
                            {key === 'cyberpunk' && 'Neon cyberpunk with electric vibes'}
                            {key === 'ocean' && 'Deep ocean blues and teals'}
                            {key === 'sunset' && 'Warm sunset oranges and pinks'}
                          </div>
                        </div>
                        
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                          >
                            <Check size={14} className="text-white" />
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Preview gradient */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${themeColors[key]} opacity-10 pointer-events-none`} />
                    </motion.button>
                  )
                })}
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-white/60 text-xs text-center">
                  Theme preferences are saved automatically
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
