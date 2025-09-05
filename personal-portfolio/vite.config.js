import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// ESM fix: define __dirname manually
const __dirname = new URL('.', import.meta.url).pathname

export default defineConfig({
  base: '/Portfolio/personal-portfolio/', // ✅ Add this line
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
