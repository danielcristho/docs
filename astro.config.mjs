// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: "Daniel's Documentation",
        social: {
            github: 'https://github.com/danielcristho',
        },
        sidebar: [
            { label: 'Intro', slug: 'index' },
            {
                label: 'Linux',
                autogenerate: { directory: 'linux' },
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
        customCss: ["./src/styles/custom.css"]
		}), react()],
});