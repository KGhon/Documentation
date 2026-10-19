import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
//import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    base: '/Documentation/', 
    appType: 'mpa',
    server: {
        port: 56876,
        watch: {
            ignored: ["**/.vs/**"],
        },
    },
    build: {
        outDir: 'docs',
        emptyOutDir: true,
    }
})
