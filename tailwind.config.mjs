/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inria: ['"Inria Serif"', 'serif'],
			},
			colors: {
        background: 'var(--background)',
        accent50: 'var(--accent-50)',
        accent100: 'var(--accent-100)',
        accent200: 'var(--accent-200)',
        accent300: 'var(--accent-300)',
        accent400: 'var(--accent-400)',
        accent500: 'var(--accent-500)',
        accent600: 'var(--accent-600)',
        accent700: 'var(--accent-700)',
        accent800: 'var(--accent-800)',
        accent900: 'var(--accent-900)',
        accent950: 'var(--accent-950)',
        shark50: 'var(--shark-50)',
        shark100: 'var(--shark-100)',
        shark200: 'var(--shark-200)',
        shark300: 'var(--shark-300)',
        shark400: 'var(--shark-400)',
        shark500: 'var(--shark-500)',
        shark600: 'var(--shark-600)',
        shark700: 'var(--shark-700)',
        shark800: 'var(--shark-800)',
        shark900: 'var(--shark-900)',
        shark950: 'var(--shark-950)'
			}
		},
	},
	plugins: [],
}
