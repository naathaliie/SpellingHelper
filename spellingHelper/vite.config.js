import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router', // Om du använder Vue Router
      ],
    }),
    Components({
      // Du kan ställa in olika inställningar här
      dirs: ['src/components'], // Ange din komponentkatalog
      extensions: ['vue'],
      deep: true,
    }),
  ],
});
