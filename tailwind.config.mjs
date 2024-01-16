/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'accent' : '#53FFAA',
				'primary' : '#CEE3E9',
				'background' : '#313A48',
			},
			boxShadow: {
				'app' : '30px 50px 80px 0px rgba(0, 0, 0, 0.10)',
				'btn' : '0px 0px 40px 0px #53FFAA',
			},
		},
	},
	plugins: [],
}
