# vite-plugin-dev-qrcode

Displays a QR code in the terminal when the Vite development server starts, making it easy to access your app-in-development on mobile devices.

## features

- Generates a QR code for the project URL in the terminal
- Supports multiple URLs (local and network addresses), but default ignore localhost url
- Customizable options
- Fully typed TypeScript implementation

## install

```bash
# use npm
npm install vite-plugin-dev-qrcode -D
# use yarn
yarn add vite-plugin-dev-qrcode -D
# use pnpm
pnpm add vite-plugin-dev-qrcode -D
```

## usage

```javascript
import { defineConfig } from 'vite';
import devQRCode from 'vite-plugin-dev-qrcode';

export default defineConfig({
  plugins: [devQRCode()]
});
```

![example](./examples/example.png 'example image')

## options

| Option  | Description                                | Default     |
| ------- | ------------------------------------------ | ----------- |
| enabled | Whether to enable the plugin               | `true`      |
| verbose | Whether to show detailed logs              | `true`      |
| small   | Whether to use a small-sized QR code image | `true`      |
| filter  | Decide to filter url by yourself           | `undefined` |

## develop

```bash
# project root directory run:
pnpm install
pnpm dev
pnpm -C examples dev
```
