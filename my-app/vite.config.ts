import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/passes_frontend", // Замените RepoName на имя вашего репозитория
  server: {
    port: 3000,
    host: "0.0.0.0",
    proxy: {
      '/api': {
        target: 'http://192.168.48.1:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
