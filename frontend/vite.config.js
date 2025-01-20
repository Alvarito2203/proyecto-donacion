import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Redirige peticiones al backend
    },
  },
  plugins: [react()],
  publicDir: './public', // Está bien dejar esta configuración
  base: '/', // Asegura que las rutas se resuelvan correctamente
});
