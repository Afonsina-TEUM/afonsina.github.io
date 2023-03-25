<script lang="ts">
	import type { Events } from 'googleapi';

	import EventComponent from "./Event.svelte";

	export let events!: Events;
</script>

<div>
	{#if events.length > 0}
		{#each events as event}
			<EventComponent event={ event } />
		{/each}
	{:else}
		<p class="text-center font-bold text-white">Nenhum evento encontrado :(</p>
	{/if}
</div>
