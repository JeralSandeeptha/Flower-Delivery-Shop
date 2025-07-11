import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  server: {
    host: true,           // Bind to 0.0.0.0 to allow access from outside the container
    port: 5173,           // Optional: ensures consistency
    strictPort: true,     // Optional: fail if port is taken
    watch: {
      usePolling: true,   // Important: Enables file watching via polling inside Docker
    },
  },
  test: {
    globals: true,
    environment: 'jsdom', // Simulate browser environment
    setupFiles: './src/test/setup.ts', // Optional: setup file
  },
})
