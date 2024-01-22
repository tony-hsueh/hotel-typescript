import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/hotel-typescript/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@components": path.resolve(__dirname, "./src/components/"),
    }
  }
})
