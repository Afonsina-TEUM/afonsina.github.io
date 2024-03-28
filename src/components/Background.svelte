<script lang="ts">
	const backgroundImage: string = import.meta.env.PUBLIC_DEFAULT_BACKGROUND
	const backgroundStyle: string =
		"background-image: url(" + backgroundImage + ");";
</script>

<div
	class="h-screen w-screen bg-center bg-fixed bg-cover"
	style={backgroundStyle}
>
	<div
		class="h-screen w-screen bg-center bg-fixed bg-cover blur-sm"
		style={backgroundStyle}
	/>
</div>
