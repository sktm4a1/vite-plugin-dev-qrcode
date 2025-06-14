import type { Plugin, ViteDevServer } from 'vite';
import QRCode from 'qrcode-terminal';

export interface DevQRCodeOptions {
  enabled?: boolean;
  verbose?: boolean;
  small?: boolean;
  filter?: (url: string) => boolean;
}

export default function devQRCode(options: DevQRCodeOptions = { enabled: true }): Plugin {
  if (!options.enabled) {
    return {
      name: 'vite-plugin-dev-qrcode',
      apply: 'serve'
    };
  }

  return {
    name: 'vite-plugin-dev-qrcode',
    apply: 'serve',
    configureServer(server: ViteDevServer) {
      const _listen = server.listen;

      server.listen = function (
        ...args: [port?: number | undefined, isRestart?: boolean | undefined]
      ) {
        server.httpServer?.once('listening', () => {
          // setTimeout ensure the network URLs are resolved
          setTimeout(() => getQRCode(server, options), 0);
        });

        return _listen.apply(this, args);
      };
    }
  };
}

function getQRCode(server: ViteDevServer, options: DevQRCodeOptions) {
  const { verbose = true, small = true, filter } = options;
  const info = server.config.logger.info;

  let resolvedUrls = server.resolvedUrls?.network || [];
  if (resolvedUrls.length === 0) {
    if (verbose) {
      info(
        '[dev-qrcode] No server URLs found to generate QR code， please use `vite --host` to enable network access.'
      );
    }
    return;
  }

  if (filter) {
    resolvedUrls = resolvedUrls.filter(filter);
  }

  resolvedUrls.forEach((url) => {
    QRCode.generate(url, { small }, (qrcode) => {
      info(`\n${qrcode}\n`);
      if (verbose) {
        info(`[dev-qrcode] Scan above QR code to open ${url} on mobile device`);
      }
    });
  });
}
