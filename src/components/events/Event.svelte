<script lang="ts">
	import type { Event } from "googleapi";

	export let event!: Event;
</script>

<div class="lg:flex shadow rounded-lg border border-gray-400">
	<div class="bg-black rounded-lg lg:w-2/12 py-5 block h-full shadow-inner">
		<div class="text-center tracking-wide">
				<div class="text-white font-bold text-2xl">
					{event.days.join(' e ')}
				</div>
				<div class="text-white font-bold text-2xl">{event.months.join(' e ')}</div>
				<div class="text-white font-bold text-2xl">{event.years.join(' e ')}</div>
		</div>
	</div>
	<div class="w-full lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
		<div class="flex flex-row lg:justify-start justify-center">
			{#if event.time}
			<div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
				<i class="far fa-clock"></i> {event.time}
			</div>
			{/if}
			<!-- <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
				Organizador
			</div> -->
		</div>
		<div class="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
			{event.title}
		</div>

		<div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
			{event.location}
		</div>
	</div>
</div>
