import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import VitePluginFonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: ['Poppins']
      }
    })
  ],
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  },
  define: {
    'process.env': process.env,
    global: 'window'
  }
})
