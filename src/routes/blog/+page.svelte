<script>
	// @ts-nocheck
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { config } from '$lib/utils/config';
	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
	<meta property="og:title" content={config.title} />
</svelte:head>

{#each data.posts as post}
	<PageTitle
		path={post.path}
		title={post.meta.title}
		date={post.meta.date}
		tags={post.meta.tags}
		summary={post.meta.summary}
	/>
{/each}
