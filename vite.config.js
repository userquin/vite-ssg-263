import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';
import generateSitemap from 'vite-ssg-sitemap';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader({
      defaultImport: 'component',
      svgo: false,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        sourcemap: true,
        globPatterns: ['**/*.{js,css,html,webp}'],
      },
      manifest: {
        name: 'name',
        short_name: 'name',
        id: '/',
        start_url: './',
        description: 'description',
        theme_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: './pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: './pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        shortcuts: [
          {
            name: 'Galerie',
            url: './gallery',
            icons: [
              {
                src: './pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
              },
            ],
          },
          {
            name: 'À Propos',
            url: './about',
            icons: [
              {
                src: './pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
              },
            ],
          },
        ],
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@sass/main.scss" as *;
          @use "sass:map";
        `,
      },
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() {
      generateSitemap({
        hostname: 'http://localhost:8080',
      });
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@sass': path.resolve(__dirname, './src/assets/sass'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@svgs': path.resolve(__dirname, './src/assets/svgs'),
      '@js': path.resolve(__dirname, './src/assets/js'),
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        viteCompression({
          algorithm: 'brotliCompress',
          ext: '.br',
        }),
      ],
    },
  },
  server: {
    port: 3010,
  },
});
