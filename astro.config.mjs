import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: '/favicon.png',
			title: 'hfcReds Docs',
			description: 'Documentation for hfcReds projects',
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'og:image',
						content: 'https://docs.hfcred.dev/og-image.png',
					}
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:image',
						content: 'https://docs.hfcred.dev/og-image.png',
					}
				}
			],
			logo: {
				src: './src/assets/images/icon.webp',
			},
			social: {
				github: 'https://github.com/hfcRed',
				twitter: 'https://twitter.com/hfcRedddd',
			},
			sidebar: [
				{
					label: 'Animation Repathing',
					autogenerate: { directory: 'animation-repathing' },
				},
			],
			editLink: {
				baseUrl: 'https://github.com/hfcRed/Documentation',
			},
			customCss: [
				'./src/styles/custom.css',
			]
		}),
	],
	image: {
		service: {
			config: {
				limitInputPixels: false,
			}
		}
	}
});
