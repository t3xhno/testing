/// <reference types="vitest" />
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
    reporters: "verbose",
    // Test file names to look for
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
  plugins: [vue()],
})
