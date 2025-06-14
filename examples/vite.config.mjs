import { defineConfig } from 'vite';
import devQRcode from 'vite-plugin-dev-qrcode';

export default defineConfig({
  plugins: [devQRcode()]
});
