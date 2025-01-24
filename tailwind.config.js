const { nextui } = require("@nextui-org/theme");
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
	webpack: (config) => {
		//react-pdf
		config.resolve.alias.canvas = false;

		return config;
	},
	experimental: {
		turbo: {
			resolveAlias: {
				canvas: "./empty-module.ts",
			},
		},
	},
	swcMinify: false,
	darkMode: "class",
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/components/(navbar|tabs).js", "./node_modules/flowbite/**/*.js", flowbite.content()],
	theme: {
		extend: {
			fontFamily: {
				main: "Nexa",
				mainLight: "Nexa Light",
				sub: "Manrope",
			},
			colors: {
				"dark-blue": "#101825",
				"dark-blueLight": "#131D2D",
				"dark-orange": "#E76928",
				"orange-hover": "#C75D28",
			},
			height: {
				modalH: "37rem",
				"custom-32": "35rem",
				"custom-30": "26rem",
			},
			width: {
				"custom-tab": "80rem",
				"custom-resume": "420rem",
				"custom-modal": "35rem",
			},
			fontSize: {
				"10xl": "230px",
			},
			letterSpacing: {
				widest: "1.11em",
			},
		},
	},
	plugins: [nextui(), require("flowbite/plugin")],
};
