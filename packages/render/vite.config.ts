import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: join(__dirname, '../../dist/render')
  },
  resolve: {
    alias: [
      {
        find: '~',
        replacement: join(__dirname, 'src')
      }
    ]
  }
})
