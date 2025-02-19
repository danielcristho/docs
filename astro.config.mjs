// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Daniel's Documentation",
			social: {
				github: 'https://github.com/danielcristho',
			},
			sidebar: [
				{ label: 'Intro', slug: 'index' },
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: ["./src/styles/custom.css"]
		}),
	],
});
