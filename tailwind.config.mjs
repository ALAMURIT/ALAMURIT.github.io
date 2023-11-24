/** @type {import('tailwindcss').Config} */
// module.exports = {
// 	theme:{
// 		extend:{
// 			colors:{
// 				crimson_red: {
// 					100: '#DC143C',
// 				},
// 			},
// 		},
// 	},
// }

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'crimson_red': '#DC143C',
				'black_dark': '#000000',
			},
		},
	},
	plugins: [],
}
