import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { resolve, dirname } from 'node:path'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import svgLoader from 'vite-svg-loader'
import dts from 'vite-plugin-dts';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader(),
  dts({ include: ["src/DashKit.ts"] }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: ["./src/DashKit.ts", "./src/assets/scss/app.scss"],
      formats: ["es"],
      name: "FormkitBuilder",
      fileName: (_, entry) => {
        return `${entry}.js`
      }
    },
    rollupOptions: {
      external: [
        "happy-dom",
        "vue",
        "@bufbuild/connect-web",
        "@formkit/icons",
        "@formkit/pro",
        "@formkit/vue",
        "@intlify/unplugin-vue-i18n",
        "file-saver",
        "formkit-builder",
        "primeicons",
        "primevue",
        "vue",
        "vue-i18n",
        "vue-router",
        "xlsx",
      ],
      output: {
        globals: {
          vue: 'Vue',
          primevue: 'primevue',
          i18n: 'i18n',

        },
      },
    },
  },
})
