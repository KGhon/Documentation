import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        plugin()
    ],
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
                main: resolve(import.meta.dirname, 'index.html'),
                AudioProduction: resolve(import.meta.dirname, 'Pages/AudioProduction/index.html'),
                UnrealEngine: resolve(import.meta.dirname, 'Pages/UnrealEngine/index.html'),
                Unity: resolve(import.meta.dirname, 'Pages/Unity/index.html'),
                Godot: resolve(import.meta.dirname, 'Pages/Godot/index.html'),
            },
        },
    }
})
