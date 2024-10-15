// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
const pathSrc = resolve(__dirname, "src");

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  css: {
    // CSS 预处理器
    preprocessorOptions: {
      // 定义全局 SCSS 变量
      scss: {
        javascriptEnabled: true,
        api: "modern-compiler",
        additionalData: `
          @use "@/styles/variables.scss" as *;
        `,
      },
    },
  },
});
