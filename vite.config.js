import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.php'],
  build: {
    outDir: 'build', // CRA's default build output
    assetsInlineLimit: 0,
  },
});