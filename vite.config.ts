import { defineConfig, PluginOption } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import postcss from 'postcss';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 7878,
	},
	plugins: [
		svelte(),
		postcss() as unknown as PluginOption,
	],
	base: './',
})
