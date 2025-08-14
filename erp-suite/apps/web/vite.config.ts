import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Or the port you want to use
    host: true,
    origin: 'http://localhost:5173', // Or your deployed origin
  },
  base: '/',
});