import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Ensures relative paths for hosted assets
  plugins: [react()],
  build: {
    outDir: 'dist', // Output folder for build artifacts
    rollupOptions: {
      output: {
        // Ensure proper file extensions for scripts
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
