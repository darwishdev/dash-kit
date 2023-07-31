import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@models': fileURLToPath(new URL('./node_modules/@buf/ahmeddarwish_mln-api.bufbuild_es/rms', import.meta.url)),
    }
  },
})
