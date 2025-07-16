import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 5176,
    strictPort: true,
  },
  resolve: {
    alias: {
      // Your aliases here (if any)
    }
  }
});