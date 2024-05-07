import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Vuetify from 'vite-plugin-vuetify'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import { fileURLToPath, URL } from 'node:url'
export default defineConfig({
  plugins: [
    VueRouter({
      exclude: ['**/components/**', '**/api/**', '**/static/**'],
    }),
    Layouts(),
    vue(),
    Vuetify({
      autoImport: true,
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 8000,
  },
})
