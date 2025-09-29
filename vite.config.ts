import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/todoflow/',          // <-- IMPORTANT pour GitHub Pages
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
})
