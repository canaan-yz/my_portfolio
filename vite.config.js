import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://github.com/wangzongming/
import vitePluginRequire from "vite-plugin-require";


const tailwindConfigPath = './tailwind.config.js'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginRequire.default(), // sometimes need .default()
  ],
})
