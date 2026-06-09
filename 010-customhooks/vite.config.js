import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // neu

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // neu
  ],
})