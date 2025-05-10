import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Qawi Najd",
        short_name: "Qawi Najd",
        description: "Qawi Najd - Quality and Safety in Elevator Solutions",
        theme_color: "#1f4167",
        icons: [
          {
            src: "/src/assets/images/logo/Capture.webp",
            sizes: "192x192",
            type: "image/webp",
          },
          {
            src: "/src/assets/images/logo/Capture.webp",
            sizes: "512x512",
            type: "image/webp",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/shared": path.resolve(__dirname, "src/shared"),
      "@/pages": path.resolve(__dirname, "src/pages"),
    },
  },
  server: {
    port: 3001,
    open: true,
    hmr: {
      protocol: "ws",
      host: "localhost",
      port: 24679,
    },
  },
  build: {
    target: "es2015",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@headlessui/react", "@heroicons/react"],
        },
      },
    },
  },
  publicDir: "public",
  assetsInclude: ["**/*.webp", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg"],
  css: {
    postcss: './postcss.config.js',
  },
})
