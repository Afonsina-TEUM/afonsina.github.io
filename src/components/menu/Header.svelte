<script lang="ts">
	import MenuButton from "./MenuButton.svelte";
	import Navigation from "./Navigation.svelte";
	import type { Navigation as NavigationType } from "db";

	export let navigation: NavigationType[];

	let brasaoHeaderSrc = import.meta.env.PUBLIC_DEFAULT_HEADER;
</script>

<header class="fixed z-navbar">
	<div class="relative">
		<div class="absolute mt-9 bg-white h-10 w-screen top-0 z-navbar" />
		<div
			class="navbar bg-transparent absolute top-0 px-[50px] z-navbar w-screen"
		>
			<div class="flex-1">
				<a href="/">
					<img
						src={brasaoHeaderSrc}
						loading="lazy"
						alt="brasao"
						class="h-24 w-42"
					/>
				</a>
			</div>
			<div class="flex-none">
				<MenuButton />
			</div>
		</div>
		<Navigation {navigation} />
	</div>
</header>
