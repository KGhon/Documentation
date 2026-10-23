import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import { resolve } from 'path';
import { CodeHighlighterPlugin } from "./src/CodeHighlighter.ts";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        plugin(),
        CodeHighlighterPlugin("./data"),
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
                main: resolve(__dirname, 'index.html'),
                AudioProduction: resolve(__dirname, 'Pages/AudioProduction/index.html'),
                UnrealEngine: resolve(__dirname, 'Pages/UnrealEngine/index.html'),
                Unity: resolve(__dirname, 'Pages/Unity/index.html'),
                Godot: resolve(__dirname, 'Pages/Godot/index.html'),
            },
        },
    }
})
