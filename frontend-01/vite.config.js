import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8080', // 你的 Spring Boot 后端
      changeOrigin: true
    }
  }
}
})
