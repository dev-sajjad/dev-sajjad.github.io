import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/Personal-Portfolio-Website/' : '/',
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["vue"],
          motion: ["@vueuse/motion"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  define: {
    __VUE_PROD_DEVTOOLS__: false,
  },
});
