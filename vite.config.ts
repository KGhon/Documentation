import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    base: '/Documentation/', 
    server: {
        port: 56876,
    },
    build: {
    outDir: 'docs',
    emptyOutDir: true,
    }
})
