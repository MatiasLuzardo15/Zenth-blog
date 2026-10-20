import path from 'path';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { PUBLIC_PATHS } from './routing/publicPaths';

/** Publish SPA entrypoints only for existing pages, leaving unknown paths to the host's 404. */
function publicEntrypoints(): Plugin {
  let outDir: string;
  return {
    name: 'zenth-public-entrypoints',
    apply: 'build',
    configResolved(config) { outDir = path.resolve(config.root, config.build.outDir); },
    closeBundle() {
      const html = readFileSync(path.join(outDir, 'index.html'), 'utf8');
      for (const route of PUBLIC_PATHS.filter(route => route !== '/')) {
        const folder = path.join(outDir, route.slice(1));
        mkdirSync(folder, { recursive: true });
        writeFileSync(path.join(folder, 'index.html'), html);
      }
    },
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), publicEntrypoints()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
