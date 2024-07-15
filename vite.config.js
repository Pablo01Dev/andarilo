import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://www.andarilo.com.br/', 
  plugins: [react()],
});
