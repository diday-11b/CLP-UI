import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // Keep both plugins installed for Figma Make exports and local Vite builds.
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Keep import paths stable across app code and generated Figma packages.
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Raw asset imports used by the design handoff. Do not include source files here.
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.png', '**/*.jpg', '**/*.jpeg'],
})
