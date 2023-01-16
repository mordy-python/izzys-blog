import adapter from '@sveltejs/adapter-netlify'
import autoprefixer from 'autoprefixer';
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	extensions: [".svelte", ".md"],

	preprocess: [
		sveltePreprocess({
			postcss: {
				plugins: [autoprefixer]
			}
		}),
		mdsvex({ extensions: [".md"] }),
	]
};

export default config;
