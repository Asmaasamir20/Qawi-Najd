import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import compression from 'vite-plugin-compression';
import imagemin from 'vite-plugin-imagemin';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isProduction = mode === 'production';

  return {
    build: {
      target: 'esnext',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: isProduction,
          drop_debugger: isProduction,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react/jsx-runtime'],
            'ui-vendor': ['@headlessui/react', '@heroicons/react'],
            'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    plugins: [
      react({
        babel: {
          plugins: [['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]],
        },
      }),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: [],
        manifest: {
          name: 'قوَى نَجْد للاستشارات الهندسية',
          short_name: 'قوَى نَجْد',
          description:
            'شركة رائدة في مجال التصميم والبناء، نسعى دائماً لتقديم أفضل الخدمات لعملائنا الكرام',
          theme_color: '#F03E2F',
          background_color: '#ffffff',
          display: 'standalone',
          orientation: 'portrait',
          start_url: '/',
          scope: '/',
          icons: [
            {
              src: '/src/assets/images/logo/Capture.webp',
              sizes: '192x192 512x512',
              type: 'image/webp',
              purpose: 'any maskable'
            }
          ],
          dir: 'rtl',
          lang: 'ar',
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,webp}'],
          disableDevLogs: true,
          navigateFallback: null,
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
          runtimeCaching: [
            {
              urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'static-images',
                expiration: {
                  maxEntries: 60,
                  maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /\.(?:js|css)$/,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'static-resources',
                expiration: {
                  maxEntries: 60,
                  maxAgeSeconds: 60 * 60 * 24, // 24 hours
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'google-fonts',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: true,
          type: 'module',
        },
      }),
      compression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 1024,
        deleteOriginalAssets: false,
      }),
      compression({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 1024,
        deleteOriginalAssets: false,
      }),
      imagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 75,
          progressive: true,
        },
        pngquant: {
          quality: [0.7, 0.8],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
              active: false,
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
        webp: {
          quality: 75,
          method: 6,
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@lib': path.resolve(__dirname, './src/lib'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@utils': path.resolve(__dirname, './src/utils'),
      },
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@headlessui/react',
        '@heroicons/react',
        'i18next',
        'react-i18next',
        'i18next-browser-languagedetector',
      ],
      exclude: [],
      force: true,
    },
    server: {
      port: 3001,
      strictPort: true,
      host: true,
      cors: true,
      hmr: {
        overlay: true,
      },
      watch: {
        usePolling: true,
      },
    },
  };
});
