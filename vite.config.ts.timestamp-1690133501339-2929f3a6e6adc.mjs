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
    dts({ include: ["src/DashKit.ts", "src/components/base.ts"] })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: ["./src/DashKit.ts", "src/components/base.ts", "./src/assets/scss/app.scss"],
      formats: ["es"],
      name: "DashKit",
      fileName: (_, entry) => {
        if (entry == "base") {
          return `components/base.js`;
        }
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
          primevue: "primevue",
          i18n: "i18n"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9kZXYvZGFyd2lzaGRldi9wcml2YXRlL3BhY2thZ2VzL3Z1ZS9kYXNoLWtpdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvZGV2L2Rhcndpc2hkZXYvcHJpdmF0ZS9wYWNrYWdlcy92dWUvZGFzaC1raXQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvZGV2L2Rhcndpc2hkZXYvcHJpdmF0ZS9wYWNrYWdlcy92dWUvZGFzaC1raXQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB7IHJlc29sdmUsIGRpcm5hbWUgfSBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgVnVlSTE4blBsdWdpbiBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJ1xuaW1wb3J0IHN2Z0xvYWRlciBmcm9tICd2aXRlLXN2Zy1sb2FkZXInXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3Z1ZSgpLCBzdmdMb2FkZXIoKSxcbiAgZHRzKHsgaW5jbHVkZTogW1wic3JjL0Rhc2hLaXQudHNcIiwgXCJzcmMvY29tcG9uZW50cy9iYXNlLnRzXCJdIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IFtcIi4vc3JjL0Rhc2hLaXQudHNcIiwgXCJzcmMvY29tcG9uZW50cy9iYXNlLnRzXCIsIFwiLi9zcmMvYXNzZXRzL3Njc3MvYXBwLnNjc3NcIl0sXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiXSxcbiAgICAgIG5hbWU6IFwiRGFzaEtpdFwiLFxuICAgICAgZmlsZU5hbWU6IChfLCBlbnRyeSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlbnRyeSlcbiAgICAgICAgaWYgKGVudHJ5ID09ICdiYXNlJykge1xuICAgICAgICAgIHJldHVybiBgY29tcG9uZW50cy9iYXNlLmpzYFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHtlbnRyeX0uanNgXG4gICAgICB9XG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogW1xuICAgICAgICBcImhhcHB5LWRvbVwiLFxuICAgICAgICBcInZ1ZVwiLFxuICAgICAgICBcIkBidWZidWlsZC9jb25uZWN0LXdlYlwiLFxuICAgICAgICBcIkBmb3Jta2l0L2ljb25zXCIsXG4gICAgICAgIFwiQGZvcm1raXQvcHJvXCIsXG4gICAgICAgIFwiQGZvcm1raXQvdnVlXCIsXG4gICAgICAgIFwiQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG5cIixcbiAgICAgICAgXCJmaWxlLXNhdmVyXCIsXG4gICAgICAgIFwiZm9ybWtpdC1idWlsZGVyXCIsXG4gICAgICAgIFwicHJpbWVpY29uc1wiLFxuICAgICAgICBcInByaW1ldnVlXCIsXG4gICAgICAgIFwidnVlXCIsXG4gICAgICAgIFwidnVlLWkxOG5cIixcbiAgICAgICAgXCJ2dWUtcm91dGVyXCIsXG4gICAgICAgIFwieGxzeFwiLFxuICAgICAgXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiAnVnVlJyxcbiAgICAgICAgICBwcmltZXZ1ZTogJ3ByaW1ldnVlJyxcbiAgICAgICAgICBpMThuOiAnaTE4bicsXG5cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdVLFNBQVMsb0JBQW9CO0FBQ3JXLFNBQVMsZUFBZSxXQUFXO0FBQ25DLE9BQU8sU0FBUztBQUdoQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxTQUFTO0FBTjRMLElBQU0sMkNBQTJDO0FBUTdQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUFDLElBQUk7QUFBQSxJQUFHLFVBQVU7QUFBQSxJQUMzQixJQUFJLEVBQUUsU0FBUyxDQUFDLGtCQUFrQix3QkFBd0IsRUFBRSxDQUFDO0FBQUEsRUFDN0Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxjQUFjO0FBQUEsSUFDZCxLQUFLO0FBQUEsTUFDSCxPQUFPLENBQUMsb0JBQW9CLDBCQUEwQiw0QkFBNEI7QUFBQSxNQUNsRixTQUFTLENBQUMsSUFBSTtBQUFBLE1BQ2QsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLEdBQUcsVUFBVTtBQUN0QixnQkFBUSxJQUFJLEtBQUs7QUFDakIsWUFBSSxTQUFTLFFBQVE7QUFDbkIsaUJBQU87QUFBQSxRQUNUO0FBQ0EsZUFBTyxHQUFHLEtBQUs7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsVUFDTCxVQUFVO0FBQUEsVUFDVixNQUFNO0FBQUEsUUFFUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
