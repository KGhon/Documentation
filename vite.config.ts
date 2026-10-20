import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import { resolve } from 'path';

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
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                AudioProduction: resolve(__dirname, 'pages/AudioProduction/index.html'),
                UnrealEngine: resolve(__dirname, 'pages/UnrealEngine/index.html'),
                Unity: resolve(__dirname, 'pages/Unity/index.html'),
                Godot: resolve(__dirname, 'pages/Godot/index.html'),
            },
        },
    }
})
