import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

//https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    //active les globales de Vitest (comme describe, it, etc.) sans avoir à les importer.
    globals: true,
    //pour simuler un DOM dans les tests
    environment: 'jsdom',
    //fichier de configuration setup pour Vitest
    setupFiles: './vitest-setup.js',
  },
});
