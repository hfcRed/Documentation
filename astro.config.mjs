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
					collapsed: true,
					autogenerate: { directory: 'animation-repathing' },
				},
				{
					label: 'NSO Connect',
					collapsed: true,
					items: [
						'nso-connect/overview',
						'nso-connect/privacy-and-safety',
						'nso-connect/parameter-storage',
						'nso-connect/authentication-flow',
						{
							label: 'Authorization',
							items: [
								{ slug: 'nso-connect/authorization/authorization-link', badge: { text: 'G', variant: 'note', class: 'api-badge' }, attrs: { class: 'api-title' } },
								{ slug: 'nso-connect/authorization/session-token', badge: { text: 'P', variant: 'success', class: 'api-badge' }, attrs: { class: 'api-title' } },
								{ slug: 'nso-connect/authorization/delete-token', badge: { text: 'D', variant: 'danger', class: 'api-badge' }, attrs: { class: 'api-title' } },
							]
						},
						{
							label: 'Service',
							items: [
								{ slug: 'nso-connect/service/query', badge: { text: 'P', variant: 'success', class: 'api-badge' }, attrs: { class: 'api-title' } },
								{ slug: 'nso-connect/service/query-list', badge: { text: 'G', variant: 'note', class: 'api-badge' }, attrs: { class: 'api-title' } },
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
