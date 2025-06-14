import { Plugin } from 'vite';

declare module 'vite-plugin-dev-qrcode' {
  export interface DevQRCodeOptions {
    enabled?: boolean;
    /**
     * Whether to log verbose messages.
     * @default true
     */
    verbose?: boolean;
    /**
     * Whether to generate a small QR code.
     * @default true
     */
    small?: boolean;
    /**
     * Decide to filter url by yourself
     * @param url network url
     * @example url => url !== 'http://192.0.0.1:3000'
     * @returns {boolean}
     */
    filter?: (url: string) => boolean;
  }

  const devQRCode: (options: DevQRCodeOptions) => Plugin;
  export default devQRCode;
}
