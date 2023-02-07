import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MyLib',
      formats: ['es'],
      fileName: 'my-lib'
    },
    rollupOptions: {
      external: ['vue']
    }
  },
  plugins: [vue(), dts()]
})
