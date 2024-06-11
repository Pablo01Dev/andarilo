import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Substitua 'meu-projeto' pelo nome do seu repositório
  plugins: [react()],
});
