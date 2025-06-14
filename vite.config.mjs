import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'vitePluginDevQRcode',
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['vite', 'qrcode-terminal']
    }
  },
  plugins: [
    dtsPlugin({
      insertTypesEntry: true
    })
  ]
});
