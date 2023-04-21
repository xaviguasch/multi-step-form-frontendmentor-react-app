import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import globalStyle from '@originjs/vite-plugin-global-style'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
})
