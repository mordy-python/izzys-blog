<script>
	// @ts-nocheck
	import { config } from '$lib/utils/config';
	import Bye from '$lib/components/Bye.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.title} - {config.title}</title>
	<meta property="og:title" content="{data.title} - {config.title}" />
</svelte:head>

<article>
	<div class="title-block">
		<h2>{data.title}</h2>
		<small>{new Date(data.date).toLocaleDateString()}</small>
	</div>
	{#if data.tags.length}
		<aside>
			{#each data.tags as tag}
				<a href="/blog/tags/{tag}" class="tag">#{tag}</a>&nbsp;
			{/each}
		</aside>
	{/if}
	<svelte:component this={data.content} />
	<Bye />
</article>

<style>
	.title-block {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.title-block h2 {
		color: #8be9fd;
	}
	.title-block small {
		color: #6272a4;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	.tag {
		color: #6272a4;
		font-weight: bold;
	}
</style>
