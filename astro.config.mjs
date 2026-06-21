// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Origin Clouds',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/origin-clouds/docs' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', slug: 'overview/overview' },
						{ label: 'Quickstart', slug: 'overview/quickstart' },
					],
				},
				{
					label: 'Hello World',
					items: [
						{ label: 'Node.js', slug: 'languages/node/hello-world' },
						{ label: 'TypeScript', slug: 'languages/typescript/hello-world' },
						{ label: 'Python', slug: 'languages/python/hello-world' },
						{ label: 'Go', slug: 'languages/go/hello-world' },
						{ label: 'Rust', slug: 'languages/rust/hello-world' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
