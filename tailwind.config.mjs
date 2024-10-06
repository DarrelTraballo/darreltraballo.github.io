/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-bg': '#044321',
				'secondary-bg': '#044341',
				'tertiary-bg': '#7EFC28',

				'primary-font': '#ffffff',
				'secondary-font': '#9ca3af',
				'tertiary-font': '#9ca3af',
				// 'tertiary-font': '#6b7280',

				'link-color': '#60a5fa',
			},
		},
	},
	plugins: [],
}
