import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Ensures all routes are served by index.html
  },
  resolve: {
    alias: {
      '@js': '/src',
      '@css': '/src',
    },
  },
})
