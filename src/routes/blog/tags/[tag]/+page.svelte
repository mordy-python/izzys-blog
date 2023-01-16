<script>
	// @ts-nocheck
	import PageTitle from '$lib/components/PageTitle.svelte';

	export let data;
</script>

{#each data.posts as post}
	<PageTitle
		path={post.path}
		title={post.meta.title}
		date={post.meta.date}
		tags={post.meta.tags}
		summary={post.meta.summary}
	/>
{/each}
