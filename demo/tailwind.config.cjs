// @ts-check
// @ts-expect-error: no type defs yet
const config = require("@astrojs/site-kit/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
	...config,
}
