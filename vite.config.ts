/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      assets: path.resolve(__dirname, './src/assets'),
      data: path.resolve(__dirname, './src/data'),
      utils: path.resolve(__dirname, './src/utils'),
      constants: path.resolve(__dirname, './src/constants'),
      test: path.resolve(__dirname, './src/test'),
      hooks: path.resolve(__dirname, './src/hooks'),
      router: path.resolve(__dirname, './src/router'),
      store: path.resolve(__dirname, './src/store'),
      API: path.resolve(__dirname, './src/API'),
    },
  },
  server: {
    open: true,
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  test: {
    coverage: {
      all: true,
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      exclude: ['src/main.tsx', 'src/hooks/*'],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
