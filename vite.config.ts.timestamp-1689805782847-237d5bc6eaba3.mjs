// vite.config.ts
import { defineConfig } from "file:///home/dev/darwishdev/private/packages/vue/dash-kit/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
import vue from "file:///home/dev/darwishdev/private/packages/vue/dash-kit/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import svgLoader from "file:///home/dev/darwishdev/private/packages/vue/dash-kit/node_modules/vite-svg-loader/index.js";
import dts from "file:///home/dev/darwishdev/private/packages/vue/dash-kit/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///home/dev/darwishdev/private/packages/vue/dash-kit/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    dts({ include: ["src/DashKit.ts"] })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: ["./src/DashKit.ts", "./src/assets/scss/app.scss"],
      formats: ["es"],
      name: "FormkitBuilder",
      fileName: (_, entry) => {
        return `${entry}.js`;
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
        "xlsx"
      ],
      output: {
        globals: {
          vue: "Vue",
          primevue: "primevue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9kZXYvZGFyd2lzaGRldi9wcml2YXRlL3BhY2thZ2VzL3Z1ZS9kYXNoLWtpdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvZGV2L2Rhcndpc2hkZXYvcHJpdmF0ZS9wYWNrYWdlcy92dWUvZGFzaC1raXQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvZGV2L2Rhcndpc2hkZXYvcHJpdmF0ZS9wYWNrYWdlcy92dWUvZGFzaC1raXQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBzdmdMb2FkZXIgZnJvbSAndml0ZS1zdmctbG9hZGVyJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFt2dWUoKSwgc3ZnTG9hZGVyKCksXG4gIGR0cyh7IGluY2x1ZGU6IFtcInNyYy9EYXNoS2l0LnRzXCJdIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IFtcIi4vc3JjL0Rhc2hLaXQudHNcIiwgXCIuL3NyYy9hc3NldHMvc2Nzcy9hcHAuc2Nzc1wiXSxcbiAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxuICAgICAgbmFtZTogXCJGb3Jta2l0QnVpbGRlclwiLFxuICAgICAgZmlsZU5hbWU6IChfLCBlbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gYCR7ZW50cnl9LmpzYFxuICAgICAgfVxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgXCJoYXBweS1kb21cIixcbiAgICAgICAgXCJ2dWVcIixcbiAgICAgICAgXCJAYnVmYnVpbGQvY29ubmVjdC13ZWJcIixcbiAgICAgICAgXCJAZm9ybWtpdC9pY29uc1wiLFxuICAgICAgICBcIkBmb3Jta2l0L3Byb1wiLFxuICAgICAgICBcIkBmb3Jta2l0L3Z1ZVwiLFxuICAgICAgICBcIkBpbnRsaWZ5L3VucGx1Z2luLXZ1ZS1pMThuXCIsXG4gICAgICAgIFwiZmlsZS1zYXZlclwiLFxuICAgICAgICBcImZvcm1raXQtYnVpbGRlclwiLFxuICAgICAgICBcInByaW1laWNvbnNcIixcbiAgICAgICAgXCJwcmltZXZ1ZVwiLFxuICAgICAgICBcInZ1ZVwiLFxuICAgICAgICBcInZ1ZS1pMThuXCIsXG4gICAgICAgIFwidnVlLXJvdXRlclwiLFxuICAgICAgICBcInhsc3hcIixcbiAgICAgIF0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHZ1ZTogJ1Z1ZScsXG4gICAgICAgICAgcHJpbWV2dWU6ICdwcmltZXZ1ZScsXG5cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdVLFNBQVMsb0JBQW9CO0FBQ3JXLFNBQVMsZUFBZSxXQUFXO0FBQ25DLE9BQU8sU0FBUztBQUNoQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxTQUFTO0FBSjRMLElBQU0sMkNBQTJDO0FBTTdQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUFDLElBQUk7QUFBQSxJQUFHLFVBQVU7QUFBQSxJQUMzQixJQUFJLEVBQUUsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFBQSxFQUNuQztBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGNBQWM7QUFBQSxJQUNkLEtBQUs7QUFBQSxNQUNILE9BQU8sQ0FBQyxvQkFBb0IsNEJBQTRCO0FBQUEsTUFDeEQsU0FBUyxDQUFDLElBQUk7QUFBQSxNQUNkLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxHQUFHLFVBQVU7QUFDdEIsZUFBTyxHQUFHLEtBQUs7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsVUFDTCxVQUFVO0FBQUEsUUFFWjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
