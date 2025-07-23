import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path'; // Don't forget to import path

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 5176,
    strictPort: false,
  },
  resolve: {
    alias: {
      // If reactbits is an npm package, you might not need an alias
      // If it's a local directory, alias it like this:
      reactbits: path.resolve(__dirname, './src/reactbits'),
      // or if it's in node_modules but needs special handling:
      // 'reactbits': path.resolve(__dirname, 'node_modules/reactbits'),
      
      // Your other aliases here
    }
  }
});