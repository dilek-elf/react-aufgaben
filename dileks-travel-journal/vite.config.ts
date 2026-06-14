import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    // this gonna generate routeTree.gen.ts automatically
    tanstackRouter({ routesDirectory: './src/routes' }),
    // will make Vite understand React, whats going on.
    react(),
    // Makes Tailwind work
    tailwindcss(),
  ],
})