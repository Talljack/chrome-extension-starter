/// <reference types="vitest" />
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsConfig from 'vite-tsconfig-paths'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-expect-error @typescript-eslint/ban-ts-comment
  plugins: [react(), viteTsConfig(), crx({ manifest })],
  build: {
    rollupOptions: {
      // default is multiple entry
      // if you want to use single entry, you can remove one
      input: {
        options: resolve(__dirname, 'pages/options.html'),
        popup: resolve(__dirname, 'pages/popup.html'),
      },
    },
  },
  test: {},
})
