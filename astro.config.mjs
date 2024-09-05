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
				{
					label: 'NSO',
					items: [
						'nso/overview',
						'nso/safety',
						'nso/storage',
						'nso/authentication',
						{
							label: 'Authorization',
							items: [
								{ slug: 'nso/authorization/link', badge: { text: 'G', variant: 'note', class: 'api-badge' }, attrs: { class: 'api-title' } },
								{ slug: 'nso/authorization/sessiontoken', badge: { text: 'P', variant: 'success', class: 'api-badge' }, attrs: { class: 'api-title' } },
								{ slug: 'nso/authorization/delete', badge: { text: 'D', variant: 'danger', class: 'api-badge' }, attrs: { class: 'api-title' } },
							]
						},
						{
							label: 'Service',
							items: [
								{ slug: 'nso/service/query', badge: { text: 'P', variant: 'success', class: 'api-badge' }, attrs: { class: 'api-title' } },
								{ slug: 'nso/service/querylist', badge: { text: 'G', variant: 'note', class: 'api-badge' }, attrs: { class: 'api-title' } },
							]
						}
					]
				}
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
