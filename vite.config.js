import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base : 'https://Nicolas-Mazziotti.github.io/portfolio_mazziotti',
})
