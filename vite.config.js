import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { TailwindCSSVitePlugin } from 'tailwindcss-vite-plugin';


const tailwindConfigPath = './tailwind.config.js'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    TailwindCSSVitePlugin({
      config: tailwindConfigPath,
    }),
  ],
})
