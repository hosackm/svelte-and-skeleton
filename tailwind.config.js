/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
    require('path').join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(),
  ],
}
