<script>
	// @ts-nocheck

	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/style.scss';
	// import
	import { fade } from 'svelte/transition';

	export let data;
</script>

<Header />

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-2Z5YZ6J0BL"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-2Z5YZ6J0BL');
	</script>
</svelte:head>

{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}
