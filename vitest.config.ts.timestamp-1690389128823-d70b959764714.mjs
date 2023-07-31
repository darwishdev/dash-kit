// vitest.config.ts
import { configDefaults, defineConfig as defineConfig2 } from "file:///d:/Melon/dash-kit/node_modules/vitest/dist/config.js";

// vite.config.ts
import { defineConfig } from "file:///d:/Melon/dash-kit/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
import vue from "file:///d:/Melon/dash-kit/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import svgLoader from "file:///d:/Melon/dash-kit/node_modules/vite-svg-loader/index.js";
import dts from "file:///d:/Melon/dash-kit/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///d:/Melon/dash-kit/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    dts({ include: ["src/DashKit.ts", "src/composables/composables.ts", "src/components/base.ts", "src/views/views.ts", "src/views/LoginView.vue", "src/views/ProfileView.vue", "src/forms/forms.ts", "src/types/types.ts", "src/utils/helpers.ts"] })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: ["./src/DashKit.ts", "src/composables/composables.ts", "src/components/base.ts", "src/views/views.ts", "src/forms/forms.ts", "src/utils/helpers.ts", "./src/assets/scss/app.scss"],
      formats: ["es"],
      name: "DashKit",
      fileName: (_, entry) => {
        if (entry == "base") {
          return `components/base.js`;
        }
        if (entry == "froms") {
          return `froms/froms.js`;
        }
        if (entry == "views") {
          return `views/views.js`;
        }
        if (entry == "helpers") {
          return `utils/helpers.js`;
        }
        if (entry == "composables") {
          return `composables/composables.js`;
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

// vitest.config.ts
import { mergeConfig } from "file:///d:/Melon/dash-kit/node_modules/vite/dist/node/index.js";
var vitest_config_default = mergeConfig(
  vite_config_default,
  defineConfig2({
    test: {
      globals: true,
      environment: "happy-dom",
      coverage: {
        reporter: ["text", "json", "html"]
      },
      exclude: [...configDefaults.exclude, "e2e/*"],
      transformMode: {
        web: [/\.[jt]sx$/]
      }
    }
  })
);
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcImQ6XFxcXE1lbG9uXFxcXGRhc2gta2l0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJkOlxcXFxNZWxvblxcXFxkYXNoLWtpdFxcXFx2aXRlc3QuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9kOi9NZWxvbi9kYXNoLWtpdC92aXRlc3QuY29uZmlnLnRzXCI7aW1wb3J0IHsgY29uZmlnRGVmYXVsdHMsIGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVzdC9jb25maWcnXHJcbmltcG9ydCB2aXRlQ29uZmlnIGZyb20gJy4vdml0ZS5jb25maWcnXHJcbmltcG9ydCB7IG1lcmdlQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lcmdlQ29uZmlnKFxyXG4gICAgdml0ZUNvbmZpZyxcclxuICAgIGRlZmluZUNvbmZpZyh7XHJcbiAgICAgICAgdGVzdDoge1xyXG4gICAgICAgICAgICBnbG9iYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICBlbnZpcm9ubWVudDogJ2hhcHB5LWRvbScsXHJcbiAgICAgICAgICAgIGNvdmVyYWdlOiB7XHJcbiAgICAgICAgICAgICAgICByZXBvcnRlcjogWyd0ZXh0JywgJ2pzb24nLCAnaHRtbCddLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleGNsdWRlOiBbLi4uY29uZmlnRGVmYXVsdHMuZXhjbHVkZSwgJ2UyZS8qJ10sXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybU1vZGU6IHtcclxuICAgICAgICAgICAgICAgIHdlYjogWy9cXC5banRdc3gkL11cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LFxyXG4gICAgfSkpIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJkOlxcXFxNZWxvblxcXFxkYXNoLWtpdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiZDpcXFxcTWVsb25cXFxcZGFzaC1raXRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2Q6L01lbG9uL2Rhc2gta2l0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgc3ZnTG9hZGVyIGZyb20gJ3ZpdGUtc3ZnLWxvYWRlcidcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFt2dWUoKSwgc3ZnTG9hZGVyKCksXHJcbiAgZHRzKHsgaW5jbHVkZTogW1wic3JjL0Rhc2hLaXQudHNcIiwgXCJzcmMvY29tcG9zYWJsZXMvY29tcG9zYWJsZXMudHNcIiwgXCJzcmMvY29tcG9uZW50cy9iYXNlLnRzXCIsIFwic3JjL3ZpZXdzL3ZpZXdzLnRzXCIsIFwic3JjL3ZpZXdzL0xvZ2luVmlldy52dWVcIiwgXCJzcmMvdmlld3MvUHJvZmlsZVZpZXcudnVlXCIsIFwic3JjL2Zvcm1zL2Zvcm1zLnRzXCIsIFwic3JjL3R5cGVzL3R5cGVzLnRzXCIsIFwic3JjL3V0aWxzL2hlbHBlcnMudHNcIl0gfSksXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgIH1cclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiBbXCIuL3NyYy9EYXNoS2l0LnRzXCIsIFwic3JjL2NvbXBvc2FibGVzL2NvbXBvc2FibGVzLnRzXCIsIFwic3JjL2NvbXBvbmVudHMvYmFzZS50c1wiLCBcInNyYy92aWV3cy92aWV3cy50c1wiLCBcInNyYy9mb3Jtcy9mb3Jtcy50c1wiLCBcInNyYy91dGlscy9oZWxwZXJzLnRzXCIsIFwiLi9zcmMvYXNzZXRzL3Njc3MvYXBwLnNjc3NcIl0sXHJcbiAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxyXG4gICAgICBuYW1lOiBcIkRhc2hLaXRcIixcclxuICAgICAgZmlsZU5hbWU6IChfLCBlbnRyeSkgPT4ge1xyXG4gICAgICAgIGlmIChlbnRyeSA9PSAnYmFzZScpIHtcclxuICAgICAgICAgIHJldHVybiBgY29tcG9uZW50cy9iYXNlLmpzYFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW50cnkgPT0gJ2Zyb21zJykge1xyXG4gICAgICAgICAgcmV0dXJuIGBmcm9tcy9mcm9tcy5qc2BcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVudHJ5ID09ICd2aWV3cycpIHtcclxuICAgICAgICAgIHJldHVybiBgdmlld3Mvdmlld3MuanNgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbnRyeSA9PSAnaGVscGVycycpIHtcclxuICAgICAgICAgIHJldHVybiBgdXRpbHMvaGVscGVycy5qc2BcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVudHJ5ID09ICdjb21wb3NhYmxlcycpIHtcclxuICAgICAgICAgIHJldHVybiBgY29tcG9zYWJsZXMvY29tcG9zYWJsZXMuanNgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgJHtlbnRyeX0uanNgXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbXHJcbiAgICAgICAgXCJoYXBweS1kb21cIixcclxuICAgICAgICBcInZ1ZVwiLFxyXG4gICAgICAgIFwiQGJ1ZmJ1aWxkL2Nvbm5lY3Qtd2ViXCIsXHJcbiAgICAgICAgXCJAZm9ybWtpdC9pY29uc1wiLFxyXG4gICAgICAgIFwiQGZvcm1raXQvcHJvXCIsXHJcbiAgICAgICAgXCJAZm9ybWtpdC92dWVcIixcclxuICAgICAgICBcIkBpbnRsaWZ5L3VucGx1Z2luLXZ1ZS1pMThuXCIsXHJcbiAgICAgICAgXCJmaWxlLXNhdmVyXCIsXHJcbiAgICAgICAgXCJmb3Jta2l0LWJ1aWxkZXJcIixcclxuICAgICAgICBcInByaW1laWNvbnNcIixcclxuICAgICAgICBcInByaW1ldnVlXCIsXHJcbiAgICAgICAgXCJ2dWVcIixcclxuICAgICAgICBcInZ1ZS1pMThuXCIsXHJcbiAgICAgICAgXCJ2dWUtcm91dGVyXCIsXHJcbiAgICAgICAgXCJ4bHN4XCIsXHJcbiAgICAgIF0sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgIHZ1ZTogJ1Z1ZScsXHJcbiAgICAgICAgICBwcmltZXZ1ZTogJ3ByaW1ldnVlJyxcclxuICAgICAgICAgIGkxOG46ICdpMThuJyxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErTyxTQUFTLGdCQUFnQixnQkFBQUEscUJBQW9COzs7QUNBakQsU0FBUyxvQkFBb0I7QUFDeFEsU0FBUyxlQUFlLFdBQVc7QUFDbkMsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZUFBZTtBQUN0QixPQUFPLFNBQVM7QUFKK0gsSUFBTSwyQ0FBMkM7QUFNaE0sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQUMsSUFBSTtBQUFBLElBQUcsVUFBVTtBQUFBLElBQzNCLElBQUksRUFBRSxTQUFTLENBQUMsa0JBQWtCLGtDQUFrQywwQkFBMEIsc0JBQXNCLDJCQUEyQiw2QkFBNkIsc0JBQXNCLHNCQUFzQixzQkFBc0IsRUFBRSxDQUFDO0FBQUEsRUFDalA7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxjQUFjO0FBQUEsSUFDZCxLQUFLO0FBQUEsTUFDSCxPQUFPLENBQUMsb0JBQW9CLGtDQUFrQywwQkFBMEIsc0JBQXNCLHNCQUFzQix3QkFBd0IsNEJBQTRCO0FBQUEsTUFDeEwsU0FBUyxDQUFDLElBQUk7QUFBQSxNQUNkLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxHQUFHLFVBQVU7QUFDdEIsWUFBSSxTQUFTLFFBQVE7QUFDbkIsaUJBQU87QUFBQSxRQUNUO0FBQ0EsWUFBSSxTQUFTLFNBQVM7QUFDcEIsaUJBQU87QUFBQSxRQUNUO0FBQ0EsWUFBSSxTQUFTLFNBQVM7QUFDcEIsaUJBQU87QUFBQSxRQUNUO0FBQ0EsWUFBSSxTQUFTLFdBQVc7QUFDdEIsaUJBQU87QUFBQSxRQUNUO0FBQ0EsWUFBSSxTQUFTLGVBQWU7QUFDMUIsaUJBQU87QUFBQSxRQUNUO0FBQ0EsZUFBTyxHQUFHLEtBQUs7QUFBQSxNQUNqQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsVUFDTCxVQUFVO0FBQUEsVUFDVixNQUFNO0FBQUEsUUFFUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7OztBRGxFRCxTQUFTLG1CQUFtQjtBQUU1QixJQUFPLHdCQUFRO0FBQUEsRUFDWDtBQUFBLEVBQ0FDLGNBQWE7QUFBQSxJQUNULE1BQU07QUFBQSxNQUNGLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNOLFVBQVUsQ0FBQyxRQUFRLFFBQVEsTUFBTTtBQUFBLE1BQ3JDO0FBQUEsTUFDQSxTQUFTLENBQUMsR0FBRyxlQUFlLFNBQVMsT0FBTztBQUFBLE1BQzVDLGVBQWU7QUFBQSxRQUNYLEtBQUssQ0FBQyxXQUFXO0FBQUEsTUFDckI7QUFBQSxJQUVKO0FBQUEsRUFDSixDQUFDO0FBQUM7IiwKICAibmFtZXMiOiBbImRlZmluZUNvbmZpZyIsICJkZWZpbmVDb25maWciXQp9Cg==
