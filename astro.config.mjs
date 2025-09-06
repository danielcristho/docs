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
                label: 'Docker',
                autogenerate: { directory: 'docker' },
            },
            {
                label: 'Kubernetes',
                autogenerate: { directory: 'kubernetes' },
            },
            {
                label: 'DevOps & Automation',
                autogenerate: { directory: 'devops-and-automation' },
            },
            {
                label: 'Linux',
                autogenerate: { directory: 'linux' },
            },
            {
                label: 'Terminal',
                autogenerate: { directory: 'terminal' },
            }
        ],
        customCss: ["./src/styles/custom.css"]
		}), react()],
});