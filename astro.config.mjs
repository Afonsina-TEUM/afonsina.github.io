import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://afonsina.com",
  integrations: [
		svelte(),
		image(),
		prefetch(),
		tailwind(),
		sitemap(),
		partytown({
			config: {
				forward: ["dataLayer.push"],
			},
		})
	],
});
