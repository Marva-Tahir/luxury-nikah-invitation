import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    // Mobile-friendly host
    host: true,
  },
  build: {
    outDir: 'dist',
  },
});
