import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'  
import { resolve } from 'url'  
import less from 'less'  
  
import postcss from 'postcss'  

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      less: resolve(path.dirname(import.meta.url), 'node_modules/less/lib/less.js')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        // 将 less 文件解析为 CSS 并在 Vite 中使用，同时启用 CSSnano 进行优化  
        javascriptEnabled: true,
        
        lessOptions: {
          javascriptEnabled: true,
          parser: less // 使用 less 的解析器，而不是默认的 CSS 解析器。这允许您在 less 文件中使用 JavaScript。  
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080', //目标url
        changeOrigin: true, //支持跨域
        rewrite: (path) => path.replace(/^\/api/, ""),
        //重写路径,替换/api
      }
    }
  }
})
