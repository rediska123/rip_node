import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/rip_node", // Замените RepoName на имя вашего репозитория
  server: {
    port: 3000,
    host: "0.0.0.0",
    proxy: {
      '/api': {
        target: 'http://192.168.100.5:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/logo': {
        target: 'http://192.168.100.5:9000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/logo/, ''),
      },
    },
  },
});
