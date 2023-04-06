import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import fs from "node:fs"

// https://astro.build/config
export default defineConfig({
	site: "https://ds.astro.build",
	integrations: [tailwind()],
	markdown: {
		shikiConfig: {
			theme: JSON.parse(
				fs.readFileSync("./houston.theme.json", { encoding: "utf-8" }),
			),
		},
	},
})
