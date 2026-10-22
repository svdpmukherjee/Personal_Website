import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from a GitHub Pages "project site" at
// https://svdpmukherjee.github.io/Personal_Website/  → base must be the repo name.
// If you deploy to a user site repo (svdpmukherjee.github.io) or to Vercel, set base to '/'.
// https://vite.dev/config/
export default defineConfig({
  base: '/Personal_Website/',
  plugins: [react()],
})
