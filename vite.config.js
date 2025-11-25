import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Pokemon-app-2/',
  plugins: [react()]
})