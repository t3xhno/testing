/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    // Import globals automatically
    globals: true,
    // Test environment for web apps (DOM access)
    environment: "happy-dom",
    // Enable watch mode
    watch: true,
    // Custom reporter
    reporters: "default",
    // Test file names to look for
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src"),
      "@api": path.resolve(__dirname, "src/api"),
      "@json": path.resolve(__dirname, "src/json"),
      "@views": path.resolve(__dirname, "src/views"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@plugins": path.resolve(__dirname, "src/plugins"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
})
