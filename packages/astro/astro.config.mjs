// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	base: '/testing-sites/astro/',
	site: 'https://kobayashik-faber.github.io/testing-sites/astro/',
	integrations: [mdx(), sitemap()],
	build: {
		assetsPrefix: 'https://kobayashik-faber.github.io/testing-sites/astro/'
	}
});
