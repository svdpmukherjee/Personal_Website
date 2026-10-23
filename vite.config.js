import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from a GitHub Pages "user site" at https://svdpmukherjee.github.io
// (repo named svdpmukherjee.github.io), so the site lives at the domain root.
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
})
