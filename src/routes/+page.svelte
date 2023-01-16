<script>
	// @ts-nocheck
	import TypeWriter from 'svelte-typewriter';
	import { config } from '$lib/utils/config';
	export let data;
</script>

<svelte:head>
	<title>{data.title} - {config.title}</title>
	<meta property="og:title" content="{data.title} - {config.title}" />
</svelte:head>

<TypeWriter interval={100}>
	<h1>Welcome, I'm Izzy</h1>
</TypeWriter>

<article>
	<svelte:component this={data.content} />
</article>

<style>
	h1 {
		text-align: center;
	}
</style>
