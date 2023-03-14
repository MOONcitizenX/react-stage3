/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
