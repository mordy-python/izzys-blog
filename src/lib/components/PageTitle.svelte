<script>
	// @ts-nocheck
	export let path;
	export let title;
	export let date;
	export let tags;
	export let summary;
</script>

<div class="title-block">
	<h2>
		<a href={path}>{title}</a>
	</h2>
	<small>{new Date(date).toLocaleDateString()}</small>
</div>
<p>{summary}</p>
{#each tags as tag}
	<a href="/blog/tags/{tag}" class="tag">#{tag}</a>&nbsp;
{/each}

<style>
	.title-block {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 5px;
	}
	.title-block h2 {
		color: #8be9fd;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	.tag {
		color: #6272a4;
		font-weight: bold;
	}
	small {
		color: #6272a4;
	}
</style>
