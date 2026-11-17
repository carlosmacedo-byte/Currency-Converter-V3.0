import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CORREÇÃO ARQUITETURAL: Aponta os assets para o subdiretório do GitHub Pages
  base: '/Currency-Converter-V3.0/', 
})