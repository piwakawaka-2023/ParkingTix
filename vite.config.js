import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin('OPEN_AI_KEY')],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
